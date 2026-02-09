import Stripe from "stripe";
import yachts from "../../../data/yachts.json";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { yachtId, date, startTime, persons, hours, paymentType, customer } =
      await req.json();

    // 🔍 Validate yacht
    const yacht = yachts.find((y) => y.id === yachtId);
    if (!yacht) {
      return new Response("Invalid yacht", { status: 400 });
    }

    if (!hours || hours <= 0) {
      return new Response("Invalid hours", { status: 400 });
    }

    if (!customer?.email) {
      return new Response("Customer email missing", { status: 400 });
    }

    // 💰 Price calculation
    const totalPrice = hours * yacht.pricePerHour;
    const amountToPay =
      paymentType === "full" ? totalPrice : Math.round(totalPrice * 0.1); // 10% advance

    // 💳 Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: customer.email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: yacht.name,
              description: `${date} | ${startTime} | ${hours} hrs | ${persons} guests`,
            },
            unit_amount: amountToPay * 100, 
          },
          quantity: 1,
        },
      ],

      mode: "payment",

      success_url: `${process.env.NEXT_PUBLIC_URL}/confirmation`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/booking/${yachtId}`,

      // Optional (for dashboard / future webhook use)
      metadata: {
        yachtId,
        yachtName: yacht.name,
        date,
        startTime,
        persons,
        hours,
        paymentType,
        totalPrice,
        paidAmount: amountToPay,
        customerName: customer.name,
        customerEmail: customer.email,
        customerMobile: customer.mobile,
      },
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return new Response("Failed to create checkout session", {
      status: 500,
    });
  }
}

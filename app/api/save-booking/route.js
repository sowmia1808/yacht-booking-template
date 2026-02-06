import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const booking = await req.json();

    const filePath = path.join(process.cwd(), "data", "bookings.json");

    const existing = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf8"))
      : [];

    const newBooking = {
      id: `BK${Date.now()}`,
      ...booking,
      createdAt: new Date().toISOString(),
    };

    existing.push(newBooking);

    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

    return Response.json({ success: true });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}

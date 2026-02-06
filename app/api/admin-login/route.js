import { cookies } from "next/headers";

export async function POST(req) {
  const { password } = await req.json();

  if (password === process.env.ADMIN_PASSWORD) {
    // ✅ cookies() is async in Next.js 15+
    const cookieStore = await cookies();

    cookieStore.set("admin-auth", "true", {
      httpOnly: true,
      path: "/",
    });

    return Response.json({ success: true });
  }

  return new Response("Unauthorized", { status: 401 });
}

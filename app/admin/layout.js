import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminHeader from "./AdminHeader";

export const metadata = {
  title: "Admin | Yacht Booking",
};

export default async function AdminLayout({ children }) {
  // ✅ cookies() is async in Next 15+
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("admin-auth");

  // 🔐 Protect admin routes
  if (!isAdmin) {
    redirect("/admin-login");
  }

  return (
    <div className="min-h-screen">
      <AdminHeader />
      <main className="p-6">{children}</main>
    </div>
  );
}

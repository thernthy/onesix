// app/account/page.tsx
import Link from "next/link";

export default function AccountPage() {
  return (
    <div className="pt-24 container mx-auto px-6 text-white">
      <h1 className="text-2xl font-bold mb-6">My Account</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/account/orders" className="bg-[#111] hover:bg-red-700 p-8 rounded-lg text-center font-semibold">
          Orders
        </Link>
        <Link href="/account/login" className="bg-[#111] hover:bg-red-700 p-8 rounded-lg text-center font-semibold">
          Login
        </Link>
        <Link href="/account/register" className="bg-[#111] hover:bg-red-700 p-8 rounded-lg text-center font-semibold">
          Register
        </Link>
      </div>
    </div>
  );
}

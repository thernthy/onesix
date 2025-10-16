// app/account/orders/page.tsx
export default function OrdersPage() {
  return (
    <div className="pt-24 container mx-auto px-6 text-white">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      <div className="bg-[#111] border border-red-800/40 p-6 rounded-lg text-gray-400">
        <p>You haven’t placed any orders yet.</p>
      </div>
    </div>
  );
}

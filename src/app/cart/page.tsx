"use client";

import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (id: string) => {
    removeFromCart(id);
  };

  return (
    <section className="w-[1321px] m-auto p-10">
      <h1 className="text-[32px] font-semibold mb-10">Bag</h1>
      <div className="flex justify-between">
        {/* Cart Items */}
        <div className="flex flex-col gap-5 w-2/3">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-5"
              >
                <div className="flex items-center gap-5">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary */}
        <div className="w-1/3 border p-5 rounded-lg">
          <h2 className="text-[24px] font-semibold mb-5">Summary</h2>
          <p>
            Subtotal: $
            {cart
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>
          <p>Estimated Delivery & Handling: Free</p>
          <p className="font-bold mt-5">
            Total: $
            {cart
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>
          <button className="mt-5 bg-[#007580] text-white py-2 px-4 rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
}
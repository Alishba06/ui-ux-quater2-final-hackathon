/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use navigation hook for routing

interface CartItem {
  selectedPlant: {
    _id: string;
    name: string;
    price: number;
    description: string;
    image: string;
  };
  quantity: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState<number>(1);
  const router = useRouter(); // Correctly initialize the router

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartData);
    setCartCount(cartData.reduce((total: number, item: CartItem) => total + item.quantity, 0));
  }, []);

  const totalPrice = cart.reduce(
    (total, item) => total + (item.selectedPlant?.price || 0) * (item.quantity || 0),
    0
  );

  const updateQuantity = (id: string, newQuantity: number) => {
    const updatedCart = cart.map((item) =>
      item.selectedPlant._id === id
        ? { ...item, quantity: newQuantity }
        : item
    );
    setCart(updatedCart);
    setCartCount(updatedCart.reduce((total: number, item: CartItem) => total + item.quantity, 0));
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id: string) => {
    const updatedCart = cart.filter(
      (item) => item.selectedPlant?._id !== id
    );
    setCart(updatedCart);
    setCartCount(updatedCart.reduce((total: number, item: CartItem) => total + item.quantity, 0));
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.selectedPlant?._id}
              className="flex flex-col md:flex-row items-center gap-6 border-b pb-6"
            >
              <img
                src={item.selectedPlant?.image}
                alt={item.selectedPlant?.name}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.selectedPlant?.name}</h2>
                <p className="text-gray-600 hidden sm:block">
                  {item.selectedPlant?.description}
                </p>
                <p className="text-lg font-bold mt-2">
                  £{(item.selectedPlant?.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    updateQuantity(
                      item.selectedPlant?._id,
                      Math.max(1, item.quantity - 1)
                    )
                  }
                  className="px-3 py-1 bg-gray-200 rounded-lg"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(item.selectedPlant._id, item.quantity + 1)
                  }
                  className="px-3 py-1 bg-gray-200 rounded-lg"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.selectedPlant?._id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right mt-8">
            <p className="text-2xl font-bold">Total: £{totalPrice.toFixed(2)}</p>
          </div>
          <div className="text-right">
            <button
              onClick={handleCheckout}
              className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}









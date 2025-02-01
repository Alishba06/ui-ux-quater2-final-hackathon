import { useContext } from "react";
import { CartContext } from "@/app/context/CartContext"; // CartContext import karna na bhoolain
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
  const { state } = useContext(CartContext);
  const cartCount = state.cart.length;

  return (
    <div className="relative">
      <FaShoppingCart className="text-2xl text-gray-700" />
    {cartCount > 0 && (
        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
    {cartCount}
        </div>
      )}
    </div>
  );
};

export default CartIcon;

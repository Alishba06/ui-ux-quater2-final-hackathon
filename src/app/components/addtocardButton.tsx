
"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";

interface PT {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: "string";
} 

interface CartItem {
  selectedPlant: PT;
  quantity: number;
}

function AddtocardButton({ product }: any) {
  const [quantity, setQuantity] = useState<number>(1);
  const router = useRouter();

  const ViewCartButton = () => (
    <button
      onClick={() => router.push("/cart")}
      className="bg-[#FB2E86] text-white py-2 px-4 rounded "
    >
      View Cart
    </button>
  );

  const addToCard: () => any = () => {
    if (product) {
      const cartItems = localStorage.getItem("cart");
      const cart: CartItem[] = cartItems ? JSON.parse(cartItems) : [];

      const existingItem: CartItem | undefined = cart.find(
        (item: CartItem) => item.selectedPlant?._id === product._id
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        const data: CartItem = {
          selectedPlant: product,
          quantity: quantity,
        };
        cart.push(data);
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      // Show toast notification
      toast.success("Item added to the cart successfully!", {
        description: "You can view your cart or continue shopping!",
        action: <ViewCartButton />,
      });
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <Button
        onClick={() => addToCard()}
        className="bg-black text-white py-2 px-6 rounded-full shadow-lg hover:bg-[#333333] hover:scale-105 transition-all duration-300"
      >
        Add To Cart
      </Button>
    </>
  );
}

export default AddtocardButton;





// "use client";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { toast } from "sonner";

// interface PT {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   image: "string";
// } 

// interface CartItem {
//   selectedPlant: PT;
//   quantity: number;
// }

// function AddtocardButton({ product }: any) {
//   const [quantity, setQuantity] = useState<number>(1);
//   const router = useRouter();

//   // Custom Button Component for the action
//   const ViewCartButton = () => (
//     <button
//       onClick={() => router.push("/cart")}
//       className="bg-[#FB2E86] text-white   py-2 px-4 rounded "
//     >
//       View Cart
//     </button>
//   );

//   const addToCard: () => any = () => {
//     if (product) {
//       // Check if 'cart' already exists in localStorage
//       const cartItems = localStorage.getItem("cart");

//       // If cart exists, parse it, otherwise initialize as an empty array
//       const cart: CartItem[] = cartItems ? JSON.parse(cartItems) : [];

//       // Check if the selected product is already in the cart
//       const existingItem: CartItem | undefined = cart.find(
//         (item: CartItem) => item.selectedPlant?._id === product._id
//       );

//       if (existingItem) {
//         // Update the quantity if the plant is already in the cart
//         existingItem.quantity += quantity;
//       } else {
//         // Add the new product with its quantity
//         const data: CartItem = {
//           selectedPlant: product,
//           quantity: quantity,
//         };
//         cart.push(data);
//       }

//       // Save the updated cart back to localStorage
//       localStorage.setItem("cart", JSON.stringify(cart));
//       toast("Item successfully added to the cart!", {
//         description:
//           "You can continue shopping or proceed to checkout from the cart page.",
//         action: <ViewCartButton />,
//       });
//     }
//   };

//   return (
//     <Button
//     onClick={() => addToCard()}
//     className="bg-black text-white py-2 px-6 rounded-full shadow-lg hover:bg-[#333333] hover:scale-105 transition-all duration-300"
//   >
//     Add To Cart
//   </Button>
  
  

//   );
// }

// export default AddtocardButton;

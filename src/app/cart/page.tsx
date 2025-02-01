"use client"; // Mark as a Client Component in Next.js

import { useEffect, useState } from "react";

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

  // Fetch cart data from local storage on component mount
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartData);
  }, []);

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.selectedPlant.price * item.quantity,
    0
  );

  // Update quantity of an item
  const updateQuantity = (id: string, newQuantity: number) => {
    const updatedCart = cart.map((item) =>
      item.selectedPlant._id === id
        ? { ...item, quantity: newQuantity }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove an item from the cart
  const removeItem = (id: string) => {
    const updatedCart = cart.filter(
      (item) => item.selectedPlant._id !== id
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {/* Cart Items */}
          {cart.map((item) => (
            <div
              key={item.selectedPlant._id}
              className="flex flex-col md:flex-row items-center gap-6 border-b pb-6"
            >
              {/* Product Image */}
              <img
                src={item.selectedPlant.image}
                alt={item.selectedPlant.name}
                className="w-32 h-32 object-cover rounded-lg"
              />

              {/* Product Details */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold">
                  {item.selectedPlant.name}
                </h2>
                <p className="text-gray-600 md:block hidden">
                  {item.selectedPlant.description}
                </p>
                <p className="text-lg font-bold mt-2">
                  £{(item.selectedPlant.price * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    updateQuantity(
                      item.selectedPlant._id,
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

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.selectedPlant._id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div className="text-right mt-8">
            <p className="text-2xl font-bold">
              Total: £{totalPrice.toFixed(2)}
            </p>
          </div>

          {/* Checkout Button */}
          <div className="text-right">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

























// "use client"
// import { Product } from '@/types/products';
// import React, { useEffect, useState } from 'react';
// import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions';
// import Swal from 'sweetalert2';
// import Image from 'next/image';

// const CardPage = () => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   useEffect(() => {
//     const items = getCartItems();
//     console.log('Cart Items:', items); // Debugging ke liye
//     setCartItems(items);
//   }, []);

//   const handleRemove = (id: string) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'You will not be able to recover this item!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, remove it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         removeFromCart(id);
//         const updatedItems = getCartItems();
//         console.log('Updated Cart Items:', updatedItems); // Debugging ke liye
//         setCartItems(updatedItems);
//         Swal.fire("Removed!", "Item has been removed.", "success");
//       }
//     });
//   };

//   const handleQuantityChange = (id: string, quantity: number) => {
//     updateCartQuantity(id, quantity);
//     const updatedItems = getCartItems();
//     console.log('Updated Cart Items:', updatedItems); // Debugging ke liye
//     setCartItems(updatedItems);
//   };

//   const handleIncrement = (id: string) => {
//     const product = cartItems.find((item) => item.id === id);
//     if (product) handleQuantityChange(id, product.inventory + 1);
//   };

//   const handleDecrement = (id: string) => {
//     const product = cartItems.find((item) => item.id === id);
//     if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
//   };

//   const calculatedTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
//   };

//   const handleProceed = () => {
//     Swal.fire({
//       title: "Proceed to Checkout?",
//       text: "Please review your cart before checkout",
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, proceed!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire("Success", "Your order has been successfully processed", "success");
//         setCartItems([]);
//       }
//     });
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p className="text-center text-lg">Your cart is empty.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {cartItems.map((item) => (
//             <div key={item.id} className="border p-4 rounded-lg shadow-md">
//               {item.image?.asset?.url && (
//              <Image src={item.image.asset.url} alt={item.name} width={500} height={500} />
//               )}

//               <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
//               <p className="text-gray-600 mb-2">Price: ${item.price}</p>
//               <div className="flex items-center gap-2 mb-4">
//                 <button
//                   onClick={() => handleDecrement(item.id)}
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   -
//                 </button>
//                 <span>{item.inventory}</span>
//                 <button
//                   onClick={() => handleIncrement(item.id)}
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//               </div>
//               <button
//                 onClick={() => handleRemove(item.id)}
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//       {cartItems.length > 0 && (
//         <div className="mt-6 text-right">
//           <h2 className="text-xl font-semibold mb-4">Total: ${calculatedTotal()}</h2>
//           <button
//             onClick={handleProceed}
//             className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CardPage;



























// "use client"
// import { Product } from '@/types/products';
// import React, { useEffect, useState } from 'react';
// import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions';
// import Swal from 'sweetalert2';
// import { urlFor } from '@/sanity/lib/image';
// import Image from 'next/image';

// const CardPage = () => {
//   const [cartItems, setCartItems] = useState<Product[]>([]);

//   useEffect(() => {
//     setCartItems(getCartItems());
//   }, []);

//   const handleRemove = (id: string) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: 'You will not be able to recover this item!',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, remove it!'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         removeFromCart(id);
//         setCartItems(getCartItems());
//         Swal.fire("Removed!", "Item has been removed.", "success");
//       }
//     });
//   };

//   const handleQuantityChange = (id: string, quantity: number) => {
//     updateCartQuantity(id, quantity);
//     setCartItems(getCartItems());
//   };

//   const handleIncrement = (id: string) => {
//     const product = cartItems.find((item) => item.id === id);
//     if (product) handleQuantityChange(id, product.inventory + 1);
//   };

//   const handleDecrement = (id: string) => {
//     const product = cartItems.find((item) => item.id === id);
//     if (product && product.inventory > 1) handleQuantityChange(id, product.inventory - 1);
//   };

//   const calculatedTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.inventory, 0);
//   };

//   const handleProceed = () => {
//     Swal.fire({
//       title: "Proceed to Checkout?",
//       text: "Please review your cart before checkout",
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, proceed!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire("Success", "Your order has been successfully processed", "success");
//         setCartItems([]);
//       }
//     });
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p className="text-center text-lg">Your cart is empty.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {cartItems.map((item) => (
//             <div key={item.id} className="border p-4 rounded-lg shadow-md">
//               {item.image && item.image.asset && (
//            <Image
//             src={item.image.asset.url}
//             alt="image"
//             width={500}
//             height={500}
//             />
//            )}

//               <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
//               <p className="text-gray-600 mb-2">Price: ${item.price}</p>
//               <div className="flex items-center gap-2 mb-4">
//                 <button
//                   onClick={() => handleDecrement(item.id)}
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   -
//                 </button>
//                 <span>{item.inventory}</span>
//                 <button
//                   onClick={() => handleIncrement(item.id)}
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//               </div>
//               <button
//                 onClick={() => handleRemove(item.id)}
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//       {cartItems.length > 0 && (
//         <div className="mt-6 text-right">
//           <h2 className="text-xl font-semibold mb-4">Total: ${calculatedTotal()}</h2>
//           <button
//             onClick={handleProceed}
//             className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CardPage;








// "use client"
// import { Product } from '@/types/products'
// import React, { useEffect, useState } from 'react'
// import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions'
// import Swal from 'sweetalert2'

// const CardPage = () => {
//     const [cartItems, setCartItems] = useState<Product[]>([])

//    useEffect(() =>{
//       setCartItems(getCartItems())

//    }, [])

//    const handleRemove = (id:string) =>{
//     Swal.fire({
//         title:'Are you sure?',
//         text: 'you will not be able to recover this item!',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor:'#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText:'yes,remove it!'
//     }).then((result)=>{
//         if(result.isConfirmed){
//             removeFromCart(id)
//             setCartItems(getCartItems())
//             Swal.fire("Remove!","Item has been removed." , "success")
//         }
//     })
//    }
  
//   const handleQuantityChange = (id : string , quantity : number) => {
      
//     updateCartQuantity(id , quantity);
//     setCartItems(getCartItems())
  
//   }
//   const handleIncrement = (id : string) =>{
//     const product = cartItems.find((item) => item.id === id)
//     if(product)
//         handleQuantityChange(id, product.inventory + 1)
//   }
  
//   const handledecrement = (id : string) =>{
//     const product = cartItems.find((item) => item.id === id)
//     if(product && product.inventory > 1)
//         handleQuantityChange(id, product.inventory - 1)
//   }

//   const calculatedTotal = () =>{
//     return cartItems.reduce((total,item) => total + item.price * item.inventory,0)
//   }
  
//   const handledProceed = () =>{
//     Swal.fire({
//         title: "Proceed to Checkout?",
//         text: "Please review your cart before checkout",
//         icon: "question",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, proceed!",
//     }).then((result) =>{
//         if(result.isConfirmed){
//             Swal.fire("success" , "Your Order has been succuessfully proce")
//             setCartItems([])
//         }
//     })
//   }

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default CardPage

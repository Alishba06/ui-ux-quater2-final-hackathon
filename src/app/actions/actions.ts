import { Product } from "@/types/products";

// Add product to the cart
export const addtoCart = (product: Product) => {
  try {
    const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex > -1) {
      // Ensure inventory doesn't exceed product stock
      cart[existingProductIndex].inventory = Math.min(cart[existingProductIndex].inventory + 1, product.inventory);
    } else {
      cart.push({
        ...product,
        inventory: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
};

// Remove product from the cart
export const removeFromCart = (productId: string) => {
  try {
    let cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error removing product from cart:", error);
  }
};

// Update product quantity in the cart
export const updateCartQuantity = (productId: string, quantity: number) => {
  try {
    const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const productIndex = cart.findIndex(item => item.id === productId);

    if (productIndex > -1) {
      cart[productIndex].inventory = quantity;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  } catch (error) {
    console.error("Error updating product quantity:", error);
  }
};

// Get all cart items
export const getCartItems = (): Product[] => {
  try {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  } catch (error) {
    console.error("Error getting cart items:", error);
    return [];
  }
};







// import { Product } from "@/types/products";

// // Add product to the cart
// export const addtoCart = (product: Product) => {
//   const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

//   const existingProductIndex = cart.findIndex(item => item.id === product.id);

//   if (existingProductIndex > -1) {
//     cart[existingProductIndex].inventory += 1;
//   } else {
//     cart.push({
//       ...product,
//       inventory: 1, // Initialize inventory to 1
//     });
//   }

//   localStorage.setItem('cart', JSON.stringify(cart));
// };

// // Remove product from the cart
// export const removeFromCart = (productId: string) => {
//   let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

//   cart = cart.filter(item => item.id !== productId); 
//   localStorage.setItem('cart', JSON.stringify(cart));
// };

// // Update product quantity in the cart
// export const updateCartQuantity = (productId: string, quantity: number) => {
//   const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
//   const productIndex = cart.findIndex(item => item.id === productId);

//   if (productIndex > -1) {
//     cart[productIndex].inventory = quantity;
//     localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart
//   }
// };

// // Get all cart items
// export const getCartItems = (): Product[] => {
//   return JSON.parse(localStorage.getItem('cart') || '[]');
// };





// import  {Product} from "@/types/products"

// export const  addtoCart = (product : Product) =>{
//     const cart : Product[] = JSON.parse(localStorage.getItem('cart') || "")

//     const existingProductIndex = cart.findIndex(item => item.id === product.id)


//     if(existingProductIndex > -1) {
//         cart[existingProductIndex].inventory += 1
//     }
//     else{
//         cart.push({
//             ...product,inventory: 1
//         })
//     }

//     localStorage.setItem('cart' , JSON.stringify(cart))
// }

// export const removeFromCart = (productId : string) =>{
//     let cart : Product [] = JSON.parse(localStorage.getItem('cart') || "[]")

//     cart = cart.filter(item => item.id !== productId)
//     localStorage.setItem('cart' , JSON.stringify(cart))
// }

// export const undateCartQuantity  = (productId : string, quantity:number) =>{
//     const cart : Product[] = JSON.parse(localStorage.getItem('cart') || "[]")
//     const productIndex = cart.findIndex(item => item.id === productId)

//     if(productIndex > -1){
//         cart[productIndex].inventory = quantity;
//     }
// }

// export const grtCardItems = () : Product[] =>{
//     return JSON.parse(localStorage.getItem('cart')|| '[]')
// }


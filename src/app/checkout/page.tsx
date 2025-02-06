
"use client"
import { Product } from '@/types/products'
import React, { useEffect, useState } from 'react'
import { getCartItems } from '../actions/actions'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { client } from '@/sanity/lib/client';
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid';
import Brand from '../home2/brand'

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [discount , setDiscount] = useState<number>(0)
  const [formValues , setFormValues] = useState({
    firstName: "",
    lastName:  "",
    email:     "",
    phone:     "",
    address:   "",
    zipCode:    "",
    city:      "",
  })

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });

  useEffect(() => {
    setCartItems(getCartItems()) 
    const appliedDiscount = localStorage.getItem('appliedDiscount')
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount))
    }
  }, [])

 
  const subTotal = cartItems.reduce(
    (total, item) => total + (item.selectedPlant?.price || 0) * (item.quantity || 0),
    0
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value
    })
  }

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      address: !formValues.address,
      phone: !formValues.phone,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    };
    setFormErrors(errors)
    return Object.values(errors).every((error) => !error)
  }

  const handlePlaceOrder = async () => {
    Swal.fire({
      title: 'Processing your Oder...',
      text:  'Please wait a moment',
      icon:  'info',
      showCancelButton:true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor:  '#d33',
    }).then((result) =>{
      if(result.isConfirmed){
        if(validateForm()){
          localStorage.removeItem('appliedDiscount');
          Swal.fire(
            'success',
            'Your order has been successfully processed!',
            'success'
          );
        }else{
          Swal.fire(
            'Error',
            'Please fill in all the fields before proceeeding',
          )
        }
      }
    });
  const orderData = {
    _type : 'order',
    firstName: formValues.firstName,
    lastName:  formValues.lastName,
    address:   formValues.address,
    city:      formValues.city,
    zipCode:   formValues.zipCode,
    phone:     formValues.phone,
    email:     formValues.email,
    cartItems: cartItems.map(item => ({
      _key: uuidv4(),  
      _type: 'reference',  
      _ref: item.selectedPlant?._id  
    })),    
    total :    subTotal,
    discount : discount,
    orderDate: new Date().toISOString()

  };

  try {
     await client.create(orderData);
    localStorage.removeItem("appliedDiscount")
  } catch (error) {
    console.error("Error creating order:", error);
  }

  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <div>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <nav>
            <Link href={"/cart"}>Cart</Link> <span>CheckOut</span>
          </nav>
        </div>
      </div>

      <div className="main p-6 bg-gray-100 min-h-screen">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Order Summary on the Right */}
          <div className="order bg-white rounded-2xl shadow-lg p-8 w-full lg:w-1/3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Order Summary</h2>
            {cartItems.length > 0 ? (
              <div className="grid gap-6">
                {cartItems.map((item) => (
                  <div
                    key={item.selectedPlant._id}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:shadow-lg transition"
                  >
                    {/* Product Image */}
                    <div className="w-16 h-16">
                      {item.selectedPlant.image && (
                        <Image
                          src={urlFor(item.selectedPlant.image)}
                          alt={item.selectedPlant.name}
                          width={50}
                          height={50}
                          className="w-full h-full object-cover rounded-md"
                        />
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-700">
                        {item.selectedPlant.name}
                      </h3>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      <p className="text-sm font-medium text-green-600">
                        ${item.selectedPlant.price * item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No Item in cart</p>
            )}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-gray-700 flex justify-between mb-2">
                SubTotal:
                <span className="text-green-600 font-medium">${subTotal.toFixed(2)}</span>
              </p>
              <p className="text-lg font-semibold text-gray-700 flex justify-between mb-2">
                Discount:
                <span className="text-red-500 font-medium">${discount.toFixed(2)}</span>
              </p>
              <p className="text-xl font-bold text-gray-900 flex justify-between mt-4 border-t pt-4">
                Total:
                <span className="text-blue-600">${(subTotal - discount).toFixed(2)}</span>
              </p>
            </div>
          </div>

        {/* Form Section */}
        <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Information</h2>
        <div className="space-y-6">
        {/* Input Fields */}
        <div className="relative">
        <label className="block text-sm font-medium text-gray-700">First Name</label>
        <input 
        type="text" 
        id="firstName" 
        placeholder="Enter your First Name" 
        value={formValues.firstName} 
        onChange={handleInputChange}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
       />
       {formErrors.firstName && <p className="text-xs text-red-500 mt-1">First Name is Required</p>}
       </div>

      <div className="relative">
      <label className="block text-sm font-medium text-gray-700">Last Name</label>
      <input 
        type="text" 
        id="lastName" 
        placeholder="Enter your Last Name" 
        value={formValues.lastName} 
        onChange={handleInputChange}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
      />
      {formErrors.lastName && <p className="text-xs text-red-500 mt-1">Last Name is Required</p>}
     </div>

     <div className="relative">
      <label  className="block text-sm font-medium text-gray-700">Email</label>
      <input 
        type="text" 
        id="email" 
        placeholder="Enter your Email" 
        value={formValues.email} 
        onChange={handleInputChange}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
      />
      {formErrors.email && <p className="text-xs text-red-500 mt-1">Email is Required</p>}
    </div>

    <div className="relative">
      <label  className="block text-sm font-medium text-gray-700">Phone Number</label>
      <input 
        type="text" 
        id="phone" 
        placeholder="Enter your Phone Number" 
        value={formValues.phone} 
        onChange={handleInputChange}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
      />
      {formErrors.phone && <p className="text-xs text-red-500 mt-1">Phone Number is Required</p>}
    </div>
    
    
    <div className="relative">
      <label  className="block text-sm font-medium text-gray-700">Address</label>
      <input 
        type="text" 
        id="address"  
        placeholder="Enter your Address" 
        value={formValues.address} 
        onChange={handleInputChange}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
      />
      {formErrors.address && <p className="text-xs text-red-500 mt-1">Address is Required</p>}
    </div>

    <div className="relative">
      <label  className="block text-sm font-medium text-gray-700">Zip Code</label>
      <input 
        type="text" 
        id="zipCode"  
        placeholder="Enter your Zip Code" 
        value={formValues.zipCode} 
        onChange={handleInputChange}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
      />
      {formErrors.zipCode && <p className="text-xs text-red-500 mt-1">Zip Code is Required</p>}
    </div>

      <div className="relative">
      <label  className="block text-sm font-medium text-gray-700">City</label>
      <input 
        type="text" 
        id="city"  
        placeholder="Enter your City" 
        value={formValues.city} 
        onChange={handleInputChange}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
      />
      {formErrors.city && <p className="text-xs text-red-500 mt-1">City is Required</p>}
     </div>

     <button 
      onClick={handlePlaceOrder} 
      className="mt-6 w-full py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
     >
      Place Order
      </button>
     </div>
     </div>
    </div>
    </div>
    <Brand/>
    </div>
  )
}

export default Checkout


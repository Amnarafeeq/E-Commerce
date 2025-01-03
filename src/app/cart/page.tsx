'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
interface IProduct {
  id: number;
  brand: string | null;
  name: string;
  price: string;
  api_featured_image: string;
  quantity: number; 
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
 

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const cart = JSON.parse(storedCart);

      const updatedCart = cart.map((item: IProduct) => ({
        ...item,
        quantity: item.quantity || 1,
      }));

      setCartItems(updatedCart);
    }
  }, []);

  const handleQuantityChange = (id: number, operation: 'increase' | 'decrease') => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        if (operation === 'increase') {
          item.quantity += 1;
        } else if (operation === 'decrease' && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
      return item;
    });

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); 
  };

  const handleDelete = (id: number) => {
  const updatedCart = cartItems.filter((item) => item.id !== id);
  setCartItems(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));

  window.dispatchEvent(new Event('cartUpdated'));
};

  return (
    <div className="container bg-[url('/images/cart.jpg')] bg-cover mx-auto py-6  rounded-xl min-h-[100vh]">
      <h1 className='text-3xl font-bold py-4 text-center'>Your Cart</h1>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className='border sm:mx-5 mb-4 bg-[rgba(0,0,0,0.7)] text-white p-4 mb- flex justify-between bg--500 max-sm:w-[50%] mx-auto items-center gap-x-8 max-sm:flex-col max-sm:gap-y-5'
            >
              <img
                src={item.api_featured_image}
                alt={item.name}
                className='w-28  bg--400 h-20 object-cover rounded-md'
              />

              <div className='flex-1 bg--100'>
                <h3 className='font-semibold'>{item.name}</h3>
                <p>Brand: {item.brand || 'mac'}</p>
                <p>Price: ${(parseFloat(item.price === '0.0' ? '30.00' : item.price) * item.quantity).toFixed(2)}</p>
                {/* Display total price by multiplying unit price and quantity */}
              </div>

              <div className='flex items-center space-x-2 bg--400 max-sm:w-full max-sm:justify-center'>
                <button
                  onClick={() => handleQuantityChange(item.id, 'decrease')}
                  className='bg-[rgba(0,0,0,0.3)] text-xl border px-2 py-1 rounded'
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 'increase')}
                  className='bg-[rgba(0,0,0,0.3)] text-xl border px-2 py-1 rounded'
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className='bg-red-500 text-white px-4 py-1 rounded ml-4 max-sm:w-full'
              >
                Remove
              </button>
            </div>
          ))}
        </>
      ) : (<div className=' text-center'>
           <p className='text-3xl mb-8'>Your cart is empty!</p>
           <Link href="/allproducts" className='border-2 px-5 py-3 text-sm font-bold rounded-xl text-white bg-[rgba(0,0,0,0.8)] hover:bg-white hover:text-black'>Go to Shop</Link>
      </div>
       
        
      )}
    </div>
  );
};

export default CartPage;








// 'use client';

// import React, { useEffect, useState } from 'react';

// Define Product Interface
// interface IProduct {
//   id: number;
//   brand: string | null;
//   name: string;
//   price: string;
//   api_featured_image: string;
// }

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState<IProduct[]>([]);

//   // Retrieve cart data from localStorage
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCartItems(JSON.parse(storedCart));
//     }
//   }, []);

//   return (
//     <div className='container mx-auto my-8   rounded-xl'>
//       <h3 className='text-2xl font-bold mb-4'>Your Cart</h3>
//       {cartItems.length > 0 ? (
//         <ul>
//           {cartItems.map((item) => (
//             <li
//               key={item.id}
//               className='border p-4 mb-4 flex justify-between items-center'
//             >
//               <div>
//                 <h3 className='font-semibold'>{item.name}</h3>
//                 <p>Brand: {item.brand || 'mac'}</p>
//                 <p>Price: ${item.price === '0.0' ? '30.0' : item.price}</p>
                
//               </div>
//               <img
//                 src={item.api_featured_image}
//                 alt={item.name}
//                 className='w-16 h-16 object-cover rounded-md'
//               />

//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Your cart is empty!</p>
//       )}
//     </div>
//   );
// };

// export default CartPage;

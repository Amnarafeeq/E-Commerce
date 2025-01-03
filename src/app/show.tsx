import React, { useState, useEffect } from 'react';
import Cart from './cart';
import AddToCart from './addcart';
import DeleteFromCart from './delete';

const CartPage = () => {
  const [cartValue, setCartValue] = useState<number>(0);

  // Fetch cart value from localStorage on component mount
  useEffect(() => {
    const storedCartValue = localStorage.getItem('cartValue');
    if (storedCartValue) {
      setCartValue(Number(storedCartValue)); // If value is found in localStorage, update state
    }
  }, []);

  // Function to handle incrementing cart value
  const addToCart = () => {
    const newCartValue = cartValue + 1;
    setCartValue(newCartValue);
    localStorage.setItem('cartValue', newCartValue.toString());
  };

  // Function to handle decrementing cart value
  const deleteFromCart = () => {
    const newCartValue = cartValue > 0 ? cartValue - 1 : 0; // Prevent negative values
    setCartValue(newCartValue);
    localStorage.setItem('cartValue', newCartValue.toString());
  };

  return (
    <div>
      <Cart cartValue={cartValue} />
      <AddToCart addToCart={addToCart} />
      <DeleteFromCart deleteFromCart={deleteFromCart} />
    </div>
  );
};

export default CartPage;

"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../allproducts/style.css";
import Image from "next/image";

// Define Product Interface
interface IProduct {
  id: number;
  brand: string | null;
  name: string;
  price: string;
  api_featured_image: string;
}

interface IProductsProps {
  productData: IProduct[];
}

const ProductPropsData = ({ productData }: IProductsProps) => {
  const [cartCount, setCartCount] = useState<number>(0);
  const router = useRouter();
  const getCartCount = () => {
    const cart = localStorage.getItem("cart");
    const cartItems: IProduct[] = cart ? JSON.parse(cart) : [];
    setCartCount(cartItems.length);
  };

  useEffect(() => {
    getCartCount();
  }, []);
  const handleAddToCart = (product: IProduct) => {
    const cart = localStorage.getItem("cart");
    const cartItems: IProduct[] = cart ? JSON.parse(cart) : [];

    const isProductInCart = cartItems.some((item) => item.id === product.id);

    if (!isProductInCart) {
      cartItems.push(product);
      localStorage.setItem("cart", JSON.stringify(cartItems));

      setCartCount(cartItems.length);
      alert(`${product.name} added to cart!`);
    } else {
      alert("This product is already in the cart.");
      router.push("/cart");
    }
  };
  function formatImageUrl(url: string) {
    if (url.startsWith("//")) {
      return "https:" + url; // https: add karein agar protocol nahi hai
    }
    return url; // Agar URL theek hai, to usi ko return karein
  }

  return (
    <>
      <div className="cart-count text-xl text-white flex justify-end mr-5 mt-2 sticky top-0">
        <h2 className="bg-[rgba(0,0,0,0.6)] p-2 rounded-xl">
          Items In Cart: {cartCount}
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-evenly gap-y-6 my-12">
          {productData.map((item) => (
            <div
              key={item.id}
              className="w-80 h-[80vh] bg-[rgba(0,0,0,0.5)] text-white rounded-2xl p-3 flex flex-col justify-between border-2"
            >
              <div className="h-[55%] w-full bg-white rounded-2xl overflow-hidden">
                <Image
                  src={formatImageUrl(item.api_featured_image)} // Helper function use karein
                  className="w-[70%] h-full mx-auto"
                  alt={item.name}
                  width={500}
                  height={500}
                />
              </div>
              <div className="h-[30%] w-full flex flex-col justify-evenly">
                <h3>Product Name: {item.name}</h3>
                <h3>Brand: {item.brand == null ? "mac" : item.brand}</h3>
                <p>Price: ${item.price === "0.0" ? "30.00" : item.price}</p>
              </div>
              <div className="h-[10%] w-full flex justify-between items-center">
                <button
                  onClick={() => {
                    handleAddToCart(item);
                  }}
                  className="border px-5 py-2 bg-[rgba(255,255,255,0.6)] font-bold hover:text-white hover:bg-[rgba(0,0,0,0.5)] text-black transition duration-300 text-sm rounded-xl hover:scale-105"
                >
                  Add to Cart
                </button>
                <Link href={`/products/${item.id}`}>
                  <button className="border px-5 py-2 bg-[rgba(255,255,255,0.6)] font-bold hover:text-white hover:bg-[rgba(0,0,0,0.5)] text-black transition duration-300 text-sm rounded-xl hover:scale-105">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPropsData;

"use client";
import React, { useEffect, useState } from "react";
import "../../allproducts/style.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Define Product Data Interface
interface IProductData {
  api_featured_image: string;
  name: string;
  brand: string | null;
  price: string | null;
  description: string | null;
}

interface IProduct {
  id: number;
  brand: string | null;
  name: string;
  price: string;
  api_featured_image: string;
}

const SingleProduct = ({ blush }: { blush: IProductData }) => {
  const [cartCount, setCartCount] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    const cartItems: IProduct[] = cart ? JSON.parse(cart) : [];
    setCartCount(cartItems.length);
  }, []);

  const handleAddToCart = () => {
    const cart = localStorage.getItem("cart");
    const cartItems: IProduct[] = cart ? JSON.parse(cart) : [];

    const isProductInCart = cartItems.some((item) => item.name === blush.name);

    if (!isProductInCart) {
      const productToAdd: IProduct = {
        id: cartItems.length + 1,
        brand: blush.brand,
        name: blush.name,
        price:
          blush.price === null || blush.price === "0.0" ? "30.0" : blush.price,
        api_featured_image: blush.api_featured_image,
      };

      cartItems.push(productToAdd);
      localStorage.setItem("cart", JSON.stringify(cartItems));

      setCartCount(cartItems.length);
      alert(`${blush.name} added to cart!`);
    } else {
      alert("This product is already in the cart.");
      router.push("/cart");
    }
  };
  function formatImageUrl(url: string) {
    if (url.startsWith("//")) {
      return "https:" + url;
    }
    return url;
  }

  return (
    <div className=" sm:w-[60%] lg:w-[45%] h-auto bg--500 mx-auto my-7 py-6 border-2 bg-[rgba(0,0,0,0.6)] border-white rounded-3xl shadow-lg">
      <div className="w-[80%] md:h-[60vh] bg--800 p-3 my-6 mx-auto rounded-xl">
        <Image
          src={formatImageUrl(blush.api_featured_image)}
          alt={blush.name}
          className="h-full w-[90%] mx-auto bg-white lg:p-4 rounded-xl"
          width={500}
          height={500}
        />
      </div>
      <div className="w-[80%] h-full bg--800 flex flex-col justify-evenly p-3 mx-auto space-y-2">
        <h1 className="text-2xl sm:text-3xl text-white">{blush.name}</h1>
        <h2 className="text-xl text-white">
          {blush.brand == null ? "mac" : blush.brand}
        </h2>
        <p className="text-lg text-white">
          Price: ${blush.price === "0.0" ? "30.0" : blush.price}
        </p>
        <p className="text-sm sm:text-base text-white">
          Description:{" "}
          {blush.description === "" || blush.description === null
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis porro officiis adipisci laudantium harum magni."
            : blush.description.split(" ").slice(0, 50).join(" ") +
              (blush.description.split(" ").length > 50 ? "..." : "")}
        </p>
        <button
          onClick={handleAddToCart}
          className="bg-white text-black p-2 rounded-lg hover:bg-[rgba(255,255,255,0.5)] hover:text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;

"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";

const Wishlist = ({productId }: { productId: string }) => {
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <button
      onClick={toggleWishlist}
      className={`flex items-center justify-center p-2 rounded-full ${
        isWishlisted ? "text-black" : "text-gray-400"
      }`}
    >
      <Heart size={24} />
    </button>
  );
};

export default Wishlist;

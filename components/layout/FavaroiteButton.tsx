import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const FavaroiteButton = () => {
  return (
    <div>
      <Link href="/cart" className="group relative ">
        <Heart className="w-5 h-5 hover:text-shop_light_green hoverEffect" />
        <span className="absolute -top-1 left-3 bg-shop_btn_dark_green text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
          0
        </span>
      </Link>
    </div>
  );
};

export default FavaroiteButton;

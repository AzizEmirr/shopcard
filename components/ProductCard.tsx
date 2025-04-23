import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTag, FaLeaf, FaFire } from "react-icons/fa";
import AddToWishlistButton from "./AddToWishlistButton";
import { Title } from "./ui/text";
import { StarIcon } from "lucide-react";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="text-sm border-[1px] border-dark_blue/20 rounded-md bg-white group shadow-lg">
      <div className="relative group overflow-hidden bg-shop_light_bg">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`} className="block">
            <Image
              src={urlFor(product?.images[0]).url()}
              alt="ProductImage"
              loading="lazy"
              width={700}
              height={700}
              className={`w-full h-64 object-contain overflow-hidden 
              transition-transform bg-shop_light_bg hoverEffect 
             ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
            />
          </Link>
        )}

        {product?.status === "sale" && (
          <div className="absolute top-2 left-2 z-10 flex items-center gap-2">
            <div className="border border-crimson/50 p-1 rounded-full group-hover:border-crimson transition-all duration-300">
              <FaTag
                size={18}
                fill="#dc143c"
                className="text-crimson/50 group-hover:text-crimson hoverEffect"
              />
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-black text-white px-2 py-1 rounded">
              Sale
            </span>
          </div>
        )}

        <AddToWishlistButton product={product} />

        {product?.status === "new" && (
          <div className="absolute top-2 left-2 z-10 flex items-center gap-2">
            <div className="border border-shop_light_green/50 p-1 rounded-full group-hover:border-shop_light_green transition-all duration-300">
              <FaLeaf
                size={18}
                fill="#3b9c3c"
                className="text-shop_light_green/100 group-hover:text-shop_light_green hoverEffect"
              />
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-black text-white px-2 py-1 rounded">
              New
            </span>
          </div>
        )}

        {product?.status === "hot" && (
          <Link
            href={"deal"}
            className="absolute top-2 left-2 z-10 flex items-center gap-2"
          >
            <div className="border border-shop_orange/50 p-1 rounded-full group-hover:border-shop_orange transition-all duration-300">
              <FaFire
                size={18}
                fill="#fb6c08"
                className="text-shop_orange/50 group-hover:text-shop_orange hoverEffect"
              />
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-black text-white px-2 py-1 rounded">
              Hot
            </span>
          </Link>
        )}
      </div>
      <div className="p-3 flex flex-col gap-2">
        {product?.categories && (
          <p className="uppercase line-clamp-1 text-xs text-shop_light_text">
            {product?.categories?.map((cat) => cat).join(", ")}
          </p>
        )}
        <Title className="text-base md:text-sm line-clamp-1">
          {product?.name}
        </Title>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                size={12}
                key={index}
                className={
                  index < 4
                    ? "text-shop_lighter_green"
                    : "text-shop_lighter_text"
                }
                fill={index < 4 ? "#93D991" : "#ababab"}
              />
            ))}
          </div>
          <p className="text-shop_light_text text-xs tracking-wide">
            5 Reviews{" "}
          </p>
        </div>
        <div className="flex item-center gap-2.5">
          <p className="font-medium">In Stock</p>
          <p
            className={` ${
              product?.stock === 0
                ? "text-red-600"
                : "text-shop_light_green font-semibold"
            }`}
          >
            {(product?.stock as number) > 0 ? product?.stock : "unavailable"}
          </p>
        </div>
        <PriceView
          price={product?.price}
          discount={product?.discount}
          className="text-sm"
        />
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;

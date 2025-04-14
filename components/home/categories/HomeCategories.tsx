import React from "react";
import { Title } from "../../ui/text";
import { Category } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const HomeCategories = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="bg-white border border-shop_light_green/20 my-10 md:my-20 p-5 lg:p-7 rounded-xl shadow-xl">
      <Title className="border-b border-shop_light_green/20 pb-4 text-shop_dark_green">
        Popular Categories
      </Title>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            href={`/category/${category?.slug?.current}`}
            key={category?._id}
            className="group bg-shop_light_bg border border-gray-100 hover:border-shop_orange rounded-xl p-5 flex items-center gap-4 transition-all duration-300 shadow-sm hover:shadow-lg"
          >
            {category?.image && (
              <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={urlFor(category?.image).url()}
                  alt={category?.title || "Category"}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-shop_orange transition-colors duration-300">
                {category?.title}
              </h3>
              <p className="text-sm text-gray-600">
                <span className="font-bold text-shop_dark_green">{`(${category?.productCount})`}</span>{" "}
                ürün mevcut
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;

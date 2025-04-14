import React from "react";
import { Title } from "../../ui/text";
import Link from "next/link";
import { getAllBrands } from "@/sanity/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { GitCompareArrows, Headset, ShieldCheck, Truck } from "lucide-react";

const extraData = [
  {
    title: "Free Delivery",
    description: "On orders over $50",
    Icon: <Truck size={45} />,
  },
  {
    title: "Free Returns",
    description: "Within 30 days",
    Icon: <GitCompareArrows size={45} />,
  },
  {
    title: "Secure Payment",
    description: "100% secure payment",
    Icon: <Headset size={45} />,
  },
  {
    title: "24/7 Support",
    description: "Dedicated support",
    Icon: <ShieldCheck size={45} />,
  },
];

const ShopByBrands = async () => {
  const brands = await getAllBrands();
  return (
    <div className="mb-10 lg:mb-20 bg-shop_light_bg p-5 lg:p-7 rounded-md">
      <div className="flex items-center gap-5 justify-between mb-10">
        <Title className="text-2xl">Shop By Brands</Title>
        <Link
          href={"/shop"}
          className="text-sm font-semibold tracking-wide 
           hover:text-shop_btn_dark_green hoverEffect"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2.5">
        {brands?.map((brand) => (
          <Link
            key={brand?._id}
            href={`/brand/${brand?.slug?.current}`}
            className="bg-white h-24 flex items-center justify-center 
            rounded-md overflow-hidden hover:shadow-lg 
            hover:shadow-shop_dark_green/20 hoverEffect"
          >
            {brand?.image && (
              <Image
                src={urlFor(brand?.image).url()}
                alt="brandImage"
                width={250}
                height={250}
                className="w-32 h-20 object-contain"
              />
            )}
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 px-4 py-8 rounded-lg shadow-sm shadow-shop_light_green/20">
        {extraData?.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-md group transition-all duration-300 hover:scale-[0.98] hover:shadow-md hover:shadow-shop_light_green/30 cursor-pointer"
          >
            <span className="inline-flex text-xl text-shop_dark_green transition-all duration-300 group-hover:text-shop_light_green group-hover:rotate-3 group-hover:scale-95">
              {item?.Icon}
            </span>
            <div className="text-sm">
              <p className="text-darkColor/80 font-bold capitalize">
                {item?.title}
              </p>
              <p className="text-lightColor leading-relaxed">
                {item?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByBrands;

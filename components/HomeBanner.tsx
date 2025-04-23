import React from "react";
import Link from "next/link";
import Image from "next/image";
import { banner_1 } from "@/images";
import { Title } from "./ui/text";

const HomeBanner = () => {
  return (
    <div className="py-32 md:py-0 bg-shop-light-pink rounded-lg px-10 lg:px-24 flex items-center justify-between mx-auto w-full max-w-8xl min-h-[256px]">
      <div className="space-y-5">
        <Title>
          Grab Upto %50 off on <br /> Selected Headphones
        </Title>
        <Link
          href={"/shop"}
          className="bg-shop_btn_dark_green/90 text-white/90 px-5 py-2.5 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_btn_dark_green hoverEffect"
        >
          Buy Now
        </Link>
      </div>
      <div>
        <Image
          src={banner_1}
          alt="banner_1"
          className="hidden md:block w-100 md:w-100"
        />
      </div>
    </div>
  );
};

export default HomeBanner;

import React from "react";
import Container from "../shared/Container";
import FooterTop from "./FooterTop";
import Logo from "../shared/Logo";
import SocialMedia from "../shared/SocialMedia";
import { SubText, SubTitle } from "../ui/text";
import { categoriesData, quickLinksData } from "@/constants/data";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bgwhite border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <SubText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              nihil cupiditate mollitia aperiam iure, dolore aspernatur rerum
              nesciunt repellat minus nobis dolorum est sapiente, eligendi
              perferendis amet nam? Aliquid, dolorem!
            </SubText>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-shop_dark_green/60 hover:border-shop_light_green hover:text-shop_light_green"
              TooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div className="space-y-4">
            <SubTitle>Quick Links</SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>Categories</SubTitle>
            <ul className="space-y-3 mt-4">
              {categoriesData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={`/category${item?.href}`}
                    className="hover:text-shop_light_green hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle>Newsletter</SubTitle>
            <SubText>Subscribe to our ewsletter to receive updates and exclusive offers</SubText>
            <form className="space-y-4" action="">
              <Input placeholder="Enter your email" type="email" required></Input>
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            © {new Date().getFullYear()} <Logo className="text-sm" />. All
            rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

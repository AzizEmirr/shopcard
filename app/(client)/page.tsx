import React from "react";
import Container from "@/components/shared/Container";
import HomeBanner from "@/components/home/banner/HomeBanner";
import PorductGrid from "@/components/home/product/PorductGrid";
import HomeCategories from "@/components/home/categories/HomeCategories";
import { getCategories } from "@/sanity/queries";
import ShopByBrands from "@/components/home/brands/ShopByBrands";
import LatestBlog from "@/components/home/blog/LatestBlog";

const Home = async () => {
  const categories = await getCategories(6);
  return (
    <Container className="bg-white">
      <HomeBanner />
      <PorductGrid />
      <HomeCategories categories={categories} />
      <ShopByBrands />
      <LatestBlog />
    </Container>
  );
};

export default Home;

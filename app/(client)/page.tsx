import React from "react";
import Container from "@/components/Container";

import PorductGrid from "@/components/PorductGrid";

import { getCategories } from "@/sanity/queries";

import LatestBlog from "@/components/LatestBlog";
import HomeBanner from "@/components/HomeBanner";
import HomeCategories from "@/components/HomeCategories";
import ShopByBrands from "@/components/ShopByBrands";

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

"use client";
import { Category, Product } from "@/sanity.types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { client } from "@/sanity/lib/client";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, ChevronDown, ChevronUp } from "lucide-react";
import ProductCard from "./home/product/ProductCard";
import NoProductAvailable from "./home/product/NoProductAvailable";

interface Props {
  categories: Category[];
  slug: string;
}

const CategoryProducts = ({ categories, slug }: Props) => {
  const [currentSlug, setCurrentSlug] = useState(slug);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleCategoryChange = (newSlug: string) => {
    if (newSlug === currentSlug) return;
    setCurrentSlug(newSlug);
    setMobileMenuOpen(false);
    router.push(`/category/${newSlug}`, { scroll: false });
  };

  const fetchProducts = async (categorySlug: string) => {
    setLoading(true);
    try {
      const query = `
        *[_type == 'product' && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc){
        ...,"categories": categories[]->title}
      `;
      const data = await client.fetch(query, { categorySlug });
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts(currentSlug);
  }, [router]);

  const currentCategory = categories.find(
    (cat) => cat.slug?.current === currentSlug
  )?.title;

  return (
    <div className="py-5 flex flex-col w-full">
      <div className="md:hidden mb-4 sticky top-0 z-30 bg-white px-2 pt-2">
        <Button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`w-full flex justify-between items-center py-3 px-4 rounded-md shadow-sm transition-all duration-200 font-medium text-base
    ${
      mobileMenuOpen
        ? "bg-shop_orange text-white"
        : "bg-gray-100 text-gray-800 border border-gray-300 hover:bg-shop_orange hover:text-white hover:border-shop_orange"
    }`}
        >
          <span>{currentCategory || "Select a category"}</span>
          {mobileMenuOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </Button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
            >
              {categories?.map((item) => (
                <button
                  onClick={() =>
                    handleCategoryChange(item?.slug?.current as string)
                  }
                  key={item?._id}
                  className={`w-full text-left px-4 py-3 font-medium transition-colors ${item?.slug?.current === currentSlug ? "bg-shop_orange/10 text-shop_orange" : "hover:bg-gray-50"}`}
                >
                  {item?.title}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-5 w-full">
        <div className="hidden md:flex flex-col md:min-w-48 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
          {categories?.map((item) => (
            <Button
              onClick={() =>
                handleCategoryChange(item?.slug?.current as string)
              }
              key={item?._id}
              className={`bg-transparent border-0 p-0 rounded-none text-darkColor shadow-none hover:bg-shop_orange hover:text-white font-medium hover:shadow-md transition-all capitalize ${item?.slug?.current === currentSlug ? "bg-shop_orange text-white shadow-md" : "border-b border-gray-100 last:border-b-0"}`}
            >
              <p className="w-full text-left px-4 py-3">{item?.title}</p>
            </Button>
          ))}
        </div>

        <div className="flex-1 w-full">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16 min-h-80 space-y-4 text-center bg-gray-50 rounded-lg w-full border border-gray-200">
              <div className="flex items-center space-x-2 text-shop_orange">
                <Loader2 className="w-6 h-6 animate-spin" />
                <span className="font-medium">Loading products...</span>
              </div>
              <p className="text-sm text-gray-500">
                Please wait while we fetch the best products for you
              </p>
            </div>
          ) : products?.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {products?.map((product: Product) => (
                <AnimatePresence key={product._id}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                </AnimatePresence>
              ))}
            </div>
          ) : (
            <NoProductAvailable
              selectedTab={currentSlug}
              className="mt-0 w-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;

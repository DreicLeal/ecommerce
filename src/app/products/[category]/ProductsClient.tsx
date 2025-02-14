"use client";
import ProductsContainer from "@/components/productsContainer/ProductsContainer";
import { useProductContext } from "@/contexts/productContext";
import { useSearchParams } from "next/navigation";

export default function ProductsClient({ category }: { category: string }) {
  const {productsList} = useProductContext()
  const searchParams = useSearchParams();
  const source = searchParams.get("source");

  const filteredProducts = productsList.filter(
    (product) =>
      product.category === category &&
      (source === "banner" ? product.sale : true)
  );

  return <ProductsContainer title={category} products={filteredProducts} />;
}

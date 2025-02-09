"use client";
import ProductsContainer from "@/components/productsContainer/ProductsContainer";
import { IProduct } from "@/contexts/productContext";
import { useSearchParams } from "next/navigation";

type Props = {
  category: string;
  products: IProduct[];
};

export default function ProductsClient({ category, products }: Props) {
  const searchParams = useSearchParams();
  const source = searchParams.get("source");

  const filteredProducts = products.filter(
    (product) =>
      product.category === category &&
      (source === "banner" ? product.sale : true)
  );

  return <ProductsContainer title={category} products={filteredProducts} />;
}

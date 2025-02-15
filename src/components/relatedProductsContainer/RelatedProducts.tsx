"use client";

import { useProductContext } from "@/contexts/productContext";
import RelatedProductCard from "./RelatedProductCard";

export default function RelatedProducts({
  category,
  id,
}: {
  category: string;
  id: string;
}) {
  const { productsList } = useProductContext();
  const related = productsList.filter(
    (product) => product.category === category && product.id !== id
  );

  return (
    <ul className="flex gap-4 overflow-x-auto p-2 scrollbar">
      {related.map((product) => (
        <RelatedProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}

import products from "@/utils/products";

import ProductsClient from "./productsClient";

type IParams = {
  category: string;
};

export default async function ProductsPage({
  params,
}: {
  params: Promise<IParams>;
}) {
  const { category } = await params;

  return <ProductsClient category={category} products={products} />;
}

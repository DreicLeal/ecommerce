import ProductsClient from "./ProductsClient";

type IParams = {
  category: string;
};

export default async function ProductsPage({
  params,
}: {
  params: Promise<IParams>;
}) {
  const { category } = await params;

  return <ProductsClient category={category} />;
}

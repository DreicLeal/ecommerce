// import ProductDetailClient from "@/components/detailsContainer/ProductDetailClient";
import products from "@/utils/products";
import dynamic from "next/dynamic";

const ProductDetailClient = dynamic(
  () => import("../../../../components/detailsContainer/ProductDetailClient")
);

type IParams = {
  id: string;
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<IParams>;
}) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  return <ProductDetailClient product={product} />;
}

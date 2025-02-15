import { IProduct } from "@/contexts/productContext";
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
  const products = async (): Promise<IProduct[]> => {
    const response = await fetch(
      "https://ecommerce-json-server-jvhp.onrender.com/products"
    );
    const data = await response.json();
    return data;
  };
  const { id } = await params;
  const product = (await products()).find((item) => item.id === id);

  return <ProductDetailClient product={product} />;
}

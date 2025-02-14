import { IProduct } from "@/contexts/productContext";
import Image from "next/image";
import Details from "./ProductDetail";
import ReviewSection from "../ReviewSection";

export default function ProductDetailClient({
  product,
}: {
  product?: IProduct;
}) {
  return (
    <>
      {product ? (
        <>
          <div className="flex mt-14 flex-col lg:flex-row mx-auto items-center justify-center w-[95%] bg-[var(--card-bg)] p-4 lg:p-8 rounded-lg shadow-md">
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
              width={40}
              height={40}
                className="bg-white p-2 w-[90%] lg:w-full max-w-[500px] object-cover rounded-lg"
                src={product.image}
                alt={product.name}
              />
            </div>
            <Details product={product} />
          </div>
          <div className="w-full mt-8">
            <ReviewSection />
          </div>
        </>
      ) : (
        <p className="text-center text-red-500">Product not found</p>
      )}
    </>
  );
}

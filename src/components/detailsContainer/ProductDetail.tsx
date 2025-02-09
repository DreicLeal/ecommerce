"use client";
import { IProduct, useProductContext } from "@/contexts/productContext";
import SalePrice from "../Price";
import { useLanguageContext } from "@/contexts/languageContext/languageContext";

export default function Details({ product }: { product: IProduct }) {
  const { handleCartItems, calcRatingStars } = useProductContext();
  const { language, languageSpreader } = useLanguageContext();
  const currentLanguage = language.toLowerCase() as "english" | "portuguese";

  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-[var(--text)] px-4">
      <div className="w-full flex items-center gap-2 font-bold text-lg lg:text-xl">
        {product.rating} {calcRatingStars(product.rating)}
      </div>
      <p className="my-2 text-center lg:text-left text-sm lg:text-base">
        {product.description[currentLanguage]}
      </p>
      <h2 className="my-4 font-bold text-xl lg:text-2xl">{product.name}</h2>
      <SalePrice product={product} />
      <button
        className="bg-[var(--primary)] w-full py-3 self-center rounded-md text-white hover:bg-[var(--accent)] active:bg-[var(--secondary)] transition duration-150 font-semibold mt-4"
        onClick={() => handleCartItems(product, "add")}
      >
        {languageSpreader.productCard.addToCart}
      </button>
    </div>
  );
}

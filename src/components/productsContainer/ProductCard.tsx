"use client";
import Image from "next/image";
import { useLanguageContext } from "@/contexts/languageContext/languageContext";
import { IProduct, useProductContext } from "@/contexts/productContext";
import SalePrice from "../Price";

export default function ProductCard({ product }: { product: IProduct }) {
  const { languageSpreader, language } = useLanguageContext();
  const { calcRatingStars, handleCartItems, details } = useProductContext();

  const currentLanguage = language.toLowerCase() as "english" | "portuguese";

  return (
    <li
      onClick={() => details(product.category, product.id)}
      className="flex flex-col w-[90%] xs:w-fit gap-2 items-center  p-4 bg-[var(--card-bg)] hover:border-orange-600 transition duration-150 rounded-md shadow-lg border border-[var(--secondary)] cursor-pointer"
    >
      <div className="relative bg-white w-60 h-60 rounded-md p-4">
        {product.sale && (
          <div className="absolute right-0 top-0 px-2 rounded-bl-md rounded-tr-md bg-[var(--primary)] text-white font-bold">
            SALE
          </div>
        )}

        <Image
        width={50} height={50}
          className="w-full h-full object-cover"
          src={product.image}
          alt="Rating Star"
        />
      </div>
      <p className="text-lg font-bold text-[var(--text)]">{product.name}</p>
      <p className="w-60 h-[100px] text-justify text-[var(--text)]">
        {product.description[currentLanguage]}
      </p>
      <SalePrice product={product} />
      <div className="flex gap-2 self-start">
        <div className="self-start text-sm font-semibold text-[var(--text)]">
          {product.rating}
        </div>
        <div className="flex w-4 h-4" title={String(product.rating)}>
          {calcRatingStars(product.rating)}
        </div>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleCartItems(product, "add");
        }}
        className="bg-[var(--primary)] w-[90%] py-2 rounded-md text-white hover:bg-amber-600/[70%] active:bg-amber-600/[45%] transition duration-150"
      >
        {languageSpreader.productCard.addToCart}
      </button>
    </li>
  );
}

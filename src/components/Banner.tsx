"use client";
import { useLanguageContext } from "@/contexts/languageContext/languageContext";
import BannerImg from "./BannerImg";
import products from "@/utils/products";
import { IProduct } from "@/contexts/productContext";
import { useEffect, useState } from "react";

export default function Banner() {
  const [selected, setSelected] = useState<IProduct[]>([]);
  const uniquePromoBanner = Array.from(
    new Map(products.map((product) => [product.category, product])).values()
  );

  useEffect(() => {
    const shuffled = [...uniquePromoBanner].sort(() => Math.random() - 0.5);
    setSelected(shuffled.slice(0, 3));
  }, []);

  const { language, languageSpreader } = useLanguageContext();
  const bannerLanguage = language.toLowerCase() as "english" | "portuguese";

  return (
    <div className="w-full mt-14 p-8 flex flex-col items-center bg-cyan-700">
      <h2 className="font-bold text-2xl mb-2">
        {languageSpreader.home.bannerTitle}
      </h2>

      <ul className=" flex flex-row justify-center items-center gap-8">
        {selected.map((product) => (
          <BannerImg
            key={product.id}
            category={product.category}
            description={product.description[bannerLanguage]}
            source={product.image}
            title={product.category}
          />
        ))}
      </ul>
    </div>
  );
}

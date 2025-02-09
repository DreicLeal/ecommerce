'use client'
import ProductCard from "./ProductCard";
import { useLanguageContext } from "@/contexts/languageContext/languageContext";
import { IProduct } from "@/contexts/productContext";

export default function ProductsContainer ({title = "", products}: {title:string, products:IProduct[]}) {
   const {languageSpreader} = useLanguageContext() 
type HomeKeys = keyof typeof languageSpreader.home
    
    return (
        <div className="flex flex-col items-center mt-14 p-4">
        <h2 className="font-bold text-3xl">{languageSpreader.home[title as HomeKeys] || ""}</h2>
        <ul className="flex flex-wrap pt-4 justify-center gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    )
}
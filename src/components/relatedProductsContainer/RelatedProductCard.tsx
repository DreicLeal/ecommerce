import { useCurrencyContext } from "@/contexts/currencyContext";
import { IProduct, useProductContext } from "@/contexts/productContext";
import Image from "next/image";


export default function RelatedProductCard({ product }: { product: IProduct }) {
    const { currenciesSymbol, getConvertedPrice, currency } =
      useCurrencyContext();
        const { calcRatingStars, details } = useProductContext();
        const convertedPrice = +getConvertedPrice(product.price)
    return (
    <li 
    onClick={()=> details(product.category, product.id)}
    className="relative hover:scale-105 transition duration-300 min-w-[120px] bg-[var(--card-bg)] flex flex-col gap-2 items-center p-2 rounded-md">
      {product.sale && <div className="absolute w-full bg-[var(--primary)] rounded-t-md text-center text-xs top-0">20% OFF</div>}
      <div className="h-[80px]">

      <Image className="mt-2" width={70} height={70} alt={product.name} src={product.image}/>
      </div>
      <p className="text-xs">{product.name}</p>
      <div className="flex " title={String(product.rating)}>
          {calcRatingStars(product.rating)}
        </div>
   <p className="text-[var(--primary)] font-semibold">{currenciesSymbol[currency]}{product.sale? ((convertedPrice*0.8).toFixed(2)): (convertedPrice.toFixed(2))}</p>
    </li>
  );
}

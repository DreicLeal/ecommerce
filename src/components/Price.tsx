import { useCurrencyContext } from "@/contexts/currencyContext";
import { IProduct } from "@/contexts/productContext";

export default function SalePrice({ product }: { product: IProduct }) {
  const { currenciesSymbol, getConvertedPrice, currency } =
    useCurrencyContext();
  const isSale = +getConvertedPrice(product.price) * 0.8;
  return (
    <div className="self-start">
      {product.sale ? (
        <div className="relative">
          <p className="absolute font-light text-gray-400 top-[-35%] right-[-60%] line-through">
            {currenciesSymbol[currency]}
            {(+getConvertedPrice(product.price)).toFixed(2)}
          </p>
          <div className="flex">
            <p className="text-base self-center text-[var(--primary)]">
              {currenciesSymbol[currency]}
            </p>
            <p className="text-2xl text-[var(--primary)] font-bold">{isSale.toFixed(2)}</p>
          </div>
        </div>
      ) : (
        <div className="flex">
          <p className="text-base self-center text-[var(--primary)]">
            {currenciesSymbol[currency]}
          </p>
          <p className="text-2xl  text-[var(--primary)]">
            {(+getConvertedPrice(product.price)).toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}

import { useCurrencyContext } from "@/contexts/currencyContext";
import { IProduct, useProductContext } from "@/contexts/productContext";
import Image from "next/image";
export default function CartCard({ product }: { product: IProduct }) {
  const { handleCartItems } = useProductContext();
  const { currenciesSymbol, currency, getConvertedPrice } =
    useCurrencyContext();

  const convertedPrice = !product.sale
    ? +getConvertedPrice(product.price)
    : +getConvertedPrice(product.price) * 0.8;

  return (
    <div className="p-4 gap-2 flex items-center justify-around">
      <div className="bg-white rounded-md p-2">
        <Image
          width={20}
          height={20}
          className="w-16 h-16 sm:w-24 sm:h-24"
          alt={product.name}
          src={product.image}
        />
      </div>
      <h2 className="w-[130px]">{product.name}</h2>
      <div className="flex items-center border rounded-md border-[var(--primary)]">
        <button
          onClick={() => handleCartItems(product, "sub")}
          className="px-2 rounded-l-sm bg-[var(--primary)]"
        >
          -
        </button>
        <p className="px-2">{product.quantity}</p>
        <button
          onClick={() => handleCartItems(product, "add")}
          className="px-2 rounded-r-sm bg-[var(--primary)]"
        >
          +
        </button>
      </div>
      <p className="w-[40px] ">
        {currenciesSymbol[currency]}
        {(convertedPrice * product.quantity!).toFixed(2)}
      </p>
    </div>
  );
}

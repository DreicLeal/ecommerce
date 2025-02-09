"use client";
import { useProductContext } from "@/contexts/productContext";
import CartCard from "./CartCard";
import { useRouter } from "next/navigation";
import { useCurrencyContext } from "@/contexts/currencyContext";
import { useLanguageContext } from "@/contexts/languageContext/languageContext";
import { useEffect, useState } from "react";

export default function CartContainer() {
  const { cartItems } = useProductContext();
  const { currenciesSymbol, currency, getConvertedPrice } =
    useCurrencyContext();
  const { languageSpreader } = useLanguageContext();

  const router = useRouter();

  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if(!hasMounted) return null;

  const totalValue = cartItems.reduce(
    (acc, act) =>
      acc + (act.sale ? act.price * 0.8 : act.price) * act.quantity!,
    0
  );
  const totalConvertedPrice = +getConvertedPrice(totalValue);
  const goToHomePage = () => {
    router.push("/");
  };
  if (cartItems.length === 0) {
    return (
      <div className="mt-14 w-full flex items-center flex-col p-4">
        <h2 className="font-bold">
          {languageSpreader.cartContainer.emptyCart}
        </h2>
        <button
          onClick={goToHomePage}
          className="bg-[var(--primary)] rounded-md p-2 w-1/2"
        >
          {languageSpreader.cartContainer.addProducts}
        </button>
      </div>
    );
  }

  return (
    <div className="flex mt-14 flex-col items-center">
      <ul className="w-full">
        {cartItems.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </ul>
      <div className=" flex gap-2 w-full justify-end border-t p-2 font-semibold">
        <p>{languageSpreader.cartContainer.totalValueLang}</p>
        <p>
          {currenciesSymbol[currency]}
          {totalConvertedPrice}
        </p>
      </div>
      <button className="w-[90%] font-semibold sm:w-[220px] self-end p-2 mr-2 rounded-md bg-[var(--primary)]">
        {languageSpreader.cartContainer.paymentInfo}
      </button>
    </div>
  );
}

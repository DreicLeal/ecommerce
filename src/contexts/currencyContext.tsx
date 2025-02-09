"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export interface ICurrencyContext {
  currency: "USD" | "EUR" | "BRL";
  setCurrency: Dispatch<SetStateAction<"USD" | "EUR" | "BRL">>;
  setExchangeRates: Dispatch<SetStateAction<Record<string, number>>>;
  exchangeRates: Record<string, number>;
  currenciesSymbol: ICurrenciesSymbol;
  getConvertedPrice(price: number): string

}

const CurrencyContext = createContext<ICurrencyContext>({} as ICurrencyContext);

export type ICurrenciesSymbol = Record<string, string>

export default function CurrencyProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currency, setCurrency] = useState<"USD" | "EUR" | "BRL">("USD");
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>(
    {}
  );
  const currenciesSymbol:Record<string, string> = {
    EUR: "€",
    BRL: "R$",
    USD: "U$",
  };

  function getConvertedPrice(price:number) {
    const rate = exchangeRates[currency] || 1;
    return (price * rate).toFixed(2);
  }

  useEffect(() => {
    async function fetchExchange() {
      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${currency}`
        );
        const data = await response.json();
        setExchangeRates(data.rates);
      } catch (e) {
        console.error("Error during fetch.", e);
      }
    }
    fetchExchange();
  }, []);

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        exchangeRates,
        setExchangeRates,
        currenciesSymbol,
        getConvertedPrice
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrencyContext = () => {
  const context = useContext(CurrencyContext);
  return context;
};

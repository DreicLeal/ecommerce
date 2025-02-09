import CurrencyProvider from "@/contexts/currencyContext";
import LanguageProvider from "@/contexts/languageContext/languageContext";
import ProductProvider from "@/contexts/productContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <CurrencyProvider>
        <ProductProvider>{children}</ProductProvider>
      </CurrencyProvider>
    </LanguageProvider>
  );
}

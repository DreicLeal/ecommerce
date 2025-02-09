"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { AvailableLanguages, languageData, LanguageDataType } from "./languageData";

export interface ILanguageContext {
  language: string;
  changingLanguage: (newLanguage: AvailableLanguages) => void;
  languageData: typeof languageData;
  languageSpreader: LanguageDataType;


}
const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext);

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<AvailableLanguages>("ENGLISH");

  const changingLanguage = (newLanguage: AvailableLanguages) => {
    setLanguage(newLanguage);
  };

  const languageSpreader = languageData[language]
  return (
    <LanguageContext.Provider
      value={{ language, changingLanguage, languageData, languageSpreader }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  return context;
};

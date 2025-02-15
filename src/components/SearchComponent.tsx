"use client";
import { useProductContext } from "@/contexts/productContext";
import SearchList from "./SearchList";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import search from "../../public/search.png";
import { useLanguageContext } from "@/contexts/languageContext/languageContext";
export default function SearchComponent() {
  const { foundProducts, setFoundProducts, productsList } = useProductContext();
  const { languageSpreader } = useLanguageContext();
  const [searchedValue, setSearchedValue] = useState("");
  const searchRef = useRef<HTMLUListElement | null>(null);
  const handleChange = (value: string) => {
    setSearchedValue(value);
    const searchResult = productsList.filter(
      (product) =>
        product.category.toLowerCase().includes(value.toLowerCase()) ||
        product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFoundProducts(searchResult);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setFoundProducts([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex bg-[var(--card-bg)] rounded-md pl-2 h-10 border border-[var(--secondary)] relative">
      <input
        className="outline-none w-[145px] text-[var(--text)] bg-transparent placeholder-[var(--secondary)]"
        placeholder={`${languageSpreader.header.input}`}
        value={searchedValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className="bg-[var(--secondary)] text-white h-full px-2 w-10 rounded-r-md hover:bg-sky-700/[50%] transition duration-150">
        <Image className="h-6 w-6" src={search} alt="Search button" />
      </button>
      {foundProducts.length > 0 && (
        <ul
          ref={searchRef}
          className="absolute flex flex-col left-[-20%] top-10 bg-[var(--card-bg)] p-2 transition duration-200 h-fit max-h-[450px] overflow-x-hidden rounded-md"
        >
          {foundProducts.map((product) => (
            <SearchList key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
}

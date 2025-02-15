"use client";
import Link from "next/link";
import { useLanguageContext } from "../contexts/languageContext/languageContext";
import { useCurrencyContext } from "@/contexts/currencyContext";
import Image from "next/image";
import cart from "../../public/cart.svg";
import menu from "../../public/menu.svg";
import { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import { useProductContext } from "@/contexts/productContext";
import { useRouter } from "next/navigation";
import SearchComponent from "./SearchComponent";
import Toast from "./Toast";

export default function Header() {
  const { language, changingLanguage } = useLanguageContext();
  const { currency, setCurrency } = useCurrencyContext();
  const { cartAmount, toast } = useProductContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();

  const languageToChange = language === "ENGLISH" ? "PORTUGUESE" : "ENGLISH";

  const transition =
    "hover:bg-[var(--primary)] hover:bg-opacity-80 transition ease-in-out duration-150";

  const handleCartPage = () => {
    router.push("/cart");
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="flex z-20 items-center bg-[var(--background)] justify-between p-2 gap-2 w-full fixed top-0 h-14">
      {toast && 
      <div className="fixed top-2 right-2 z-20">

        <Toast/>
      </div>
      }
      <Image
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex sm:hidden relative h-8 w-8 "
        src={menu}
        alt="Menu button"
      />
      {menuOpen && (
        <div 
        ref={menuRef} 
        className="flex absolute top-8 left-7 flex-col border rounded-md bg-[var(--card-bg)] z-10">
          <Nav />{" "}
          <select
            className="bg-[var(--card-bg)] text-[var(--text)] border border-[var(--secondary)] p-2 "
            value={currency}
            onChange={(e) =>
              setCurrency(e.target.value as "USD" | "EUR" | "BRL")
            }
          >
            <option value="EUR">EUR (€)</option>
            <option value="BRL">BRL (R$)</option>
            <option value="USD">USD (U$)</option>
          </select>
          <button
            className={` w-32 text-white bg-[var(--primary)] ${transition}`}
            onClick={() => changingLanguage(languageToChange)}
          >
            {languageToChange}
          </button>
        </div>
      )}
      <Link href={"/"}>
        <h1 className="text-[var(--text)] font-bold text-lg cursor-pointer">
          Logo
        </h1>
      </Link>
      <div className="hidden sm:flex">
        <Nav />
      </div>
      <SearchComponent />
      <select
        className="hidden sm:flex bg-[var(--card-bg)] text-[var(--text)] border border-[var(--secondary)] p-2 rounded-md"
        value={currency}
        onChange={(e) => setCurrency(e.target.value as "USD" | "EUR" | "BRL")}
      >
        <option value="EUR">EUR (€)</option>
        <option value="BRL">BRL (R$)</option>
        <option value="USD">USD (U$)</option>
      </select>

      <div className="flex gap-4">
        <div onClick={handleCartPage} className="relative">
          <p className="absolute right-3 text-[var(--primary)] font-semibold bg-[var(--background)]/25">
            {cartAmount}
          </p>
          <Image
            className={`h-10 min-w-8 self-center rounded-md ${transition}`}
            src={cart}
            alt="cart"
          />
        </div>
        <button
          className={`hidden sm:flex items-center justify-center w-20 font-semibold rounded-md text-white bg-[var(--primary)] ${transition}`}
          onClick={() => changingLanguage(languageToChange)}
        >
          PT | EN
        </button>
      </div>
    </header>
  );
}

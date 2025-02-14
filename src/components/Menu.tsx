"use client";

import { useProductContext } from "@/contexts/productContext";

import { useRouter } from "next/navigation";

export default function Menu() {
  const {productsList} = useProductContext()
  const transition = "hover:bg-white/25 transition ease-in-out duration-150";
  const router = useRouter();
  const categories = [...new Set(productsList.map((item) => item.category))];
  return (
    <ul className="flex flex-col gap-2 w-fit sm:w-40 mt-14 bg-slate-500">
      {categories.map((category) => (
        <li
          onClick={() => router.push(`/products/${category}?=source=menu`)}
          className={`${transition} w-fit sm:w-[150px] pl-4 pr-2 cursor-pointer`}
          key={category}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}

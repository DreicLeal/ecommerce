"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

type IImageProps = {
  source: string;
  category: string;
  title: string;
  description: string;
};

export default function BannerImg({
  source,
  category,
  title,
  description,
}: IImageProps) {
  const router = useRouter();

  return (
    <li
      onClick={() => router.push(`/products/${category}?source=banner`)}
      className="w-48 p-2 bg-white rounded-bl-2xl rounded-tr-2xl cursor-pointer hover:bg-slate-300"
    >
      <div className=" flex justify-center items-center rounded-tr-2xl bg-black w-44 h-44">
        <Image width={40} height={40} className="w-40" src={source} alt={category} />
      </div>
      <h2 className="font-extrabold text-black">{title}</h2>
      <p className="text-xs text-black">{description}</p>
    </li>
  );
}

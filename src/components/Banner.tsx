"use client";
import { useLanguageContext } from "@/contexts/languageContext/languageContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Banner() {
  const { language, languageSpreader } = useLanguageContext();
  const [currentSlide, setCurrentSlide] = useState(0);
  const bannerLanguage = language.toLowerCase() as "english" | "portuguese";
  const router = useRouter();
  const bannerImages = [
    {
      src: "/banner/laptopBanner.png",
      alt: "Banner 2",
      category: "Laptops",
      title: {
        english: "Summer Sale",
        portuguese: "Ofertas de verão",
      },
      description: {
        english: "Up to 20% off on selected items",
        portuguese: "Até 20% em produtos selecionados",
      },
    },
    {
      src: "/banner/earbudsBanner.png",
      alt: "Banner 1",
      category: "Headphones",
      title: {
        english: "Discover Amazing Products",
        portuguese: "Descubra Produtos Incríveis",
      },
      description: {
        english: "Explore our latest launches and find your perfect match",
        portuguese:
          "Explore nossos últimos lançamentos e encontre o ideal para você",
      },
    },
    {
      src: "/banner/smartphonesBanner.png",
      alt: "Banner 3",
      category: "Smartphones",
      title: {
        english: "Exclusive Deals",
        portuguese: "Ofertas Exclusivas",
      },
      description: {
        english: "Limited-time offers on top-rated products",
        portuguese: "Ofertas por tempo limitado em produtos bem avaliados",
      },
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
    );
  };

  return (
    <div className="relative w-full h-[250px] sm:h-[370px] overflow-hidden">
      {bannerImages.map((banner, index) => (
        <div
          key={banner.alt}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out 
      ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            className="object-cover"
            src={banner.src}
            alt={banner.alt}
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white max-w-xl px-4">
              <h2 className="text-4xl font-bold mb-4">
                {banner.title[bannerLanguage]}
              </h2>
              <p className="text-xl mb-6">
                {banner.description[bannerLanguage]}
              </p>
              <button
                onClick={() => {
                  console.log(banner.category);
                  router.push(
                    `/products/${bannerImages[currentSlide].category}?source=banner`
                  );
                }}
                className="bg-[var(--primary)] font-semibold px-4 py-2 rounded-md"
              >
                {languageSpreader.home.bannerButton}
              </button>
            </div>
          </div>
        </div>
      ))}

      <button onClick={prevSlide} className="absolute left-4 top-1/2 z-10">
        <FaChevronLeft className="h-6 w-6" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 z-10">
        <FaChevronRight className="h-6 w-6" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {bannerImages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            } `}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

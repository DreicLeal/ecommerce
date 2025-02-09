export type LanguageDataType = {
  productCard: {
    addToCart: string;
  };
  header: {
    input: string;
    nav: {
      home: string;
      about: string;
      contact: string;
    };
  };
  home: {
    allProducts: string;
    bannerTitle: string;
  };
  cartContainer: {
    emptyCart: string;
    addProducts: string;
    totalValueLang: string;
    paymentInfo: string;
  };
  reviewSection: {
    customerReviews: string;
    noReviews: string;
    verifiedPurchase: string;
  };
};

// Define possible language keys dynamically
export type AvailableLanguages = "ENGLISH" | "PORTUGUESE";

type LanguageSpreader = Record<AvailableLanguages, LanguageDataType>;

export const languageData: LanguageSpreader = {
  ENGLISH: {
    productCard: {
      addToCart: "Add to cart",
    },
    header: {
      input: "Look for a product",
      nav: {
        home: "Home",
        about: "About",
        contact: "Contact",
      },
    },
    home: {
      allProducts: "All Products",
      bannerTitle: "Highlighted sales",
    },
    cartContainer: {
      emptyCart: "Empty Cart",
      addProducts: "Add Products",
      totalValueLang: "Total Value:",
      paymentInfo: "Payment Info",
    },
    reviewSection: {
      customerReviews: "Customer Reviews",
      noReviews: "No reviews yets.",
      verifiedPurchase: "Verified Purchase",
    },
  },
  PORTUGUESE: {
    productCard: {
      addToCart: "Adicionar ao Carrinho",
    },
    header: {
      input: "Busque um produto",
      nav: {
        home: "Início",
        about: "Sobre",
        contact: "Contato",
      },
    },
    home: {
      allProducts: "Todos os Produtos",
      bannerTitle: "Destaques em promoção",
    },
    cartContainer: {
      emptyCart: "Carrinho ainda vazio",
      addProducts: "Adicione Produtos",
      totalValueLang: "Valor Total:",
      paymentInfo: "Informações de Pagamento",
    },
    reviewSection: {
      customerReviews: "Avaliações dos clientes",
      noReviews: "Ainda não há avaliações.",
      verifiedPurchase: "Compra Verificada",
    },
  },
};

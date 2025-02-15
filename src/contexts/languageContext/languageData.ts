export type LanguageDataType = {
  productCard: {
    addToCart: string;
  };
  header: {
    input: string;
    toast: {
      add: string;
      sub: string;
    };
    nav: {
      home: string;
      about: string;
      contact: string;
    };
  };
  home: {
    allProducts: string;
    bannerButton: string;
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
  about: {
    hello: string;
    introduction: string;
    whatIDoTitle: string;
    whatIDo: string;
    keyStrengthsTitle: string;
    specialization: string;
    knowledge: string;
    experience: string;
    familiarity: string;
  };
};

export type AvailableLanguages = "ENGLISH" | "PORTUGUESE";

type LanguageSpreader = Record<AvailableLanguages, LanguageDataType>;

export const languageData: LanguageSpreader = {
  ENGLISH: {
    productCard: {
      addToCart: "Add to cart",
    },
    header: {
      input: "Look for a product",
      toast: {
        add: "Product successfully added!",
        sub: "Product successfully removed!",
      },
      nav: {
        home: "Home",
        about: "About",
        contact: "Contact",
      },
    },
    home: {
      allProducts: "All Products",
      bannerButton: "Shop now",
    },
    cartContainer: {
      emptyCart: "Empty Cart",
      addProducts: "Add Products",
      totalValueLang: "Total Value:",
      paymentInfo: "Payment Info",
    },
    reviewSection: {
      customerReviews: "Customer Reviews",
      noReviews: "No reviews yet.",
      verifiedPurchase: "Verified Purchase",
    },
    about: {
      hello: "Hello!",
      introduction:
        "I'm a Front-End Developer passionate about creating intuitive and high-performance interfaces using React, Next.js, and TypeScript.",
      whatIDoTitle: "What I Do",
      whatIDo:
        "I develop modern web applications using React and Next.js, ensuring SEO optimization, SSR (Server-Side Rendering), and performance improvements. I focus on componentization, state management, and API integrations.",
      keyStrengthsTitle: "Key Strengths",
      specialization: "Expertise in React, Next.js, and TypeScript",
      knowledge:
        "Knowledge in SSR (Server-Side Rendering), SSG (Static Site Generation), and performance optimization",
      experience:
        "Experience with Google Tag Manager, Styled Components, and TailwindCSS",
      familiarity: "Familiarity with Scrum, Trello, and agile methodologies",
    },
  },
  PORTUGUESE: {
    productCard: {
      addToCart: "Adicionar ao Carrinho",
    },
    header: {
      input: "Busque um produto",
      toast: {
        add: "Produto adicionado com sucesso!",
        sub: "Produto removido com sucesso!",
      },
      nav: {
        home: "Início",
        about: "Sobre",
        contact: "Contato",
      },
    },
    home: {
      allProducts: "Todos os Produtos",
      bannerButton: "Comprar agora",
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
    about: {
      hello: "Olá!",
      introduction:
        "Sou um Desenvolvedor Front-End apaixonado por criar interfaces intuitivas e de alto desempenho usando React, Next.js e TypeScript.",
      whatIDoTitle: "O que eu faço?",
      whatIDo:
        "Desenvolvo aplicações web modernas utilizando React e Next.js, garantindo otimização de SEO, SSR (Server-Side Rendering) e melhorias de performance. Foco na componentização, gerenciamento de estado e integração de APIs.",
      keyStrengthsTitle: "Diferenciais",
      specialization: "Especialização em React, Next.js e TypeScript",
      knowledge:
        "Conhecimento em SSR (Server-Side Rendering), SSG (Static Site Generation) e otimização de performance",
      experience:
        "Experiência com Google Tag Manager, Styled Components e TailwindCSS",
      familiarity: "Familiaridade com Scrum, Trello e metodologias ágeis",
    },
  },
};

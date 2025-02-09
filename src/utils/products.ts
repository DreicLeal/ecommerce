import headphones0 from "../../public/images/headphones-00-01.png";
import headphones1 from "../../public/images/headphones-00-02.png";
import headphones2 from "../../public/images/headphones-00-03.png";
import headphones3 from "../../public/images/headphones-00-04.png";
import headphones4 from "../../public/images/headphones-00-05.png";
import headphones5 from "../../public/images/headphones-00-06.png";
import headphones6 from "../../public/images/headphones-00-07.png";
import smartphones1 from "../../public/images/smartphone-00-01.png";
import smartphones2 from "../../public/images/smartphone-00-02.png";
import smartphones3 from "../../public/images/smartphone-00-03.png";
import smartphones4 from "../../public/images/smartphone-00-04.png";
import smartphones5 from "../../public/images/smartphone-00-05.png";
import smartphones6 from "../../public/images/smartphone-00-06.png";
import laptop1 from "../../public/images/laptop-00-01.png";
import laptop2 from "../../public/images/laptop-00-02.png";
import laptop3 from "../../public/images/laptop-00-03.png";
import laptop4 from "../../public/images/laptop-00-04.png";
import laptop5 from "../../public/images/laptop-00-05.png";
import laptop6 from "../../public/images/laptop-00-06.png";
import tablet1 from "../../public/images/tablet-00-01.png";
import tablet2 from "../../public/images/tablet-00-02.png";
import tablet3 from "../../public/images/tablet-00-03.png";
import tablet4 from "../../public/images/tablet-00-04.png";
import tablet5 from "../../public/images/tablet-00-05.png";
import tablet6 from "../../public/images/tablet-00-06.png";
import watch1 from "../../public/images/watch-00-01.png";
import watch2 from "../../public/images/watch-00-02.png";
import watch3 from "../../public/images/watch-00-03.png";
import watch4 from "../../public/images/watch-00-04.png";
import watch5 from "../../public/images/watch-00-05.png";
import watch6 from "../../public/images/watch-00-06.png";
import earbuds1 from "../../public/images/earbuds-00-01.png";
import earbuds2 from "../../public/images/earbuds-00-02.png";
import earbuds3 from "../../public/images/earbuds-00-03.png";
import earbuds4 from "../../public/images/earbuds-00-04.png";

const products = [
  {
    id: "6b1d5b60-d91f-11ec-9d64-0242ac120002",
    name: "SoundBlast X1",
    category: "Headphones",
    price: 150,
    stock: 35,
    rating: 4.7,
    image: headphones0,
    sale: true,
    quantity: 0,
    description: {
      portuguese:
        "Fones de ouvido sem fio com cancelamento de ruído, graves potentes e bateria de longa duração.",
      english:
        "Wireless noise-canceling headphones with deep bass and long-lasting battery life.",
    },
  },
  {
    id: "7c2e4a80-e45f-11ec-9d64-0242ac120002",
    name: "BassBoost Pro",
    category: "Headphones",
    price: 180,
    stock: 20,
    rating: 4.5,
    image: headphones1,
    quantity: 0,
    sale: false,
    description: {
      portuguese:
        "Fones de ouvido premium com drivers de alta fidelidade e cancelamento de ruído ativo.",
      english:
        "Premium headphones with high-fidelity drivers and active noise cancellation.",
    },
  },
  {
    id: "9d4f6c30-e62b-11ec-9d64-0242ac120002",
    name: "UltraSound 500X",
    category: "Headphones",
    price: 250,
    stock: 15,
    rating: 4.8,
    image: headphones2,
    quantity: 0,
    sale: true,
    description: {
      portuguese:
        "Fones de ouvido sem fio com som imersivo 3D e suporte para áudio Hi-Res.",
      english:
        "Wireless headphones with immersive 3D sound and Hi-Res audio support.",
    },
  },
  {
    id: "3a7e8d90-d91f-11ec-9d64-0242ac120002",
    name: "ThunderBeats V2",
    category: "Headphones",
    price: 140,
    stock: 30,
    rating: 4.6,
    image: headphones3,
    quantity: 0,
    sale: true,
    description: {
      portuguese:
        "Fones de ouvido Bluetooth com reforço de graves e bateria de 40 horas.",
      english:
        "Bluetooth headphones with enhanced bass and a 40-hour battery life.",
    },
  },
  {
    id: "4b8f9ea0-e62c-11ec-9d64-0242ac120002",
    name: "SilentWave 700",
    category: "Headphones",
    price: 220,
    stock: 25,
    rating: 4.7,
    image: headphones4,
    quantity: 0,
    sale: false,
    description: {
      portuguese:
        "Fones de ouvido com tecnologia de cancelamento de ruído inteligente e ajuste confortável.",
      english:
        "Headphones with smart noise cancellation technology and a comfortable fit.",
    },
  },
  {
    id: "5c9faeb0-e62d-11ec-9d64-0242ac120002",
    name: "EchoPulse Lite",
    category: "Headphones",
    price: 90,
    stock: 50,
    rating: 4.3,
    image: headphones5,
    quantity: 0,
    sale: true,
    description: {
      portuguese:
        "Fones de ouvido leves e dobráveis com som dinâmico e conexão rápida Bluetooth.",
      english:
        "Lightweight, foldable headphones with dynamic sound and fast Bluetooth connectivity.",
    },
  },
  {
    id: "6da0bfc0-e62e-11ec-9d64-0242ac120002",
    name: "StudioMaster X",
    category: "Headphones",
    price: 300,
    stock: 10,
    rating: 4.9,
    image: headphones6,
    quantity: 0,
    sale: false,
    description: {
      portuguese:
        "Fones de ouvido de estúdio para áudio profissional com drivers de precisão e som equilibrado.",
      english:
        "Studio-grade headphones for professional audio with precision drivers and balanced sound.",
    },
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    name: "UltraBook Z15",
    category: "Laptops",
    price: 1200,
    stock: 20,
    rating: 4.6,
    image: laptop1,
    quantity: 0,
    sale: false,
    description: {
      portuguese:
        "Ultrabook elegante e poderoso com processador Intel i7, 16GB de RAM e tela de alta resolução.",
      english:
        "A sleek and powerful ultrabook with an Intel i7 processor, 16GB RAM, and a high-resolution display.",
    },
  },
  {
    id: "a12bc34d-58cc-4372-a567-0e02b2c3d479",
    name: "UltraBook X20",
    category: "Laptops",
    price: 1400,
    stock: 15,
    rating: 4.8,
    image: laptop2,
    quantity: 0,
    sale: true,
    description: {
      portuguese:
        "Ultrabook premium com tela 4K, processador Intel i9 e SSD NVMe de 1TB.",
      english:
        "Premium ultrabook with a 4K display, Intel i9 processor, and 1TB NVMe SSD.",
    },
  },
  {
    id: "b23cd45e-58cc-4372-a567-0e02b2c3d479",
    name: "ProBook G7",
    category: "Laptops",
    price: 1100,
    stock: 30,
    rating: 4.5,
    image: laptop3,
    quantity: 0,
    sale: false,
    description: {
      portuguese:
        "Laptop versátil para trabalho e estudo com bateria de longa duração e tela Full HD.",
      english:
        "Versatile laptop for work and study with long battery life and a Full HD display.",
    },
  },
  {
    id: "c34de56f-58cc-4372-a567-0e02b2c3d479",
    name: "GamingBeast 17",
    category: "Laptops",
    price: 1800,
    stock: 10,
    rating: 4.9,
    image: laptop4,
    quantity: 0,
    sale: true,
    description: {
      portuguese:
        "Notebook gamer com RTX 3070, processador Ryzen 9 e teclado mecânico RGB.",
      english:
        "Gaming laptop with RTX 3070, Ryzen 9 processor, and an RGB mechanical keyboard.",
    },
  },
  {
    id: "d45ef67g-58cc-4372-a567-0e02b2c3d479",
    name: "FlexBook 360",
    category: "Laptops",
    price: 950,
    stock: 40,
    rating: 4.3,
    image: laptop5,
    quantity: 0,
    sale: false,
    description: {
      portuguese:
        "Notebook 2 em 1 com tela sensível ao toque de 14 polegadas e suporte para caneta digital.",
      english:
        "2-in-1 laptop with a 14-inch touchscreen and digital pen support.",
    },
  },
  {
    id: "e56fg78h-58cc-4372-a567-0e02b2c3d479",
    name: "ThinkEdge Z9",
    category: "Laptops",
    price: 1300,
    stock: 25,
    rating: 4.7,
    image: laptop6,
    quantity: 0,
    sale: true,
    description: {
      portuguese:
        "Notebook empresarial com segurança aprimorada, 32GB de RAM e conectividade 5G.",
      english:
        "Business laptop with enhanced security, 32GB RAM, and 5G connectivity.",
    },
  },
  {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "NeoPhone 12X",
    category: "Smartphones",
    price: 800,
    stock: 100,
    rating: 4.4,
    image: smartphones1,
    quantity: 0,
    sale: true,
    description: {
      portuguese:
        "Smartphone com câmera avançada, tela OLED ultra fluida e desempenho rápido.",
      english:
        "A feature-packed smartphone with an advanced camera system and ultra-smooth OLED display.",
    },
  },
  {
    id: "1a2b3c4d-5717-4562-b3fc-2c963f66afa6",
    name: "NeoPhone 13 Pro",
    category: "Smartphones",
    price: 999,
    stock: 50,
    rating: 4.7,
    image: smartphones2,
    quantity: 0,
    sale: true,
    description: {
      portuguese:
        "Smartphone premium com câmera tripla de 108MP e carregamento ultra rápido.",
      english:
        "A premium smartphone featuring a triple 108MP camera system and ultra-fast charging.",
    },
  },
  {
    id: "5e6f7g8h-5717-4562-b3fc-2c963f66afa6",
    name: "Galaxy Ultra X",
    category: "Smartphones",
    price: 1200,
    stock: 30,
    rating: 4.9,
    image: smartphones3,
    quantity: 0,
    sale: false,
    description: {
      portuguese:
        "Tela AMOLED de 6.9 polegadas com taxa de atualização de 120Hz e bateria de longa duração.",
      english:
        "6.9-inch AMOLED display with a 120Hz refresh rate and long-lasting battery.",
    },
  },
  {
    id: "9i0j1k2l-5717-4562-b3fc-2c963f66afa6",
    name: "Pixel Vision 7",
    category: "Smartphones",
    price: 850,
    stock: 75,
    rating: 4.6,
    image: smartphones4,
    quantity: 0,
    sale: true,
    description: {
      portuguese:
        "Experiência de câmera excepcional com inteligência artificial avançada.",
      english:
        "Exceptional camera experience powered by advanced AI processing.",
    },
  },
  {
    id: "3m4n5o6p-5717-4562-b3fc-2c963f66afa6",
    name: "X-Treme One",
    category: "Smartphones",
    price: 700,
    stock: 120,
    rating: 4.3,
    image: smartphones5,
    quantity: 0,
    sale: false,
    description: {
      portuguese:
        "Desempenho poderoso com chip de última geração e resistência à água IP68.",
      english:
        "Powerful performance with a next-gen chipset and IP68 water resistance.",
    },
  },
  {
    id: "7q8r9s0t-5717-4562-b3fc-2c963f66afa6",
    name: "NovaEdge Z5",
    category: "Smartphones",
    price: 650,
    stock: 90,
    rating: 4.2,
    image: smartphones6,
    quantity: 0,
    sale: true,
    description: {
      portuguese:
        "Smartphone acessível com desempenho premium e tela infinita.",
      english:
        "An affordable smartphone with premium performance and an immersive display.",
    },
  },
  {
    id: "7f66d9c0-d927-11ec-9d64-0242ac120002",
    name: "TabFlex M10",
    category: "Tablets",
    price: 600,
    stock: 40,
    rating: 4.3,
    image: tablet1,
    quantity: 0,
    sale: false,
    description: {
      portuguese:
        "Tablet leve e potente com tela Retina nítida e suporte para caneta stylus.",
      english:
        "A lightweight and powerful tablet with a crisp Retina display and stylus support.",
    },
  },
  {
    id: "8a77e5f0-ea38-11ec-9d64-0242ac120002",
    name: "TabUltra X20",
    category: "Tablets",
    price: 750,
    stock: 35,
    rating: 4.6,
    image: tablet2,
    quantity: 0,
    sale: true,
    description: {
      portuguese: "Tablet premium com tela AMOLED e desempenho excepcional para multitarefa.",
      english: "A premium tablet with an AMOLED display and exceptional multitasking performance."
    }
  },
  {
    id: "9b88f6a0-fb49-11ec-9d64-0242ac120002",
    name: "SmartTab Z8",
    category: "Tablets",
    price: 500,
    stock: 50,
    rating: 4.2,
    image: tablet3,
    quantity: 0,
    sale: false,
    description: {
      portuguese: "Tablet compacto com bateria de longa duração e sistema operacional otimizado.",
      english: "A compact tablet with long battery life and an optimized operating system."
    }
  },
  {
    id: "ac99a7b0-0c5a-11ed-9d64-0242ac120002",
    name: "TabMaster Pro",
    category: "Tablets",
    price: 850,
    stock: 25,
    rating: 4.8,
    image: tablet4,
    quantity: 0,
    sale: true,
    description: {
      portuguese: "Tablet profissional com processador avançado e suporte a múltiplas telas.",
      english: "A professional tablet with an advanced processor and multi-screen support."
    }
  },
  {
    id: "bd11b8c0-1d6b-11ed-9d64-0242ac120002",
    name: "TabLight 7",
    category: "Tablets",
    price: 350,
    stock: 60,
    rating: 4.1,
    image: tablet5,
    quantity: 0,
    sale: false,
    description: {
      portuguese: "Tablet acessível e eficiente para leitura, navegação e streaming.",
      english: "An affordable and efficient tablet for reading, browsing, and streaming."
    }
  },
  {
    id: "ce22c9d0-2e7c-11ed-9d64-0242ac120002",
    name: "TabXtreme 12",
    category: "Tablets",
    price: 950,
    stock: 20,
    rating: 4.9,
    image: tablet6,
    quantity: 0,
    sale: true,
    description: {
      portuguese: "Tablet de alto desempenho com tela de 12 polegadas e caneta digital incluída.",
      english: "A high-performance tablet with a 12-inch display and included digital pen."
    }
  },
  {
    id: "cd3a4f40-d928-11ec-9d64-0242ac120002",
    name: "PulseFit Watch 5",
    category: "Smartwatches",
    price: 250,
    stock: 80,
    rating: 4.5,
    image: watch1,
    quantity: 0,
    sale: true,
    description: {
      portuguese:
        "Smartwatch estiloso com rastreamento de atividades, monitoramento de frequência cardíaca e bateria de longa duração.",
      english:
        "A stylish smartwatch with fitness tracking, heart rate monitoring, and long battery life.",
    },
  },
  {
    id: "de4b5f50-eb39-11ec-9d64-0242ac120002",
    name: "SmartCore X10",
    category: "Smartwatches",
    price: 300,
    stock: 60,
    rating: 4.6,
    image: watch2,
    quantity: 0,
    sale: false,
    description: {
      portuguese: "Smartwatch premium com GPS integrado, resistência à água e chamadas Bluetooth.",
      english: "A premium smartwatch with built-in GPS, water resistance, and Bluetooth calling."
    }
  },
  {
    id: "ef5c6f60-fc4a-11ec-9d64-0242ac120002",
    name: "ActiveFit Pro",
    category: "Smartwatches",
    price: 200,
    stock: 90,
    rating: 4.3,
    image: watch3,
    quantity: 0,
    sale: true,
    description: {
      portuguese: "Relógio inteligente para esportes com monitor de sono e controle de música.",
      english: "A sports smartwatch with sleep monitoring and music control."
    }
  },
  {
    id: "f06d7f70-0d5b-11ed-9d64-0242ac120002",
    name: "EliteTime S7",
    category: "Smartwatches",
    price: 400,
    stock: 40,
    rating: 4.8,
    image: watch4,
    quantity: 0,
    sale: false,
    description: {
      portuguese: "Smartwatch de luxo com tela AMOLED, assistente de voz e pagamento NFC.",
      english: "A luxury smartwatch with an AMOLED display, voice assistant, and NFC payments."
    }
  },
  {
    id: "012e8f80-1e6c-11ed-9d64-0242ac120002",
    name: "RunnerMax G5",
    category: "Smartwatches",
    price: 180,
    stock: 100,
    rating: 4.2,
    image: watch5,
    quantity: 0,
    sale: true,
    description: {
      portuguese: "Relógio esportivo com GPS de precisão e mais de 100 modos de treino.",
      english: "A sports watch with precision GPS and over 100 workout modes."
    }
  },
  {
    id: "123f9f90-2f7d-11ed-9d64-0242ac120002",
    name: "NeoTrack V8",
    category: "Smartwatches",
    price: 280,
    stock: 70,
    rating: 4.5,
    image: watch6,
    quantity: 0,
    sale: false,
    description: {
      portuguese: "Smartwatch versátil com resistência a impactos e bateria para até 15 dias.",
      english: "A versatile smartwatch with impact resistance and up to 15 days of battery life."
    }
  },

  {
    id: "de305d54-75b4-431b-adb2-eb6b9e546014",
    name: "AirSync Buds 2",
    category: "Wireless earbuds",
    price: 130,
    stock: 90,
    rating: 4.4,
    image: earbuds1,
    quantity: 0,
    sale: false,
    description: {
      portuguese:
        "Fones de ouvido compactos e de alta qualidade com graves potentes, cancelamento de ruído e bateria de 24 horas.",
      english:
        "Compact and high-quality wireless earbuds with deep bass, noise cancellation, and 24-hour battery life.",
    },
  },
  {
    id: "f27c79b3-89d4-4c5a-99d2-b3e7e2f1e0a9",
    name: "EchoPods X",
    category: "Wireless earbuds",
    price: 150,
    stock: 85,
    rating: 4.6,
    image: earbuds2,
    quantity: 0,
    sale: true,
    description: {
      portuguese: "Fones de ouvido premium com som 3D imersivo e carregamento sem fio.",
      english: "Premium wireless earbuds with immersive 3D sound and wireless charging."
    }
  },
  {
    id: "c8b5d6f2-4a3f-4b8c-97a9-782d7f3f948e",
    name: "SonicWave Pro",
    category: "Wireless earbuds",
    price: 120,
    stock: 100,
    rating: 4.3,
    image: earbuds3,
    quantity: 0,
    sale: false,
    description: {
      portuguese: "Fones de ouvido sem fio com Bluetooth 5.2 e resistência à água IPX7.",
      english: "Wireless earbuds with Bluetooth 5.2 and IPX7 water resistance."
    }
  },
  {
    id: "e19b82a5-2c0d-44c3-95a1-5f6d7e8a9f2e",
    name: "NeoBuds Ultra",
    category: "Wireless earbuds",
    price: 170,
    stock: 60,
    rating: 4.7,
    image: earbuds4,
    quantity: 0,
    sale: true,
    description: {
      portuguese: "Fones intra-auriculares com cancelamento de ruído ativo e modo ambiente.",
      english: "In-ear wireless earbuds with active noise cancellation and ambient mode."
    }
  }
];

export default products;

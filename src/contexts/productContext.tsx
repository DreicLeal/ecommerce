"use client";
import {
  createContext,
  Dispatch,
  JSX,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import Image, { StaticImageData } from "next/image";
import rating from "../../public/rating.png";
import star from "../../public/star.png";
import { useRouter } from "next/navigation";

export interface IProductContext {
  calcRatingStars(ratingN: number): JSX.Element[];
  handleCartItems(itemToHandle: IProduct, operator: "add" | "sub"): void;
  cartItems: IProduct[];
  cartAmount: number;
  details(category: string, id: string): void;
  setFoundProducts: Dispatch<SetStateAction<IProduct[]>>
  foundProducts: IProduct[]
}

export type IProduct = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
  image: StaticImageData;
  sale: boolean;
  quantity: number;
  description: {
    portuguese: string;
    english: string;
  };
};

const ProductContext = createContext<IProductContext>({} as IProductContext);

export default function ProductProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<IProduct[]>(() => {
    try {

      const storedCart = localStorage.getItem("cartItems");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error loading cart from localStorage", error);
      return [];
    }
  });
  const [cartAmount, setCartAmount] = useState<number>(0);
  const [foundProducts, setFoundProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    try {
      if (cartItems.length > 0) {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }
    } catch (error) {
      console.error("Error saving cart to localStorage", error);
    }
  }, [cartItems]);

  useEffect(() => {
    const cartTotalItems = cartItems.reduce(
      (acc, act) => acc + (act.quantity || 0),
      0
    );
    setCartAmount(cartTotalItems);
  }, [cartItems]);


  const router = useRouter();


  function details(category: string, id: string) {
    router.push(`/products/${category}/${id}`);
    setFoundProducts([])
  }

  function handleCartItems(itemToHandle: IProduct, operator: "add" | "sub") {
    setCartItems((prevCart) => {
      let itemExists = false;

      const updatedCart = prevCart.reduce((updatedCart, item) => {
        if (item.id === itemToHandle.id) {
          itemExists = true;
          const newQuantity = item.quantity + (operator === "add" ? 1 : -1);

          if (newQuantity > 0) {
            updatedCart.push({ ...item, quantity: newQuantity });
          }
        } else {
          updatedCart.push(item);
        }
        return updatedCart;
      }, [] as IProduct[]);

      // If item does not exist and we're adding, add it to cart
      if (!itemExists && operator === "add") {
        updatedCart.push({ ...itemToHandle, quantity: 1 });
      }

      return updatedCart;
    });
  }

  function calcRatingStars(ratingN: number) {
    const intRating = Math.floor(ratingN);
    const hasHalfStar = ratingN - intRating >= 0.5;
    const stars = Array.from({ length: intRating }, (_, i) => (
      <Image key={i} className="w-4 h-4" src={star} alt="Full Star" />
    ));

    if (hasHalfStar) {
      stars.push(
        <Image key={"half"} className="w-4 h-4" src={rating} alt="Half Star" />
      );
    }
    return stars;
  }

  return (
    <ProductContext.Provider
      value={{ calcRatingStars, handleCartItems, cartItems, cartAmount, details, foundProducts, setFoundProducts}}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => {
  const context = useContext(ProductContext);
  return context;
};

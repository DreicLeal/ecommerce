import Banner from "@/components/Banner";
import Menu from "@/components/Menu";
import ProductsContainer from "@/components/productsContainer/ProductsContainer";
import products from "@/utils/products";

export default function Home() {
  return (
    <div className=" w-100% flex flex-col">
      <div className=" hidden sm:flex">
        <Menu />
        <Banner />
      </div>
      <ProductsContainer products={products} title="allProducts" />
    </div>
  );
}

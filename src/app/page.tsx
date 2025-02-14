import Banner from "@/components/Banner";
import Menu from "@/components/Menu";
import ProductsContainer from "@/components/productsContainer/ProductsContainer";
// import products from "@/utils/products";

export default async function Home() {

  const response = await fetch("https://ecommerce-json-server-jvhp.onrender.com/products")
  const products = await response.json()

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

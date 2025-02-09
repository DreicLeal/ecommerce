import { IProduct, useProductContext } from "@/contexts/productContext";

export default function  SearchList({product}: {product:IProduct}) {
const {details} = useProductContext()
    return( <li onClick={()=> details(product.category, product.id)} className="hover:bg-black/25 p-2 w-fit">
        <div className="flex items-center justify-between gap-4 w-[250px]"><p className="font-light text-xs">{product.category}
    </p>
    <p>{product.name}</p></div></li>)

}
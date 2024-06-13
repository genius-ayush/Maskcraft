import { EcommerceCard } from "./EcommerceCard";
import productsData from "../../public/store/product.json";
import { useEffect, useState } from "react";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

interface Product{
  id : number ; 
  img1 : string ; 
  img2  : string ; 
  img3 : string ; 
  productName : string ; 
  price : string
}
function Shop() {
  const [products , setProducts] = useState<Product[]>([]) ; 
  const navigate = useNavigate() ; 
  
  useEffect(()=>{
    setProducts(productsData) ; 
  } , [])

  const handleCardClick = (productId : number)=>{
    navigate(`/product/${productId}`)
  }

  return (
    <div className="">
      <div className="font-serif ml-10 p-4 font-mono text-3xl font-normal tracking-wide">
        MASKS FOR YOU
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-10 p-5">
          {products.map(product => (
            <EcommerceCard
              key={product.id}
              imageUrl={product.img1}
              productName={product.productName}
              price={product.price}
              onClick={()=>{handleCardClick(product.id)}}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;

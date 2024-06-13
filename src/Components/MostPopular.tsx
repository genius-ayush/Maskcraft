import { EcommerceCard } from "./EcommerceCard";
import { useNavigate } from "react-router-dom";
function MostPopular() {
  const navigate = useNavigate() ; 
  return (
    <div>
      <div className="font-mono text-3xl font-medium flex items-center justify-center p-8 mt-9">
        Most Popular
      </div>
      <div className="flex gap-10  justify-center pb-10">
        <EcommerceCard
          imageUrl="./public/store/shop/p1/img1.jpg"
          productName="Yellow Mask"
          price="$5.00"
        />
        <EcommerceCard
          imageUrl="./public/store/shop/p5/img1.jpg"
          productName="Black Mask"
          price="$3.00"
        />
        <EcommerceCard
          imageUrl="./public/store/shop/p3/img1.jpg"
          productName="Maroon Mask"
          price="$2.00"
        />
        <EcommerceCard
          imageUrl="./public/store/shop/p12/img1.jpg"
          productName="Light Color Mask"
          price="$10.00"
        />
      </div>
      <div className="flex justify-center mb-10" >

      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-extrabold rounded-lg text-sm px-20 py-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={()=> navigate("/shop")}>Go to shop</button>
      </div>

      
    </div>
  );
}

export default MostPopular;

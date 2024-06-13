import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate() ; 
  return (
    <div className="relative flex items-center justify-center">
      <img src="/store/hero.webp" className="w-full h-full object-cover" alt="Hero" />
      <div className="absolute flex flex-col items-start justify-center inset-0 ml-56 mb-48">
        <h1 className="text-black text-6xl font-mono">Reusable Face Mask</h1>
        <button className="bg-black text-white px-6 py-3 text-lg font-semibold rounded mt-10 hover:bg-sky-700 group cursor-pointer" onClick={()=> navigate("/shop")}>Shop Now</button>
      </div>
    </div>
  );
}

export default Hero;
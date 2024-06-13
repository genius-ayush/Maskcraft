import { useEffect, useState } from "react";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string | null>(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const response = await axios.get("http://localhost:3000/auth/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const data = response.data;

          if (data.username) {
            setUserName(data.username);
          }
        }
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div className="flex justify-between p-6 pl-20 sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 firefox:bg-opacity-90">
      <div className="flex gap-5 pt-2">
        <div onClick={()=> navigate("/shop")} className="hover:bg-sky-700 group cursor-pointer">Shop</div>
        <div onClick={()=> navigate("/faq")} className="hover:bg-sky-700 group cursor-pointer">FAQ</div>
        <div onClick={()=> navigate("/contact")} className="hover:bg-sky-700 group cursor-pointer">Contact</div>  
      </div>
      <div className="font-mono text-4xl font-normal tracking-wide hover:bg-sky-700 group cursor-pointer"  onClick={()=> navigate("/landing")} >
        MASKCRAFT
      </div>

      <div className="flex gap-6 mr-20 hover:bg-sky-700 group cursor-pointer" >
        <div className="flex gap-1" onClick={() => navigate(userName ? "/profile/personalInfo" : "/signin")}>
          <div>
            <IoPersonCircle size={25} />
          </div>
          {userName ? (
            <div className="text-base">{userName}</div>
          ) : (
            <div className="text-base">Login</div>
          )}
        </div>
        <div className=""  onClick={()=> navigate("/profile/cart")}>
          <IoBagCheckOutline size={22} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

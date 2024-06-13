import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-black ">
    <div className=" mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
        <div className="flex flex-col items-center justify-center">
            <div>
            <div className="text-white font-mono text-4xl font-normal tracking-wide">
        MASKCRAFT
      </div>
            </div>
            <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
                <p className="hover:text-gray-500 text- cursor-pointer leading-4 text-white">About</p>
                <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-white">Contact us</p>
                <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-white">Terms of Service</p>
                <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-white">Privacy Policy</p>
            </div>
            <div className="flex items-center gap-x-8 mt-6">
                <div className="cursor-pointer">
                <FaXTwitter color="white"/>
                </div>
                <div className="cursor-pointer">
                <FaInstagram color="white"/>

                </div>
                <div className="cursor-pointer">
                <BsFacebook color="white"/>
                </div>
            </div>
            <div className="flex items-center mt-6">
                <p className="text-base leading-4 text-white">
                    2024 <span className="font-semibold">MASKCRAFT</span>
                </p>
                <div className="border-l border-white pl-2 ml-2">
                    <p className="text-base leading-4 text-white">Inc. All righys reserved</p>
                </div>
            </div>
        </div>
    </div>
    </div>
);
}

export default Footer
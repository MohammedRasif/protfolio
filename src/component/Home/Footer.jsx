import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMailOpen } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";





const Footer = () => {
    return (
        <div className="bg-black lg:pt-10 pb-10">
     


    <div className=" flex flex-col justify-center">
              <h1 className="text-amber-700 -space-y-10 hidden lg:inline-block ">---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h1>
              <h1 className="text-center  text-amber-500 text-xl font-bold py-5 mb-3">FOLLOW ME</h1>
            <div className="flex items-center justify-center">
           <a href="https://www.facebook.com/md.rasif.315" target="_blank">
           <h1 className="text-2xl text-center text-amber-600 hover:text-amber-500 hover:bg-gray-700	px-4 py-4 ml-5 mr-5 rounded-full bg-white mb-5"><a href=""><FaFacebookF></FaFacebookF></a></h1>
           </a>

            <a href="https://www.instagram.com/md_rasif_/" target="_blank">
            <h1 className="text-2xl text-center text-amber-600 hover:text-amber-500 hover:bg-gray-700	px-4 py-4 ml-5 mr-5 rounded-full bg-white mb-5"><a href=""><FaInstagramSquare></FaInstagramSquare></a></h1>
            </a>

            <a href="https://www.linkedin.com/in/mohammad-rasif/" target="_blank">
            <h1 className="text-2xl text-center text-amber-600 hover:text-amber-500 hover:bg-gray-700	px-4 py-4 ml-5 mr-5 rounded-full bg-white mb-5"><a href=""><FaLinkedin></FaLinkedin></a></h1>
            </a>

            

            
           <a href="https://github.com/MohammedRasif" target="_blank">
           <h1 className="text-2xl text-center text-amber-600 hover:text-amber-500 hover:bg-gray-700	px-4 py-4 ml-5 mr-5 rounded-full bg-white mb-5"><a href=""><FaGithubSquare></FaGithubSquare></a></h1>
           </a>

            </div>
      </div>
        </div>
    
    );
};

export default Footer;
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
        <div className="bg-black -mt-20 pb-10">
      {/* <div
      className="hero h-[400px] mt-10"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/vs7MjFF/creative-geometric-design-space-53876-89781.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-neutral-content ">
        <div className=" flex space-x-24 -mt-28">
           <div>
                <div className="text-white space-y-2">
                    <h1 className=" text-amber-500 text-xl font-bold uppercase">Quick Links</h1>
                    <h1><a href="">Home</a></h1>
                    <h1><a href="">About</a></h1>
                    <h1><a href="">Services</a></h1>
                    <h1><a href="">Contact</a></h1>
                </div>
           </div>
           <div className="text-white space-y-2">
                <h1 className=" text-amber-500 text-xl font-bold">MY CONTACTS</h1>
                <div className="flex space-x-2 items-center"> 
                    <BiSolidPhoneCall className="text-xl text-amber-500"></BiSolidPhoneCall>
                    <h1>01976600215</h1>
                </div>
                <div className="flex space-x-2 items-center"> 
                    <IoIosMailOpen className="text-xl text-amber-500"></IoIosMailOpen>
                    <h1>mdrasif3499@gmail.com</h1>
                </div>
           </div>


           <div>
                <h1 className="uppercase text-amber-500 text-xl font-bold mb-4">Subscribe </h1>
                <div className="flex ">
                <input type="text" className="bg-white text-black font-bold px-14 py-3  rounded-l-3xl" />
                <h1 className="bg-amber-500  text-white text-4xl pl-3 pr-8   rounded-r-3xl"><button><FaTelegramPlane className="mt-[6px]  pl-2"></FaTelegramPlane></button></h1>
                </div>
           </div>
          
        </div>               
      </div>

      <div className="mt-60">
              <h1 className="text-amber-700">---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h1>
              <h1 className="text-center  text-amber-500 text-xl font-bold mb-3">FOLLOW ME</h1>
            <div className="flex ml-[330px]">
            <h1 className="text-2xl text-center text-amber-600 hover:text-amber-500 hover:bg-gray-700	px-4 py-3 ml-5 mr-5 rounded-full bg-white mb-5"><a href=""><FaFacebookF></FaFacebookF></a></h1>

            <h1 className="text-2xl text-center text-amber-600 hover:text-amber-500 hover:bg-gray-700	px-4 py-3 ml-5 mr-5 rounded-full bg-white mb-5"><a href=""><FaInstagramSquare></FaInstagramSquare></a></h1>

            <h1 className="text-2xl text-center text-amber-600 hover:text-amber-500 hover:bg-gray-700	px-4 py-3 ml-5 mr-5 rounded-full bg-white mb-5"><a href=""><FaLinkedin></FaLinkedin></a></h1>

            
            <h1 className="text-2xl text-center text-amber-600 hover:text-amber-500 hover:bg-gray-700	px-4 py-3 ml-5 mr-5 rounded-full bg-white mb-5"><a href=""><FaTwitter></FaTwitter></a></h1>

            
            <h1 className="text-2xl text-center text-amber-600 hover:text-amber-500 hover:bg-gray-700	px-4 py-3 ml-5 mr-5 rounded-full bg-white mb-5"><a href=""><FaGithubSquare></FaGithubSquare></a></h1>

            </div>
      </div>
    </div> */}




    <div className="">
              <h1 className="text-amber-700 -space-y-10 ">---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h1>
              <h1 className="text-center  text-amber-500 text-xl font-bold mb-3">FOLLOW ME</h1>
            <div className="flex ml-[510px]">
           <a href="https://www.facebook.com/md.rasif.315" target="_blank">
           <h1 className="text-2xl text-center text-amber-600 hover:text-amber-500 hover:bg-gray-700	px-4 py-3 ml-5 mr-5 rounded-full bg-white mb-5"><a href=""><FaFacebookF></FaFacebookF></a></h1>
           </a>

            <a href="https://www.instagram.com/md_rasif_/" target="_blank">
            <h1 className="text-2xl text-center text-amber-600 hover:text-amber-500 hover:bg-gray-700	px-4 py-3 ml-5 mr-5 rounded-full bg-white mb-5"><a href=""><FaInstagramSquare></FaInstagramSquare></a></h1>
            </a>

            <a href="https://www.linkedin.com/in/mohammad-rasif/" target="_blank">
            <h1 className="text-2xl text-center text-amber-600 hover:text-amber-500 hover:bg-gray-700	px-4 py-3 ml-5 mr-5 rounded-full bg-white mb-5"><a href=""><FaLinkedin></FaLinkedin></a></h1>
            </a>

            
            <h1 className="text-2xl text-center text-amber-600 hover:text-amber-500 hover:bg-gray-700	px-4 py-3 ml-5 mr-5 rounded-full bg-white mb-5"><a href=""><FaTwitter></FaTwitter></a></h1>

            
           <a href="https://github.com/MohammedRasif" target="_blank">
           <h1 className="text-2xl text-center text-amber-600 hover:text-amber-500 hover:bg-gray-700	px-4 py-3 ml-5 mr-5 rounded-full bg-white mb-5"><a href=""><FaGithubSquare></FaGithubSquare></a></h1>
           </a>

            </div>
      </div>
        </div>
    
    );
};

export default Footer;
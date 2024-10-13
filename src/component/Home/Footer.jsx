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
    <div className="bg-black lg:pt-10 pb-10 w-full">
      <div className="flex flex-col justify-center items-center">
        {/* Horizontal line */}
        <h1 className="text-amber-700 hidden lg:block lg:w-full mb-3">
          ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </h1>

        {/* "Follow Me" Title */}
        <h1 className="text-center text-amber-500 text-xl font-bold py-5">
          FOLLOW ME
        </h1>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/md.rasif.315"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-2xl text-amber-600 hover:text-amber-500 hover:bg-gray-700 px-4 py-4 rounded-full bg-white mb-5">
              <FaFacebookF />
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/md_rasif_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-2xl text-amber-600 hover:text-amber-500 hover:bg-gray-700 px-4 py-4 rounded-full bg-white mb-5">
              <FaInstagramSquare />
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mohammad-rasif/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-2xl text-amber-600 hover:text-amber-500 hover:bg-gray-700 px-4 py-4 rounded-full bg-white mb-5">
              <FaLinkedin />
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/MohammedRasif"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-2xl text-amber-600 hover:text-amber-500 hover:bg-gray-700 px-4 py-4 rounded-full bg-white mb-5">
              <FaGithubSquare />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

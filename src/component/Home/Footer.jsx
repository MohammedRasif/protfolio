
import { FaDiscord } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
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
          {/* discord */}
         

          

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
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-2xl text-amber-600 hover:text-amber-500 hover:bg-gray-700 px-4 py-4 rounded-full bg-white mb-5">
              <FaDiscord />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

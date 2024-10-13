import { ReactTyped } from "react-typed";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdCloudDownload } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import img from "../picture.jpg";
import Skill from "../Skill";
import Experiance from "../Experiance";
import Service from "../Service";
import Education from "../Education";
import Contact from "../Contact";
import Footer from "./Footer";
import Project from "../../Project";
import Navbar from "../../Navbar";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="">
      <Navbar></Navbar>

      <div className="flex lg:flex-row flex-col lg:p-0 p-5 bg-black text-white">
      {/* Text Section */}
      <motion.div 
        className="lg:w-1/2 lg:ml-10 lg:mt-52 mt-16 lg:mb-[200px] font-efg"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <br />
          <h2 className="lg:text-5xl text-2xl text-left font-bold font-efg md:my-3">
            {`Hello! I'm `}
            <span className="text-amber-400">
              <Typewriter
                words={["Mohammed Rasif", "Jr.Web Developer", "a Freelancer"]}
                loop={100}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1800}
              />
            </span>
          </h2>
        </div>

        <motion.p
          className="lg:text-xl text-sm my-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I'm a junior web developer passionate about building beautiful and functional websites. 
          I specialize in full-stack development and have experience with HTML, CSS, Tailwind CSS, 
          JavaScript, React JS, Node JS, Express JS, MongoDB, and GitHub. I love solving problems and 
          learning new skills. Currently, I'm eager to collaborate and grow in the web development field.
        </motion.p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="lg:ml-5 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={img}
          alt="Mohammed Rasif"
          className="lg:h-[500px] h-[250px] w-[250px] lg:w-[500px] border-4 border-orange-500 rounded-full lg:mt-32 lg:ml-20"
        />
      </motion.div>
    </div>


      {/* <DetailsMe></DetailsMe> */}
      <Skill></Skill>
      <Experiance></Experiance>
      <Project></Project>
      <Service></Service>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;

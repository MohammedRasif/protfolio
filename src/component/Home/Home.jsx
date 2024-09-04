import { ReactTyped } from "react-typed";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdCloudDownload } from "react-icons/io";
import { NavLink } from "react-router-dom";
import img from "../picture.jpg";
import Skill from "../Skill";
import Experiance from "../Experiance";
import Service from "../Service";
import Education from "../Education";
import Contact from "../Contact";
import Footer from "./Footer";
import Project from "../../Project";
import Navbar from "../../Navbar";
import video from "../video.mp4";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div className="">
      <Navbar></Navbar>

      <div className="flex lg:flex-row flex-col lg:p-0 p-5 bg-black text-white">
        <div className="lg:w-1/2 lg:ml-10  lg:mt-52 mt-16 lg:mb-[200px]   font-efg">
          <div>
            <br />
            <h2 className="lg:text-5xl text-2xl text-left font-bold font-efg  md:my-3 ">
              {`Hello! I'm  `}
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

          <p className="lg:text-xl text-sm my-5">
            I'm a junior web developer passionate about building beautiful and
            functional websites. I specialize in full-Stak development and have
            experience with HTML, CSS,Tailwind CSS, JavaScript, React JS ,Node
            JS, Express JS , MondoDB And Github . I love solving problems and
            learning new skills. Currently ,I'm eager to collaborate and grow in
            the web development field.
          </p>
         
        </div>
        <div className="lg:ml-5 flex justify-center items-center">
          <img
            src={img}
            alt=""
            className="lg:h-[500px] h-[250px] w-[250px] lg:w-[500px] rounded-full lg:mt-32 lg:ml-20"
          />
        </div>
      </div>

      {/* <DetailsMe></DetailsMe> */}
      {/* <Skill></Skill> */}
      {/* <Experiance></Experiance> */}
      {/* <Project></Project> */}
      {/* <Service></Service> */}
      {/* <Education></Education> */}
      {/* <Contact></Contact> */}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;

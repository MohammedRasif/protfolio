import { ReactTyped } from "react-typed";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdCloudDownload } from "react-icons/io";
import { NavLink } from "react-router-dom";
import img from "../picture.jpg"
import DetailsMe from "../AllPage/DetailsMe";
import Skill from "../Skill";
import Experiance from "../Experiance";
import Service from "../Service";
import Education from "../Education";
import Contact from "../Contact";
import Footer from "./Footer";
import Project from "../../Project";
import Navbar from "../../Navbar";
import video from "../video.mp4"


const Home = () => {
  return (
    <div className="">
      <Navbar></Navbar>




      <div className="flex  bg-black text-white">
        <div className="w-1/2 ml-10 mt-52 mb-[200px]   font-efg">
          <div >
            <br />

            <ReactTyped
            className="text-5xl text-amber-400 "
              strings={[
                "Hello! I'm Mohammed Rasif",
                "Hello! I'm Web Developer",
                "Hello! I'm a freelancer",
              ]}
              typeSpeed={70}
              backSpeed={70}
              attr="placeholder"
              loop
            >
              <input type="text" className="text-amber-400" />
            </ReactTyped>
          </div>


          <p className="text-xl my-5">I'm a junior web developer passionate about building beautiful and functional websites. I specialize in full-Stak  development and have experience with HTML, CSS,Tailwind CSS, JavaScript, React JS ,Node JS, Express JS , MondoDB And Github  . I love solving problems and learning new skills. Currently ,I'm eager to collaborate and grow in the web development field.</p>
          <div >
           <NavLink to="allDetails"> <button className=" px-7 py-4 bg-amber-600 text-black rounded-full font-bold mt-4 hover:bg-gray-600"><div className="flex items-center  "><IoPersonSharp></IoPersonSharp> <span className="ml-2 hover:text-white">MORE ABOUT ME</span></div></button></NavLink>


            <a href="../Resumee.pdf"><button className=" px-7 py-4 ml-10  text-amber-500 border-x-2 border-y-2 border-amber-600 bg:text-black rounded-full font-bold mt-4 hover:text-amber-600 hover:bg-amber-600"><div className="flex items-center  "><IoMdCloudDownload className="hover:text-white"></IoMdCloudDownload> <span className="ml-2 hover:text-white">DOWNLOAD CV</span></div></button></a>
          </div>
        </div>
        <div className="ml-5">
              <img src={img} alt="" className="h-[500px] w-[500px] rounded-full mt-40 ml-20"  />
        </div>
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

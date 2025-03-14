

import Skill from "../Skill";
import Experiance from "../Experiance";
import Service from "../Service";
import Education from "../Education";
import Contact from "../Contact";
import Footer from "./Footer";
import Project from "../../Project";
import Navbar from "../../Navbar";
import Header from "../Header";

const Home = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Header></Header>
      <Skill></Skill>
      {/* <Experiance></Experiance> */}
      <Project></Project>
      <Service></Service>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;

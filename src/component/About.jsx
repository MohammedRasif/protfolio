import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div
      className="hero h-[500px]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/JH4QJhd/360-F-214539232-Yn-Urtuw-UEt84g-Hu-U0q-G8l7-Ow-Zv-H4rn-PG.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="text-white text-9xl mt-10 font-bold  font-abc">
            About Me
          </h1>
          <div className="flex  text-center text-2xl  mr-10 ml-20 pl-5">
            <NavLink to="/">
              <button className="text-amber-500 pr-2">Home </button>
            </NavLink>
            <p className="text-white">/ About Me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

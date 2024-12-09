import { GiFilmProjector } from "react-icons/gi";
import img from "./component/image/Removebg-preview.png";

const projects = [
  {
    id: 1,
    title: "Group Study",
    description:
      "Our group study website connects students, offers study resources, organizes virtual study sessions, and provides interactive tools to enhance collaborative learning and academic success.",
    image: "https://i.ibb.co.com/WGBpRyB/Screenshot-13.png",
    link: "https://group-study-d6cf6.web.app/",
    overlayText: "Explore More",
  },
  {
    id: 2,
    title: "Winning Zone",
    description:
      "Explore the Winning Zone, your ultimate destination for expert strategies, tips, and tools to excel in online gaming. Stay ahead with game reviews, guides, and the latest esports news.",
    icon: <GiFilmProjector className="h-14 w-14 ml-5 mt-4 text-white" />,
    image: "https://i.ibb.co.com/NNF32hr/Screenshot-14.png",

    link: "https://moviez-bc050.web.app/",
  },
  {
    id: 3,
    title: "Restaurantly",
    description:
      "A welcoming, family-friendly restaurant featuring a diverse menu with fresh, locally sourced ingredients. Enjoy a warm ambiance, exceptional service, and delicious dishes that cater to all tastes.",
    icon: <GiFilmProjector className="h-14 w-14 ml-5 mt-4 text-white" />,
    image: "https://i.ibb.co.com/hcfxLHS/Screenshot-15.png",

    link: "https://restaurantly-c186b.web.app/",
  },
  {
    id: 3,
    title: "Restaurantly",
    description:
      "A welcoming, family-friendly restaurant featuring a diverse menu with fresh, locally sourced ingredients. Enjoy a warm ambiance, exceptional service, and delicious dishes that cater to all tastes.",
    icon: <GiFilmProjector className="h-14 w-14 ml-5 mt-4 text-white" />,
    image: "https://i.ibb.co.com/hcfxLHS/Screenshot-15.png",

    link: "https://restaurantly-c186b.web.app/",
  }
];

const ProjectCard = ({ project }) => {
  return (
    <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="relative block max-w-sm mx-auto rounded-lg border shadow-lg overflow-hidden group"
  >
    {/* Animated Border */}
    <div className="absolute inset-0 z-0 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-border-glow"></div>

    {/* Card Content */}
    <div className="relative bg-white z-10 p-1 rounded-lg transform transition-transform duration-500 group-hover:scale-105">
      {/* Image Section */}
      <div className="overflow-hidden rounded-t-lg bg-gray-200 relative">
        {project.image ? (
          <div className="relative">
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover transition-all duration-500 group-hover:grayscale group-hover:scale-110"
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-700 bg-opacity-50 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {project.overlayText || "Explore More"}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-56 bg-gray-100">
            {project.icon}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 group-hover:text-amber-400 transition-colors duration-500">
          {project.title}
        </h2>
        {/* Description */}
        <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-500">
          {project.description}
        </p>
      </div>
    </div>
  </a>
  );
};

const Project = () => {
    return (
      <div className="bg-stone-900 lg:pb-10  ">
        <div className="text-center mb-10">
          <h1 className="text-center text-7xl font-abc font-extrabold text-white ">Projects</h1>
          <h1 className="text-2xl font-abc text-center text-amber-400">
        <span className="text-sm ">MY</span> Work
      </h1>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    );
  };

export default Project;

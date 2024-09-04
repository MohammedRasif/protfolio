import {
  RiFirebaseFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiCss3, SiMongodb } from "react-icons/si";
import { FaBootstrap, FaGithub, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

import { TbBrandJavascript } from "react-icons/tb";
import { motion } from "framer-motion";

const Skill = () => {
  const iconsVariation = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="pt-20 bg-stone-900">
      <h1 className="text-center lg:text-7xl text-4xl font-abc font-extrabold text-white">
        PROFESSIONAL SKILL
      </h1>
      <h1 className="text-2xl font-abc text-center text-amber-400">
        <span className="text-sm ">MY</span> Talent
      </h1>
      <div>
        <div>
          <div className=" lg:px-0 px-5 pb-24" id="tech">
            <motion.h2 className="my-20 text-center text-4xl"></motion.h2>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.5 }}
              className="flex flex-wrap justify-center items-center gap-4"
            >
              <motion.div
                variants={iconsVariation(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-slate-700 p-4"
              >
                <FaHtml5 className="text-5xl md:text-7xl text-orange-500" />
              </motion.div>
              <motion.div
                variants={iconsVariation(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-slate-700 p-4"
              >
                <SiCss3 className="text-5xl md:text-7xl text-blue-500" />
              </motion.div>
              <motion.div
                variants={iconsVariation(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-slate-700 p-4"
              >
                <RiTailwindCssFill className="text-5xl md:text-7xl text-cyan-500" />
              </motion.div>
              <motion.div
                variants={iconsVariation(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-slate-700 p-4"
              >
                <FaBootstrap className="text-5xl md:text-7xl text-purple-600" />
              </motion.div>
              <motion.div
                variants={iconsVariation(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-slate-700 p-4"
              >
                <TbBrandJavascript className="text-5xl md:text-7xl text-yellow-400" />
              </motion.div>
              <motion.div
                variants={iconsVariation(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-slate-700 p-4"
              >
                <RiReactjsLine className="text-5xl md:text-7xl text-cyan-400" />
              </motion.div>
              <motion.div
                variants={iconsVariation(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-slate-700 p-4"
              >
                <SiMongodb className="text-5xl md:text-7xl text-green-500" />
              </motion.div>
              <motion.div
                variants={iconsVariation(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-slate-700 p-4"
              >
                <FaNodeJs className="text-5xl md:text-7xl text-green-500" />
              </motion.div>
              <motion.div
                variants={iconsVariation(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-slate-700 p-4"
              >
                <SiExpress className="text-5xl md:text-7xl text-green-500" />
              </motion.div>
              <motion.div
                variants={iconsVariation(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-slate-700 p-4"
              >
                <RiFirebaseFill className="text-5xl md:text-7xl text-yellow-500" />
              </motion.div>
              <motion.div
                variants={iconsVariation(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-slate-700 p-4"
              >
                <FaGithub className="text-5xl md:text-7xl text-gray-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

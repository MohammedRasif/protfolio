
import React from "react";
import CountUp, { useCountUp } from 'react-countup';
import { FaCode } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";



const Experiance = () => {

  useCountUp({ ref: 'counter', end: 10, duration: 2 });
  const [loading, setLoading] = React.useState(false);

  const onStart = () => {
    setLoading(true);
  };

  const onEnd = () => {
    setLoading(false);
  };

  const containerProps = {
    'aria-busy': loading,
  };
  return (
    <div className="bg-black py-10">
      <h1 className="text-center text-7xl font-abc font-extrabold text-white uppercase">
      Experience
      </h1>
      <h1 className="text-2xl font-abc text-center text-amber-400">
        <span className="text-sm ">MY</span> Talent
      </h1>
      {/* <div>
      <motion.h1>{rounded}</motion.h1>;
      </div> */}

      <div className=" flex bg-white mx-96 my-10 py-10 rounded-xl ">
      <div className="ml-36 ">
            <div className="text-3xl ">
            <FaCode className="  ml-[67px] mt-5 text-4xl"></FaCode> 
            <>
          <div className="flex ">
          <CountUp
          className="font-efg font-bold text-5xl ml-14 mt-2 "
          end={10}
          duration="6"
          onStart={onStart}
          onEnd={onEnd}
          containerProps={containerProps}
          >
           
          </CountUp> 
            <h1 className="font-bold font-efg mt-1 text-5xl">+</h1>  
          </div> 
          <h1 className="text-3xl font-abc font-bold text-amber-600 ml-14  ">Project</h1>

                
            </>         
            </div>
        </div>
        <div className="ml-36 ">
            <div className="text-3xl ">
            <FaCode className="  ml-[67px] mt-5 text-4xl"></FaCode> 
            <>
          <div className="flex ">
          <CountUp
          className="font-efg font-bold text-5xl ml-14 mt-2 "
          end={7}
          duration="4"
          onStart={onStart}
          onEnd={onEnd}
          containerProps={containerProps}
          >

          </CountUp>
            <h1 className="font-bold font-efg mt-1 text-5xl">+</h1>  
          </div> 
          <h1 className="text-3xl font-abc font-bold text-amber-600   ">Months of Experience</h1>

                
            </>         
            </div>
        </div>
      </div>



    </div>
  );
};

export default Experiance;

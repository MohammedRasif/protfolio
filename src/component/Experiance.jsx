
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
    <div className="bg-black text-slate-500 py-10">
      <h1 className="text-center lg:text-7xl text-4xl font-abc font-extrabold text-white uppercase">
      Experience
      </h1>
      <h1 className="text-2xl font-abc text-center text-amber-400">
        <span className="text-sm ">MY</span> Talent
      </h1>
     

      <div className=" flex lg:flex-row flex-col items-center bg-white  lg:mx-96 mx-10 lg:mt-5 mt-8 lg:my-10 lg:py-10 rounded-xl ">
      <div className="lg:ml-36 ">
            <div className="text-3xl ">
            <FaCode className="  lg:ml-[67px] ml-8 mt-5 text-4xl"></FaCode> 
            <>
          <div className="flex ">
          <CountUp
          className="font-efg font-bold text-5xl lg:ml-14 ml-5 mt-2 "
          end={10}
          duration="6"
          onStart={onStart}
          onEnd={onEnd}
          containerProps={containerProps}
          >
           
          </CountUp> 
            <h1 className="font-bold font-efg mt-1 text-5xl">+</h1>  
          </div> 
          <h1 className="text-3xl font-abc font-bold text-amber-600 lg:ml-12 ml-3 lg:mb-0 mb-5  ">Project</h1>

                
            </>         
            </div>
        </div>
        <div className="lg:ml-56 ">
            <div className="text-3xl ">
            <FaCode className="  lg:ml-[67px] ml-24 mt-5 text-4xl"></FaCode> 
            <>
          <div className="flex ">
          <CountUp
          className="font-efg font-bold text-5xl lg:ml-14 ml-24 mt-2 "
          end={7}
          duration="4"
          onStart={onStart}
          onEnd={onEnd}
          containerProps={containerProps}
          >

          </CountUp>
            <h1 className="font-bold font-efg mt-1 text-5xl">+</h1>  
          </div> 
          <h1 className="text-3xl font-abc font-bold text-amber-600 lg:pb-0 pb-10  ">Months of Experience</h1>

                
            </>         
            </div>
        </div>
      </div>



    </div>
  );
};

export default Experiance;

const Service = () => {
  return (
    <div className="p-20 w-full bg-black ">
      <h1 className="text-center text-7xl font-abc font-extrabold text-white">
        WHAT I DO
      </h1>
      <h1 className="text-2xl font-abc text-center text-amber-400">
        <span className="text-sm ">MY</span> Services
      </h1>

      <div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="card-body w-[600px] bg-stone-900 text-white mt-10 ml-10">
            <h2 className=" font-bold font-abc text-4xl pl-24 pb-4 text-amber-500">Web Designer</h2>
            <p>A web designer blends creativity and technical skills to craft visually appealing, user-friendly websites. They focus on layout, color schemes, typography, and graphics to create an engaging online experience. With a keen eye for detail, they balance aesthetics and functionality, ensuring websites are intuitive and accessible across all devices.
            </p>
            <div className="card-actions justify-end">
            </div>
          </div>

          <div className="card-body w-[600px] bg-stone-900 text-white mt-10">
            <h2 className=" font-bold font-abc text-4xl pl-24 pb-4 text-amber-500">Web Development</h2>
            <p>Web development involves building and maintaining websites, encompassing front-end and back-end tasks. It includes coding, designing, and optimizing for speed and efficiency. Developers use languages like HTML, CSS, JavaScript, and server-side technologies to create dynamic, responsive, and interactive sites, ensuring seamless user experiences and robust functionality.
            </p>
            <div className="card-actions justify-end">
            </div>
          </div>


          
        </div>



      </div>

      


      
    </div>
  );
};

export default Service;
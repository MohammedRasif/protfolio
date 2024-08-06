import { ReactTyped } from "react-typed";

const DetailsMe = () => {
  return (
    <div className="mx-20 ">
      <div className="flex">
        <div className="w-1/2"></div>

        <div>
          <div>
            <br />

            <ReactTyped
              className="text-4xl text-amber-400"
              strings={[
                " I'm Mohammed Rasif",
                " I'm Web Developer",
                " I'm a freelancer",
              ]}
              typeSpeed={70}
              backSpeed={70}
              attr="placeholder"
              loop
            >
              <input type="text" className="text-amber-400" />
            </ReactTyped>
          </div>

              <div className="text-white">
                <div className="flex items-center font-bold  mt-5">
                    <h1>Name:</h1>
                    <h1 className="ml-20">Mohammed Rasif</h1>
                </div>
                <div className="flex items-center font-bold  mt-2">
                    <h1>Birthday:</h1>
                    <h1 className="ml-[63px]">04 February 2004</h1>
                </div>
              </div>



        </div>
      </div>
    </div>
  );
};

export default DetailsMe;

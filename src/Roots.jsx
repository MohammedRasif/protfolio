import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdMailOpen } from "react-icons/io";
import { TbMessages } from "react-icons/tb";



const Roots = () => {
    return (
        <div className="flex">
            {/* <div className="w-24 min-h-screen mt-56 ">
                <h1 className="text-2xl text-center text-amber-500 hover:text-amber-600	px-4 py-3 ml-5 mr-5 rounded-full bg-slate-700 mb-5"><NavLink to="" ><FaHome></FaHome> </NavLink></h1>
                <h1 className="text-2xl text-center text-amber-500 hover:text-amber-600 px-4 py-3 ml-5 mr-5 rounded-full bg-slate-700 mb-5"><NavLink to="About"> <IoPersonSharp></IoPersonSharp> </NavLink></h1>
                <h1 className="text-2xl text-center text-amber-500 hover:text-amber-600 px-4 py-3 ml-5 mr-5 rounded-full bg-slate-700 mb-5"><NavLink to="blog"><IoMdMailOpen></IoMdMailOpen></NavLink></h1>
                <h1 className="text-2xl text-center text-amber-500 hover:text-amber-600 px-4 py-3 ml-5 mr-5 rounded-full bg-slate-700 mb-5"><NavLink to="contact"><TbMessages></TbMessages></NavLink></h1>
            </div> */}
            <Outlet></Outlet>

            
        </div>
    );
};

export default Roots;
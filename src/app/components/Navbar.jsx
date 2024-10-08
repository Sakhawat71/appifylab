import Image from "next/image";
import logo from '../asset/CodeSandbox.png.png'

const Navbar = () => {


    return (
        <div className="navbar bg-[#1B0C4D] text-white font-Inter flex justify-between items-center mx-auto px-32">

        <div className="navbar-start">
            <a className="btn btn-ghost text-xl font-medium flex items-center">
                <Image src={logo} alt='logo' width={50} height={50} />
                <span className="">CodeLearn</span>
            </a>
        </div>


        <div className="navbar-center flex-grow flex justify-center">
            <ul className="menu menu-horizontal px-1 font-normal text-base space-x-4">
                <li><a>Home</a></li>
                <li><a>Course</a></li>
                <li><a>About us</a></li>
                <li><a>Pricing</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>


        <div className="navbar-end space-x-[14px]">
            <a className="btn text-[#10005A] bg-[#EAE34A] rounded-[4px]">Login</a>
            <a className="btn bg-[#37266F] text-white rounded-[4px]">Sign up</a>
        </div>
    </div>
    );
};

export default Navbar;
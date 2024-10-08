import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";

const Categories = () => {
    return (
        <div className="h-[500px] bg-[#241846] mt-16">

            <div className="text-center text-white w-1/3 space-y-5 mx-auto pt-16">
                <h1 className=" font-semibold text-5xl">Our Top Categories</h1>
                <p>Take high quality online courses from the best online instrictors
                    around the world & develop your skills.</p>
            </div>


            <div className="flex space-x-10 justify-center mt-20">


                <div className="w-[200px] h-[186px] bg-[#FF8FDF] rounded-2xl text-white flex flex-col items-center justify-center space-y-3">

                    <FaReact className="rounded-full w-[72px] h-[72px] p-5 bg-[#FFB6EA]" />
                    <p className="font-semibold text-lg">React Coding</p>
                    <p className="underline cursor-pointer">View More</p>
                </div>


                <div className="w-[200px] h-[186px] bg-[#FF8787] rounded-2xl text-white flex flex-col items-center justify-center space-y-3">

                    <FaLaravel className="rounded-full w-[72px] h-[72px] p-5 bg-[#FFAAAA]" />
                    <p className="font-semibold text-lg">Laravel Coding</p>
                    <p className="underline cursor-pointer">View More</p>
                </div>


                <div className="w-[200px] h-[186px] bg-[#49E1BB] rounded-2xl text-white flex flex-col items-center justify-center space-y-3">

                    <FaVuejs className="rounded-full w-[72px] h-[72px] p-5 bg-[#6DF3D2]" />
                    <p className="font-semibold text-lg">Vue Coding</p>
                    <p className="underline cursor-pointer">View More</p>
                </div>


                <div className="w-[200px] h-[186px] bg-[#FF5BB4] rounded-2xl text-white flex flex-col items-center justify-center space-y-3">

                    <FaReact className="rounded-full w-[72px] h-[72px] p-5 bg-[#FF88C9]" />
                    <p className="font-semibold text-lg">Angular</p>
                    <p className="underline cursor-pointer">View More</p>
                </div>

            </div>

        </div>
    );
};

export default Categories;
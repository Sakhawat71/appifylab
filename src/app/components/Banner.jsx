import { FaCheckCircle } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { IoIosApps } from "react-icons/io";
import { CgCrowdfire } from "react-icons/cg";
import Image from "next/image";
import boyImage1 from "@/app/asset/boy1.png"
import boyImage2 from "@/app/asset/boy2.png"
import girlImage from "@/app/asset/g1.png"


const Banner = () => {
    return (

        <div className="hero bg-gradient-to-r from-[#241457] to-[#4F2BBD] h-[860px] flex items-center px-24">
            <div className="hero-content grid grid-cols-2 gap-10 max-w-7xl mx-auto">


                <div className="text-white space-y-6">

                    <button className="btn bg-gradient-to-r from-[#241457] to-[#4F2BBD] text-white border-none px-6 py-[6px] rounded-md font-semibold shadow-lg mb-4 flex items-center justify-center">
                        <FaCheckCircle className="text-[#13C163] h-6 w-6" />
                        Verified by Coursera
                    </button>


                    <h1 className="text-[70px] font-semibold leading-tight ">
                        Learn Code <br /> From Top <span className="text-[#EAE34A] underline">Coders</span>
                    </h1>


                    <p className="text-lg">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>


                    <div className="space-x-4">
                        <button className="btn bg-[#FFD700] text-[#10005A] border-none  rounded-md font-medium shadow-lg text-lg">
                            Get Started
                        </button>
                        <button className="btn  bg-[#291B52] border-0 border-white text-white px-8 py-3 text-lg rounded-md font-medium shadow-lg hover:bg-[#291B52]">
                            <FaPlayCircle />
                            How it works
                        </button>
                    </div>


                    <p className="text-base font-normal mt-4 flex items-center">
                        <span className="flex text-[#F7B933] mr-2">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </span>
                        Based on 10,000+ reviews on</p>

                    <ul className="flex space-x-6 text-[15px] font-medium">
                        <li className="flex items-center">
                            <CgCrowdfire />
                            CROWD
                        </li>

                        <li className="flex items-center">
                            <FaLocationArrow />
                            Capterra
                        </li>

                        <li className="flex items-center">
                            <IoIosApps />
                            GetApp
                        </li>
                    </ul>
                </div>


                <div className="grid grid-cols-3 gap-4 relative">

                    {/* boy 1 */}
                    <div className="w-[160px] h-[459px] rounded-[99.5px] bg-gradient-to-b from-[#98FDE3] to-[#3E3761] flex flex-col justify-between relative" >

                        <div className=' text-[#1D315F] ml-2 absolute top-16 text-center'>
                            <h1 className="text-2xl font-semibold">Killan James</h1>
                            <p className="text-base">Laravel Engineer</p>
                        </div>

                        <Image
                            src={boyImage1}
                            width={192}
                            height={100}
                            alt='boy'
                            className="rounded-full absolute bottom-0"
                        />
                    </div>

                    {/* girl 1 */}
                    <div className="w-[160px] h-[459px] rounded-[99.5px] bg-gradient-to-b from-[#98FDE3] to-[#3E3761] flex flex-col justify-between p-4 relative top-20">

                        <div className='text-[#1D315F] text-center absolute top-16 mx-auto ml-2'>
                            <h1 className="text-2xl font-semibold">Lissa Kie</h1>
                            <p className="text-base">React Engineer</p>
                        </div>


                        <div className="flex justify-center mt-auto ">
                            <Image
                                src={girlImage}
                                width={192}
                                height={100}
                                alt="boy"
                                className="rounded-full absolute bottom-0"
                            />
                        </div>
                    </div>

                    {/* boy 2 */}
                    <div className="w-[160px] h-[459px] rounded-[99.5px] bg-gradient-to-b from-[#98FDE3] to-[#3E3761] flex flex-col justify-between p-4 relative">


                        <div className=" absolute top-16  text-center text-[#1D315F]">
                            <h1 className="text-2xl font-semibold">Killan James</h1>
                            <p className="text-base">Laravel Engineer</p>
                        </div>

                        <div className="flex justify-center mt-auto ">

                            <Image
                                src={boyImage2}
                                width={192}
                                height={100}
                                alt="boy"
                                className="rounded-full absolute bottom-0 "
                            />
                        </div>
                    </div>


                </div>

            </div>
        </div>


    );
};

export default Banner;
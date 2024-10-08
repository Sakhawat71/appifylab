import { IoDocumentOutline, IoPeopleOutline } from "react-icons/io5";
import image1 from "@/app/asset/card/card1.png"
import image2 from "@/app/asset/card/card2.png"
import image3 from "@/app/asset/card/card3.png"
import Image from "next/image";


const Courses = () => {



    return (
        <div className="mx-32 my-32 bg-white">
            <div className="flex justify-between  pb-[70px]">
                <h1 className="font-semibold text-5xl">Popular Courses</h1>
                <p className="underline text-[#261EAE]">View All</p>
            </div>

            {/* 3 card  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                {/* card 1 */}
                <div className="card card-compact rounded-2xl p-0 shadow-xl">
                    <figure>
                        <Image
                            src={image1}
                            alt="image1"
                            layout="responsive"
                            objectFit="cover"
                            width={100}
                            height={100}
                        />
                    </figure>

                    <button className="text-[#4942BB] bg-[#F3F2FF] btn btn-sm w-fit ml-2 mt-5">Design</button>

                    <div className="card-body">

                        <h2 className="card-title text-2xl font-semibold">The 6 Steps to Building a powerful Personal brand</h2>

                        <p className="flex items-center justify-start gap-2"> <IoDocumentOutline /> 2 Lesoons</p>

                        <div className="card-actions justify-end items-center">
                            <p className="flex items-center justify-start gap-2"> <IoPeopleOutline /> 30 Students  enrolled</p>
                            <button className="btn btn-outline hover:bg-white hover:text-black font-medium text-lg">View Course</button>
                        </div>
                    </div>
                </div>

                {/* card 2 */}
                <div className="card card-compact rounded-2xl p-0 shadow-xl">
                    <figure>
                        <Image
                            src={image2}
                            alt="image1"
                            layout="responsive"
                            objectFit="cover"
                            width={100}
                            height={100}
                        />
                    </figure>

                    <button className="text-[#4942BB] bg-[#F3F2FF] btn btn-sm w-fit ml-2 mt-5">Design</button>

                    <div className="card-body">

                        <h2 className="card-title text-2xl font-semibold">The 6 Steps to Building a powerful Personal brand</h2>

                        <p className="flex items-center justify-start gap-2"> <IoDocumentOutline /> 2 Lesoons</p>

                        <div className="card-actions justify-end items-center">
                            <p className="flex items-center justify-start gap-2"> <IoPeopleOutline /> 30 Students  enrolled</p>
                            <button className="btn btn-outline hover:bg-white hover:text-black font-medium text-lg">View Course</button>
                        </div>
                    </div>
                </div>

                {/* card 3 */}
                <div className="card card-compact rounded-2xl p-0 shadow-xl">
                    <figure>
                        <Image
                            src={image3}
                            alt="image1"
                            layout="responsive"
                            objectFit="cover"
                            width={100}
                            height={100}
                        />
                    </figure>

                    <button className="text-[#4942BB] bg-[#F3F2FF] btn btn-sm w-fit ml-2 mt-5">Design</button>

                    <div className="card-body">

                        <h2 className="card-title text-2xl font-semibold">The 6 Steps to Building a powerful Personal brand</h2>

                        <p className="flex items-center justify-start gap-2"> <IoDocumentOutline /> 2 Lesoons</p>

                        <div className="card-actions justify-end items-center">
                            <p className="flex items-center justify-start gap-2"> <IoPeopleOutline /> 30 Students  enrolled</p>
                            <button className="btn btn-outline hover:bg-white hover:text-black font-medium text-lg">View Course</button>
                        </div>
                    </div>
                </div>



            </div>




        </div>
    );
};

export default Courses;
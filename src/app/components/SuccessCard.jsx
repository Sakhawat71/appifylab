import { PiChalkboardTeacher } from "react-icons/pi";
import { PiStudentBold } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineInsertChart } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi2";

const SuccessCard = () => {

    return (
        <div className="bg-[#2B0D57] h-[350px] py-[70px] flex items-center justify-center space-x-28">

            <div className="text-white flex flex-col items-center justify-center text-center space-y-3">
                <PiChalkboardTeacher className="bg-[#E7FF7A] rounded-full w-20 h-20 p-5 text-[#2C1551]" />
                <h2 className="text-5xl font-semibold">360+</h2>
                <p className="text-[#B7AACC] text-2xl font-normal">Teachers</p>
            </div>


            <div className="text-white flex flex-col items-center justify-center text-center space-y-3">
                <HiOutlineAcademicCap className="bg-[#FF8FDF] rounded-full w-20 h-20 p-5 text-[#2C1551]" />
                <h2 className="text-5xl font-semibold">30k+</h2>
                <p className="text-[#B7AACC] text-2xl font-normal">Students</p>
            </div>


            <div className="text-white flex flex-col items-center justify-center text-center space-y-3">
                <PiStudentBold className="bg-[#FF5BB4] rounded-full w-20 h-20 p-5 text-[#2C1551]" />
                <h2 className="text-5xl font-semibold">8k+</h2>
                <p className="text-[#B7AACC] text-2xl font-normal">Lessons</p>
            </div>


            <div className="text-white flex flex-col items-center justify-center text-center space-y-3">
                <HiOutlineUsers className="bg-[#FF8787] rounded-full w-20 h-20 p-5 text-[#2C1551]" />
                <h2 className="text-5xl font-semibold">200</h2>
                <p className="text-[#B7AACC] text-2xl font-normal">Partners</p>
            </div>


            <div className="text-white flex flex-col items-center justify-center text-center space-y-3">
                <MdOutlineInsertChart className="bg-[#65FBD5] rounded-full w-20 h-20 p-5 text-[#2C1551]" />
                <h2 className="text-5xl font-semibold">60%</h2>
                <p className="text-[#B7AACC] text-2xl font-normal">Success</p>
            </div>


        </div>
    );
};

export default SuccessCard;
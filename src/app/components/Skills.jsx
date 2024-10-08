"use client"

import Image from "next/image";
import firstImage from "@/app/asset/skills/first.png";
import { Steps } from "rsuite";
import 'rsuite/Steps/styles/index.css';

const Skills = () => {
    return (
        <div className="h-[700px] flex px-32 space-y-4 py-16 gap-10 items-center">

            <div className="flex flex-col ">
                <p className="text-[#4B28B5] text-[30px] font-normal">Let`s Learn together to</p>
                <h1 className="font-semibold text-[50px] text-[#010A12]">Grow Your Skills</h1>

                <Image
                    src={firstImage}
                    alt="first"
                    width={550}
                    height={350}
                    className="mt-14"
                />
            </div>

            <div className="pt-40 space-y-5">
                <Steps current={1} vertical >

                    <Steps.Item title={<span style={{ fontSize: '24px', fontWeight: 'normal', color: "black" }}>Describe Your Learning Skills</span>}
                        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some"
                        className="w-1/2"
                    />

                    <Steps.Item title={<span style={{ fontSize: '24px', fontWeight: 'normal', color: "black" }}>Select course</span>} />

                    <Steps.Item title={<span style={{ fontSize: '24px', fontWeight: 'normal', color: "black" }}>Keep track of your experts</span>} />

                </Steps>

                <button className="btn btn-outline hover:bg-white hover:text-black">Get Started</button>
            </div>

        </div>

    );
};

export default Skills;
"use client";
import casual from "@/imges/casual.png";
import formal from "@/imges/formal.png";
import party from "@/imges/party.png";
import gym from "@/imges/gym.png";
import Image from 'next/image';
import React from 'react';

const LayoutComponent: React.FC = () => {
    return (
        <div className='container mx-auto flex items-center'>
            <div className='w-screen p-[70px_64px] rounded-3xl bg-[#F2F0F1]'>
                {/* Heading */}
                <div className="mb-8">
                    <h1 className="text-5xl font-black text-black">BROWSE BY DRESS STYLE</h1>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-12 gap-5">
                    {/* First Row */}
                    <div className="col-span-4 bg-gray-200 relative w-full h-72">
                        <Image src={casual} alt="Casual" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full" />
                        <div className="absolute inset-0 flex ">
                            <h2 className="text-4xl font-bold text-black pt-10 pl-10">Casual</h2>
                        </div>
                    </div>
                    <div className="col-span-8 bg-gray-200 relative w-full h-72">
                        <Image src={formal} alt="Formal" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full" />
                        <div className="absolute inset-0 flex ">
                            <h2 className="text-4xl font-bold text-black pt-10 pl-10">Formal</h2>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="col-span-8 bg-gray-200 relative w-full h-72">
                        <Image src={party} alt="Party" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full" />
                        <div className="absolute inset-0 flex ">
                            <h2 className="text-4xl font-bold text-black pt-10 pl-10">Party</h2>
                        </div>
                    </div>
                    <div className="col-span-4 bg-gray-200 relative w-full h-72">
                        <Image src={gym} alt="Gym" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full" />
                        <div className="absolute inset-0 flex ">
                            <h2 className="text-4xl font-bold text-black pt-10 pl-10">Gym</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutComponent;

import Image from "next/image";
import { Button } from "../ui/button";
import image from "@/imges/image.png";

export default function Hero() {
    return (
        <div className="w-screen bg-[#F2F0F1] h-screen ">
           
                <div className="container flex flex-col mx-auto px-4 items-center md:flex-row w-full h-full">
                    <div className="w-full md:w-1/2 h-full flex flex-col justify-center">
                        <h1 className="text-4xl md:text-7xl w-full md:w-[610px] font-black font-[Aclonica] text-black">
                            FIND CLOTHES
                            <br />
                            THAT MATCHES
                            <br />
                            YOUR STYLE
                        </h1>
                        <p className="text-lg mt-10 font-[Satoshi] text-black opacity-60 w-full md:w-[610px]">
                            Browse through our diverse range of meticulously crafted garments, designed
                            to bring out your sense of style.
                        </p>
                        <Button className="w-40 md:w-52 mt-10 h-14 rounded-3xl">
                            Shop Now
                        </Button>
                        <table className="w-full md:w-[596px] mt-10 text-left">
                            <thead>
                                <tr>
                                    <th className="text-2xl md:text-4xl font-bold text-black w-32 md:w-146 h-14">200+</th>
                                    <th className="text-2xl md:text-4xl font-bold text-black w-32 md:w-146 h-14">2,000+</th>
                                    <th className="text-2xl md:text-4xl font-bold text-black w-32 md:w-146 h-14">30,000+</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-sm  text-black opacity-60 md:text-lg">International Brands</td>
                                    <td className="text-sm  text-black opacity-60 md:text-lg">High-Quality Products</td>
                                    <td className="text-sm text-black opacity-60  md:text-lg">Happy Customers</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="w-full md:w-1/2 h-full relative">
                        <Image
                            src={image}
                            alt="Example Image"
                            layout="fill"
                            objectFit="cover"
                            className="h-full w-full"
                        />
                    </div>
                </div>
            </div>
        
    );
}

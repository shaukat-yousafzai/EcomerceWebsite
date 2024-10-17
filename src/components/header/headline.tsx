import Image from "next/image";
import versace from "@/imges/versace.png"
import zara from "@/imges/zara.png"
import gucci from "@/imges/gucci.png"
import parada from "@/imges/parada.png"
import calvinklein from "@/imges/calvinklein.png"
export default function Headline () {

 return   <div className="w-screen bg-black ">
            <div className="container mx-auto flex items-center px-4 h-32">
                <table className="w-screen">
                    <thead>
                        <th><Image src={versace} alt="brands name"/></th>
                        <th><Image src={zara} alt="brands name"/></th>
                        <th><Image src={gucci} alt="brands name"/></th>
                        <th><Image src={parada} alt="brands name"/></th>
                        <th><Image src={calvinklein} alt="brands name"/></th>
                    </thead>
                </table>
            </div>
    </div>
}
import Tshirt from "@/imges/T-shirt.png";
import jeans from "@/imges/skinnyfitjeams.png";
import checkeredshit from "@/imges/checkeredshit.png";
import selve from "@/imges/selve.png";
import Image from "next/image";
import Onsalepage from "@/components/header/onsalepage";
;



type ImageType = {
    src: any;
    alt: string;
    title: string;
    rating: number;
    price: number;
    discount?: number;
};
 
type ImageArrType = {
    images : ImageType[]
}

export default function Salepage(){

    const firstRow:ImageArrType ={
     images:  [
            { src: Tshirt, alt: 'T-shirt', title: 'T-shirt with Tape Detail', rating: 4, price: 29.99, discount: 10 },
            { src: jeans, alt: 'Jeans', title: 'Skinny Fit Jeans', rating: 5, price: 49.99 },
            { src: checkeredshit, alt: 'Shirt', title: 'Checkered Shirt', rating: 3, price: 25.99, discount: 5 },
            { src: selve, alt: 'Selve', title: 'Selve Shirt', rating: 4, price: 35.99 }
        ]
        }
    return (

      <div className="w-screen">
        <Onsalepage {...firstRow}/>
        <Onsalepage {...firstRow}/>
        <Onsalepage {...firstRow}/>
        <Onsalepage {...firstRow}/>
        <Onsalepage {...firstRow}/>
        <Onsalepage {...firstRow}/>
        <Onsalepage {...firstRow}/>
      </div>
    )


}
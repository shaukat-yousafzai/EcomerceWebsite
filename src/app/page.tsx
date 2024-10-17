"use client";
import Header from "@/components/header/header";
import Headline from "@/components/header/headline";
import Hero from "@/components/header/heroSection";
import ThreeBoxLayout from '@/components/header/onsale';

import Tshirt from "@/imges/T-shirt.png";
import jeans from "@/imges/skinnyfitjeams.png";
import checkeredshit from "@/imges/checkeredshit.png";
import selve from "@/imges/selve.png";
import LayoutComponent from "@/components/header/dressstyle";

import React from 'react';
import ReviewComponent from '@/components/header/comment';
import InputButtonComponent from "@/components/header/blackfoter";
import  Footer from "@/components/header/footer";

const reviews = [
    {
        name: "John Doe",
        comment: "Your website is good.",
        rating: 4
    },
    {
        name: "Jane Smith",
        comment: "Great service and products!",
        rating: 5
    },
    {
        name: "Alice Johnson",
        comment: "I love shopping here.",
        rating: 3
    }
];

type ImageType = {
    src: any;
    alt: string;
    title: string;
    rating: number;
    price: number;
    discount?: number;
};

type LayoutType = {
    heading: string;
    images: ImageType[];
    buttonText: string;
};

export default function Home() {
    const firstLayout: LayoutType = {
        heading: 'NEW ARRIVALS',
        images: [
            { src: Tshirt, alt: 'T-shirt', title: 'T-shirt with Tape Detail', rating: 4, price: 29.99, discount: 10 },
            { src: jeans, alt: 'Jeans', title: 'Skinny Fit Jeans', rating: 5, price: 49.99 },
            { src: checkeredshit, alt: 'Shirt', title: 'Checkered Shirt', rating: 3, price: 25.99, discount: 5 },
            { src: selve, alt: 'Selve', title: 'Selve Shirt', rating: 4, price: 35.99 }
        ],
        buttonText: 'VIEW'
    };


    const firstLayout1: LayoutType = {
        heading: 'TOP SELLING',
        images: [
            { src: Tshirt, alt: 'T-shirt', title: 'T-shirt with Tape Detail', rating: 4, price: 29.99, discount: 10 },
            { src: jeans, alt: 'Jeans', title: 'Skinny Fit Jeans', rating: 5, price: 49.99 },
            { src: checkeredshit, alt: 'Shirt', title: 'Checkered Shirt', rating: 3, price: 25.99, discount: 5 },
            { src: selve, alt: 'Selve', title: 'Selve Shirt', rating: 4, price: 35.99 }
        ],
        buttonText: 'VIEW'
    };

    return (
        <div className="w-screen overflow-hidden" >
            <Header />
            <Hero />
            <Headline />
            <ThreeBoxLayout {...firstLayout} />
            
            <ThreeBoxLayout {...firstLayout1} />
            <LayoutComponent/>
            <ReviewComponent reviews={reviews} />
            <div className="relative">
                <InputButtonComponent />
                <div className="bg-[#F0F0F0] w-screen h-full pb-8 pt-18 -mt-24 "> {/* Negative margin to overlap */}
                    {/* Footer Content */}
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

"use client";
import React from 'react';

type ReviewType = {
    name: string;
    comment: string;
    rating: number;
};

type ReviewComponentProps = {
    reviews: ReviewType[];
};

const ReviewComponent: React.FC<ReviewComponentProps> = ({ reviews }) => {
    return (
        <div className="container w-screen mx-auto px-4 my-14">
            {/* Heading */}
            <div className="flex justify-between mb-8">
                <h1 className="text-4xl font-bold">Happy Customer Reviews</h1>
                <div className="flex space-x-4">
                    <button className="font-black p-2 rounded-full">←</button>
                    <button className=" font-black p-2 rounded-full">→</button>
                </div>
            </div>

            {/* Reviews */}
            <div className="flex  space-x-4">
                {reviews.map((review, index) => (
                    <div key={index} className="w-1/3 p-10 border border-gray-200 bg-white rounded-3xl shadow-md">
                        <div className=" mb-2 ">
                            <div className="flex text-3xl mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < review.rating ? "text-yellow-500" : "text-gray-300"}>★</span>
                                ))}
                            </div>
                            <span className="text-xl font-bold mb-3 text-green-500">{review.name}</span>
                        </div>
                        <p className='text-gray-700'>{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewComponent;

import React from 'react'
import Image from 'next/image'
import { HeartIcon as HeartIconOutline } from "@heroicons/react/outline"
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid"
import { StarIcon } from "@heroicons/react/solid"
import { useState } from 'react'



function InfoCard({id, title, description, ratings, wage, numHrs, tags, longitude, latitude,img, location}) {
    const [liked, setLiked] = useState(0)
    const total = wage * numHrs;
    const handleLiked = () => {
        if(liked == 0)
            setLiked(1)
        else
            setLiked(0)
        console.log(liked)
    }
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer 
    hover:opacity-80 hover:shadow-lg transition duration-200 ease-out
     first:border-t rounded-lg">
        <div className="relative h-25 w-40 md:h-52 md:w-80 flex-shrink-0">
            <Image 
                src={img} 
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
            />
        </div>
        <div className="flex flex-col flex-grow pl-5">
            <div className="flex justify-between">
                <p>{title}</p>
                {liked ?<HeartIconSolid onClick={handleLiked} className="h-7 cursor-pointer text-red-600 transition transform duration-200 ease-in-out" /> :<HeartIconSolid onClick={handleLiked} className="h-7 cursor-pointer text-red-200 transition transform duration-200 ease-in-out" />}
            </div>
            <h4 className="text-xl">{description}</h4>
            <div className="border-b w-10 pt-2"/>
            <p className="pt-2 text-sml text-gray-500 flex-grow">{tags}</p>
            <div className="flex justify-between items-end pt-5">
                <p className="flex items-center">
                    <StarIcon className="h-5 text-yellow-500"/>
                    {ratings}
                </p>
                <div>
                    <p className="text-l lg:text-2xl font-semibold pb-2">${wage}/hr</p>
                    <p className="text-right font-extralight">Total: ${total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard 
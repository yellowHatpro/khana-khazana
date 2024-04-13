'use client'
import {Category} from '@/types/category';
import {useEffect, useState} from "react";
import Image from "next/image";
import {ArrowLeft, ArrowRight} from "lucide-react";

type CarouselArray = {
    items: Category[]
}
const Carousel = ({items}: CarouselArray) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setCurrentIndex(prevState => (prevState + 1) % items.length)
        }, 10000)
        return () => clearTimeout(setTimeout(() => {
            setCurrentIndex(prevState => (prevState + 1) % items.length)
        }, 10000))
    }, [items.length]);
    return (
        <div className={"border border-tertiary rounded-xl relative max-w-[512px] w-full h-[500px] duration-200 group justify-between items-center flex flex-col text-onTertiary"}>
            <Image priority
                   className={"w-80"}
                   src={items[currentIndex].strCategoryThumb}
                   alt={items[currentIndex].strCategory}
                   height={250}
                   width={250}/>
            <button
                onClick={()=>{
                    setCurrentIndex((prev)=>{
                        if (prev==0) return items.length-1
                        else {
                            return prev-1
                        }
                    })
                }}
                className={"border rounded-full border-tertiary hidden group-hover:block absolute top-1/2 left-1"}>
                <ArrowLeft/>
            </button>
            <button
                onClick={()=>{
                    setCurrentIndex(prevState => (prevState + 1) % items.length)
                }}
                className={"border rounded-full border-tertiary hidden group-hover:block absolute top-1/2 right-1"}>
                <ArrowRight/>
            </button>
            <div className={" overflow-y-scroll no-scrollbar p-2 justify-evenly bottom-0"}>
                <h1 className={"font-hiromisake text-xl"}>
                    {items[currentIndex].strCategory}
                </h1>
                <p className={""}>
                    {items[currentIndex].strCategoryDescription}
                </p>
            </div>
        </div>
    )
}

export default Carousel

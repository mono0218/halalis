"use client"
import {TextCircle} from "@/components/TextCircle";
import React, {useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {useRouter} from "next/router";

export default function Home() {
    return (
        <div className={"h-screen w-screen"}>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1} //一度に表示するスライドの数
                pagination={{
                    clickable: true,
                }}
                navigation
            >
                <SwiperSlide key={1}>
                    <AttaPage/>
                </SwiperSlide>

                <SwiperSlide key={2}>
                    <CommentPage/>
                </SwiperSlide>

                <SwiperSlide key={3}>
                    <EndPage/>
                </SwiperSlide>
            </Swiper>
        </div>

    )
}

export function AttaPage(){
    const router = useRouter()
    return(
        <main>
            <div className="flex justify-center mt-[10%]">
                <TextCircle  className={"basis-1/2"} text={"イスラム教"} router={router}/>
                <TextCircle text={"ヒンドゥー教"} router={router}/>
            </div>

            <div className="flex justify-between mt-32 mr-12 ml-12">
                <TextCircle className={"basis-1/3"} text={"ユダヤ教"} router={router}/>
                <TextCircle className={"basis-1/3"} text={"ヴィーガン"} router={router}/>
                <TextCircle text={"アレルギー"} router={router}/>
            </div>
        </main>
    )
}

export function CommentPage(){
    const [comment,setcomment] = useState("")
    const handleChange = (e: { target: { value: string; }; }) => {
        setcomment(() => e.target.value)
    }
    return(
        <main>
            <div className={"flex flex-col justify-center"}>
                <p className={"text-xl"}>お店に伝えたいことがあれば記載してください</p>
                <input className={""} value={comment} onChange={handleChange} type="text" />
            </div>
        </main>
    )
}

export function EndPage(){
    return(
        <main>
            <div className={"flex flex-col justify-center"}>
                <p>設定が完了しました</p>
                <button　className={""}>
                    終了
                </button>
            </div>
        </main>
    )
}

"use client"
import {NextRouter, useRouter} from 'next/router'

export function TextCircle ({text,className,router}:{text:string,className?:string ,router:NextRouter}){
    const clickHandler = () => {
        // トップページに戻る
        router.push("/a");
    };
    return(
        <div className={className}>
            <button className={"border-black border-4 rounded-full  h-[212px] w-[212px]"} onClick={clickHandler}>
                <div>
                    <p className="font-bold text-center text-5xl justify-center">{text}</p>
                </div>
            </button>
        </div>

    )
}
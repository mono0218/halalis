"use client"
export function ImageCircle ({text}:{text:string}){
    return(
        <div>
            <button>
                <div className="border-black border-4 rounded-full  h-[212px] w-[212px] ">
                    <p className="font-bold text-center text-5xl justify-center">{text}</p>
                </div>
            </button>
        </div>

    )
}
import Image from 'next/image'
import {TextCircle} from "@/components/TextCircle";
import {useRouter} from "next/router";

export default function Home() {
    const router = useRouter()
  return (
    <main>
      <div className="grid place-content-centerr p-10">
          <div className="flex-col">
              <div className="flex justify-between">
                  <TextCircle text={"日本語"} router={router}/>
                  <TextCircle text={"English"} router={router}/>
                  <TextCircle text={"中文"} router={router}/>
                  <TextCircle text={"韓国語"} router={router}/>
              </div>

              <div className="flex justify-between mt-20">
                  <TextCircle text={"日本語"} router={router}/>
                  <TextCircle text={"日本語"} router={router}/>
                  <TextCircle text={"日本語"} router={router}/>
                  <TextCircle text={"日本語"} router={router}/>
              </div>
          </div>

      </div>
    </main>
  )
}

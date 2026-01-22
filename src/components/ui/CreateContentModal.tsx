import { CrossButton } from "../icons/CrossButton"
import { Button } from "./Button"

export function CreateContentModal () {

    return <div className="w-screen h-screen m-0 top-0 left-0 bg-slate-500 opacity-60 flex justify-center">
                <div className="flex flex-col justify-center w-64">
                    <span className="bg-white opacity-100 p-4 rounded-2xl">
                        <div className="flex justify-between mb-2 font-bold">
                            <div> Create Content </div>
                            <div><CrossButton /></div>
                            </div>
                        <div className="flex flex-col gap-1">
                        <Input/>
                        <Input/>
                        <Input/>
                        <Button varient="secondary" size="md" text="Submit"/>
                        </div>
                    </span>
                </div>
            </div>
}

function Input() {
    return <input type="text" placeholder="placeholder" className=" px-4 py-2 rounded-xl w-full border border-slate-300 " />
}
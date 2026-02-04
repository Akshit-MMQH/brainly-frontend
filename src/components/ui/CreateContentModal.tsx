import { useRef, useState } from "react"
import { CrossButton } from "../icons/CrossButton"
import { Button } from "./Button"
import { Input } from "./Input"
import { BACKEND_URL } from "../../../config";
import axios from "axios";

enum ContentType {
        Youtube = "youtube",
        Twitter = "twitter",
        Notion = "notion"
}

export function CreateContentModal ({open, onClose}) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;  

        await axios.post(BACKEND_URL + '/api/v1/content', {
            title,
            link,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        onClose();
    }

    return <div> {open && <div>
                <div className="w-screen h-screen m-0 top-0 left-0 bg-slate-300 opacity-60 fixed flex justify-center">
                </div>
                <div className=" h-screen w-screen fixed top-0 left-0 flex justify-center items-center">
                    <div className="bg-white opacity-100 p-4 rounded-2xl w-80">
                        <div className="flex justify-between mb-2 font-bold">
                            <div> Create Content </div>
                            <div onClick={onClose}><CrossButton /></div>
                            </div>
                        <div className="flex flex-col gap-1">
                        <Input reference={titleRef} placeholder="title"/>
                        
                        <Input reference={linkRef} placeholder="link type"/>
                        <div className="flex">
                            <Button size="md" text="youtube" varient={type === ContentType.Youtube ? "secondary" : "primary"} onClick={()=> {
                            setType(ContentType.Youtube)
                        }}/>
                            <Button size="md" text="twitter" varient={type === ContentType.Twitter ? "secondary" : "primary"} onClick={()=> {
                                setType(ContentType.Twitter)
                            }}/>
                        </div>
                        <Button varient="secondary" onClick={addContent} size="md" text="Submit" FullW={true}/>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
}


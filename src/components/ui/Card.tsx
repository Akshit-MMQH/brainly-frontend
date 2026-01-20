import { ArchiveBox } from "../icons/ArchiveBox";
import { DeleteIcon } from "../icons/DeleteIcon";
import { ShareIcon } from "../icons/Shareicon";

interface CardProps {
    title: String,
    link: String,
    typeLink: "youtube" | "twitter",

}

export const Card = ({title, link, typeLink}: CardProps) => {

    return <div className="flex flex-cols m-3">
                <div className="border border-slate-300 shadow-lg rounded-xl">
                    <div className="flex max-w-72 justify-between p-2 rounded-tl-xl rounded-tr-xl">
                        <div className="flex items-center">
                            <div className="pr-2 text-slate-500"><ArchiveBox size="md" /></div>
                        </div>
                        <div>{title}</div>
                        <div className="flex items-center">
                            <div className="text-gray-500"><ShareIcon size="md"/></div>
                            <div className="pr-2 pl-2 text-gray-500"><DeleteIcon size="md" /></div>
                        </div>
                    </div>
                
                
                <div className=" h-72 max-w-72 p-2 rounded-bl-xl rounded-br-xl">
                    <div>
                        {typeLink === "youtube" && <iframe className="w-full rounded-xl" 
                        src={link.replace("https://youtu.be/", "https://www.youtube.com/embed/")} 
                        title="YouTube video player" frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen></iframe>
                        }
                        {typeLink === "twitter" && <blockquote className="twitter-tweet">
                        <a href={link.replace("x.com", "twitter.com").replace("?s=20", "")}></a> 
                        </blockquote>
                        } 

                       

                        </div>
                    </div>
                </div>
            </div>
}
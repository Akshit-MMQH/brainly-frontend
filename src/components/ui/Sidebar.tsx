import { BrainIcon } from "../icons/BrainIcon"
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SideBarItems } from "./Sidebaritem"

export const Sidebar = () => {
    return <div className="h-screen fixed top-0 left-0 w-72  border-r border-slate-300 ">
        <div className="flex flex-col pl-8">
            <div className="flex items-center mb-5 mt-4 text-3xl"><BrainIcon /><h1>Brainly</h1></div>
            <SideBarItems text="Twitter Posts" icon={<TwitterIcon />} />
            <SideBarItems text="Youtube Posts" icon={<YoutubeIcon />} />

            </div>
    </div>
} 
import type { ReactElement } from "react";

interface Items {
        text: String;
        icon: ReactElement;
    }

export const SideBarItems = (props: Items) => {
    
    return <div className="flex items-center gap-2 mb-3 border-b-1 border-slate-300 p-2 hover:bg-gray-100">
        <div>{props.icon}</div>
        <div>{props.text}</div>
    </div>
}
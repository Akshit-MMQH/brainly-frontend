import type { ReactElement } from "react";

type Varient = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
    varient: Varient;
    size: Size;
    text: String;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    FullW?: boolean;
    Loading?: boolean;
}

const VarientStyles: Record<Varient, string> = {
    "primary" : "bg-gray-300 text-gray-500",
    "secondary": "bg-black-600 text-white"
}

const DefaultStyles = "rounded-xl flex items-center justify-center cursor-pointer"

const SizeStyles: Record<Size, string> = {
    "sm" : "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-3 px-6"
}

export const Button = (props: ButtonProps,) => {
    return <button onClick={props.onClick} 
    className={
        `${VarientStyles[props.varient]}
         ${SizeStyles[props.size]}
         ${DefaultStyles} 
         ${props.FullW ? "w-full" : ""} 
         ${props.Loading ? "opacity-40 disabled cursor-not-allowed" : ""}` 
    }>
        {props.startIcon? <div className="pr-2">{props.startIcon}</div> : null} {props.text}
    </button>
}
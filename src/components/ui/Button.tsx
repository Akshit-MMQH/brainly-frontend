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
}

const VarientStyles: Record<Varient, string> = {
    "primary" : "bg-gray-300 text-gray-500",
    "secondary": "bg-black-600 text-white"
}

const DefaultStyles = "rounded-xl flex items-center"

const SizeStyles: Record<Size, string> = {
    "sm" : "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-3 px-6"
}

export const Button = (props: ButtonProps,) => {
    return <button onClick={props.onClick} className={
        `${VarientStyles[props.varient]}
         ${SizeStyles[props.size]}
         ${DefaultStyles}` 
    }>
        {props.startIcon? <div className="pr-2">{props.startIcon}</div> : null} {props.text}
    </button>
}

{/* <Button varient="primary" size="md" onClick={() => {}} text="Button" /> */}
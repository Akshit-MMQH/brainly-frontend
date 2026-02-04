import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { BACKEND_URL } from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function SignUp () {
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL + '/api/v1/signup', {
                username,
                password
        })
        navigate("/signin");
        alert("You have signed up!!");
        
    }   

    return <div className=" h-screen w-screen bg-slate-300 flex justify-center items-center">
        <div className="w-80 rounded-2xl bg-white p-8 border-slate-300">
            <div className="mb-1"><Input reference={usernameRef} placeholder="username"/></div>
            <div className="mb-1"><Input reference ={passwordRef} placeholder="password"/></div>
            <div className="mb-1"><Button varient="secondary" size="md" text="Sign Up" onClick={signup} FullW={true} Loading={false}/></div>
        </div>
    </div>
}
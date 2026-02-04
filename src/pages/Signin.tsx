import { useRef } from "react";
import { BACKEND_URL } from "../../config";
import axios from "axios";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

export function SignIn () {
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(BACKEND_URL + '/api/v1/signin', {
                username,
                password
        })
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard");
    }   

    return <div className=" h-screen w-screen bg-slate-300 flex justify-center items-center">
        <div className="w-80 rounded-2xl bg-white p-8 border-slate-300">
            <div className="mb-1"><Input reference={usernameRef} placeholder="username"/></div>
            <div className="mb-1"><Input reference ={passwordRef} placeholder="password"/></div>
            <div className="mb-1"><Button varient="secondary" size="md" text="Sign In" onClick={signin} FullW={true} Loading={false}/></div>
        </div>
    </div>
}
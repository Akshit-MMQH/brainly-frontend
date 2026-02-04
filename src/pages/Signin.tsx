import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";

export function SignIn () {
    return <div className=" h-screen w-screen bg-slate-300 flex justify-center items-center">
        <div className="w-80 rounded-2xl bg-white p-8 border-slate-300">
            <div className="mb-1"><Input placeholder="username"/></div>
            <div className="mb-1"><Input placeholder="password"/></div>
            <div className="mb-1"><Button varient="secondary" size="md" text="Sign In" FullW={true} Loading={false}/></div>
        </div>
    </div>
}
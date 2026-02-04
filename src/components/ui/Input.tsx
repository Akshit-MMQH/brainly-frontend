export function Input({placeholder, reference}:{placeholder: string; reference?: any}) {
    return <input type="text" placeholder={placeholder} ref={reference} className=" px-4 py-2 rounded-xl w-full border border-slate-300 " />
}
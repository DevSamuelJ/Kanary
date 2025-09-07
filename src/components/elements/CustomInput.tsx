import type { ReactNode } from "react";

function Input({type, name, placeholder, onchange, Icon }: {
    type: string
    name: string
    placeholder: string
    onchange?: React.ChangeEventHandler<HTMLInputElement>
    Icon?: ReactNode;
}){
    
    return(

        <div className="relative bg-white opacity-50 rounded-lg mb-3">
            <input
                type= {type}
                name={name}
                placeholder={placeholder}
                className="border-white border-2 opacity-100 rounded-lg pl-8 pt-0.5 pb-0.5 w-full hover:border-black/30 hover:border-2"
                onChange={onchange}
            />
            {Icon && (
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    {Icon}
                </span>
            )}

        </div>

    )
    

}

export default Input;
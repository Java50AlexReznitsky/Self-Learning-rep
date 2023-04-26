import React, { useState } from "react";
import { Input } from "./Input";
import { Timer } from "./Timer";
export const InputTest: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('Israel')

    function submit(value: string): string {
        let res = '';
        if (value.toLowerCase().includes('hello')) {
            res = 'get tired of hello'
        } else {
            setInputValue(value)
        }
        return res;
    }
    return <div>
        <Input submitFn={submit} placeHolder={"Enter any text"} buttonName="enter"></Input>
        <Timer cityCountry={inputValue} />
       

    </div>
}
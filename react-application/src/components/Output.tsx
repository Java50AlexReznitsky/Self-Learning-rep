import React, { useState } from "react";
import { Input } from "./Input";
import { Timer } from "./Timer";
import { Alert } from "./Alert";

export const Output: React.FC = () => {
    const [outputValue, setOutputValue] = useState<string>('')

    function submit(value: string): string {
        let res = '';
        if (value.toLowerCase().includes('hello')) {
            res = 'got tired of hello'
        } else {
            setOutputValue(value)
        }
        return res;
    }


    return <>
        <div>
            <Timer cityCountry={outputValue} />
        </div>
    </>

}

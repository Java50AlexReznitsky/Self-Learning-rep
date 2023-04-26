import React, { useEffect, useRef, useState } from "react"
import timeZones from "../time-zones";
import { Input } from "./Input";
type Props = {
    cityCountry: string,
}

export const Timer: React.FC<Props> = ({ cityCountry }) => {
    const styles: React.CSSProperties = { backgroundColor: 'lightblue', fontSize: '2em' }

    const [time, setTime] = useState<Date>(new Date());
    const [inputCityCountry, setCityCountry] = useState<string>(cityCountry);
    const timeZone = useRef<string | undefined>()
    function tic() {
        setTime(new Date());
    }

    useEffect(
        () => {
            timeZone.current = getTimeZone(cityCountry);
        }, [cityCountry])

    useEffect(() => {
        const interval = setInterval(tic, 1000);
        // console.log("get time zone")
        return () => clearInterval(interval);
    }, [])

    function getTimeZone(value: string): string | undefined {
        const index = timeZones.findIndex(tz => JSON.stringify(tz).includes(value))
        return index < 0 ? undefined : timeZones[index].name;
    }
    function submitFn(inputValue: string): string {
        const tempZone = getTimeZone(inputValue);
        let res: string = '';
        if (!tempZone) {
            res = `${inputValue} doesn't exists in time zones`
        } else {
            timeZone.current = tempZone;
            setCityCountry(inputValue)
        }
        return res;
    }

    return <div className="jsx">
        <Input submitFn={submitFn} placeHolder={"enter city or country"} />
        <h2>Current Time in {inputCityCountry}</h2>
        <p style={styles}>{time.toLocaleTimeString("en-GB", { timeZone: timeZone.current })}</p>
    </div>
}


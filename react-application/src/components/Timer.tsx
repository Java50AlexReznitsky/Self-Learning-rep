import React, { useState } from "react"

export const Timer: React.FC = () => {
    const styles: React.CSSProperties = { backgroundColor: 'lightblue', fontSize: '2em' }
    const colors: string[] = ["red", "green"]
    setTimeout(changeColor, 5000);
    setTimeout(tic, 1000);
    const [time, setTime] = useState(new Date());
    const [fColor, setColor] = useState(colors[0]);
    function tic() {
        setTime(new Date())
    }
    function changeColor() {
        fColor === colors[0] ? setColor(colors[1]) : setColor(colors[0]);
    }
    const fontColor: React.CSSProperties = { color: fColor }
    return <div className="Appl">
        <h2 style={fontColor}>Current Time</h2>
        <p style={styles}>{time.toLocaleTimeString()}</p>
    </div>
}


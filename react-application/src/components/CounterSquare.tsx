import React from "react";
import { useSelector } from 'react-redux';
export const CounterSquare: React.FC = () => {
    const counter = useSelector<any, number>(state => state.count.counter); // counter = global state
    return <div>
        <p>{counter ** 2}</p>
    </div>
}
import React from 'react'

export default function Functions({ props }) {
    const show =
        <div>
            <h1 className='output'>{`${props[0]} - ${props[1]} = ${props[0] - props[1]}`}</h1>
        </div>
    const hide = <h2>Input some numbers</h2>
    const intermediateShow = <h1>One more to go</h1>
    let showCalc = undefined
    if (props[0] && props[1]) {
        showCalc = show
    } else if (props[0] || props[1]) {
        showCalc = intermediateShow;
    } else { showCalc = hide; }

    return (
        <>
            {showCalc}
        </>
    )
}

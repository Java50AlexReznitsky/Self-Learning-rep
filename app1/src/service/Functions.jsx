// import React from 'react'

// export default function Functions({ props }) {
//     const show =
//         <div>
//             <h1 className='output'>{`${props[0]} - ${props[1]} = ${props[0] - props[1]}`}</h1>
//         </div>
//     const hide = <h2>Input some numbers</h2>
//     const intermediateShow = <h1>One more to go</h1>
//     const showCalc = props[0] && props[1] ? show : props[0] || props[1] ? intermediateShow : hide;

//     return (
//         <>
//             {showCalc}
//         </>
//     )
// }
import React from 'react'

export default function Functions({ props }) {
    const [num1, num2] = props;
    const show = (
        <div>
            <h1 className='output'>{`${num1} - ${num2} = ${num1 - num2}`}</h1>
        </div>
    );
    
    const hide = <h2>Input some numbers</h2>;

    const intermediateShow = <h2>Input {num1 ? 'one more' : 'some'} number{num1 ? '' : 's'}</h2>;

    const showCalc = num1 && num2 ? show : num1 || num2 ? intermediateShow : hide;

    return (
        <>
            {showCalc}
        </>
    );
}


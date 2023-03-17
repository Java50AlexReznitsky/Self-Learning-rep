import './App.css'
import React from 'react';
import { useState } from 'react';

function App() {
    let a = 5;
    let res = 1;
    let textInput = React.createRef();
    let textOut = React.createRef();
    const [output, setOutput] = useState('hello');

    function f1(arg) {
        console.log('f1 works ' + arg);
    }
    function showInput(event) {
        console.log('input works')
        // console.log(this.value) //!
        // console.log(event.target.value);
        console.log(textInput.current.value);
        textOut.current.innerHTML = textInput.current.value;
        setOutput(textInput.current.value);
    }
    // function showRes() {
    //     return textOut.current.innerHTML = (textInput.current.value) * 2;
    // }
    // function f2(){
    //     console.log('MOVE')
    // }
    return (
        <>
            <h1>Events</h1>
            <section>
                <h2>button</h2>
                <button onClick={() => f1(5)}>Push-Me</button>
            </section>
            <section>
                <h2>Double click + mouse move</h2>
                <div className="test" onDoubleClick={() => f1(7)}></div>
            </section>
            <section>
                <h2>Input</h2>
                <input type="text" onInput={showInput} ref={textInput} placeholder='Enter text' />
                <p ref={textOut}></p>
                <h3>{output}</h3>
            </section>
            {/* <section>
            <h2>On mouse move</h2>
            <div className="test" onMouseMove={f2}></div>
        </section> */}
        </>
    )
}
export default App;
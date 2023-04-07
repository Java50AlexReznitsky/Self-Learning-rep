import React, { useState, useRef, useEffect } from "react";
import Functions from "./service/Functions";
import './styles/App.css'

function App() {
  const inputRef = useRef('').current.value
  const inputRef1 = useRef('').current.value
  const [number, setNumber] = useState(inputRef)
  const [number2, setNumber2] = useState(inputRef1)
  const numbArr = [number, number2]
  return (
    <div className="mainDiv">
      <h1>Calculate number</h1>
      <input ref={inputRef} className="inputStyle" onChange={e => setNumber(e.target.value)}
       placeholder="Set initial number" type="number" />
      <input onChange={e => setNumber2(e.target.value)} placeholder="Set calc number" type="number" />
      <Functions props={numbArr} />
    

    </div>
  )
}

export default App;

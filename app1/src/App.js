import React, { useState, useRef, useEffect } from "react";
import Functions from "./service/Functions";

function App() {
  return (
    <div>
    <h1>Current number</h1>
    <Functions props={2.34}/>

    </div>
  )
}

export default App;

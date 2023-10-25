import React from "react";
import { useState } from "react";

const RegistrationForm=()=>{
    const [inputName, setInputName]=useState("");
    const [counter, setCounter]=useState(1);

    const handleChange=(event)=>{
        const updatedvalue=event.target.value;
        setInputName(updatedvalue)
    }

    const handleMouse=()=>{
        setCounter(counter+1)
    }

    return(
        <div>
            <h1>{inputName}</h1>
            <form>
                <h1>Fill up the details</h1>
                <h2 onMouseOver={handleMouse}>Mouse over here {counter}</h2>
                <div>
                    <input type="text" name="name" value={inputName} placeholder="Enter your name here" onChange={handleChange}></input>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;
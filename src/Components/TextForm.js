import React, { useState } from 'react';

export default function TextForm(props) {
    const textHandleOnchange = (e) => {
        setText(e.target.value);
    }
    const handleUpperCaseClick = () => {
        // Converting to upper Text
        let upperText = text.toUpperCase();
        setText(upperText);
    }
    const handleLowerCaseClick = () => {
        // Converting to Lower Text
        let LowerText = text.toLowerCase();
        setText(LowerText);
    }
    const handleClearTextClick = () => {
        // Clearing text area.
        setText("");
    }
    const handleCheckPalindromeClick = (e) => {
        // Checking Palindrome here
        text.split("").reverse().join("");
        if (text === text.split("").reverse().join("")) {
            document.getElementById("myBox").value = "Its a Palindrome ";
        } else {
            document.getElementById("myBox").value = "Its not a Palindrome ";
        }
    };
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    };
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    };


    // Declare a new state variable, Which we will call text & setText is our function to update.
    const [text, setText] = useState("");

    return (
        
        <div style={{color:props.mode==="dark"?"white":"black"}}>
            <div className="m-3">
                <label htmlFor="myBox" className="form-label">
                    <h2>Enter the text to analyze</h2>
                </label>
                <textarea
                    className="form-control"
                    id="myBox"
                    rows={5}
                    value={text}
                    placeholder="Enter text here..."
                    onChange={textHandleOnchange}
                    style={{backgroundColor:props.mode==="dark"?"#101214":"white",color:props.mode==="dark"?"white":"black"}}
                />
                <button onClick={handleUpperCaseClick} className='btn btn-primary m-3'>Upper Case</button>
                <button onClick={handleLowerCaseClick} className='btn btn-dark m-3'>Lower Case</button>
                <button onClick={handleClearTextClick} className='btn btn-success m-3'>Clear texts</button>
                <button onClick={handleCheckPalindromeClick} className='btn btn-dark m-3'>Check Palindrome</button>
                <button onClick={handleCopy} className='btn btn-danger m-3'>Copy Text</button>
                <button onClick={handleExtraSpaces} className='btn btn-dark m-3'>Remove extra Spaces</button>
            </div>
            <div className="container my-3">
                <h2>Your text Summary: </h2>
                <p>{text.split(" ").length} Words, {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read.</p>
                <h2>Preview</h2>
                <p>{text.length===0?"Enter something to Preview it here...":text}</p>
            </div>
        </div>
    )
}

import React, { useState } from 'react';



export default function TextForm() {

    const handleUpperCaseClick = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
    }
    const handleLowerCaseClick = () => {
        let LowerText = text.toLowerCase();
        setText(LowerText);
    }
    const textHandleOnchange = (e) => {
        setText(e.target.value);
    }

    // Declare a new state variable, Which we will call text & setText is our function to update.
    const [text, setText] = useState("");

    return (
        <>
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
                />
                <button onClick={handleUpperCaseClick} className='btn btn-primary m-3'>Upper Case</button>
                <button onClick={handleLowerCaseClick} className='btn btn-dark m-3'>Lower Case</button>
            </div>
            <div className="container my-3">
                <h2>Your text Summary: </h2>
                <p>{text.split(" ").length} Words, {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read.</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

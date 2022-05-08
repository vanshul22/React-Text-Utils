// Importing use state from react
import { useState } from 'react';

export default function TextForm(props) {
    // ASAP we will write anything it will set the text in textarea.
    const textHandleOnchange = (e) => {
        setText(e.target.value);
    };

    // Converting to upper Text
    const handleUpperCaseClick = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("Text converted to upper case.", "success");
    };

    // Converting to Lower Text
    const handleLowerCaseClick = () => {
        let LowerText = text.toLowerCase();
        setText(LowerText);
        props.showAlert("Text converted to lower case.", "success");
    };

    // Clearing text area.
    const handleClearTextClick = () => {
        setText("");
        props.showAlert("Text cleared from text area...", "success");
    };

    // Checking Palindrome here
    const handleCheckPalindromeClick = () => {
        text.split("").reverse().join("");
        if (text === text.split("").reverse().join("")) {
            props.showAlert("Its a Palindrome.", "success");
        } else {
            props.showAlert("Its not a Palindrome.", "warning");
        };
    };

    // Copying text of textarea into clipboard.
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clip board...", "success");
    };

    // Removing extra spaces from here.
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed...", "success");
    };

    // Declare a new state variable, Which we will call text & setText is our function to update.
    const [text, setText] = useState("");

    return (
        <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
            <div className="m-3">
                <label htmlFor="myBox" className="form-label">
                    <h1>TextUtils - Word Counter, Character Coounter, Remove extra spaces:</h1>
                </label>
                <textarea
                    className="form-control"
                    id="myBox"
                    rows={5}
                    value={text}
                    placeholder="Enter text here..."
                    onChange={textHandleOnchange}
                    style={{ backgroundColor: props.mode === "dark" ? "#101214" : "white", color: props.mode === "dark" ? "white" : "black" }}
                />
                <button disabled={text.length === 0 | text === " "} onClick={handleUpperCaseClick} className='btn btn-primary mx-3 mt-3'>Upper Case</button>
                <button disabled={text.length === 0 | text === " "} onClick={handleLowerCaseClick} className='btn btn-dark mx-3 mt-3'>Lower Case</button>
                <button disabled={text.length === 0} onClick={handleClearTextClick} className='btn btn-success mx-3 mt-3'>Clear texts</button>
                <button disabled={text.length === 0 | text === " "} onClick={handleCheckPalindromeClick} className='btn btn-dark mx-3 mt-3'>Check Palindrome</button>
                <button disabled={text.length === 0 | text === " "} onClick={handleCopy} className='btn btn-danger mx-3 mt-3'>Copy Text</button>
                <button disabled={text === "" | text === " "} onClick={handleExtraSpaces} className='btn btn-dark mx-3 mt-3'>Remove extra Spaces</button>
            </div>
            <div className="container my-3">
                <h2>Your text Summary: </h2>
                {/* We splitting text and counting array but not count empty element reject from filter func. */}
                <p>{text.split(/\s+/).filter(elem => elem.length !== 0).length} Words, {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter(elem => elem.length !== 0).length} Minutes to read.</p>
                <h2>Preview</h2>
                <p>{text.length === 0 ? "Nothing to Preview it here..." : text}</p>
            </div>
        </div>
    );
};

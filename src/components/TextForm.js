import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked:" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    };
    const handleLowClick = () => {
        // console.log("Lowercase was clicked:" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to  lowercase", "success");
    };
    const handleClearClick = ()=> {
        setText(' ');
    }
    const handleCopyClick = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    };
    const [text, setText] = useState("");
    // text = "new text"; // Wrong way to change the state
    // setText = ("new text"); // correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#031323'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#031323'}}
                    id="myBox"
                    rows="8"
                ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>
                Convert to uppercase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>
                Convert to lowercase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>
                Clear Text
            </button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
                Copy Text
            </button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
                Handle Space
            </button>

            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#031323'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words, and {text.length} characters</p>
                <p>{0.008 *text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter text to preview"}</p>
        </div>
        </>
    );
}

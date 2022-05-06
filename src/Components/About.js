import React, { useState } from 'react';

export default function About() {
  // Hook for Changing dark mode.
  const [darkMode, changeMode] = useState({
    color: 'black',
    backgroundColor: "white",
    border: "1px solid white"
  });
  // Hook for Changing button text.
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  // Functions for changing dark mode.
  const toggleDarkMode = () => {
    if (darkMode.color === "white") {
      changeMode({
        color: 'black',
        backgroundColor: "white",
        border: "1px solid black"
      });
      setBtnText("Enable Light Mode");
    } else {
      changeMode({
        color: 'white',
        backgroundColor: "black",
        border: "1px solid white"
      });
      setBtnText("Enable Dark Mode");
    };
  }
  return (
    <div>
      <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={darkMode}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={darkMode}>
              <strong>This is the first item's accordion body.</strong> It is shown by
              default, until the collapse plugin adds the appropriate classes that we
              use to style each element. These classes control the overall appearance,
              as well as the showing and hiding via CSS transitions. You can modify
              any of this with custom CSS or overriding our default variables. It's
              also worth noting that just about any HTML can go within the{" "}
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={darkMode}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={darkMode}>
              <strong>This is the second item's accordion body.</strong> It is hidden
              by default, until the collapse plugin adds the appropriate classes that
              we use to style each element. These classes control the overall
              appearance, as well as the showing and hiding via CSS transitions. You
              can modify any of this with custom CSS or overriding our default
              variables. It's also worth noting that just about any HTML can go within
              the <code>.accordion-body</code>, though the transition does limit
              overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={darkMode}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={darkMode}>
              <strong>This is the third item's accordion body.</strong> It is hidden
              by default, until the collapse plugin adds the appropriate classes that
              we use to style each element. These classes control the overall
              appearance, as well as the showing and hiding via CSS transitions. You
              can modify any of this with custom CSS or overriding our default
              variables. It's also worth noting that just about any HTML can go within
              the <code>.accordion-body</code>, though the transition does limit
              overflow.
            </div>
          </div>
        </div>
      </div>
      <button onClick={toggleDarkMode} className='btn btn-dark my-3'>{btnText}</button>
    </div>
  )
}

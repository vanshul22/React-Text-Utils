export default function About(props) {

  let darkMode = {
    color: props.mode === "dark" ? "white" : "#212529",
    backgroundColor: props.mode === "dark" ? "#212529" : "white",
    border: props.mode === "dark" ? "white" : "#212529"
  };

  return (
    <div>
      <h1 className='my-3' style={{ color: props.mode === "dark" ? "white" : "#212529" }}>About Us</h1>
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
              <strong>Analyze your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={darkMode}>
              TextUtils give you a way to analyze your text quickly and efficiently. Do it word count, Character count or
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
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={darkMode}>
              TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters.thus it is a suitable for writing text with word/Character limit.
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
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={darkMode}>
              This word counter works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera etc. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

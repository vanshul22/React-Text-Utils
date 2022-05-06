import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";


function App() {
	// Whether dark mode is enabled or not.
	const [mode, setMode]= useState("light");

	// Function to Enable or disbale dark mode.
	const  toggleMode=()=>{
		if (mode==="dark") {
			setMode("light");
			document.body.style.backgroundColor="white";
		} else {
			setMode("dark");
			document.body.style.backgroundColor="#101214";
		}
	}
	return (
		<>
			<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
			<div className="container my-3">
				<TextForm mode={mode}/>
				{/* <About /> */}
			</div>
		</>
	);
}

export default App;

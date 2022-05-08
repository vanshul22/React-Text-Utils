// Imported usestate hook.
import { useState } from "react";
// Importing our components here.
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// importing router here
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Our Main App 
function App() {
	// Whether dark mode is enabled or not.
	const [mode, setMode] = useState("light");
	// Function to Enable or disbale dark mode.
	const toggleMode = () => {
		if (mode === "dark") {
			setMode("light");
			document.body.style.backgroundColor = "white";
			showAlert("Light Mode has been Enabled.", "success");
		} else {
			setMode("dark");
			document.body.style.backgroundColor = "#101214";
			showAlert("Dark Mode has been Enabled.", "success");
		}
	};
	const [alert, setAlert] = useState(null);
	// Showing alert type with message. Till 5 second
	const showAlert = (message, type) => {
		setAlert({ msg: message, typ: type });
		setTimeout(() => { setAlert(null) }, 5000);
	};

	return (
		<>
			<Router>
				{/* Using router to routes our pages. */}
				<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
				<Alert alert={alert} />
				<div className="container my-3">
					{/* We have to send Route inside the Routes with element. */}
					<Routes>
						<Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} />} />
						<Route exact path="/about" element={<About mode={mode} />} />
					</Routes>
				</div>
			</Router>
		</>
	);
};

export default App;

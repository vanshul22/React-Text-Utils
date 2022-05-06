import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";


function App() {
	// Whether dark mode is enabled or not.
	const [mode, setMode] = useState("light");
	// Function to Enable or disbale dark mode.
	const toggleMode = () => {
		if (mode === "dark") {
			setMode("light");
			document.body.style.backgroundColor = "white";
			showAlert("Light Mode has been Enabled.", "success")
		} else {
			setMode("dark");
			document.body.style.backgroundColor = "#101214";
			showAlert("Dark Mode has been Enabled.", "success")
		}
	};
	const [alert, setAlert] = useState(null);
	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			typ: type
		});
		setTimeout(() => {
			setAlert(null)
		}, 5000);
	}
	return (
		<>
			<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
			<Alert alert={alert} />
			<div className="container my-3">
				<TextForm showAlert={showAlert} mode={mode} />
				{/* <About /> */}
			</div>
		</>
	);
}

export default App;

import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// importing router here
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


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
			<Router>
				<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
				<Alert alert={alert} />
				<div className="container my-3">
					{/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
					<Routes>
						<Route exact path="/about" element={<About />} />
						<Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;

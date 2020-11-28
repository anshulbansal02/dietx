import React from "react";

import SaveFileView from "./views/SaveFileView";
import FormView from "./views/FormView";
import HomeView from "./views/HomeView";
import NavHeader from "./components/NavHeader";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

function App() {
	return (
		<div className="App">
			<NavHeader />
			<Router>
				<Route exact path="/">
					<HomeView />
				</Route>
				<Route exact path="/create">
					<FormView />
				</Route>
				<Route exact path="/save">
					<SaveFileView />
				</Route>
			</Router>
		</div>
	);
}

export default App;

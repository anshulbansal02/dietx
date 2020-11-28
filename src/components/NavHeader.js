import React from "react";

import "./styles/NavHeader.css";

export default function NavHeader() {
	return (
		<div className="NavHeader">
			<button className="nav-btn left">
				<img src="./img/svg/right-arrow.svg" alt="Back" />
			</button>
			<button className="nav-btn right">
				<img src="./img/svg/three-dots.svg" alt="Menu" />
			</button>
		</div>
	);
}

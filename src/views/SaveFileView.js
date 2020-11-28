import React from "react";

import "./SaveFileView.css";

import NavHeader from "../components/NavHeader";

export default function SaveFileView() {
	return (
		<div className="SaveFileView View">
			<div className="view-headspace" />
			<div class="header">
				<img className="header-img" src="./img/svg/fitness-diet.svg" alt="" />
				<h2 className="large-title">
					Yay! Your diet chart is ready. Save to device or share with others.
				</h2>
			</div>
			<div className="bar-separator"></div>
			<div className="btn-row">
				<button
					className="block-btn"
					style={{ background: "#E8F6FB", color: "#3079BD" }}
				>
					<img src="./img/svg/download.svg" />
					Save to device
				</button>
				<button
					className="block-btn"
					style={{ background: "#FDE3DE", color: "#E76C54" }}
				>
					<img src="./img/svg/share.svg" />
					Share with others
				</button>
			</div>
			<button className="accent-btn">Create new diet chart</button>
		</div>
	);
}

import React from "react";

import "./styles/PlanCard.css";

export default function PlanCard({ data }) {
	return (
		<div className="PlanCard">
			<div className="card-row">
				<h4 className="card-title">{data.title}</h4>
				<p className="card-date">{data.date}</p>
			</div>
			<div className="card-row">
				<p className="card-overview">{data.overview}</p>
				<p className="card-calories">
					{data.calories} <span>kcal</span>
				</p>
			</div>
		</div>
	);
}

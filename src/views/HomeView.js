import React from "react";

import "./HomeView.css";
import "../components/PlanCard";
import PlanCard from "../components/PlanCard";

export default function HomeView() {
	return (
		<div className="HomeView View">
			<div className="scroll-view">
				<div className="view-headspace" />

				<h2 className="view-title">📜 Recent Plans</h2>
				<PlanCard
					data={{
						title: "John's Diet",
						date: "10/02/2020",
						overview: "Pizza, Burger, Subway Water, Jeera rice ...",
						calories: "1234",
					}}
				/>
				<PlanCard
					data={{
						title: "John's Diet",
						date: "10/02/2020",
						overview: "Pizza, Burger, Subway Water, Jeera rice ...",
						calories: "1234",
					}}
				/>
				<PlanCard
					data={{
						title: "John's Diet",
						date: "10/02/2020",
						overview: "Pizza, Burger, Subway Water, Jeera rice ...",
						calories: "1234",
					}}
				/>
				<PlanCard
					data={{
						title: "John's Diet",
						date: "10/02/2020",
						overview: "Pizza, Burger, Subway Water, Jeera rice ...",
						calories: "1234",
					}}
				/>
				<PlanCard
					data={{
						title: "John's Diet",
						date: "10/02/2020",
						overview: "Pizza, Burger, Subway Water, Jeera rice ...",
						calories: "1234",
					}}
				/>
				<PlanCard
					data={{
						title: "John's Diet",
						date: "10/02/2020",
						overview: "Pizza, Burger, Subway Water, Jeera rice ...",
						calories: "1234",
					}}
				/>
				<PlanCard
					data={{
						title: "John's Diet",
						date: "10/02/2020",
						overview: "Pizza, Burger, Subway Water, Jeera rice ...",
						calories: "1234",
					}}
				/>
				<PlanCard
					data={{
						title: "John's Diet",
						date: "10/02/2020",
						overview: "Pizza, Burger, Subway Water, Jeera rice ...",
						calories: "1234",
					}}
				/>
				<PlanCard
					data={{
						title: "John's Diet",
						date: "10/02/2020",
						overview: "Pizza, Burger, Subway Water, Jeera rice ...",
						calories: "1234",
					}}
				/>
				<PlanCard
					data={{
						title: "John's Diet",
						date: "10/02/2020",
						overview: "Pizza, Burger, Subway Water, Jeera rice ...",
						calories: "1234",
					}}
				/>
				<PlanCard
					data={{
						title: "John's Diet",
						date: "10/02/2020",
						overview: "Pizza, Burger, Subway Water, Jeera rice ...",
						calories: "1234",
					}}
				/>
				<PlanCard
					data={{
						title: "John's Diet",
						date: "10/02/2020",
						overview: "Pizza, Burger, Subway Water, Jeera rice ...",
						calories: "1234",
					}}
				/>
				<PlanCard
					data={{
						title: "John's Diet",
						date: "10/02/2020",
						overview: "Pizza, Burger, Subway Water, Jeera rice ...",
						calories: "1234",
					}}
				/>
				<PlanCard
					data={{
						title: "John's Diet",
						date: "10/02/2020",
						overview: "Pizza, Burger, Subway Water, Jeera rice ...",
						calories: "1234",
					}}
				/>
			</div>
			<button className="floating-button">
				<img src="./img/svg/plus-light.svg" alt="+" />
			</button>
		</div>
	);
}

import React, { useState, useRef } from "react";
import "./FormView.css";

import FormElement from "../components/FormElement";
import EditableText from "../components/EditableText";
import { v4 as uuid } from "uuid";

import { connect } from "react-redux";
import { addLabel, removeLabel } from "../actions";

const FormView = () => {
	const FormElementListRef = useRef(null);

	const [labelList, setLabelList] = useState([]);

	const handleRemove = (labelId) => {
		removeLabel(labelId);
		setLabelList(labelList.filter((item) => item.id !== labelId));
		// also remove from global store
	};

	const renderLabelList = () => {
		return labelList.map((item) => {
			return (
				<FormElement
					removeThis={handleRemove}
					label={item.label}
					key={item.id}
					id={item.id}
				/>
			);
		});
	};

	const addFormElement = () => {
		// Maybe add a modal for initial label
		const id = uuid();
		addLabel(id, "Untitled Label");

		setLabelList([...labelList, { id, label: "Untitled Label" }]);

		// Add Scrolltobottom
	};

	return (
		<div className="FormView View">
			<div className="scroll-view">
				<div className="view-headspace" />

				<h2 className="view-title">🥗 Create Diet</h2>
				<EditableText
					initialValue="Untitled Plan"
					emptyValue="Untitled Plan"
					className="plan-title"
				/>
				<div className="form" ref={FormElementListRef}>
					{renderLabelList()}
				</div>
			</div>
			<div className="btn-row">
				<button className="final-btn">Finalize Plan</button>
				<button className="add-btn" onClick={addFormElement}>
					<img src="./img/svg/plus.svg" alt="+" />
				</button>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		globalState: state,
	};
};

export default connect(mapStateToProps, { addLabel, removeLabel })(FormView);

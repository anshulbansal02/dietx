import React, { useState, useEffect } from "react";
import "./styles/Slot.css";

import TagInput from "./TagInput";
import EditableText from "./EditableText";

import { connect } from "react-redux";
import { changeSlotLabel, changeSlotTags, removeSlot } from "../actions";

const nutriLabels = ["kcal", "g Protein", "g Carbs", "g Fat"];

const Slot = ({
	label: initialLabel = "Untitled Slot",
	id,
	changeSlotLabel,
	changeSlotTags,
	removeSlot,
}) => {
	// eslint-disable-next-line no-unused-vars
	const [nutriValues, setNutriValues] = useState([0, 0, 0, 0]);

	return (
		<div className="form-element">
			<div className="label-container">
				<EditableText
					initialValue={initialLabel}
					emptyValue="Untitled Label"
					className="editable-label"
					passToParent={(label) => changeSlotLabel(id, label)}
				/>
				<button
					className="remove-btn"
					tabIndex="-1"
					onClick={() => {
						removeSlot(id);
					}}
				>
					<span></span>
				</button>
			</div>
			<TagInput passToParent={(tags) => changeSlotTags(id, tags)} />
			<div className="info-bar">
				{nutriValues.map((item, i) => (
					<div className="info-item" key={i}>
						{item + nutriLabels[i]}
					</div>
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		globalState: state,
	};
};

export default connect(mapStateToProps, {
	changeSlotLabel,
	changeSlotTags,
	removeSlot,
})(Slot);

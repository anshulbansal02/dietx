import React, { useState, useEffect } from "react";
import "./styles/FormElement.css";

import TagInput from "./TagInput";
import EditableText from "./EditableText";

import { connect } from "react-redux";
import { changeLabel } from "../actions";

const nutriLabels = ["kcal", "g Protein", "g Carbs", "g Fat"];

const FormElement = ({
	label: initialLabel = "Untitled Label",
	removeThis,
	id,
	globalState,
}) => {
	// Nutrivalues will be calculated and added using nutri API
	const [nutriValues, setNutriValues] = useState([0, 0, 0, 0]);

	// Child State (Duplicate)
	const [elementLabel, setElementLabel] = useState(initialLabel);
	const [elementTags, setElementTags] = useState([]);

	useEffect(() => {
		// console.log(elementLabel, elementTags);
		// Called whenever label or tag changes in this particular element
		// Set state in global store for this element here.
		// setLabel(id, label, tags);
		console.log(globalState);
	}, [elementLabel, elementTags]);

	return (
		<div className="form-element">
			<div className="label-container">
				<EditableText
					initialValue={initialLabel}
					emptyValue="Untitled Label"
					className="editable-label"
					passToParent={(l) => setElementLabel(l)}
				/>
				<button
					className="remove-btn"
					tabIndex="-1"
					onClick={() => {
						removeThis(id);
					}}
				>
					<span></span>
				</button>
			</div>
			<TagInput passToParent={(l) => setElementTags(l)} />
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

export default connect(mapStateToProps, { changeLabel })(FormElement);

// {
// 	type: String, ("workout", "diet")
// 	title: String,
// 	labels: [{
//		id: String,
// 		title: String,
// 		tags: [String]
//         }]
// }

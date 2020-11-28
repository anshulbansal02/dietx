import React from "react";
import "./FormView.css";

import Slot from "../components/Slot";
import EditableText from "../components/EditableText";
import { v4 as uuid } from "uuid";

import { connect } from "react-redux";
import { addSlot, removeSlot } from "../actions";

const FormView = ({ slotList, addSlot }) => {
	const renderSlotList = () => {
		return slotList.map((slot) => {
			return <Slot label={slot.label} key={slot.id} id={slot.id} />;
		});
	};

	const addSlotToList = () => {
		// Add a modal for initial slot label
		addSlot(uuid(), "Untitled Slot");
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
				<div className="form">{renderSlotList()}</div>
			</div>
			<div className="btn-row">
				<button className="final-btn">Finalize Plan</button>
				<button className="add-btn" onClick={addSlotToList}>
					<img src="./img/svg/plus.svg" alt="+" />
				</button>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		slotList: state.slots,
	};
};

export default connect(mapStateToProps, { addSlot, removeSlot })(FormView);

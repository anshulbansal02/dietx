import { combineReducers } from "redux";

const labelsReducer = (labelList, action) => {
	if (action.type === "ADD_LABEL") {
		return [
			...labelList,
			{ id: action.payload.id, title: action.payload.labelName, tags: [] },
		];
	} else if (action.type === "CHANGE_LABEL") {
		return labelList.map((item) => {
			if (item.id === action.payload.id) {
				return action.payload;
			} else return item;
		});
	} else if (action.type === "REMOVE_LABEL") {
		return labelList.filter((item) => item.id !== action.payload.id);
	}
	return [];
};

export default combineReducers({
	labels: labelsReducer,
});

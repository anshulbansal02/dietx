import { combineReducers } from "redux";

const slotReducer = (slots, action) => {
	switch (action.type) {
		case "ADD_SLOT":
			return [...slots, { ...action.payload, tags: [] }];
		case "CHANGE_LABEL":
			return slots.map((slot) => {
				if (slot.id === action.payload.id)
					return { ...slot, label: action.payload.label };
				else return slot;
			});
		case "CHANGE_TAGS":
			return slots.map((slot) => {
				if (slot.id === action.payload.id)
					return { ...slot, tags: action.payload.tags };
				else return slot;
			});
		case "REMOVE_SLOT":
			return slots.filter((slot) => slot.id !== action.payload.id);
		default:
			return [];
	}
};

export default combineReducers({
	slots: slotReducer,
});

const addSlot = (id, label) => {
	return {
		type: "ADD_SLOT",
		payload: { id, label },
	};
};

const changeSlotLabel = (id, label) => {
	return {
		type: "CHANGE_LABEL",
		payload: { id, label },
	};
};

const changeSlotTags = (id, tags) => {
	return {
		type: "CHANGE_TAGS",
		payload: { id, tags },
	};
};

const removeSlot = (id) => {
	return {
		type: "REMOVE_SLOT",
		payload: { id },
	};
};

export { addSlot, changeSlotLabel, changeSlotTags, removeSlot };

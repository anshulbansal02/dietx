const addLabel = (id, labelName) => {
	return {
		type: "ADD_LABEL",
		payload: {
			id,
			labelName,
		},
	};
};

const changeLabel = (id, labelName, tags) => {
	return {
		type: "CHANGE_LABEL",
		payload: {
			id,
			labelName,
			tags,
		},
	};
};

const removeLabel = (id) => {
	return {
		type: "REMOVE_LABEL",
		payload: {
			id,
		},
	};
};

export { addLabel, changeLabel, removeLabel };

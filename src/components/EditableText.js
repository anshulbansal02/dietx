import React, { useState, useEffect } from "react";

import "./styles/EditableText.css";

export default function EditableText({
	initialValue = "",
	emptyValue = "",
	className: styleClass,
	passToParent,
}) {
	const [label, setLabel] = useState(initialValue);

	useEffect(() => {
		if (passToParent) passToParent(label);
	}, [label]);

	const handleChange = (e) => {
		setLabel(e.target.value);
	};

	const handleEmptyLabel = () => {
		if (label.length === 0) setLabel(emptyValue);
	};

	return (
		<input
			className={`EditableText ${styleClass}`}
			value={label}
			onChange={handleChange}
			onBlur={handleEmptyLabel}
			onKeyPress={(e) => {
				if (e.key === "Enter") e.target.blur();
			}}
		/>
	);
}

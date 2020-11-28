import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import "./styles/TagInput.css";

export default function TagInput({ passToParent }) {
	const [tags, setTags] = useState([]);
	const [inputText, setInputText] = useState("");

	useEffect(() => {
		if (passToParent) passToParent(tags);
	}, [tags]);

	const renderTagList = () => {
		return tags.map((tag) => (
			<li key={tag.id} onClick={() => handleTagRemove(tag.id)}>
				{tag.text}
			</li>
		));
	};

	const handleTagRemove = (id) => {
		setTags(tags.filter((tag) => tag.id !== id));
	};

	const handleTagEnter = (e) => {
		if (e.key === "Enter" && inputText.length > 0) {
			setTags([...tags, { text: inputText, id: uuid() }]);
			setInputText("");
		}
	};

	const handleChange = (e) => {
		setInputText(e.target.value);
	};

	const handleBackspace = (e) => {
		if (e.key === "Backspace" && inputText.length === 0) {
			setTags(tags.filter((_, index) => index !== tags.length - 1));
		}
	};

	return (
		<div className="TagInput">
			<ul className="tags">
				{renderTagList()}
				<input
					type="text"
					value={inputText}
					size="1"
					onChange={handleChange}
					onKeyPress={handleTagEnter}
					onKeyDown={handleBackspace}
				/>
			</ul>
		</div>
	);
}

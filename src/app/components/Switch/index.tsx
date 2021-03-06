import React from "react";

import "./styles.css";

interface Props {
	isChecked: boolean;
	onToggle: (value: boolean) => void;
}

export default function Switch({ isChecked, onToggle }: Props) {
	return (
		<label className="NLT__switch" onClick={() => onToggle(!isChecked)}>
			<input
				type="checkbox"
				checked={isChecked}
				onChange={() => {}}
				onClick={(e) => {
					e.stopPropagation();
					onToggle(!isChecked);
				}}
			/>
			<span className="NLT__slider"></span>
		</label>
	);
}

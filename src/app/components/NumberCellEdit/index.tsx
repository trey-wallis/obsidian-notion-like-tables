import React, { useCallback } from "react";

import Menu from "../Menu";

import "./styles.css";

interface Props {
	menuId: string;
	isOpen: boolean;
	style: {
		top: string;
		left: string;
		width: string;
		height: string;
		maxWidth?: string;
		minWidth?: string;
	};
	value: string;
	onInputChange: (value: string) => void;
}

export default function NumberCellEdit({
	menuId,
	isOpen,
	style,
	value,
	onInputChange,
}: Props) {
	const inputRef = useCallback((node) => {
		if (node) {
			if (node instanceof HTMLElement) {
				setTimeout(() => {
					node.focus();
				}, 1);
			}
		}
	}, []);

	function handleInputChange(value: string) {
		value = value.replace("\n", "");
		return onInputChange(value);
	}

	return (
		<Menu id={menuId} isOpen={isOpen} style={style}>
			<input
				className="NLT__number-cell-edit"
				type="number"
				ref={inputRef}
				autoFocus
				value={value}
				onChange={(e) => handleInputChange(e.target.value)}
			/>
		</Menu>
	);
}

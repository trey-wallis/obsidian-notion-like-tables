import React from "react";

import Tag from "../Tag";

import "./styles.css";
interface Props {
	content: string;
	color: string;
}

export default function TagCell({ content, color }: Props) {
	return (
		<div className="NLT__tag-cell">
			<Tag content={content} color={color} />
		</div>
	);
}

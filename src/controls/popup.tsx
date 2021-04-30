import React, { useState } from "react";
import { Popover, PopoverProps } from "@material-ui/core";
import "../css/popup.css";

interface Props extends PopoverProps {
	Trigger: React.FC;
}

const Popup: React.FC<Props> = ({
	children,
	Trigger,
	anchorOrigin,
	transformOrigin,
	elevation,
}) => {
	// Popup is closed if anchor is null and vice versa
	const [anchor, setAnchor] = useState(null);
	console.log(Trigger);

	return (
		<>
			<Trigger />
			<Popover
				open={Boolean(anchor)}
				anchorEl={anchor}
				anchorOrigin={anchorOrigin}
				transformOrigin={transformOrigin}
				elevation={elevation || 8}
				onClose={() => setAnchor(null)}
			>
				{children}
			</Popover>
		</>
	);
};

export default Popup;

import React from "react";
import { Popover, PopoverProps } from "@material-ui/core";
import "../css/popup.css";

interface Props extends PopoverProps {
	anchor: any;
}

const Popup: React.FC<Props> = ({
	children,
	anchor,
	anchorOrigin,
	transformOrigin,
	elevation,
	onClose,
}) => {
	console.log(children);
	return (
		<>
			<Popover
				open={Boolean(anchor)}
				anchorEl={anchor}
				anchorOrigin={anchorOrigin}
				transformOrigin={transformOrigin}
				elevation={elevation || 8}
				onClose={onClose}
			>
				{children}
			</Popover>
		</>
	);
};

export default Popup;

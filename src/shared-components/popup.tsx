import React, { Dispatch, SetStateAction } from "react";
import { Popover, PopoverProps } from "@material-ui/core";
import "../css/popup.css";

interface Props extends PopoverProps {
	anchor: any;
	setAnchor: Dispatch<SetStateAction<string | null>>;
}

const Popup: React.FC<Props> = ({
	children,
	anchor,
	setAnchor,
	anchorOrigin,
	transformOrigin,
	elevation,
}) => {
	console.log(anchor);
	return (
		<>
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

import React, { useState } from "react";
import { Popover, PopoverProps, Typography } from "@material-ui/core";
import "../css/popup.css";

const Popup: React.FC<PopoverProps> = ({
	children,
	anchorOrigin,
	transformOrigin,
	elevation,
}) => {
	// Popup is closed if anchor is null and vice versa
	const [anchor, setAnchor] = useState(null);

	return (
		<>
			<Typography
				className="popup__link"
				variant="h6"
				onClick={(e: any) => setAnchor(e.currentTarget)}
			>
				Read App Description...
			</Typography>
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

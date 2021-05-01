import React, { useState } from "react";

function usePopup() {
	// Popup is closed if anchor is null and vice versa
	const [anchor, setAnchor] = useState<any>(null);

	const handleAnchorOpen = (e: React.MouseEvent) =>
		setAnchor(e.currentTarget);

	const handleAnchorClose = () => setAnchor(null);

	return {
		anchor,
		setAnchor,
		handleAnchorOpen,
		handleAnchorClose,
	};
}

export default usePopup;

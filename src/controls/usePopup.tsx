import React, { useState } from "react";

function usePopup() {
	// Popup is closed if anchor is null and vice versa
	const [anchor, setAnchor] = useState<any>(null);

	const handleAnchor = (e: React.MouseEvent) => setAnchor(e.currentTarget);

	return {
		anchor,
		setAnchor,
		handleAnchor,
	};
}

export default usePopup;

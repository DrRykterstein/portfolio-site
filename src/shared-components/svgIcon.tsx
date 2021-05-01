import React from "react";

interface Props {
	width?: string;
	height?: string;
	className?: string;
	onMouseEnter?: (e: React.MouseEvent) => void;
	onMouseLeave?: () => void;
}

const SvgIcon: React.FC<Props> = ({
	width,
	height,
	className,
	children,
	onMouseEnter,
	onMouseLeave,
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width || "25"}
			height={height || "25"}
			fill="currentColor"
			className={className}
			viewBox="0 0 16 16"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{children}
		</svg>
	);
};

export default SvgIcon;

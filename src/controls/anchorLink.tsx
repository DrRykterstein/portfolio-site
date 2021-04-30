import React from "react";

interface Props {
	href: string;
	target?: string;
	rel?: string;
	className?: string;
}

const AnchorLink: React.FC<Props> = ({
	href,
	target,
	rel,
	className,
	children,
}) => {
	return (
		<a
			className={className}
			href={href}
			target={target || "__blank"}
			rel={rel || "noopener noreferrer"}
		>
			{children}
		</a>
	);
};

export default AnchorLink;

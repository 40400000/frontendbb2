import * as React from "react";

interface KiteIconProps {
	variant?: "blue" | "orange" | "purple" | "white";
	size?: number;
	className?: string;
	title?: string;
}

const COLOR_MAP: Record<NonNullable<KiteIconProps["variant"]>, string> = {
	blue: "#328EFB",
	orange: "#E1663F",
	purple: "#7C3AED",
	white: "#FFFFFF",
};

export function KiteIcon({
	variant = "blue",
	size = 14,
	className,
	title,
}: KiteIconProps): React.ReactElement {
	const fill = COLOR_MAP[variant];

	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			role={title ? "img" : undefined}
			aria-label={title}
			aria-hidden={title ? undefined : true}
			className={`inline-block align-middle ${className ?? ""}`}
		>
			{title ? <title>{title}</title> : null}
			<rect
				x="4"
				y="4"
				width="16"
				height="16"
				rx="3"
				fill={fill}
				transform="rotate(45 12 12)"
			/>
		</svg>
	);
}



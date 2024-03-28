const Svg = ({ name = "", prefix = "icon", className = "", ...props }) => {

	const symbolId = `#${prefix}-${name}`;
	return (
		<svg {...props} aria-hidden="true" className={`icon ${name} ${className}`}>
			<use xlinkHref={symbolId} />
		</svg>
	);

};

export default Svg;

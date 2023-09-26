export const routeVariants = {
	initial: {
		opacity: 0,
		// scale: 0.9,
		// duration: 1.5,
	},
	animate: {
		opacity: 1,
		// scale: 1,

	transition:{ duration: 0.2, type: "tween" }
	},
	exit: {
		opacity: 0,
		duration: 0.052,
		// scale: 0.9,
	},
};

export const titleVariants = {
	initial: {
		opacity: 0,
		y: "-20px",
		// duration: 1.5,
	},
	animate: {
		opacity: 1,
		y: "20px",

		transition: {
			// type: "spring",
			// mass: 0.4,
			// damping: 8,
			duration: 0.5,
			delay: 0.5,
		},
	},
	exit: {
		opacity: 0,
		y: "-20px",
	},
};

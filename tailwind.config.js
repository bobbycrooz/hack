/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				base: "#150E28",
				"base-1": "#903AFF",
				"base-2": "#D434FE",
				"base-3": "#ff26b9",
			},
			fontFamily: {
				"cd-bold": ["Cd-Bold", "sans-serif"],
				"Cd-Regular": ["Cd-Regular", "sans-serif"],
				"Cd-Light": ["Cd-Light", "sans-serif"],
				"Cd-Medium": ["Cd-Medium", "sans-serif"],
				"Cd-SemiBold": ["Cd-Semibold", "sans-serif"],
				"Cd-ExLight": ["Cd-ExLight", "sans-serif"],
				mon: ["Montserrat", "sans-serif"],
				uni: ["UnicaOne-Regular", "sans-serif"],
			},
		},
	},
	plugins: [],
};

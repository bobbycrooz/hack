import React from "react";
import Hero from "@sections/Hero";
import { Big, Medal, TimeLine } from "@/ui/sections";

const Home: React.FC = () => {
	return (
		<div className="bg-base">
			<Hero />
			<Big />
			<TimeLine />
			<Medal />
		</div>
	);
};

export default Home;

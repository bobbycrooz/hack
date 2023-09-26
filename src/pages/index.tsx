import React from "react";
import Hero from "@sections/Hero";
import { Big, Medal, TimeLine } from "@/ui/sections";
import { motion } from "framer-motion";
import { routeVariants } from "@/ui/components/Animation";

const Home: React.FC = () => {
	return (
		<motion.div variants={routeVariants} initial='initial' animate="animate" exit='exit'  className="bg-base">
			<Hero />
			<Big />
			<TimeLine />
			<Medal />
		</motion.div>
	);
};

export default Home;

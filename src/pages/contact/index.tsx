import React from "react";
import { Contact } from "@/ui/sections";
import { motion } from "framer-motion";
import { routeVariants } from "@/ui/components/Animation";

const Main: React.FC = () => {
	return (
		<motion.div variants={routeVariants} initial="initial" animate="animate" exit='exit'  className="bg-base">
			<Contact />
		</motion.div>
	);
};

export default Main;

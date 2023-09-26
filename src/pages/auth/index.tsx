import React from "react";
import { Register } from "@/ui/sections";
import { motion } from "framer-motion";
import { routeVariants } from "@/ui/components/Animation";

const Auth: React.FC = () => {
	return (
		<motion.div variants={routeVariants} initial="initial" animate="animate" exit='exit'  className="bg-base">
			<Register />
		</motion.div>
	);
};

export default Auth;

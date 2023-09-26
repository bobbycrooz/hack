// router file
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages";
import ContactUs from "./pages/contact";
import Auth from "./pages/auth";
import { AnimatePresence } from "framer-motion";

// function LocationProvder({ children: any }})
// {
// 	const location = useLocation();
// 	return (
// 		<AnimatePresence exitBeforeEnter>
// 			<motion.div
// 				key={location.pathname}
// 				initial={{ opacity: 0 }}
// 				animate={{ opacity: 1 }}
// 				exit={{ opacity: 0 }}
// 			>
// 				{children}
// 			</motion.div>
// 		</AnimatePresence>
// 	);

// }

// function LocationProvder({ children }: any) {
// 	// const location = useLocation();
// 	return {children}</AnimatePresence>;
// }

function SerializedRoutes() {
	const location = useLocation();

	console.log(location);

	return (
		<AnimatePresence mode="wait" initial={false}>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />}></Route>
				<Route path="/contact" element={<ContactUs />}></Route>
				<Route path="/auth" element={<Auth />}></Route>
			</Routes>
		</AnimatePresence>

		// <Switch location={location} key={location.key}>
		// 	<Route path="/">
		// 		<Home />
		// 	</Route>
		// 	<Route path="/contact">
		// 		<ContactUs />
		// 	</Route>
		// 	<Route path="/auth">
		// 		<Auth />
		// 	</Route>
		// </Switch>
	);
}

const Router = () => {
	return (
		<BrowserRouter>
			<SerializedRoutes />
		</BrowserRouter>
	);
};
export default Router;

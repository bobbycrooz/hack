// router file
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import ContactUs from "./pages/contact";
import Auth from "./pages/auth";


const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/contact" element={<ContactUs />}></Route>
				<Route path="/auth" element={<Auth />}></Route>


				{/* <Route path="/" element={<Home />}></Route> */}
			</Routes>
		</BrowserRouter>
	);
};
export default Router;

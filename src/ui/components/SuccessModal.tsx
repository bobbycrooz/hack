import { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

interface ModalTypes {
	showModal: boolean;
	handleShowModal: any;
}

const SuccessModal = ({ showModal, handleShowModal }: ModalTypes) => {
	// const [queryParameters] = useSearchParams();
	// const filter = queryParameters.get("filter");
	// const { pathname } = useLocation();
	// const navigate = useNavigate();
	const modalRef = useRef(null);

	// const { authService } = useAuth();

	// useEffect(() => {

	// }, [filter]);

	function handleBackDropt(e: any) {
		if (showModal && modalRef.current == e.target) {
			handleShowModal();
		}
	}

	useEffect(() => {
		// scroll to top
		window.scrollTo(0, 0);
	}, [showModal]);

	return (
		<AnimatePresence initial={false} mode="wait">
			{showModal ? (
				<motion.div
					key={"modal-2"}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.5 }}
					className="fixed top-0 left-0 bg-[#150E28ED] centered w-screen h-screen fadeIn"
					onClick={handleBackDropt}
					ref={modalRef}
				>
					<div className="card rounded border w-[90%]  border-base-2 p-8 sm:w-[699px] flex flex-col items-center text-white text-center">
						<img src="/h-congrats.svg" alt="" className="" />

						<h1 className="font-mon sm:text-[32px] font-semibold">Congratulations</h1>
						<h1 className="font-mon sm:text-[32px] font-semibold">you have successfully Registered!</h1>

						<p className="font-mon text-[12px] sm:text-xs font-semibold mt-[15px] flex ">
							Yes, it was easy and you did it!
						</p>
						<p className="font-mon text-[12px] sm:text-xs font-semibold  flex  items-center mt-2">
							check your mail box for next step
							<img src="/wink.svg" className="" alt="" />
						</p>

						<button onClick={handleShowModal} className="btn full mt-[38px]">
							Back
						</button>
					</div>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
};

export default SuccessModal;

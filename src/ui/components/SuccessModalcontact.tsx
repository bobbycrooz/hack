import { useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

interface ModalTypes {
      showModal: boolean;
      handleShowModal: any;
}

const SuccessModalcontact = ({ showModal, handleShowModal }: ModalTypes) => {
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
			handleShowModal()
		}
	}

	return showModal ? (
		<AnimatePresence>
			<motion.div
				key={"modal-2"}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed top-0 left-0 bg-[#150E28ED] centered w-screen h-screen fadeIn"
				onClick={handleBackDropt}
				ref={modalRef}
			>
				<div className="card rounded border w-[90%]  border-base-2 p-8 sm:w-[699px] flex flex-col items-center text-white text-center">
					<img src="/h-congrats.svg" alt="" className="" />

					<h1 className="font-mon sm:text-[32px] font-semibold">Congratulations</h1>
					<h1 className="font-mon sm:text-[32px] font-semibold">Your message has been recieved!</h1>

					

					<button onClick={handleShowModal} className="btn full mt-[38px]">Back</button>
				</div>
			</motion.div>
		</AnimatePresence>
	) : null;
};

export default SuccessModalcontact;

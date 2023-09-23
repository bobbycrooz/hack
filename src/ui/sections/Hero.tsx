
import React from "react";
import Navbar from "@components/Navbar";

const Hero: React.FC = () => {


	return (
		<div  id="hero" className="w-[98.9vw] h-[100vh] bg-base relative border-b border-[#ffffff4d]">
			<Navbar />

			{/* italic */}
			<div className="w-full px-[77px] flex justify-end mt-8 ">
				<h1 className="font-mon w-auto  text-[36px] font-bold italic  relative">
					Igniting a Revolution in HR Innovation
					<div className="absolute right-1 -bottom-2">
						<svg xmlns="http://www.w3.org/2000/svg" width="255" height="17" viewBox="0 0 255 17" fill="none">
							<path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" stroke-width="5" />
						</svg>
					</div>
				</h1>
			</div>

			{/* star 1 */}
			{/* <img src="/h-star-white.svg" alt="" className="w-[26px] h-[32px] left-[140px] absolute" /> */}

			{/* blur */}
			{/* <img src="/h-glow.svg" alt="" className="w-[600px] h-[700px] absolute left-[30px] -top-[40px]" /> */}
			{/* <div className="w-[1080px] h-[700px]  glow absolute left-[0px] top-[50px] "></div> */}

			{/* matrix */}
			{/* <div className="matrix w-full h-full absolute right-0 bottom-0  bg"> */}
				{/* <img src="/h-glow.svg" alt="" className="w-[800px] h-[800px] right-0 bottom-[10px] absolute z-0" />
				<img src="/h-boy.png" alt="" className="w-[700px] h-[600px] right-0 bottom-0 absolute man" />
				<img src="/h-globe.png" alt="" className="w-[500px] h-[500px] right-[120px] bottom-[120px] absolute" /> */}
			{/* </div> */}

				{/* <img src="/h-fuck.png" alt="" className="w-[700px] h-[600px] right-0 bottom-0 absolute man" /> */}


			{/* hero */}
			<div className="hero_text absolute top-[90%] -translate-y-[90%]  text-[80px] font-cd-bold ml-[128px]">
				<h1 className="hero_title relative  w-[660px] leading-normal">
					<img src="/h-idea.svg" alt="" className="idea absolute w-[53px] h-[73px] right-[60px] -top-[40px]" />
					{/* star 2 */}
					<img src="/h-star.svg" alt="" className="w-[26px] h-[32px] -right-[20px] -top-[10px] absolute" />
					getLinked Tech
				</h1>
				{/*  */}
				<div className="text_2 flex items-center -mt-8 ">
					<h1 className="hero_title leading-normal">
						Hackathon <span className="text-base-2">1.0</span>
					</h1>{" "}
					<img src="/h-ancor.png" alt="" className="idea w-[144px] h-[73px]" />
				</div>

				{/*  */}
				<div className="text -mt-4">
					<h1 className=" text-xl font-normal font-mon w-[520px]">
						Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
					</h1>
				</div>

				{/*  */}

				<button className="btn">Register</button>

				{/*  */}
				<div className="timer  flex w-[285px] relative mt-[70px]">
					<p className="font-uni text-[64px] w-24">
						00 <sub className="font-mon text-sm -ml-4 ">H</sub>
					</p>

					<p className="font-uni text-[64px] w-24">
						00 <sub className="font-mon text-sm -ml-4 ">M</sub>
					</p>

					<p className="font-uni text-[64px] w-24">
						00 <sub className="font-mon text-sm -ml-4 ">S</sub>
					</p>

					{/* star 3 */}
					<img src="/h-star.svg" alt="" className="w-[26px] h-[32px] -right-[60%] -top-[20px] absolute" />
				</div>
			</div>
		</div>
	);
};

export default Hero;

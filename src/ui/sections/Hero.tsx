import React from "react";
import Navbar from "@components/Navbar";

const Hero: React.FC = () => {
	return (
		<div id="hero" className="w-screen h-[124vh] sm:h-[100vh] bg-base relative border-b border-[#FFFFFF2E]">
			{/* stars */}
			{/* <img src="/h-star.svg" alt="" className="star absolute br  animate-pulse" /> */}


			<Navbar />

			{/* italic */}
			<div className="w-full sm:px-[77px] flex justify-center sm:justify-end mt-8">
				<h1 className="font-mon w-auto  sm:text-[32px] font-bold italic  relative">
					Igniting a Revolution in HR Innovation
					<div className="absolute right-1 -bottom-2 hidden sm:flex">
						<svg xmlns="http://www.w3.org/2000/svg" width="255" height="17" viewBox="0 0 255 17" fill="none">
							<path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" stroke-width="5" />
						</svg>
					</div>
					<div className="absolute right-1 -bottom-2  sm:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" width="117" height="11" viewBox="0 0 117 11" fill="none">
							<path d="M1 9C20.2424 3.71764 70.7273 -3.67768 116 9" stroke="#FF26B9" stroke-width="3" />
						</svg>
					</div>
				</h1>
			</div>

		

			{/* hero  -desktop*/}
			<div className="hidden sm:block hero_text absolute top-[90%] -translate-y-[90%]  text-[80px] font-cd-bold ml-[128px]">
				<h1 className="hero_title relative  w-[660px] leading-normal">
					<img src="/h-idea.svg" alt="" className="idea absolute w-[53px] h-[73px] right-[60px] -top-[40px]" />
					{/* star 2 */}
					<img src="/h-star.svg" alt="" className="w-[26px] h-[32px] -right-[20px] -top-[10px] absolute animate-pulse" />
			<img src="/h-star-white.svg" alt="" className="star absolute   animate-pulse -top-[50px] left-[0px] " />

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
					<img src="/h-star.svg" alt="" className="w-[26px] h-[32px] -right-[60%] -top-[20px] absolute animate-pulse" />
				</div>
			</div>


			
			{/* hero  -mobile*/}
			<div className=" hero_text  font-cd-bold  flex flex-col items-center mt-[48px] sm:hidden">
				<h1 className="hero_title relative text-[32px]  sm:w-[660px] leading-normal">
					<img src="/h-idea.svg" alt="" className="idea absolute w-[18px] h-[26px] right-[6px] -top-[4px]" />
					{/* star 2 */}
					<img src="/h-star.svg" alt="" className="w-[26px] h-[32px] -right-[20px] -top-[10px] absolute" />
					getLinked Tech
				</h1>
				{/*  */}
				<div className="text_2 flex items-center ">
					<h1 className="hero_title text-[32px] leading-normal t">
						Hackathon <span className="text-base-2">1.0</span>
					</h1>{" "}
					<img src="/h-ancor.png" alt="" className="idea w-[54px] h-[32px]" />
				</div>

				{/*  */}
				<div className="text mt-4  w-[264px] text-center">
					<h1 className=" text-xs font-normal font-mon ">
						Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
					</h1>
				</div>

				{/*  */}

				<button className="btn small mt-6">Register</button>

				{/*  */}
				<div className="timer mx-auto   flex min-w-[225px] space-x-1   justify-center relative mt-[14px]">
					<p className="font-uni text-[48px] w-20">
						00 <sub className="font-mon text-sm -ml-1">H</sub>
					</p>

					<p className="font-uni text-[48px] w-20">
						00 <sub className="font-mon text-sm -ml-1">M</sub>
					</p>

					<p className="font-uni text-[48px] w-20">
						00 <sub className="font-mon text-sm -ml-1 ">S</sub>
					</p>

					{/* star 3 */}
					{/* <img src="/h-star.svg" alt="" className="w-[26px] h-[32px] -right-[60%] -top-[20px] absolute" /> */}
				</div>
			</div>


		</div>
	);
};

export default Hero;

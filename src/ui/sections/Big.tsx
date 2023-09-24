
import React from "react";

const featureList = [
	{
		point: "Innovation and Creativity:",
		body: " Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
	},
	{
		point: "Functionality:",
		body: " Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
	},
	{
		body: " Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
		point: "Impact and Relevance:",
	},
	{
		point: "Technical Complexity:",
		body: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
	},
	{
		point: "Adherence to Hackathon Rules:",
		body: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
	},
];

const faqLiat = [
	"Can I work on a project I started before the hackathon?",
	"What happens if I need help during the hackathon?",
	"What happens if I don't have an idea for a project?",
	"Can I join a team or do I have to come with one?",
	"What happens after the hackathon ends",
	"Can I work on a project I started before the hackathon?",
];

const Big: React.FC = () => {
	// const [shortLink, setShortLink] = useState<string>("");
	return (
		<>
			<section className="w-full bg-base sm:py-[56px] border-b border-[#ffffff4d] flex flex-col px-[49px] py-[30px] sm:flex-row sm:justify-center sm:px-[200px] items-center">
				<div className="img sm:w-[590px] sm:h-[500px] w-[260px] h-[237px]">
					<img src="/h-big-idea.png" className="w-full h-full" alt="" />
				</div>

				<div className="spave h-[58px] sm:w-[109px]"></div>

				{/* text */}
				<div className="w-full  sm:w-[470px] text-center sm:text-left ">
					<h1 className="into font-cd-bold sm:text-[32px] text-[20px] g">Introduction to getlinked</h1>
					<h1 className="text-base-2 font-cd-bold sm:text-[32px] text-[20px]">tech Hackathon 1.0</h1>

					<p className="body  font-mon text-xs sm:text-sm  text-center sm:text-left  sm:w-[90%] w-[270px] mx-auto sm:mx-0 leading-[27.5px]">
						Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future.
						Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform
						your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating
						solutions that can change the world, that's what we're all about!
					</p>
				</div>
			</section>

			{/*
			 */}

			<section id="rules" className="w-full bg-base sm:py-[56px] py-[24px] px-[48px]  border-b border-[#ffffff4d] flex flex-col-reverse sm:flex-row justify-center sm:px-[200px] items-center relative">
				{/* <img src="/h-glow3.png" alt="" className="w-[400px] h-[950px] right-0 top-20 absolute z-0 " /> */}
				{/* text */}
				<div className="  sm:w-[540px] relative w-full text-center sm:text-left">

					<h1 className="into font-cd-bold sm:text-[32px] text-[20px] ">Rules and</h1>
					<h1 className="text-base-2 font-cd-bold sm:text-[32px] text-[20px]">Guidelines</h1>

					<p className="body font-mon text-xs sm:text-sm  text-center sm:text-left  sm:w-[90%] w-[270px] mx-auto sm:mx-0 leading-[27.5px]">
						Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future.
						Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform
						your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating
						solutions that can change the world, that's what we're all about!
					</p>
				</div>

				<div className="spave h-3 sm:w-[109px]"></div>

				<div className="img relative sm:w-[690px] w-full h-[282px] sm:h-[500px] ">
					<img src="/big-seat.png" className="sm:w-[664px] w-full  h-full sm:h-[584px] sm:absolute sm:-top-14" alt="" />
				</div>
			</section>

			{/*  */}

			<section id="people" className="w-full bg-base py-[56px] border-b border-[#ffffff4d] flex flex-col sm:flex-row justify-center md:px-[200px] px-[24px] items-center">
				<div className="img w-full sm:w-[590px] h-[330px] sm:h-[500px]">
					<img src="/h-people.png" className="w-full h-full" alt="" />
				</div>

				<div className="spave w-[109px]"></div>

				{/* text */}
				<div className="w-full text-center sm:text-left  sm:w-[470px]">
					<h1 className="into font-cd-bold text-[32px] g">Judging Criteria</h1>
					<h1 className="text-base-2 font-cd-bold text-[32px]">Key attributes</h1>

					<div className="w-auto space-y-6 text-center sm:text-left" >
						{featureList.map((i: any, k: number) => (
							<p key={k} className="body font-mon sm:text-sm text-xs leading-[22.555px] sm:leading-[27.56px]   sm:w-[90%]">
								<span className="text-base-3">{i.point}</span> {i.body}
							</p>
						))}
					</div>

					<button className="btn sm:mt-[55px] mt-[25px] small">Read more</button>
				</div>
			</section>

			{/*  */}

			<section id="ask" className="w-full bg-base py-[56px] border-b border-[#ffffff4d] flex flex-col sm:flex-row justify-center sm:px-[200px]  px-[40px] items-center relative">
				{/* <img src="/h-glow3.png" alt="" className="w-[400px] h-[950px] right-0 top-20 absolute z-0 br " /> */}
				{/* text */}
				<div className="w-full  sm:w-[540px] relative text-center sm:text-left">
					{/* <img src="/h-glow2.png" alt="" className="w-[800px] h-[400px] right-0 bottom-[10px] absolute z-0" /> */}

					<h1 className="into font-cd-bold sm:text-[32px] text-[20px]">Frequently Ask</h1>
					<h1 className="text-base-2 font-cd-bold md:text-[32px] text-[20px]">Question</h1>

					<p className="body font-mon w-full sm:text-sm  text-[12px] text-center  sm:text-left sm:w-[90%]  leading-[27.5px] ">
						We got answers to the questions that you might want to ask about getlinked Hackathon 1.0
					</p>

					<div className="quest_faq w-full h-auto space-y-6 sm:mt-[60px] mt-[40px]">
						{faqLiat.map((i: string, k: number) => (
							<div key={k} className=" border-b-2 border-base-2 sm:h-10 h-14 flex items-start justify-between w-full  sm:w-[427px]">
								<p className="font-mon text-xs text-left sm:text-sm sm:leading-[27.5px] leading-[18px] ">{i}</p>
								<p className="font-mon text-xl leading-[27.5px] text-base-2">+</p>
							</div>
						))}
					</div>
				</div>

				<div className="spave sm:w-[109px] h-[60px]"></div>

				<img src="/h-quest.png" className="md:w-[864px]  md:h-[684px]" alt="" />
				{/* <div className="img relative w-[690px] h-[500px] bg">
				</div> */}
			</section>
		</>
	);
};

export default Big;

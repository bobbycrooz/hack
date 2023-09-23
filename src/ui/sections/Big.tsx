
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
			<section className="w-full bg-base py-[56px] border-b border-[#ffffff4d] flex justify-center px-[200px] items-center">
				<div className="img w-[590px] h-[500px]">
					<img src="/h-big-idea.png" className="w-full h-full" alt="" />
				</div>

				<div className="spave w-[109px]"></div>

				{/* text */}
				<div className="  w-[470px]">
					<h1 className="into font-cd-bold text-[32px] g">Introduction to getlinked</h1>
					<h1 className="text-base-2 font-cd-bold text-[32px]">tech Hackathon 1.0</h1>

					<p className="body font-mon text-sm  text-left w-[90%]">
						Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future.
						Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform
						your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating
						solutions that can change the world, that's what we're all about!
					</p>
				</div>
			</section>

			{/*
			 */}

			<section id="rules" className="w-full bg-base py-[56px] border-b border-[#ffffff4d] flex justify-center px-[200px] items-center relative">
				{/* <img src="/h-glow3.png" alt="" className="w-[400px] h-[950px] right-0 top-20 absolute z-0 " /> */}
				{/* text */}
				<div className="  w-[540px] relative">

					<h1 className="into font-cd-bold text-[32px] g">Rules and</h1>
					<h1 className="text-base-2 font-cd-bold text-[32px]">Guidelines</h1>

					<p className="body font-mon text-sm  text-left w-[90%]  leading-[27.5px] ">
						Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future.
						Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform
						your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating
						solutions that can change the world, that's what we're all about!
					</p>
				</div>

				<div className="spave w-[109px]"></div>

				<div className="img relative w-[690px] h-[500px] ">
					<img src="/big-seat.png" className="w-[664px]   h-[584px] absolute -top-14" alt="" />
				</div>
			</section>

			{/*  */}

			<section id="people" className="w-full bg-base py-[56px] border-b border-[#ffffff4d] flex justify-center px-[200px] items-center">
				<div className="img w-[590px] h-[500px]">
					<img src="/h-people.png" className="w-full h-full" alt="" />
				</div>

				<div className="spave w-[109px]"></div>

				{/* text */}
				<div className="  w-[470px]">
					<h1 className="into font-cd-bold text-[32px] g">Judging Criteria</h1>
					<h1 className="text-base-2 font-cd-bold text-[32px]">Key attributes</h1>

					<div className="w-auto space-y-6">
						{featureList.map((i: any, k: number) => (
							<p key={k} className="body font-mon text-sm  text-left w-[90%]">
								<span className="text-base-3">{i.point}</span> {i.body}
							</p>
						))}
					</div>

					<button className="btn mt-[55px]">Read more</button>
				</div>
			</section>

			{/*  */}

			<section id="ask" className="w-full bg-base py-[56px] border-b border-[#ffffff4d] flex justify-center px-[200px] items-center relative">
				{/* <img src="/h-glow3.png" alt="" className="w-[400px] h-[950px] right-0 top-20 absolute z-0 br " /> */}
				{/* text */}
				<div className="  w-[540px] relative">
					{/* <img src="/h-glow2.png" alt="" className="w-[800px] h-[400px] right-0 bottom-[10px] absolute z-0" /> */}

					<h1 className="into font-cd-bold text-[32px] g">Frequently Ask</h1>
					<h1 className="text-base-2 font-cd-bold text-[32px]">Question</h1>

					<p className="body font-mon text-sm  text-left w-[90%]  leading-[27.5px] ">
						We got answers to the questions that you might want to ask about getlinked Hackathon 1.0
					</p>

					<div className="quest_faq w-full h-auto space-y-6 mt-[60px] ">
						{faqLiat.map((i: string, k: number) => (
							<div key={k} className=" border-b-2 border-base-2 h-10 flex items-start justify-between w-[427px]">
								<p className="font-mon text-sm leading-[27.5px] ">{i}</p>
								<p className="font-mon text-xl leading-[27.5px] text-base-2">+</p>
							</div>
						))}
					</div>
				</div>

				<div className="spave w-[109px]"></div>

				<img src="/h-quest.png" className="w-[864px]  h-[684px]" alt="" />
				{/* <div className="img relative w-[690px] h-[500px] bg">
				</div> */}
			</section>
		</>
	);
};

export default Big;

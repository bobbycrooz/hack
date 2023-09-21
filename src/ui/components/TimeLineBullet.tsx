

const timeLineData = [
	{
		left: {
			title: "Hackathon Announcement",
			body: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
		},
		right: {
			title: "November 18, 2023",
			body: "",
		},
	},

	{
		left: {
			title: "November 18, 2023",
			body: "",
		},
		right: {
			title: "Teams Registration begins",
			body: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
		},
	},

	{
		left: {
			title: "Teams Registration ends",
			body: "Interested Participants are no longer Allowed to register",
		},
		right: {
			title: "November 18, 2023",
			body: "",
		},
	},

	{
		left: {
			title: "November 18, 2023",
			body: "",
		},
		right: {
			title: "Announcement of the accepted teams and ideas",
			body: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
		},
	},

	{
		left: {
			title: "Getlinked Hackathon 1.0 Offically Begins",
			body: "Accepted teams can now proceed to build their ground breaking skill driven solutions",
		},
		right: {
			title: "November 18, 2023",
			body: "",
		},
	},

	{
		left: {
			title: "November 18, 2023",
			body: "",
		},
		right: {
			title: "Demo Day",
			body: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
		},
	},
];

const TimeLineBullet = () => {
	return (
		<div className="timeline  h-auto w-8 mx-auto flex flex-col items-center">
			{timeLineData.map((i: any, k: number) => (
				<div key={k} className={`bullet rounded-full centered  ${k == 0 ? "mt-[200px]" : "mt-[100px]"}  relative`}>
					{/* bullet tail */}
					<div className={`bullet_tail w-1 ${k == 0 ? "h-[137px]" : "h-[80px]"} bg-base-2 absolute bottom-16`}></div>

					{/* left content */}
					<div className="left_content min-w-[511px] p-4 absolute right-[100px] text-right">
						<h1 className="into font-cd-bold text-[24px] text-base-2">{i.left.title}</h1>
						<h1 className="text-white2 font-mon text-sm">{i.left.body}</h1>
					</div>

					{/* right content */}
					<div className="left_content min-w-[511px] p-4 absolute left-[100px] text-left">
						<h1 className="into font-cd-bold text-[24px]  text-base-2">{i.right.title}</h1>
						<h1 className="text-white2 font-mon text-sm">{i.right.body}</h1>
					</div>

					<p className="number">{k + 1}</p>
				</div>
			))}
		</div>
	);
};

export default TimeLineBullet;

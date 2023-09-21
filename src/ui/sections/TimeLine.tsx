import { ShortLinkDataTypes } from "@/Types/endpoints";
import { creatLinkAPI } from "@/api/endpoints/url.endpoint.ts";
import React, { useEffect, useState } from "react";
import TimeLineBullet from "@components/TimeLineBullet";

const TimeLine: React.FC = () => {
	const [longLink, setLongLink] = useState<string>("");
	// const [shortLink, setShortLink] = useState<string>("");
	const [shortLinkData, setShortLinkData] = useState<ShortLinkDataTypes>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [Coppied, setCoppied] = useState<boolean>(false);

	async function handleSubmit(e: any) {
		e.preventDefault();
		setIsLoading(true);

		if (longLink !== "") {
			const { error, serverResponse } = await creatLinkAPI(longLink);

			if (!error) {
				setShortLinkData({
					shortLink: serverResponse?.shortLink,
					visitors: serverResponse?.visitors,
				});
				setIsLoading(false);
			}

			console.log(error);
			setIsLoading(false);
		}
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
		setLongLink(e.target.value);
	}

	function handleCopy(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
	}

	useEffect(() => {
		if (Coppied === true) {
			setTimeout(() => {
				setCoppied(false);
			}, 2000);
		}
	}, [Coppied]);

	return (
		<section className="bg-base w-full h-auto p-8 py-[80px]">
			{/* head */}
			<div className="header w-full flex justify-center mt-[2px]">
				<div className="w-[346px] text-white text-center">
					<h1 className="font-cd-bold ">TimeLine</h1>

					<p className="font-mon text-sm  leading-[172.4%]">
						Here is the breakdown of the time we anticipate using for the upcoming event.
					</p>
				</div>
			</div>

			{/* Time line */}

			<TimeLineBullet />

			{/* <div className="h-40"></div> */}
		</section>
	);

	// <div className="bullet rounded-full centered mt-[200px] relative">
	// 				{/* bullet tail */}
	// 				<div className="bullet_tail w-1 h-[137px] bg-base-2 absolute bottom-16"></div>

	// 				{/* left content */}
	// 				<div className="left_content br min-w-[511px] p-4 absolute right-[100px] text-right">

	// 					<h1 className="into font-cd-bold text-[24px] text-base-2">Hackathon Announcement</h1>
	// 					<h1 className="text-white2 font-mon text-sm">
	// 						The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready
	// 						to register
	// 					</h1>
	// 				</div>

	// 					{/* right content */}
	// 				<div className="left_content br min-w-[511px] p-4 absolute left-[100px] text-left">

	// 					<h1 className="into font-cd-bold text-[24px]  text-base-2">November 18, 2023</h1>
	// 					{/* <h1 className="text-white2 font-mon text-sm">
	// 						The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready
	// 						to register
	// 					</h1> */}
	// 				</div>

	// 				<p className="number">1</p>
	// 			</div>
};

export default TimeLine;
import { ShortLinkDataTypes } from "@/Types/endpoints";
import { creatLinkAPI } from "@/api/endpoints/url.endpoint.ts";
import { PasteSVG, ShareSVG } from "@/assets";
import React, { useEffect, useState } from "react";
import Hero from "@sections/Hero";
import { Big, Medal, TimeLine } from "@/ui/sections";

const Home: React.FC = () => {
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

	useEffect(() =>
	{
		if (Coppied === true) {
			setTimeout(() => {
				setCoppied(false);
			}, 2000);
		}
	}, [Coppied]);


	return (
		<div className="bg-base">
			<Hero />
			<Big />
			<TimeLine />
			<Medal/>
		</div>
	);
};


export default Home;

// import React from "react";

import { useNavigate } from "react-router-dom";

interface proTypes {
	contact?: boolean;
}

const Navbar = ({ contact }: proTypes) => {
	// const [longLink, setLongLink] = useState<string>("");
	// const [shortLink, setShortLink] = useState<string>("");
	// const [shortLinkData, setShortLinkData] = useState<ShortLinkDataTypes>();
	// const [isLoading, setIsLoading] = useState<boolean>(false);
	// const [Coppied, setCoppied] = useState<boolean>(false);
	const navigate = useNavigate()

	// useEffect(() =>
	// {
	// 	if (Coppied === true) {
	// 		setTimeout(() => {
	// 			setCoppied(false);
	// 		}, 2000);
	// 	}
	// }, [Coppied]);

	function handleNav(link: string)
	{
		console.log(link);
		
		navigate(link)
	}

	const navList = [
		{
			name: "Timeline",
			link: "#timeline",
		},
		{
			name: "Overview",
			link: "/",
		},
		{
			name: "FAQs",
			link: "#ask",
		},
		{
			name: "Contacts",
			link: "/contact",
		},
	];

	return (
		<div
			className={`bg-transparent w-full ${
				!contact && "border-b"
			} border-[#ffffff2e] h-auto px-[128px] flex items-center justify-between pt-[40px] pb-[15px] z-50`}
		>
			<h1 role="button" onClick={() => handleNav('/')}  className="logo text-white text-4xl font-cd-bold">
				get <span className="text-base-2">linked</span>
			</h1>

			<div className="flex items-center space-x-[121px]">
				<nav className="flex items-center space-x-[56px]">
					{navList.map((i: any, k: number) => (
						<div role="button" onClick={() => handleNav(i.link)}  key={k} className="navlist">
							{i.name}
						</div>
					))}
				</nav>

				<button onClick={() => handleNav('/auth')}  className="btn">Register</button>
			</div>
		</div>
	);
};

export default Navbar;

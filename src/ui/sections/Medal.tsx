const Big: React.FC = () => {
	return (
		<>
			{/*
			 */}

			<section
				id="medal"
				className="w-full bg-base py-[36px] flex flex-col sm:flex-row justify-center sm:px-[200px] px-[64px] items-center relative"
			>
				{/* <img src="/h-glow3.png" alt="" className="w-[400px] h-[950px] right-0 top-20 absolute z-0 " /> */}

				{/*  */}
				<div id="h-cup" className="h-cup hidden md:flex sm:w-[548px] w-[321px] sm:h-[485px] h-[285px] relative" />

				<div className="spave w-[109px]"></div>

				{/*  */}
				{/* text */}
				<div className="  sm:w-[540px] relative  sm:h-[750px] flex flex-col items-center justify-center">
					<div className="sm:text-left text-center sm:w-[401px]  ">
						<h1 className="into font-cd-bold text-[20px] sm:text-[32px] g">Prizes and</h1>
						<h1 className="text-base-2 font-cd-bold text-[20px] sm:text-[32px]">Rewards</h1>

						<p className="body font-mon sm:text-sm text-xs w-[80%] mx-auto sm:mx-0 text-center sm:text-left sm:w-[90%]  leading-[27.5px] ">
							Highlight of the prizes or rewards for winners and for participants.
						</p>
					</div>

					<div id="h-cup" className="h-cup sm:w-[548px] w-[321px] sm:h-[485px] h-[285px] relative mt-10 sm:hidden" />

					<div id="rewards" className="mt-9 w-full h-[200px]  sm:w-[600px] sm:h-[400px]  relative">
						{/* <img src="/medal.png" className="w-full h-full" alt="" /> */}
					</div>
				</div>
			</section>

			{/*  */}
			<section
				id="partner"
				className="partner w-full h-auto sm:p-[114px] p-10 border-b border-[#ffffff4d]  flex flex-col items-center bg-base"
			>
				{/* head */}
				<div className="header w-full flex justify-center mt-[2px]">
					<div className="sm:w-[446px] w-full text-white text-center ">
						<h1 className="font-cd-bold text-xl sm:text-[32px]">Partners and Sponsors</h1>

						<p className="font-mon sm:text-sm text-xs  leading-[172.4%]">
							Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors
						</p>
					</div>
				</div>

				{/* patners */}

				<div className="w-full sm:w-[90%] sm:h-[540px] h-[150px] p-6 rounded centered border border-base-2  sm:mt-[65px] mt-[40px]">
					<img src="/h-pat.png" alt="" className="patner sm:w-[878px] w-[240px] h-[77px] sm:h-[252px] hidden sm:flex" />
					<img src="/h-pat-m.png" alt="" className="patner   sm:hidden" />
				</div>
			</section>

			{/*  */}

			<section
				id="guard"
				className="partner w-full h-auto p-8 border-b border-[#ffffff4d]  flex flex-col sm:flex-row justify-center py-[77px] bg-base"
			>
				{/* <img src="/h-glow3.png" alt="" className="w-[400px] h-[950px] right-0 top-20 absolute z-0 br " /> */}
				{/* text */}
				<div className="w-full text-center sm:text-left  sm:w-[540px] relative">
					{/* <img src="/h-glow2.png" alt="" className="w-[800px] h-[400px] right-0 bottom-[10px] absolute z-0" /> */}

					<h1 className="into font-cd-bold sm:text-[32px] text-xl">Privacy Policy and</h1>
					<h1 className="text-base-2 font-cd-bold sm:text-[32px] text-xl mt-1">Terms</h1>

					<p className="body font-mon text-xs sm:text-sm   sm:w-[90%]  leading-[27.5px] text-[#ffffff58]">
						Last updated on September 12, 2023
					</p>

					<p className="body font-mon sm:text-sm text-[12px]   sm:w-[90%]  sm:leading-[27.5px] leading-[22.68px]">
						Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our
						participant
					</p>

					<div className="list w-full mt-[60px] h-auto sm:px-[70px] px-4 py-10  sm:py-[56px] border border-base-2 rounded bg-[#0906060a]">
						<p className="body font-mon sm:text-sm text-[12px] leading-[25px]  sm:leading-[27.5px] text-justify">
							At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal
							information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you
							participate in our tech hackathon event. By participating in our event, you consent to the practices
							described in this policy.
						</p>

						<div className="mt-6 text-left">
							<h1 className="text-base-2 font-cd-bold">Licensing Policy</h1>
							<h1 className="into font-mon text-sm font-bold">Here are terms of our Standard License:</h1>
						</div>

						<div className="list_item flex space-x-2 items-start mt-4 text-left ">
							<div className="bullet_icone w-[17px] mt-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
									<circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
									<path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
								</svg>
							</div>

							<p className="body font-mon text-sm   leading-[27.5px] ">
								The Standard License grants you a non-exclusive right to navigate and register for our event
							</p>
						</div>

						<div className="list_item flex space-x-2 items-start mt-4 text-left">
							<div className="bullet_icone w-[17px]  mt-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
									<circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
									<path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
								</svg>
							</div>

							<p className="body font-mon text-sm   leading-[27.5px] ">
								The Standard License grants you a non-exclusive right to navigate and register for our event
							</p>
						</div>

						<div className="w-full mt-4 flex  justify-center">
							<button className="btn small">Read More</button>
						</div>
					</div>
				</div>

				<div className="spave h-9 w-[39px]"></div>

				<img src="/h-guard.png" alt="" className="sr sm:w-[600px] sm:h-[920px]" />
			</section>

			<footer className="w-full sm:px-[220px] py-[70px] px-16">
				<div className="footer_content flex flex-col  sm:flex-row sm:h-[200px] justify-between w-full sm:w-auto">
					<div className="first_ h-full justify-between flex  flex-col">
						{/*  */}
						<div className="b">
							<h1 className="logo text-white text-2xl font-cd-bold">
								get <span className="text-base-2">linked</span>
							</h1>

							<p className="body font-mon text-xs mt-3  leading-[172.4%]  sm:w-[410px] w-[271px]">
								Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with
								the aim of showcasing young and talented individuals in the field of technology
							</p>
						</div>

						<p className="body font-mon text-xs text-white flex items-center mt-10 sm:mt-0  leading-[27.5px] ">
							Terms of Use <div className="h-4 border border-base-1 mx-2 w-[1px]"></div>Privacy Policy
						</p>
					</div>

					<div className="first_ h-full justify-between flex  flex-col mt-8 sm:mt-0 space-y-4 sm:space-y-0">
						{["Usefull link", "Overview", "Timeline", "FAQs", "Register"].map((i: string, k: number) => (
							<p key={k} className={`text-sm font-mon font-semibold ${k == 0 ? "text-base-2" : "text-white"} `}>
								{i}
							</p>
						))}

						<div className="flex space-x-4 items-center">
							<p className={`text-base-2 font-xs`}>Follow us</p>

							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path
									d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
									fill="white"
								/>
							</svg>

							<svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
								<path
									d="M6.04545 0H0L7.13364 9.3619L0.388636 17H2.67727L8.19418 10.7533L12.9545 17H19L11.5658 7.2437L17.9636 0H15.675L10.5053 5.8531L6.04545 0ZM13.8182 15.3L3.45455 1.7H5.18182L15.5455 15.3H13.8182Z"
									fill="white"
								/>
							</svg>

							<svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
								<path
									d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
									fill="#F8F8F8"
								/>
							</svg>

							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path
									d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
									fill="#F8F8F8"
								/>
							</svg>
						</div>
					</div>

					<div className="first_ h-full space-y-5 flex flex-col mt-[64px] sm:mt-0">
						<p className={`text-sm font-mon font-semibold text-base-2`}>Contact Us</p>

						<div className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
								<path
									d="M12 6C11.9997 4.4088 11.3674 2.88286 10.2423 1.75771C9.11714 0.632561 7.5912 0.000318145 6 0V1.2C6.94926 1.20022 7.87715 1.48178 8.66646 2.00912C9.45576 2.53646 10.0711 3.28592 10.4346 4.1628C10.6759 4.74526 10.8 5.36955 10.8 6H12ZM0 4.8V1.8C0 1.64087 0.0632141 1.48826 0.175736 1.37574C0.288258 1.26321 0.44087 1.2 0.6 1.2H3.6C3.75913 1.2 3.91174 1.26321 4.02426 1.37574C4.13679 1.48826 4.2 1.64087 4.2 1.8V4.2C4.2 4.35913 4.13679 4.51174 4.02426 4.62426C3.91174 4.73679 3.75913 4.8 3.6 4.8H2.4C2.4 6.07304 2.90571 7.29394 3.80589 8.19411C4.70606 9.09429 5.92696 9.6 7.2 9.6V8.4C7.2 8.24087 7.26321 8.08826 7.37574 7.97574C7.48826 7.86321 7.64087 7.8 7.8 7.8H10.2C10.3591 7.8 10.5117 7.86321 10.6243 7.97574C10.7368 8.08826 10.8 8.24087 10.8 8.4V11.4C10.8 11.5591 10.7368 11.7117 10.6243 11.8243C10.5117 11.9368 10.3591 12 10.2 12H7.2C3.2238 12 0 8.7762 0 4.8Z"
									fill="#F8F8F8"
								/>
								<path
									d="M9.3258 4.62279C9.50692 5.05949 9.6001 5.52763 9.6 6.00039H8.52C8.52008 5.66944 8.45495 5.34171 8.32834 5.03594C8.20172 4.73016 8.0161 4.45232 7.78208 4.21831C7.54807 3.98429 7.27023 3.79867 6.96446 3.67205C6.65868 3.54544 6.33095 3.48031 6 3.48039V2.40039C6.71199 2.40043 7.40798 2.61159 7.99997 3.00717C8.59195 3.40275 9.05334 3.96499 9.3258 4.62279Z"
									fill="#F8F8F8"
								/>
							</svg>

							<p className="text-white font-mon text-xs">+234 6707653444</p>
						</div>

						<div className="flex items-start space-x-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
								<path
									d="M6.5 0C8.22391 0 9.87721 0.677294 11.0962 1.88289C12.3152 3.08848 13 4.72361 13 6.42857C13 9.09 10.9489 11.8786 6.93333 14.8571C6.80832 14.9499 6.65627 15 6.5 15C6.34373 15 6.19168 14.9499 6.06667 14.8571C2.05111 11.8786 0 9.09 0 6.42857C0 4.72361 0.684819 3.08848 1.90381 1.88289C3.12279 0.677294 4.77609 0 6.5 0ZM6.5 4.28571C5.92536 4.28571 5.37426 4.51148 4.96794 4.91334C4.56161 5.31521 4.33333 5.86025 4.33333 6.42857C4.33333 6.99689 4.56161 7.54194 4.96794 7.9438C5.37426 8.34566 5.92536 8.57143 6.5 8.57143C7.07464 8.57143 7.62574 8.34566 8.03206 7.9438C8.43839 7.54194 8.66667 6.99689 8.66667 6.42857C8.66667 5.86025 8.43839 5.31521 8.03206 4.91334C7.62574 4.51148 7.07464 4.28571 6.5 4.28571Z"
									fill="#F8F8F8"
								/>
							</svg>

							<p className="text-white w-[89px] font-mon text-xs">27,Alara Street Yaba 100012 Lagos State</p>
						</div>
					</div>

					<div className="w-full sm:hidden mt-[60px]">
						<p className="font-mon text-[12px] text-white text-center">All rights reserved. © getlinked Ltd.</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Big;

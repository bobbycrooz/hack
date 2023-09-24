import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Navbar from "@components/Navbar";
import { RegisterAPI, categoryAPI } from "@/api/endpoints/auth.endpoint";
import SuccessModal from "../components/SuccessModal";

const Register: React.FC = () => {
	const [cred, setCredentials] = useState({
		email: "bobby@eexample.com",
		phone_number: "09077726791",
		team_name: "lazyBones",
		group_size: 10,
		project_topic: "Web server propagation",
		category: 1,
		privacy_poclicy_accepted: true,
	});

	const [categoryList, setCatList] = useState([]);
	const [isLoading, setIsloading] = useState(false);
	const [showModal, setShowModal] = useState<boolean>(false);

	function handleShowModal() {
		setShowModal(!showModal);
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>, field: string) {
		e.preventDefault();

		// return console.log("clicked.", e.target.value);

		if (field == "check") {
			return setCredentials({
				...cred,
				privacy_poclicy_accepted: !cred.privacy_poclicy_accepted,
			});
		}

		setCredentials({
			...cred,
			[field]: e.target.value,
		});
	}

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		setIsloading(true);

		// console.log(cred);
		if (cred.email.length == 0 && cred.phone_number.length == 0 && cred.team_name.length == 0)
		{
			return alert('All fields are required!')
		}
		
		

		const { error, serverResponse } = await RegisterAPI(cred);

		if (!error) {
			console.log("registered", serverResponse);
			setIsloading(false);
			handleShowModal();
		} else {
			setIsloading(false);
			// console.log(serverResponse.);
			
			alert('Something went wrong!');
		}
	}

	async function fetchCategory() {
		const { error, serverResponse } = await categoryAPI();

		if (!error) {
			setCatList(serverResponse as any);
			console.log(serverResponse, "--");
		}
	}

	useEffect(() => {
		fetchCategory();
	}, []);

	return (
		<section id="contact" className="contact_section bg-base w-screen min-h-screen">
			<Navbar contact />

			<div className="content flex flex-col sm:flex-row justify-center w-full py-14">
				{/*  */}
				<div className="man_seat sm:-ml-20 sm:w-[700px] sm:h-[717px] w-[235px] h-[210px] mx-auto sm:mx-0">
					<img src="/h-seating.png" className="w-full h-full" alt="" />
				</div>

				{/* Form --destop */}
				<div className="form_box w-[717px] -ml-16 px-[70px] py-[65px] space-y-[34px] hidden sm:block">
					<div className="text-base-2 font-Cd-SemiBold">
						<h1 className="text-[32px]">Register</h1>
						<div className="flex items-end">
							<p className="text-sm font-mon mt-[46px] text-white">Be part of this movement!</p>
							<img src="/h-waka.svg" className="w-[101px] h-[30px]" alt="" />
						</div>
						<p className="text-xl font-mon  mt-[19px]  text-white">CREATE YOUR ACCOUNT</p>
					</div>

					<form onSubmit={onSubmit} className="w-full">
						<div className="form grid sm:grid-cols-2 gap-6 w-full">
							<div className="field_l">
								<label htmlFor="TeamName">Teams name</label>
								<input
									type="text"
									name="TeamName"
									id=""
									className=""
									value={cred.team_name}
									onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, "team_name")}
									placeholder="Enter the name of your group"
								/>
							</div>

							{/*  */}
							<div className="field_l">
								<label htmlFor="TeamName">Phone</label>
								<input
									type="phone"
									name="TeamName"
									id=""
									className=""
									placeholder="Enter your phone number"
									value={cred.phone_number}
									onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, "phone_number")}
								/>
							</div>

							{/*  */}
							<div className="field_l">
								<label htmlFor="TeamName">Email</label>
								<input
									type="email"
									name="email"
									id=""
									className=""
									placeholder="Enter the name of your group"
									value={cred.email}
									onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, "email")}
								/>
							</div>

							{/*  */}
							<div className="field_l">
								<label htmlFor="TeamName">Project topic</label>
								<input
									type="text"
									name="TeamName"
									id=""
									className=""
									placeholder="Enter the name of your group"
									value={cred.project_topic}
									onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, "project_topic")}
								/>
							</div>

							{/* ---- select --- */}
							<div className="field_l">
								<label htmlFor="TeamName">Category</label>
								<select name="" id="" value={cred.category} onChange={(e: any) => handleChange(e, "category")}>
									<option>Select your category</option>

									{categoryList?.map((i: any, k: number) => (
										<option key={k} value={Number(i.id)}>
											{i.name}
										</option>
									))}
								</select>
							</div>

							{/*  */}
							<div className="field_l">
								<label htmlFor="TeamName">Group size</label>
								<select name="" id="" value={cred.group_size} onChange={(e: any) => handleChange(e, "group_size")}>
									<option value="select">Select</option>
									{[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((i: any, k: number) => (
										<option key={k} value={i}>
											{i}
										</option>
									))}
								</select>
							</div>
						</div>

						<p className="font-mon font-normal italic text-sm text-base-3 mt-3">
							Please review your registration details before submitting
						</p>

						<div className="flex items-center space-x-2 mt-4">
							<input
								type="checkbox"
								name=""
								checked={cred.privacy_poclicy_accepted}
								onChange={(e) => handleChange(e, "check")}
								id=""
							/>

							<p className="font-mon font-normal  text-sm text-white">
								Please review your registration details before submitting
							</p>
						</div>
						<div className="w-full mt-[22px] ">
							<button disabled={isLoading} className={`btn  full  ${isLoading && "disabled:cursor-wait"}`}>
								Register
							</button>
						</div>
					</form>
				</div>

				{/* Form --mobile */}
				<div className=" px-[40px] sm:hidden  pb-[35px] pt-0 space-y-[34px]">
					<div className="text-base-2 font-Cd-SemiBold">
						{/* <h1 className="text-[32px]">Register</h1> */}
						<div className="flex items-end">
							<p className="text-sm font-mon  text-white">Be part of this movement!</p>
							<img src="/h-waka.svg" className="w-[101px] h-[30px]" alt="" />
						</div>
						<p className="text-xl font-mon  mt-[19px]  text-white">CREATE YOUR ACCOUNT</p>
					</div>

					<form action="" className="w-full">
						<div className="form grid sm:grid-cols-2 gap-6 w-full">
							<div className="field_l">
								<label htmlFor="TeamName">Teams name</label>
								<input
									type="text"
									name="TeamName"
									id=""
									className=""
									value={cred.team_name}
									onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, "team_name")}
									placeholder="Enter the name of your group"
								/>
							</div>

							{/*  */}
							<div className="field_l">
								<label htmlFor="TeamName">Phone</label>
								<input
									type="text"
									name="TeamName"
									id=""
									className=""
									placeholder="Enter the name of your group"
									value={cred.phone_number}
									onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, "phone_number")}
								/>
							</div>

							{/*  */}
							<div className="field_l">
								<label htmlFor="TeamName">Email</label>
								<input
									type="email"
									name="email"
									id=""
									className=""
									placeholder="Enter the name of your group"
									value={cred.email}
									onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, "email")}
								/>
							</div>

							{/*  */}
							<div className="field_l">
								<label htmlFor="TeamName">Project topic</label>
								<input
									type="text"
									name="TeamName"
									id=""
									className=""
									placeholder="Enter the name of your group"
									value={cred.project_topic}
									onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, "project_topic")}
								/>
							</div>

							{/* ----selct for moile----  */}
							<div className="w-full flex space-x-4">
								{/*  */}
								<div className="field_l">
									<label htmlFor="TeamName">Category</label>
									<select name="" id="" value={cred.category} onChange={(e: any) => handleChange(e, "category")}>
										<option>Select your category</option>

										{categoryList?.map((i: any, k: number) => (
											<option key={k} value={Number(i.id)}>
												{i.name}
											</option>
										))}
									</select>
								</div>

								{/*  */}
								<div className="field_l">
									<label htmlFor="TeamName">Group size</label>
									<select name="" id="" value={cred.group_size} onChange={(e: any) => handleChange(e, "group_size")}>
										<option value="select">Select</option>
										{[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((i: any, k: number) => (
											<option key={k} value={i}>
												{i}
											</option>
										))}
									</select>
								</div>
							</div>
						</div>

						<p className="font-mon font-normal italic text-[9px] text-base-3 mt-3">
							Please review your registration details before submitting
						</p>

						<div className="flex items-center space-x-2 mt-4">
							{/* <span className="w-[14px] h-[14px] border rounded"></span> */}
							<input
								type="checkbox"
								name=""
								checked={cred.privacy_poclicy_accepted}
								onChange={(e) => handleChange(e, "check")}
								id=""
							/>

							<p className="font-mon font-normal  text-sm text-white">
								I agreed with the event terms and conditions and privacy policy
							</p>
						</div>
						<div className="w-full mt-[22px] flex justify-center">
							<button disabled={true} className={`btn  ${isLoading && "disabled:cursor-wait"}`}>
								Register
							</button>
						</div>
					</form>
				</div>
			</div>

			<SuccessModal showModal={showModal} handleShowModal={handleShowModal} />
		</section>
	);
};

export default Register;

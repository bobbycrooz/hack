import React from "react";
import Navbar from "@components/Navbar";

const Register: React.FC = () => {
	return (
		<section id="contact" className="contact_section bg-base w-screen min-h-screen">
			<Navbar contact />

			<div className="content flex justify-center w-full py-14">
				{/*  */}
				<div className="man_seat -ml-20 w-[700px] h-[717px]">
					<img src="/h-seating.png" className="w-full h-full" alt="" />
				</div>

				{/* Form */}
				<div className="form_box w-[717px] -ml-16 px-[70px] py-[65px] space-y-[34px]">
					<div className="text-base-2 font-Cd-SemiBold">
						<h1 className="text-[32px]">Register</h1>
						<div className="flex items-end">
							<p className="text-sm font-mon mt-[46px] text-white">Be part of this movement!</p>
							<img src="/h-waka.svg" className="w-[101px] h-[30px]" alt="" />
						</div>
						<p className="text-xl font-mon  mt-[19px]  text-white">CREATE YOUR ACCOUNT</p>
					</div>

					<form action="" className="w-full">
						<div className="form grid grid-cols-2 gap-6 w-full">
							<div className="field_l">
								<label htmlFor="TeamName">Teams name</label>
								<input type="text" name="TeamName" id="" className="" placeholder="Enter the name of your group" />
							</div>

							{/*  */}
							<div className="field_l">
								<label htmlFor="TeamName">Phone</label>
								<input type="text" name="TeamName" id="" className="" placeholder="Enter the name of your group" />
							</div>

							{/*  */}
							<div className="field_l">
								<label htmlFor="TeamName">Email</label>
								<input type="text" name="TeamName" id="" className="" placeholder="Enter the name of your group" />
							</div>

							{/*  */}
							<div className="field_l">
								<label htmlFor="TeamName">Project topic</label>
								<input type="text" name="TeamName" id="" className="" placeholder="Enter the name of your group" />
							</div>

							{/*  */}
							<div className="field_l">
								<label htmlFor="TeamName">Group size</label>
								<select name="" id="">
									<option value="select">select your category</option>
									<option value="1"></option>
									<option value="2"></option>
								</select>
							</div>

							{/*  */}
							<div className="field_l">
								<label htmlFor="TeamName">Group size</label>
								<select name="" id="">
									<option value="select">Select</option>
									<option value="1"></option>
									<option value="2"></option>
								</select>
							</div>
						</div>

						<p className="font-mon font-normal italic text-sm text-base-3 mt-3">
							Please review your registration details before submitting
						</p>

						<div className="flex items-center space-x-2 mt-4">
							<span className="w-[14px] h-[14px] border rounded"></span>

							<p className="font-mon font-normal  text-sm text-white">
								Please review your registration details before submitting
							</p>
						</div>
						<div className="w-full mt-[22px]">
							<button className="btn full">Register Now</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Register;

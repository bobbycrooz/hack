
import React from "react";
import TimeLineBullet from "@components/TimeLineBullet";

const TimeLine: React.FC = () => {


	return (
		<section id="timeline" className="bg-base w-full h-auto p-8 py-[80px]">
			{/* head */}
			<div className="header w-full flex justify-center mt-[2px]">
				<div className="w-[346px] text-white text-center">
					<h1 className="font-cd-bold text-xl sm:text-[32px]">TimeLine</h1>

					<p className="font-mon md:text-sm text-xs  leading-[172.4%]">
						Here is the breakdown of the time we anticipate using for the upcoming event.
					</p>
				</div>
			</div>

			{/* Time line */}
			<TimeLineBullet />

		</section>
	);
};

export default TimeLine;

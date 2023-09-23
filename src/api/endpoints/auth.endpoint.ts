// import { LoginUserType, UserTypes } from "@types";
import { ResponsTypes } from "@/Types/endpoints";
import service from "../index";

export function contactAPI(data: any): ResponsTypes {
	// console.log('look i got here');
	return service({
		url: "/hackathon/contact-form",
		method: "post",
		data,
	});
}


export function RegisterAPI(data: any): ResponsTypes {
	// console.log('look i got here');
	return service({
		url: "/hackathon/registration",
		method: "post",
		data,
	});
}



export function categoryAPI(): ResponsTypes {
	// console.log('look i got here');
	return service({
		url: "/hackathon/categories-list",
		method: "get",
	});
}



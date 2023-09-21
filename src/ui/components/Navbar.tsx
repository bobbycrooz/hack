
import React from "react";


const Navbar: React.FC = () => {
	// const [longLink, setLongLink] = useState<string>("");
	// const [shortLink, setShortLink] = useState<string>("");
	// const [shortLinkData, setShortLinkData] = useState<ShortLinkDataTypes>();
	// const [isLoading, setIsLoading] = useState<boolean>(false);
	// const [Coppied, setCoppied] = useState<boolean>(false);

	
	// useEffect(() =>
	// {
	// 	if (Coppied === true) {
	// 		setTimeout(() => {
	// 			setCoppied(false);
	// 		}, 2000);
	// 	}
      // }, [Coppied]);
      
      const navList = [
            {
                  name: "Timeline",
                  link: "/home"
            },
                 {
                  name: "Overview",
                  link: "/home"
            },     {
                  name: "FAQs",
                  link: "/home"
            },     {
                  name: "Contacts",
                  link: "/home"
            },
      ]


	return (
		<div className="bg-transparent w-full border-b border-[#ffffff2e] h-auto px-[128px] flex items-center justify-between pt-[40px] pb-[15px]">
                  <h1 className="logo text-white text-4xl font-cd-bold">
                        get <span className="text-base-2">linked</span>
                  </h1>

                  <div className="flex items-center space-x-[121px]">

                        <nav className="flex items-center space-x-[56px]">

                              {navList.map((i: any, k: number) => (
                                    <div key={k} className="navlist">
                                          {i.name}
                                    </div>
                              ))
                                    
}


                        </nav>

                        <button className="btn">
                              Register
                        </button>


                  </div>
		</div>
	);
};


export default Navbar;

import React from 'react';
import Marquee from "react-fast-marquee";

const TrustedCompanies = () => {
    return (
        <div className="w-[90%] mx-auto bg-white py-10 flex flex-col items-start gap-5 font-inter my-28">
          <div className="flex flex-col items-start gap-2 mb-5 w-full">
            
            <p className="text-[#737D8C] w-full text-center text-sm font-medium bg-[url('https://gist.github.com/ShejanMahamud/422c700fd689df95ca29cc335e2311d2/raw/850f1729a61dc67e6ebd136203a50dd3070e3e17/gradient.svg')] bg-no-repeat bg-left-top py-10">
            Trusted by 100+ Companies across the globe! 
            </p>
          </div>
          <Marquee>
            <div className="w-full flex items-center gap-20 *:grayscale *:w-40">
              <img src="https://i.ibb.co/C79KYTg/logitech.png" alt="logitech.png" />
              <img src="https://i.ibb.co/TBh51x2/netflix.png" alt="netflix.png" />
              <img src="https://i.ibb.co/DKS67bk/samsung.png" alt="samsung.png" />
              <img src="https://i.ibb.co/nBcLnt3/spotify.png" alt="spotify.png" />
              <img src="https://i.ibb.co/2q0Grhq/pngwing-com-9.png" alt="amazon.png" className="mr-16"/>
            </div>
          </Marquee>
        </div>
      );
    };
    

export default TrustedCompanies
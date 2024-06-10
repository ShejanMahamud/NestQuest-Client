import React from "react";

const Services = () => {
  return (
    <div className="w-full bg-[#D4D4D44D] lg:p-20 p-10 flex items-center flex-col justify-center">
      <h1 className="text-[#2B2B2B] text-xl font-medium mb-3">OUR SERVICES</h1>
      <p className="text-[#0B090A] text-2xl font-bold text-center">We always strive to provide the best services</p>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 row-auto items-stretch gap-10 mt-16">
        <div className="flex w-full flex-col items-center justify-center gap-3 bg-white rounded-lg lg:p-10 p-5">
          <div className="bg-[#4361EE] h-20 w-20 rounded-full drop-shadow-custom mb-5 flex items-center justify-center">
            <img src="https://gist.github.com/ShejanMahamud/c4aa7662d9cf3b6fdb91d175050d335c/raw/14a69ec920a1bb14e2c578e33d7f1a884b9bf317/search.svg" alt="Buy a New House" />
          </div>
          <h1 className="text-[#2B2B2B] font-medium text-lg">Buy a New House</h1>
          <p className="text-center text-[#808080] text-sm">Discover your dream home with our extensive listings and expert guidance to make your purchase smooth and stress-free.</p>
        </div>
        <div className="flex w-full flex-col items-center gap-3 bg-white rounded-lg lg:p-10 p-5">
          <div className="bg-[#4361EE] h-20 w-20 rounded-full drop-shadow-custom mb-5 flex items-center justify-center">
            <img src="https://gist.github.com/ShejanMahamud/ce509cc9972bea0e3a567f421e0293c7/raw/39557a215d6c4413571151ce3bff4a6b7b99d945/home.svg" alt="Sell a House" />
          </div>
          <h1 className="text-[#2B2B2B] font-medium text-lg">Sell a House</h1>
          <p className="text-center text-[#808080] text-sm">Get the best value for your property with our comprehensive selling services, tailored to meet your needs and expectations.</p>
        </div>
        <div className="flex w-full flex-col items-center gap-3 bg-white rounded-lg lg:p-10 p-5">
          <div className="bg-[#4361EE] h-20 w-20 rounded-full drop-shadow-custom mb-5 flex items-center justify-center ">
            <img src="https://gist.github.com/ShejanMahamud/49ad5a05bdeb61a7db45c29a36fb21de/raw/745496fa623f2f818f966a23efe21935db46d920/rent.svg" alt="Rent a House" />
          </div>
          <h1 className="text-[#2B2B2B] font-medium text-lg">Rent a House</h1>
          <p className="text-center text-[#808080] text-sm">Find the perfect rental property with our extensive listings and expert support, ensuring a seamless rental experience.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

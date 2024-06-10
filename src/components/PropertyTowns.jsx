import React from 'react';

const PropertyTowns = () => {
  return (
    <div className='my-28 w-full px-4 md:px-10 lg:px-20'>
      <h1 className='text-3xl font-bold text-center'>AREAS ACROSS THE TOWN</h1>
      <p className='text-center text-gray-500 mt-2'>Explore Properties in Various Neighborhoods</p>
      <div className='w-full mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {[
          { id: 1, count: 216, city: "New York City, NY", img: "https://i.ibb.co/Qc6KpTQ/alexander-andrews-Dr6-VBM0-KNsw-unsplash.jpg" },
          { id: 2, count: 123, city: "Kansas City, MO", img: "https://i.ibb.co/SxSXZSg/pexels-expect-best-79873-323780.jpg" },
          { id: 3, count: 98, city: "Los Angeles, CA", img: "https://i.ibb.co/mtVcvCx/luke-stackpoole-e-Wq-Og-J-lfi-I-unsplash.jpg" },
          { id: 4, count: 75, city: "Chicago, IL", img: "https://i.ibb.co/QbsbLMW/log-home-58166-1280.jpg" },
          { id: 5, count: 89, city: "Miami, FL", img: "https://i.ibb.co/2jxJrRt/home-8.jpg" },
          { id: 6, count: 104, city: "San Francisco, CA", img: "https://i.ibb.co/9g8SyTD/home-1.jpg" },
          { id: 7, count: 67, city: "Houston, TX", img: "https://i.ibb.co/s6ff9Sh/banner-2.webp" },
          { id: 8, count: 145, city: "Seattle, WA", img: "https://i.ibb.co/BwjQx2T/banner-1.webp" },
        ].map((property) => (
          <div key={property.id} className='w-full h-[300px] relative'>
            <div className="bg-black bg-opacity-30 h-[300px] w-full absolute rounded-3xl"></div>
            <div className='absolute flex flex-col items-start gap-2 bottom-4 left-4'>
              <h1 className='text-5xl font-bold text-white'>{property.count}</h1>
              <p className='text-sm font-medium text-white'>{property.city}</p>
            </div>
            <img src={property.img} alt={property.city} className='w-full h-full object-cover rounded-3xl' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyTowns;

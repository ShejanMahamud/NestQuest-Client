import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PropertyCard from '../Utils/PropertyCard';
import useAxiosCommon from './../hooks/useAxiosCommon';

const AllProperties = () => {
const axiosCommon = useAxiosCommon()

const {data:properties,isPending} = useQuery({
  queryKey: ['verified_properties'],
  queryFn: async () => {
    const {data} = await axiosCommon.get('/properties?verified=true')
    return data
  }
})

if(isPending){
  return <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
  <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
  <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
  <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
</div>
}

  return (
    <div className='w-full mx-auto'>
        <div className="bg-register bg-no-repeat bg-cover bg-center flex flex-col items-center gap-5 w-full lg:px-20 px-5 py-16">
        <div className="flex items-center justify-between w-full ">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-primary font-medium">CHECKOUT OUR NEW</h1>
            <span className=" font-bold lg:text-3xl md:text-xl text-lg text-white">
              {`Latest Listed Properties `}
            </span>
            <p className=" text-sm text-white">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. 
            </p>
          </div>
            <ul className="flex items-center gap-1 text-white text-sm">
              <li>Home</li>
              <li>/</li>
              <li>All Properties</li>
            </ul>

        </div>
      </div>
      <div className='w-[90%] mx-auto grid grid-cols-3 row-auto items-center gap-x-10 gap-y-5 my-20'>
        {
          properties && properties.map(property => <PropertyCard key={property?._id} property={property}/>)
        }
      </div>
    </div>
  )
}

export default AllProperties
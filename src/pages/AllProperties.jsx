import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { IoIosSearch } from 'react-icons/io';
import PropertyCard from '../Utils/PropertyCard';
import useAxiosCommon from './../hooks/useAxiosCommon';

const AllProperties = () => {
  const [loading, setLoading] = useState(false)
const axiosCommon = useAxiosCommon()
const [properties, setProperties] = useState([])
const {data,isPending} = useQuery({
  queryKey: ['verified_properties'],
  queryFn: async () => {
    const {data} = await axiosCommon.get('/properties')
    setProperties(data)
    return data
  }
})

const handleSearch = async (e) => {
  e.preventDefault();
  setLoading(true)
  try{
    const search = e.target.value;
    const {data} = await axiosCommon.get(`/properties?search=${search}`)
    setProperties(data)
    setLoading(false)
  }
  catch(error){
    console.log(error)
    toast.error('Something Went Wrong')
  }
}
const handleSort = async () => {
  setLoading(true)
try{
  const {data} = await axiosCommon.get(`/properties?sort=true`)
  setProperties(data)
  setLoading(false)
  toast.success('Sort Property Based On Price Range')
}
catch(error){
  toast.error('Soemthing Went Wrong')
}
}

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
      <div className='w-full px-20 flex items-center justify-end mt-5'>
        <div className='flex items-center gap-3'>
          <form  className='border border-gray-400 rounded-lg px-5 py-3 flex items-center gap-5'>
          <input onChange={handleSearch} name='search' type="text" className='focus:outline-none' placeholder='Search Properties'/>
          <button><IoIosSearch className='text-xl text-primary'/></button>
          </form>
          <button onClick={handleSort} className='border border-primary px-4 py-3 rounded-md text-primary'>
            Sort Properties
          </button>
        </div>
      </div>
      <div className='w-[90%] mx-auto grid grid-cols-3 row-auto items-center gap-x-10 gap-y-5 my-20'>
        {
          loading ? <div className="flex items-center justify-center space-x-2 w-full">
          <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
          <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        </div>
          :
          properties && properties.map(property => <PropertyCard key={property?._id} property={property}/>)
        }
      </div>
    </div>
  )
}

export default AllProperties
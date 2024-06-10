import { useQuery } from '@tanstack/react-query';
import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const UserOverview = () => {
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate()
    const {user} = useAuth()

    const {data:stats,isPending} = useQuery({
        queryKey: ['user_stats',user?.email],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/user_stats/${user?.email}`)
            return data
        }
    })

    const { data: properties, isPending:propertiesPending } = useQuery({
        queryKey: ["bought", user?.email],
        queryFn: async () => {
          const { data } = await axiosSecure.get(`/bought/${user?.email}?bought=true`);
          return data;
        },
      });

    if (isPending || propertiesPending) {
        return (
          <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
            <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
          </div>
        );
      }

  return (
    <div className='w-full border-l border-[#e4e5e8] min-h-screen h-auto py-10 lg:px-10 px-5'>
      <div className='flex flex-col items-start gap-2'>
        <h1 className='text-[#18191C] text-lg font-medium'>Hello, {user?.displayName}</h1>
        <p className='text-[#767F8C] text-sm'>Here is your daily activities and properties updates</p>
        <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 row-auto items-center justify-center gap-5 mt-10'>
          <div className='w-full px-5 py-5 flex items-center justify-between rounded-lg bg-[#E7F0FA]'>
            <div className='flex flex-col items-start gap-1'>
              <h1 className='text-[#18191C] text-2xl font-medium'>{stats?.reviewCount}</h1>
              <p className='text-[#18191C] text-sm'>Total Reviews</p>
            </div>
            <div className='bg-white h-16 w-16 flex items-center justify-center rounded-lg'>
              <img src="https://gist.github.com/ShejanMahamud/9efb0aca6ab6d2b3ca2ff85fd8a0dc9d/raw/896ec8a3540a55e3b0e3bacc35ba4e02d4568a4c/building.svg" alt="" />
            </div>
          </div>

          <div className='w-full px-5 py-5 flex items-center justify-between rounded-lg bg-[#FFF6E6]'>
            <div className='flex flex-col items-start gap-1'>
              <h1 className='text-[#18191C] text-2xl font-medium'>{stats?.boughtCount}</h1>
              <p className='text-[#18191C] text-sm'>Bought Properties</p>
            </div>
            <div className='bg-white h-16 w-16 flex items-center justify-center rounded-lg'>
              <img src="https://gist.github.com/ShejanMahamud/223213d691ee363d91fc00b9d573cebf/raw/365950787860aa80f061e5910e6d79cc70bed5bb/sold.svg" alt="" />
            </div>
          </div>

          <div className='w-full px-5 py-5 flex items-center justify-between rounded-lg bg-[#E7F6EA]'>
            <div className='flex flex-col items-start gap-1'>
              <h1 className='text-[#18191C] text-2xl font-medium'>{stats?.wishlistCount}</h1>
              <p className='text-[#18191C] text-sm'>Wishlist Properties</p>
            </div>
            <div className='bg-white h-16 w-16 flex items-center justify-center rounded-lg'>
              <img src="https://gist.github.com/ShejanMahamud/4bfb29867d595a94bcd3f2f633b93dcf/raw/68ae670841ab7518fe51b4e808211575bd5897c3/bell.svg" alt="" />
            </div>
          </div>
        </div>

        <div className='w-full flex items-center justify-between mt-10'>
          <h1 className='text-[#18191C] font-medium'>Recently Bought</h1>
          <button onClick={()=>navigate('/dashboard/user/bought')} className='px-3 py-2 rounded-sm text-[#767F8C] bg-white font-medium flex items-center text-base gap-1'>
              <span>View All</span>
            <img src="https://gist.github.com/ShejanMahamud/1399583e909469763ef617ecfacbda0a/raw/64c4e6b2aac0185c3dfd4d8831585d40b6ea923a/arrow.svg" alt="" />
            </button>
        </div>
        <div className="overflow-x-auto mt-5 w-full">
  <table className="table">
    <thead>
      <tr>
        <th>Property Name</th>
        <th>Property Location</th>
        <th>Price</th>
        <th>Buying Date</th>
      </tr>
    </thead>
    <tbody>
      {
        properties && properties.map(property => (
        <tr key={property?._id}>
        <td>{property?.property_title}</td>
        <td>{property?.property_location}</td>
        <td>{property?.offer_price}</td>
        <td>{property?.buying_date}</td>
      </tr>
        ))
      }
    </tbody>
  </table>
</div>
      </div>
    </div>
  )
}

export default memo(UserOverview)
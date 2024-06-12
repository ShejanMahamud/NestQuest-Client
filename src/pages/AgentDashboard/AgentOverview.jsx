import { useQuery } from '@tanstack/react-query';
import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AgentOverview = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();

  const { data: stats, isLoading } = useQuery({
    queryKey: ['agent_stats', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/agent_stats/${user?.email}`);
      return data;
    },
  });

  const data = [
    { name: 'Properties', propertiesCount: stats?.propertiesCount || 0 },
    { name: 'Requested', requestedCount: stats?.requestedCount || 0 },
    { name: 'Sold', soldCount: stats?.soldCount || 0 },
  ];

  // Transforming the propertyDetails for the LineChart
  const data2 = stats?.propertyDetails?.map(detail => ({
    name: detail.property_title,
    price: detail.offer_price,
  })) || [];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
      </div>
    );
  }

  console.log(stats);

  return (
    <div className='w-full h-auto border-l border-[#e4e5e8] min-h-screen py-10 px-10'>
      <div className='flex flex-col items-start gap-2'>
        <h1 className='text-[#18191C] text-lg font-medium'>Hello, {user?.displayName}</h1>
        <p className='text-[#767F8C] text-sm'>Here is your daily activities and properties updates</p>
        <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 row-auto items-center justify-center gap-5 mt-10'>
          <div className='w-full px-5 py-5 flex items-center justify-between rounded-lg bg-[#E7F0FA]'>
            <div className='flex flex-col items-start gap-1'>
              <h1 className='text-[#18191C] text-2xl font-medium'>{stats?.propertiesCount}</h1>
              <p className='text-[#18191C] text-sm'>Total Properties</p>
            </div>
            <div className='bg-white h-16 w-16 flex items-center justify-center rounded-lg'>
              <img src="https://gist.github.com/ShejanMahamud/9efb0aca6ab6d2b3ca2ff85fd8a0dc9d/raw/896ec8a3540a55e3b0e3bacc35ba4e02d4568a4c/building.svg" alt="" />
            </div>
          </div>

          <div className='w-full px-5 py-5 flex items-center justify-between rounded-lg bg-[#FFF6E6]'>
            <div className='flex flex-col items-start gap-1'>
              <h1 className='text-[#18191C] text-2xl font-medium'>{stats?.soldCount}</h1>
              <p className='text-[#18191C] text-sm'>Sold Properties</p>
            </div>
            <div className='bg-white h-16 w-16 flex items-center justify-center rounded-lg'>
              <img src="https://gist.github.com/ShejanMahamud/223213d691ee363d91fc00b9d573cebf/raw/365950787860aa80f061e5910e6d79cc70bed5bb/sold.svg" alt="" />
            </div>
          </div>

          <div className='w-full px-5 py-5 flex items-center justify-between rounded-lg bg-[#E7F6EA]'>
            <div className='flex flex-col items-start gap-1'>
              <h1 className='text-[#18191C] text-2xl font-medium'>{stats?.requestedCount}</h1>
              <p className='text-[#18191C] text-sm'>Requested Properties</p>
            </div>
            <div className='bg-white h-16 w-16 flex items-center justify-center rounded-lg'>
              <img src="https://gist.github.com/ShejanMahamud/4bfb29867d595a94bcd3f2f633b93dcf/raw/68ae670841ab7518fe51b4e808211575bd5897c3/bell.svg" alt="" />
            </div>
          </div>
        </div>
        <div className='w-full grid lg:grid-cols-2 grid-cols-1 row-auto items-start gap-10'>
          <div>
            <h1 className='mt-16 mb-10 font-medium text-lg'>Property Statistics</h1>
           <div style={{ width: '100%', height: 300 }}>
           <ResponsiveContainer>
           <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="propertiesCount" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="requestedCount" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              <Area type="monotone" dataKey="soldCount" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
           </ResponsiveContainer>
           </div>
          </div>
          <div>
            <h1 className='mt-16 mb-10 font-medium text-lg'>Selling Statistics</h1>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
              <LineChart
              width={500}
              height={400}
              data={data2}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(AgentOverview);

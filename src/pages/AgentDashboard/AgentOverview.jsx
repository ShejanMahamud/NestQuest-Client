import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AgentOverview = () => {
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate()
    const {user} = useAuth()
// const {openJobs,openJobsPending} = useOpenJobs(userInfo?.name)
//     const { data:candidates, isLoading } = useQuery({
//         queryKey: ["candidate"],
//         queryFn: async () => {
//           const { data } = await axiosSecure.get(`/candidates`);
//           return data;
//         },
//       });

// if(openJobsPending || isLoading){
//   return <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
//   <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
//   <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
//   <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
// </div>
// }

  return (
    <div className='w-full h-full border-l border-[#e4e5e8] min-h-screen py-10 px-10'>
      <div className='flex flex-col items-start gap-2'>
        <h1 className='text-[#18191C] text-lg font-medium'>Hello, {user?.displayName}</h1>
        <p className='text-[#767F8C] text-sm'>Here is your daily activities and properties updates</p>
        <div className='w-full grid grid-cols-3 row-auto items-center justify-center gap-5 mt-10'>
          <div className='w-full px-5 py-5 flex items-center justify-between rounded-lg bg-[#E7F0FA]'>
            <div className='flex flex-col items-start gap-1'>
              <h1 className='text-[#18191C] text-2xl font-medium'>1</h1>
              <p className='text-[#18191C] text-sm'>Total Properties</p>
            </div>
            <div className='bg-white h-16 w-16 flex items-center justify-center rounded-lg'>
              <img src="https://gist.github.com/ShejanMahamud/9efb0aca6ab6d2b3ca2ff85fd8a0dc9d/raw/896ec8a3540a55e3b0e3bacc35ba4e02d4568a4c/building.svg" alt="" />
            </div>
          </div>

          <div className='w-full px-5 py-5 flex items-center justify-between rounded-lg bg-[#FFF6E6]'>
            <div className='flex flex-col items-start gap-1'>
              <h1 className='text-[#18191C] text-2xl font-medium'>1</h1>
              <p className='text-[#18191C] text-sm'>Sold Properties</p>
            </div>
            <div className='bg-white h-16 w-16 flex items-center justify-center rounded-lg'>
              <img src="https://gist.github.com/ShejanMahamud/223213d691ee363d91fc00b9d573cebf/raw/365950787860aa80f061e5910e6d79cc70bed5bb/sold.svg" alt="" />
            </div>
          </div>

          <div className='w-full px-5 py-5 flex items-center justify-between rounded-lg bg-[#E7F6EA]'>
            <div className='flex flex-col items-start gap-1'>
              <h1 className='text-[#18191C] text-2xl font-medium'>123</h1>
              <p className='text-[#18191C] text-sm'>Requested Properties</p>
            </div>
            <div className='bg-white h-16 w-16 flex items-center justify-center rounded-lg'>
              <img src="https://gist.github.com/ShejanMahamud/4bfb29867d595a94bcd3f2f633b93dcf/raw/68ae670841ab7518fe51b4e808211575bd5897c3/bell.svg" alt="" />
            </div>
          </div>
        </div>
        {/* {
  !(
    userInfo &&
    userInfo.name &&
    userInfo.email &&
    userInfo.photo &&
    userInfo.education &&
    userInfo.experience &&
    userInfo.resume &&
    userInfo.title &&
    userInfo.biodata &&
    userInfo.location &&
    userInfo.number
  ) && <div className='w-full bg-[#E05151] px-5 py-5 rounded-lg flex items-center justify-between mt-10'>
  <div className='flex items-center gap-3'>
    <img src={userInfo.photo} alt="user.png" className='w-14 h-14 rounded-full'/>
    <div className='flex flex-col items-start gap-1'>
      <h1 className='text-lg font-medium text-white'>Your profile editing is not completed.</h1>
      <h1 className='text-xs text-white'>Complete your profile editing & build your custom Resume</h1>
    </div>
  </div>
    <button onClick={()=>navigate('/dashboard/company/settings')} className='px-3 py-2 rounded-sm text-[#E05151] bg-white font-medium flex items-center gap-1'>
      <span>Edit Profile</span>
    <img src="https://gist.github.com/ShejanMahamud/75c0ff3a427e791882df08982b477d2e/raw/41df9e052f5e5c4f7465fd8f4bcce8e0e717ec61/arrow.svg" alt="" />
    </button>
</div>
} */}
        <div className='w-full flex items-center justify-between mt-10'>
          <h1 className='text-[#18191C] font-medium'>Recently Applied</h1>
          <button onClick={()=>navigate('/dashboard/candidate/applied_jobs')} className='px-3 py-2 rounded-sm text-[#767F8C] bg-white font-medium flex items-center text-base gap-1'>
              <span>View All</span>
            <img src="https://gist.github.com/ShejanMahamud/1399583e909469763ef617ecfacbda0a/raw/64c4e6b2aac0185c3dfd4d8831585d40b6ea923a/arrow.svg" alt="" />
            </button>
        </div>
      </div>
    </div>
  )
}

export default memo(AgentOverview)
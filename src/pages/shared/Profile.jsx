import { UploadOutlined } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Modal, Tooltip, Upload } from 'antd';
import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import auth from '../../config/firebase.config';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import usePhotoUpload from '../../hooks/usePhotoUpload';
import useRole from '../../hooks/useRole';

const Profile = () => {
const axiosSecure= useAxiosSecure()
const {user,loading,setUser} = useAuth()
const {role,rolePending} = useRole()
const [openModal, setOpenModal] = useState(false)
const {photo,uploadProps} = usePhotoUpload()

const handleProfileUpdate = async (e) => {
  e.preventDefault();
  try{
    const name = e.target.name.value;
    const userInfo = {
      ...(name && {name}),
      ...(photo && {photo})
    }
    await updateProfile(auth.currentUser,{
      displayName: userInfo?.name || user?.displayName,
      photoURL: userInfo.photo || user?.photoURL
    })
    setUser({ photoURL: userInfo.photo || user?.photoURL, displayName: userInfo?.name || user?.displayName })
    await mutateAsync(userInfo)
  }
  catch(error){
    toast.error('Something Went Wrong!')
  }
}

const {mutateAsync} = useMutation({
mutationFn: async info => {
  console.log(info)
  const {data} = await axiosSecure.patch(`/user/${user?.email}`,info)
  return data
},
onSuccess: () => {
  toast.success('Successfully Profile Updated!')
}
})

if(rolePending || loading){
  return <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
  <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
  <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
  <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
</div>
}
  return (
    <div className="w-full flex flex-col items-center justify-center h-full py-28 lg:px-40 md:px-20 px-5">
        <div className="bg-[#1252ae1f] rounded-full w-40 h-40 mx-auto border border-[#1252ae26] mb-5 flex items-center justify-center">
          <img src={user?.photoURL || 'https://i.ibb.co/L84TwCP/logo.png'} alt="logo.png" className='w-40 h-40 rounded-full object-cover'/>
        </div>
        <h1 className="text-3xl font-bold mb-2"><span className='text-[#1daeff]'>{user?.displayName || 'User'}</span></h1>

        <p className="text-[#737D8C] text-center w-[60%] mx-auto text-sm mb-3">{role} of NestQuest</p>

<div className="flex flex-col items-center justify-center w-full my-10 gap-5 lg:px-40 md:px-20 px-10">

<div className="w-full">
              <label class="block mb-2 text-sm text-gray-600  ">
                Email
              </label>
              <Tooltip title="You can't change email" className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'>
              <input
                name="email"
                type="text"
                required
                disabled
                defaultValue={user?.email}
                placeholder="+880171233474"
                class=""
              />
              </Tooltip>
            </div>
      <button type='button' onClick={()=> setOpenModal(true)} className='bg-primary text-white font-medium px-5 py-3 rounded-md w-full'>Edit Profile</button>
</div>
<Modal open={openModal} footer={false} onCancel={()=> setOpenModal(false)}>
  <form className='w-full flex flex-col items-center p-5 gap-5' onSubmit={handleProfileUpdate}>
  <h1 className='text-[#18191C] text-lg font-medium'>Update Profile <span className='text-primary'>{user?.displayName}</span></h1>
  <div className="w-full">
              <label class="block mb-2 text-sm text-gray-600  ">
               Upload Photo
              </label>
              <div className="w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
              <Upload {...uploadProps}>
    <button type="button" className="text-gray-400 text-base flex items-center gap-2">
      <UploadOutlined />
      <span>Click to Upload</span></button>
  </Upload>
                
              </div>
            </div>
            <div  className="w-full">
              <label class="block mb-2 text-sm text-gray-600  ">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="John"
                name="name"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="w-full">
              <label class="block mb-2 text-sm text-gray-600  ">
                Email
              </label>
              <Tooltip title="You can't change email" className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'>
              <input
                name="email"
                type="text"
                required
                disabled
                defaultValue={user?.email}
                placeholder="Email Address"
                class=""
              />
              </Tooltip>
            </div>
            <button type='submit' className='bg-primary text-white font-medium px-5 py-3 rounded-md w-full'>Save Changes</button>
  </form>
</Modal>
      </div>
  )
}

export default Profile
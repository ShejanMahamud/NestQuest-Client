import { useMutation, useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { CiWarning } from "react-icons/ci";
import Swal from 'sweetalert2';
import useAxiosCommon from '../../hooks/useAxiosCommon';
import useAxiosSecure from './../../hooks/useAxiosSecure';

const AdminReportProperties = () => {
const axiosCommon = useAxiosCommon()
const axiosSecure = useAxiosSecure()
const {data: reports, isPending,refetch} = useQuery({
  queryKey: ['reports'],
  queryFn: async () => {
    const {data} = await axiosCommon.get(`/reports`)
    return data
  }
})

const handleRemoveReport = async (id) => {
  try{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
        await mutateAsync(id);
        Swal.fire({
          title: "Deleted!",
          text: "Report has been deleted.",
          icon: "success"
        });
      }
    });
  }
  catch(error){
    toast.error('Something Went Wrong')
  }
}

const {mutateAsync} = useMutation({
  mutationFn: async (id) => {
    const {data} = await axiosSecure.delete(`/report/${id}`)
    return data
  },
  onSuccess: () => {
    toast.success('Successfully Report Withdrawn')
    refetch()
  }
})

if (isPending) {
  return (
    <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
      <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
    </div>
  );
}

  return (
    <div className='w-full p-10 min-h-screen'>
<h1 className="text-2xl text-[#18191C] font-medium mb-10">
        Reported Properties
      </h1>
      {
         reports && reports.length === 0 ? <div className='w-full flex flex-col items-center gap-3 min-h-screen justify-center'>
          <CiWarning className='text-6xl'/>
          <span>No Reported Properties</span>
         </div> : <div className="overflow-x-auto">
         <table className="table">
           <thead>
             <tr>
               <th>Property Name</th>
               <th>Agent Email</th>
               <th>Reporter Name</th>
               <th>Reporter Email</th>
               <th>Report Reason</th>
               <th>Action</th>
             </tr>
           </thead>
           <tbody>
       {
        reports && reports.map(report => (
         <tr key={report?._id}>
         <td>{report?.property_title}</td>
         <td>{report?.property_agent_name}</td>
         <td>{report?.reporter_name}</td>
         <td>{report?.reporter_email}</td>
         <td>{report?.report_description}</td>
         <td><button onClick={()=>handleRemoveReport(report?._id)} className='bg-red-500 px-2 py-1 text-white rounded-md text-xs'>
           Remove
           </button></td>
       </tr>
       ))
       }
           </tbody>
         </table>
       </div>
      }
    </div>
  )
}

export default AdminReportProperties
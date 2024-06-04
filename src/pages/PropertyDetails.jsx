import { useQuery } from '@tanstack/react-query'
import { Rate } from 'antd'
import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { useParams } from 'react-router-dom'
import Map from '../Utils/Map'
import useAxiosCommon from '../hooks/useAxiosCommon'

const PropertyDetails = () => {
const axiosCommon = useAxiosCommon()
const {id} = useParams()

const {data:property,isPending} = useQuery({
    queryKey: ['property',id],
    queryFn: async () => {
        const {data} = await axiosCommon.get(`/property/${id}`)
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
    <div className='w-full p-10 grid grid-cols-1 row-auto items-center gap-10'>
        <div className='w-full grid grid-cols-[70%_25%] gap-10 items-start'>
            <div className='flex flex-col items-start gap-5'>
            <img src={property?.property_image} alt="" className='aspect-video rounded-lg'/>
            <div className='w-full p-3 flex flex-col items-start gap-3'>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex flex-col items-start gap-3'>
                        <h1 className='text-2xl font-medium'>{property?.property_title}</h1>
                        <div className='flex items-center gap-2 text-gray-500'>
                        <IoLocationOutline className='text-xl font-medium'/>
                        <span className='text-sm '>{property?.detailed_location}</span>
                        </div>
                        <span className='text-sm font-medium'>{property?.property_location}</span>
                    </div>
                    <div className='flex flex-col items-start gap-3'>
                    <Rate allowHalf defaultValue={2} disabled/>
                    <span className='text-gray-500 font-medium text-sm'>20+ Reviews</span>
                    <h1 className="text-xl text-primary font-medium">
            ${property?.property_price_min} - ${property?.property_price_max}{" "}
          </h1>
                    </div>
                </div>
            </div>
            </div>
            <div className='w-full flex flex-col gap-10 items-center'>
                <div className='w-full rounded-lg shadow-lg flex flex-col items-center gap-1 py-3'>
                    <img src={property?.agent_photo} alt="" className='h-16 w-16 rounded-full object-cover'/>
                    <h1 className='font-medium text-lg'>{property?.agent_name}</h1>
                    <p className='text-gray-500 text-sm'>Agent of NestQuest</p>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-2 w-full'>
                    <Map location={'Broadway 10012, New York, NY, USA'}/>
                </div>
                <button className='w-full bg-primary text-white font-medium rounded-lg py-3'>Add To Wishlist</button>
            </div>
        </div>
    </div>
  )
}

export default PropertyDetails
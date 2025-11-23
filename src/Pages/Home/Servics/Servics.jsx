import React from 'react';
import service from '../../../assets/service.png'
const Servics = () => {
    return (
        <div className=' bg-[#03373D] p-15 mt-15 rounded-2xl'>
           
            <div className='text-white text-center'>
              <h1 className='text-4xl font-extrabold'>Our Services</h1>
              <p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            {/* All servics */}
             <div className='max-w-10/12 mx-auto grid grid-cols-3 gap-7 mt-4'>
                {/* service card 1 */}
                <div className='bg-white  flex flex-col justify-center items-center text-center p-5 rounded-2xl hover:bg-[#CAEB66] '>
                    <img  src={service} alt="" />
                    <h1 className='text-3xl font-bold text-[#03373D] '>Express  & Standard Delivery</h1>
                    <p className='text-[#606060]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                {/* service card 2 */}
                <div className='bg-white  flex flex-col justify-center items-center text-center p-5 rounded-2xl hover:bg-[#CAEB66] '>
                    <img  src={service} alt="" />
                    <h1 className='text-3xl font-bold text-[#03373D] '> Nationwide Delivery</h1>
                    <p className='text-[#606060]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                {/* service card 1 */}
                <div className='bg-white  flex flex-col justify-center items-center text-center p-5 rounded-2xl hover:bg-[#CAEB66] '>
                    <img  src={service} alt="" />
                    <h1 className='text-3xl font-bold text-[#03373D] '>Fulfillment Solution</h1>
                    <p className='text-[#606060]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                {/* service card 1 */}
                <div className='bg-white  flex flex-col justify-center items-center text-center p-5 rounded-2xl hover:bg-[#CAEB66] '>
                    <img  src={service} alt="" />
                    <h1 className='text-3xl font-bold text-[#03373D] '> Parcel Return</h1>
                    <p className='text-[#606060]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                {/* service card 1 */}
                <div className='bg-white  flex flex-col justify-center items-center text-center p-5 rounded-2xl hover:bg-[#CAEB66] '>
                    <img  src={service} alt="" />
                    <h1 className='text-3xl font-bold text-[#03373D] '> Cash on Home Delivery</h1>
                    <p className='text-[#606060]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                {/* service card 1 */}
                <div className='bg-white  flex flex-col justify-center items-center text-center p-5 rounded-2xl hover:bg-[#CAEB66] '>
                    <img  src={service} alt="" />
                    <h1 className='text-3xl font-bold text-[#03373D] '> Corporate Service / Contract In Logistics</h1>
                    <p className='text-[#606060]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
             </div>
        </div>
    );
};

export default Servics;
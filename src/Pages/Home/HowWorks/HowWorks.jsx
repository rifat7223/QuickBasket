import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';

const HowWorks = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold max-w-10/12 mx-auto text-[#03373D] mt-5'>How it works</h1>
            {/* All cards */}
           <div className='grid grid-cols-4 gap-6 max-w-10/12 mx-auto mt-5 '>
             {/* card 1*/}
             <div className='bg-white p-7 rounded-2xl'>
               < CiDeliveryTruck size={60} />
                <h1 className='font-bold text-[#03373D]'>Booking Pick & Drop</h1>
                <p>From personal packages to business shipments — we deliver on time, every time</p>

            </div>
             {/* card 2 */}
             <div  className='bg-white p-7 rounded-2xl'>
                <CiDeliveryTruck size={60} />
                <h1 className='font-bold text-[#03373D]'>Booking Pick & Drop</h1>
                <p>From personal packages to business shipments — we deliver on time, every time</p>

            </div>
             {/* card 3 */}
             <div  className='bg-white p-7 rounded-2xl'>
                <CiDeliveryTruck size={60} />
                <h1 className='font-bold text-[#03373D]'>Booking Pick & Drop</h1>
                <p>From personal packages to business shipments — we deliver on time, every time</p>

            </div>
            {/* card 4 */}
             <div  className='bg-white p-7 rounded-2xl'>
                <CiDeliveryTruck size={60} />
                <h1 className='font-bold text-[#03373D]'>Booking Pick & Drop</h1>
                <p>From personal packages to business shipments — we deliver on time, every time</p>

            </div>
           </div>
        </div>
    );
};

export default HowWorks;
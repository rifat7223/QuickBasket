import React from 'react';
import trans from '../../../assets/be-a-merchant-bg.png'
import mer from '../../../assets/location-merchant.png'
const CustomerSatis = () => {
    return (
        <div className='bg-[#03373D]  max-w-10/12 mx-auto rounded-4xl  '>
         <div className='flex justify-center items-center'>
             <img src={trans} alt="" />
         </div>
         <div className=' flex justify-center items-center p-10'>
            <div>
                <h3 className='text-3xl font-bold'>Merchant and Customer Satisfaction is Our First Priority</h3>
                <p>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                <div className='flex   gap-10 mt-5'>
                   <button className='bg-[#CAEB66] text-black p-4 rounded-3xl'>Become a Merchant</button>
                   <button className='border border-[#CAEB66] solid p-3 rounded-3xl  '>Earn with ZapShift Courier</button>
                </div>
            </div>
            <div>
                <img src={mer} alt="" />
            </div>
         </div>
        </div>
    );
};

export default CustomerSatis;
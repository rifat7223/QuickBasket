import React from 'react';
import support1 from '../../../assets/live-tracking.png'
const Support = () => {
    return (
        <div className='max-w-10/12 mx-auto p-6 mt-10 rounded-2xl'>
            {/* all services */}
           <div className='flex gap-5 flex-col p-6'>
             <div className='flex gap-5 justify-center items-center  bg-white rounded-2xl'>
                {/* card 1 */}
                <div>
                  <img src={support1} alt="" />
                </div>
               <div style={{
      borderLeft: "2px dashed green",
      height: "150px"
    }} />


                <div>
                    <h1 className='text-[#03373D] text-2xl font-bold'>Live Parcel Tracking</h1>
                    <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
             <div className='flex gap-5 justify-center items-center  bg-white rounded-2xl'>
                {/* card 1 */}
                <div>
                  <img src={support1} alt="" />
                </div>
               <div style={{
      borderLeft: "2px dashed green",
      height: "150px"
    }} />


                <div>
                    <h1 className='text-[#03373D] text-2xl font-bold'>Live Parcel Tracking</h1>
                    <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
             <div className='flex gap-5 justify-center items-center  bg-white rounded-2xl'>
                {/* card 1 */}
                <div>
                  <img src={support1} alt="" />
                </div>
               <div style={{
      borderLeft: "2px dashed green",
      height: "150px"
    }} />


                <div>
                    <h1 className='text-[#03373D] text-2xl font-bold'>Live Parcel Tracking</h1>
                    <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
            
           </div>
        </div>
    );
};

export default Support;
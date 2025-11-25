import React from 'react';
import ratings from '../../../../assets/customer-top.png'
const CustomerRatings = () => {
    return (
        <div>
            {/* customet ratings content */}
            <div className='text-center mt-8'>
               <div className='flex justify-center items-center '>
                 <img src={ratings} alt="" />
               </div>
                <h3>What our customers are sayings</h3>
                <p>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
        </div>
    );
};

export default CustomerRatings;
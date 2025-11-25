import React from 'react';
import Banner from '../Banner/Banner';
import HowWorks from '../HowWorks/HowWorks';
import Servics from '../Servics/Servics';
import Support from '../Support/Support';
import CustomerSatis from '../CustomerSatis/CustomerSatis';
import CustomerRatings from '../CustomerSatis/CustomerRatings/CustomerRatings';
import Brad from '../Brand/Brad';

const Home = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
          <div className='mt-15'>
            <Banner></Banner>
          </div>
          <div>
            <HowWorks></HowWorks>
          </div>
          <div>
            <Servics></Servics>
          </div>
          <div>
            <Brad></Brad>
          </div>
          <div>
            <Support></Support>
          </div>
          <div>
            <CustomerSatis></CustomerSatis>
          </div>
          <div>
          <CustomerRatings></CustomerRatings>
          </div>
        </div>
    );
};

export default Home;
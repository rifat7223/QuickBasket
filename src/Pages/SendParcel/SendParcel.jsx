import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const SendParcel = () => {
   
     const {register,handleSubmit,control,  formState: { errors }}=useForm()
    //  geting sender disrict
      const servicrSenter = useLoaderData()
    const regionDuplicate=servicrSenter.map(d=>d.region)

    const region=[...new Set(regionDuplicate)]
    const senderRegion =useWatch({control,name:'senderRegion'})
    
    const reciverRegion =useWatch({control,name:'reciverRegion'})
    
    // geting sender region by district
    const districtsByRegion=(region)=>{
        const regionDistricts =servicrSenter.filter(c=>c.region===region)
        const districts =regionDistricts.map(f=>f.district)
 return districts
        
    }
   
    // console.log(servicrSenter)
   
   
  
  const  handleSend=(data)=>{
console.log(data)
const sameDistrict =data.reciverDistrict===data.senderDistrict
console.log(sameDistrict)


  }
    return (
       
             <div className='max-w-11/12 mx-auto bg-white p-10 mt-15 rounded-2xl'>
           
                <h1 className='text-[#03373D] text-3xl font-bold'>Send A PARCEl</h1>
                <p>Enter your parcel details</p>
          <form className='text-black' onSubmit={handleSubmit(handleSend )}>

    
             {/* document */}
            <div className='mt-12'>
                <label className="label mr-4"><input type="radio"   value='document' {...register('parceltype')}className="radio" defaultChecked />Document </label>
                <label className="label mr-4"><input type="radio"   value='non-document' {...register('parceltype')}className="radio" />Non-document </label>
                
         
            </div>
            {/* parcel info:name, weigt */}
         
            <div className='grid grid-cols-2 gap-12 my-8'>
                <fieldset className="fieldset">
                    <label className="label font-bold text-black ">Parcel weight(kg)</label>
          <input type="text" className="input w-full"{...register('parcel name')} placeholder="parcel Name" />
          
        </fieldset>
                <fieldset className="fieldset">
          <label className="label font-bold text-black ">Parcel weight(kg)</label>
          <input type="number" className="input w-full"{...register('parcel weight')} placeholder="parcel weight(kg)" />
          
        </fieldset>
            
            </div>
            {/* two colum */}
            <div className='grid grid-cols-2 gap-12'>
                {/* sender */}
               
                 <fieldset className="fieldset">
                     <h1 className='text-2xl font-bold'>Sender Details</h1>
                    {/* sender name */}
          <label className="label font-bold text-black ">Parcel Name</label>
          <input type="text" className="input w-full"{...register('sender name')} placeholder="sender Name" />
          {/* sender address */}
          <label className="label font-bold text-black ">sender Address</label>
          <input type="text" className="input w-full"{...register('sender Address')} placeholder="sender Address" />
          {/* sender pnone numbesr */}
          <label className="label font-bold text-black ">phone number</label>
          <input type="number" className="input w-full"{...register('phone number')} placeholder="phone number" />
          {/* sender email adress */}
          <label className="label font-bold text-black ">Email</label>
          <input type="email" className="input w-full"{...register('sender email')} placeholder="sender email" />
           {/* sender region */}
         <fieldset className="fieldset">
  <select   defaultValue="Pick a Region" className="select"{...register('senderRegion')}>
    <option disabled={true}>Pick a Region</option>
    {
      region.map((r,i)=> <option key={i} value={r}>{r}</option>)  
    }
  </select>
</fieldset>
           {/* sender district */}
         <fieldset className="fieldset">
  <select   defaultValue="Pick a district" className="select"{...register('senderDistrict')}>
    <option disabled={true}>Pick a district</option>
    {
     districtsByRegion(senderRegion).map((r,i)=> <option key={i} value={r}>{r}</option>)  
    }
  </select>
</fieldset>
        {/* text area */}
        <label></label>
        <textarea className='border solid' rows="4" cols="50">

</textarea>
        </fieldset>
                {/* reciver */}
                    <fieldset className="fieldset">
                     <h1 className='text-2xl font-bold'>Reciver Details</h1>
                    {/* reciver name */}
          <label className="label font-bold text-black ">Reciver Name</label>
          <input type="text" className="input w-full"{...register('Reciver name')} placeholder="Reciver Name" />
          {/* reciver address */}
          <label className="label font-bold text-black ">sReciver Address</label>
          <input type="text" className="input w-full"{...register('Reciver Address')} placeholder="Reciver Address" />
          {/* reciver pnone numbesr */}
          <label className="label font-bold text-black ">Reciver number</label>
          <input type="number" className="input w-full"{...register('Reciver number')} placeholder="Reciver number" />
          
              {/* reciver region */}
         <fieldset className="fieldset">
  <select   defaultValue="Pick a Region" className="select"{...register('reciverRegion')}>
    <option disabled={true}>Pick a Region</option>
    {
      region.map((r,i)=> <option key={i} value={r}>{r}</option>)  
    }
  </select>
</fieldset>
 {/* reciver district */}
         <fieldset className="fieldset">
  <select   defaultValue="Pick a district" className="select"{...register('reciverDistrict')}>
    <option disabled={true}>Pick a district</option>
    {
     districtsByRegion(reciverRegion).map((r,i)=> <option key={i} value={r}>{r}</option>)  
    }
  </select>
</fieldset>
        {/* text area */}
        <textarea className='border solid' rows="4" cols="50">

</textarea>
        </fieldset>        
               
            </div>
             <input type="submit" className='btn btn-primary' value='send parcel' />
          </form>
                       
        </div>
     
    );
};

export default SendParcel;
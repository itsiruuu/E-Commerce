import React from 'react';
 const SecHead = ({title,heading}) => {

const SecHead = () => {
  return (
    <div>
    <div className='flex items-center gap-9'>  
      <div className='w-5 h-10 bg-[#DB4444] rounded-sm'></div>
     <h4 className='text-[#DB4444]'>Today's</h4>
     </div>
      <h2 className='text-[36px] font-semibold mt-6'>{heading}</h2>
     </div>
  );
};
 }
export default SecHead;

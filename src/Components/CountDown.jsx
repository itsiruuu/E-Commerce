import React from 'react';

const CountDown = ({Days,Minutes,Hours,Seconds}) => {

    return (
        
    <div className='flex gap-9.5 items-center'>
                <div>
                    <h2 className='text-xs font-medium'>Days</h2>
                    <h1 className=' font-bold text-3xl'>{Days}</h1>
                </div>
                <div>
                    <h2 className='text-xs font-medium'>Hours</h2>
                    <h1 className='text-3xl font-bold'>{Hours}</h1>
                </div>
                <div>
                    <h3 className='text-xs font-medium'>Minutes</h3>
                    <h2 className='text-3xl font-bold'>{Minutes}</h2>
                </div>
                <div>
                    <h4 className='text-xs font-medium'>Seconds</h4>
                     <h2 className='text-3xl font-bold'>{Seconds}</h2>  
                </div>
    </div>

         
    )
}

export default CountDown

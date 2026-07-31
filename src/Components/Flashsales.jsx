import React, { useEffect, useState } from 'react';
import Container from './Container';
import SecHead from './secHead';
import { countDownDateAndTime } from 'countdown-date-time';
import CountDown from './CountDown';

const Flashsales = () => {
    const conduct_date = '2026-8-1 12:00:00';
    const [count, setCount] = useState({});
    

    useEffect(() => {
        setInterval(() => {
           const countdown = countDownDateAndTime(conduct_date);
           setCount(countdown);
        
        }, 1000);
    }, []);

   console.log(count);


  return (
    <div className='mt-32.5 mb-20'> 
     <Container>    
        <SecHead
         title="Today's"
         heading="Flash Sales"
        />
        <CountDown
            Days={count.days}
            Hours={count.hours}
            Minutes={count.minutes}
            Seconds={count.seconds}
        />
     </Container>
     </div>
  );
};

export default Flashsales;
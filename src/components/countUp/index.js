import React, { useEffect, useRef, useState } from 'react'

const CountUp = ({end,start = false}) => {
    const [number,setNumber] = useState(0);

    const startCount = (end,number) => {
        let inte ;
        if(end <= 200){
            inte= 1;
        }else if(end <= 500){
            inte = 3;
        }else if(end <= 1000){
            inte = 30;
        }else if(end <= 5000){
            inte = 30;
        }
        let count = setInterval(() => {
            
            setNumber(curr => curr+inte);

            if(number >= end) {
                clearInterval(count);
            }
        }, 10);
    }

    useEffect(() => {
        let num = 0 ;
        if(start){
            startCount(end,number);        
        }
        setNumber(0);
    },[start]);

  return (
    <>{number >= end ? end : number}</>
  )
}

export default CountUp
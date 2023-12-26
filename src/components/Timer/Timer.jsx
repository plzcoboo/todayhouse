import React, { useState, useEffect, useRef } from 'react';
import { TimerStyle } from './TimerStyle';

const intToString = (num) => {
  return String(num).padStart(2, "0");
};

const Timer = ({ hh, mm, ss ,setTimeOut,timeout}) => {
  const HH = hh ? parseInt(hh) : 0;
  const MM = mm ? parseInt(mm) : 0;
  const SS = ss ? parseInt(ss) : 0;
  
  const count = useRef(HH * 60 * 60 + MM * 60 + SS);
  const interval = useRef(null);

  const [hour, setHour] = useState(intToString(HH));
  const [minute, setMinute] = useState(intToString(MM));
  const [second, setSecond] = useState(intToString(SS));


  useEffect(() => {
    interval.current = setInterval(() => {
      count.current -= 1;

      setHour(intToString(parseInt(count.current / 3600)));
      setMinute(intToString(parseInt((count.current % 3600) / 60)));
      setSecond(intToString((count.current % 60)));
    }, 1000);
  }, []);

  useEffect(() => {
    if (count.current <= 0) {
      clearInterval(interval.current);
    }
  }, [second]);

 useEffect(()=>{
  if(hour === '00' && minute === '00' && second === '00'){
    setTimeOut(true)
  }
 },[second])

  return (
    <TimerStyle>
      {hour} : {minute} : {second} 남음
    </TimerStyle>
  );
};

export default Timer;
import './Timer.css'
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@material-ui/core';
import Buttons from '../Button/Button';


const Timer = ()=> {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  
  let interval = useRef();

  const startTimer = ()=> {
    const countdownDate = new Date('September 06, 2022 09:00:00').getTime();
    
      interval = setInterval(()=>{
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000*60*60*24));
      const hours = Math.floor((distance % (1000*60*60*24) / (1000*60*60)));
      const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
      const seconds = Math.floor((distance % (1000*60)) / 1000);

      if (distance < 0 ){ // stop timer

        clearInterval(interval.current);
      }
      else{
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }

    },1000);
  }

  useEffect(() =>{
    startTimer();
    return() => {
      clearInterval(interval.current)

    }
  })

    return (
     
        <section className="timer-container">
           <div >
        <Buttons className="register" value = "Register">  </Buttons>
        </div>
        <section className = "timer">
        <div className="text">
           <h2 >DATA SCIENCE SUMMER SCHOOL 2022</h2>
           
        </div>

        

        <div> 
          <section>
            <p>{timerDays}</p>
            <p><small>Days</small></p>
          </section>
          <span>:</span>

          <section>
            <p>{timerHours}</p>
            <p><small>Hours</small></p>
          </section>
          <span>:</span>

          <section>
            <p>{timerMinutes}</p>
            <p><small>Minutes</small></p>
          </section>
          <span>:</span>

          <section>
            <p>{timerSeconds}</p>
            <p><small>Seconds</small></p>
          </section>
          
        </div>

      </section>

      <div >
       

      
        


      </div>

    </section>
    )

}

export default Timer;
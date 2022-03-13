import './Timer.css'
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@material-ui/core';
import Buttons from '../Button/Button';
// import windowPosition from './hooks/windowPosition';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Link as Scroll } from 'react-scroll';

const Timer = ()=> {

  // const checked =  windowPosition('header');

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
           <div>
        <Buttons className="register" value = "Register" >  </Buttons>
        </div>


        <Scroll to="moreInfo" smooth={true}> 
        <div className="container">
        <div className="arrow">      
        <h4>More Info</h4>   
                <KeyboardArrowDownIcon  fontSize="large" color="warning" /> 
                </div>
                </div>  
        </Scroll>


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

      <div className="info" id = "moreInfo"> 

      <section className='abt'>

        <div className='about '>

            <div className='aboutcard__body'>

               
                
                
                <h2 className='aboutcard__title '>Important Information</h2>
                <hr/>
                <br/>

                <p className='aboutcard__description '>

                  <div className='content_info'>

                  <li className="li_border">  06th September 2022  -  11th September 2022  </li>
                  <br/>

                  <li className="li_border">   6 exciting Data Science courses  </li>
                  <br/>

                  <li className="li_border">  Mega Hackathon on the last day  </li>
                  <br/>

                  <li className="li_border">  Hybrid Mode of learning (Online & In-pres) </li>
                  <br/>

                  <li className="li_border">  100% Funded  </li>
                  <br/>

                  </div>

                </p>

            </div>

           



        </div>

   

        </section>

    


        {/* <div className="image">
          <img src="daad.jpg"></img>
        </div> */}
      </div>
        
      

    </section>

  
  
    )

}

export default Timer;
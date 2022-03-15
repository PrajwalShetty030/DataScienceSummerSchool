
import './App.css';
import {Route,Switch, NavLink} from "react-router-dom"
import Timer from './Timer/Timer';
import About from './About/About';
import Statistics from './Statistics/Statistics';
import Login from './Login/Login';
import Hackathon from './Hackathon/Hackathon';
import Courses from './Courses/Courses';
import { Button } from '@material-ui/core';
import Registration from './Registration/Registration';
import CourseDetails from './CourseDetails/CourseDetails';
import { useState } from 'react';
import Button_cd from './Button_cd/Button_cd';
import CourseDetailsFinal from './CourseDetails/CourseDetailsFinal';
// import AboutUs from './About/aboutUs';




// import { makeStyles} from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({

// }));

function App() {

  let [loggedIn, setLogin] = useState(false) // by default false because user is NOT logged in by default
  let [isLoading,setLoading] = useState(false)

  // const handleLogin = ()=>{

  //   setLoading(true);
  //   // request to backend begins

  //   setTimeout(()=>{
  //       setLogin(!loggedIn)
  //       setLoading(false)
        
  //   },1000)
  // }

  
  return (
    <div className="App">
      <nav>
        
      <NavLink to = "/" exact>
        Home</NavLink>     
      <NavLink to = "/hackathon">
        Hackathon</NavLink>  
        <NavLink to = "/statistics">
        Statistics</NavLink>      
      <NavLink to = "/courses">
        Courses</NavLink> 
        <NavLink to = "/login">
        Login</NavLink> 
        <NavLink to = "/registration">
        Registration</NavLink> 
        <NavLink to = "/about">
        About Us</NavLink>

        {/* <Button_cd value = {loggedIn} // reference to useState variable
        displayTrue = {"Log out"}
        displayFalse = {"Log In"}
        handleChange = {handleLogin}
        
        > 
        </Button_cd> */}
       
      </nav>

    
      

      <Switch>
        <Route path = "/" exact component = {Timer} /> 
        <Route path = "/about" component = {About} /> 
        <Route path = "/statistics" component = {Statistics} /> 
        <Route path = "/login" component = {Login} /> 
        <Route path = "/registration" component = {Registration} /> 
        <Route path = "/hackathon" component = {Hackathon} />


        
       


        {/* <Route path = "/courses/:id/:name">
          <CourseDetails isUserLoggedIn = {loggedIn}></CourseDetails>
          
        </Route> */}


        <Route path = "/courses/:id/:name">
          <CourseDetailsFinal > </CourseDetailsFinal>
        </Route>

        
        

        <Route path = "/courses" component = {Courses} />          
      </Switch>

    </div>
  );
}

export default App;

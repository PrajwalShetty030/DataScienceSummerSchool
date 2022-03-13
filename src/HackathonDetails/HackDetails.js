import React, { useEffect, useState } from 'react';
import { AppBar, Card, Collapse, CssBaseline, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import ImageCard from './ImageCard';
import hackInfo from './static/hackInfo';
import windowPosition from './hooks/windowPosition';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import statInfo from './static/statInfo';
import ImageCard2 from './ImageCard2';
import './HackDetails.css';


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight:"100vh",
        display:"flex",
        flexDirection:"row",
        
        justifyContent:"center",
        alignItems:"center",
        backgroundImage:process.env.PUBLIC_URL + "hacker_2.jpeg"
    },

   text:{
        
        color:"white",
        // marginTop:"170px",
        fontFamily:"Poppins",
        paddingLeft: "20px",
        backgroundColor:"rgba(20,20,20,20)",  
        
        
    },

    text_again:{
        padding:"60px",  
        // top: "50px",
        // bottom: "35px",
        fontStyle:"italic",
        fontSize:32,
        display: "flex",
        
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins",
        textAlign: "center",

        
    },

    sub:{

        padding:"60px",  
        // top: "50px",
        // bottom: "35px",
        fontStyle:"italic",
        fontSize:32,
        display: "flex",
        
        
        

    },

    points:{
        fontSize:"20px",
        // wordSpacing: 5,
        // lineHeightStep: 10,
        margin: "10px 60px",
        width:"90%",
        


    },

    paragraph:{
        fontSize:"30px",
        // wordSpacing: 5,
        // lineHeightStep: 10,
        margin: "10px 60px",
        width:"90%",
        fontWeight:"bold"


    },

    paragraph_2:{
        fontSize:"20px",
        // wordSpacing: 5,
        // lineHeightStep: 10,
        margin: "10px 60px",
        width:"90%",
        fontStyle:"italic",
       


    },

    image:{
        
        width: "37rem",
        // left: "766px",
        // bottom: "320px",
        // position: "relative",
        
    },

    demo:{
        fontWeight:"bold",
        color: "red",
        fontStyle:"italic",
        fontSize:"26px"
    },

    con:{
        fontStyle:"italic",
        fontWeight:"bold",
        fontSize:"26px"
    },


    data_color:{
        color: "red"
    },

   


}));



const HackDetails = ()=> {
    const classes = useStyles();
    const checked =  windowPosition('header');

    return (
        <div >
            <div className={classes.text} id="details">
                <div className={classes.text_again}>
                    <h1>What is <span className={classes.data_color}>Data-</span>Con?</h1>
               </div>
      
         {/* <img className={classes.image} src = "hacker_1.jpeg" /> */}
         {/* <img className={classes.image} src = "hacker_2.jpeg"  padding="70px" /> */}
            

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
    <div>      <p className={classes.points}> 
        <span className={classes.demo}>"Data-</span><span className={classes.con}>Con"</span> is a 12 hour Data Science hackathon organised by SRH Heidelberg, open to all students enrolled in the Summer school.
         We are determined to have an 
         all-inclusive and diverse group of students attending. So put your thinking caps on because it's time to 
         start hacking !</p> 
         <br/>
       
         <p className={classes.paragraph}> Important <span className={classes.data_color}>Details:</span> </p>
        <li className={classes.points} >Held on the final day of the Summer school (Day 7)</li>
         <li className={classes.points}>The hackathon will be organised in a hybrid mode</li>
        <li className={classes.points} >Topic will be related to the courses taught</li>
        {/* <li className={classes.paragraph} >Only registered students can participate</li> */}
        <li className={classes.points} >Top 2 teams win exciting cash prizes</li></div>
    <div>   <img className={classes.image} src = "hacker_1.jpeg" />
    
    <br/>
       
    </div>
        
        <div>
            <p className={classes.paragraph}>
                <span className={classes.data_color}>Who can</span> participate?
            </p>               
               <li className={classes.points} >All students registered for the Summer school can participate</li>
        </div>
  </div>

        <div className={classes.root} id = "details">                     
         <div className="card_hover">   <ImageCard2 statInfo ={statInfo[4]} checked = {checked}/> </div>
         <div className="card_hover">    <ImageCard2 statInfo ={statInfo[5]} checked = {checked}/> </div>
         <div className="card_hover">    <ImageCard2 statInfo ={statInfo[6]} checked = {checked}/> </div>
         <div className="card_hover">    <ImageCard2 statInfo ={statInfo[7]} checked = {checked}/> </div>
            
            {/* <ImageCard hackInfo ={hackInfo[1]} checked = {checked}/>
            <ImageCard hackInfo ={hackInfo[3]} checked = {checked}/>
            <ImageCard hackInfo ={hackInfo[2]} checked = {checked}/> */}
        </div>
        </div>
        </div>
    )

}

export default HackDetails;
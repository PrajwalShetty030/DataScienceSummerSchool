import React, { useEffect, useState } from 'react';
import { AppBar, Card, Collapse, CssBaseline, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import ImageCard from './ImageCard';
import hackInfo from './static/hackInfo';
import windowPosition from './hooks/windowPosition';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';



const useStyles = makeStyles((theme) => ({
    root: {
        minHeight:"100vh",
        display:"flex",
        flexDirection:"row",
        
        justifyContent:"center",
        alignItems:"center",
    },

   text:{
        
        color:"black",
        marginTop:"170px",
        fontFamily:"Poppins",
        paddingLeft: "20px",
        backgroundColor:"rgba(230,230,230,230)",  
        
        
    },

    text_again:{
        padding:"30px",  
        fontStyle:"italic",
        fontSize:32,
        display: "flex",
        
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins",
        textAlign: "center",

        
    },

    paragraph:{
        fontSize:"24px",
        padding:"20px",
        wordSpacing: 5,
        lineHeightStep: 10,
        


    },

    image:{
        height:"48vh",
        margin:"40px",
        
    }


}));

const HackDetails = ()=> {
    const classes = useStyles();
    const checked =  windowPosition('header');

    return (
                 
        <div>
        
       
           
            <div className={classes.text} id="details">
                <div className={classes.text_again}>
                    <h1>What is Data-Con?</h1>
            </div>

        <p className={classes.paragraph}> 
        "Data-Con" is a 12 hour Data Science hackathon open to all students enrolled in thesummer school.
         We are determined to have an 
         all-inclusive and diverse group of students attending. So put your thinking caps on because it's time to 
         start hacking !</p>

         <img className={classes.image} src = "hacker_1.jpeg" />
         <img className={classes.image} src = "hacker_2.jpeg"  padding="30px" />
            
        </div>
        <div className={classes.root} id = "details">                     
            <ImageCard hackInfo ={hackInfo[0]} checked = {checked}/>
            <ImageCard hackInfo ={hackInfo[1]} checked = {checked}/>
            <ImageCard hackInfo ={hackInfo[3]} checked = {checked}/>
            <ImageCard hackInfo ={hackInfo[2]} checked = {checked}/>
        </div>

        </div>
    )

}

export default HackDetails;
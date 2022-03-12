import { AppBar, Collapse, CssBaseline, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import { Typography, Grid } from "@material-ui/core";
import React, { useEffect, useState } from 'react';
import Card from "@material-ui/core/Card";
import {CardMedia} from "@material-ui/core";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Link as Scroll } from 'react-scroll';

import Buttons from './Button/Button';
import './Header.css'

const useStyles = makeStyles((theme) => ({


    colorText: {
        color: 'white',
        outlineColor:'black',
        fontFamily: 'Poppins',
        fontSize: "6rem",
        
    },

    colorText_1: {
        color: 'red',
        outlineColor:'black',
        fontFamily: 'Poppins',
        fontSize: "6rem",
        
    },

    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        
        
        
        
        
    },

    box: {
        // border: "solid wheat",
        
    },

    title:{
        color:"red",
        marginBottom:"120px",   
        fontStyle: "italic",  
        
    },

    date:{
        fontStyle:"bold",
        //padding:"10px",
         //border:"solid white",
         borderRadius:"20px",
         
        //margin:"30px",
        // backgroundColor:"white",
        backgroundSize:"20px",
        color:"white",
        fontStyle: "italic",

        

    },

    boxSize:{
        
        fontSize: 22
    },

  

    // container:{
    //     textAlign:"center",

    // },
   
    goDown:{
        
        fontSize:"2rem",
        textAlign: "center",
    },
      
}));

const Header = () => {
    const classes = useStyles();
    const [checked,setChecked] = useState(false)

    useEffect(()=> {
        setChecked(true);

    },[])
    
    return (

     <div className="main">
        
        <div className={classes.root} id = "header" >
            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={10}>
            
            <h1 className={classes.title}>
                
                <div className={classes.box}>
                <span className={classes.colorText_1}>DATA-</span>
                
                 <span className={classes.colorText}>CON 2022 </span> 
                 </div>
                 
                 </h1>
                 <div className={classes.date}>
                    <h5 className={classes.boxSize}> Live on 11th September </h5>

                 </div>

                 

            <Scroll to="details" smooth={true}>            
                <KeyboardArrowDownIcon  fontSize="large" color="primary" /> 
            </Scroll>              
            
            
            
            
        </Collapse>
    </div>
    </div>
    
     

        
    );
}

export default Header;
 import './Hackathon.css'
import { AppBar, CssBaseline, makeStyles } from '@material-ui/core';
import Header from '../Header';
import React from 'react';
import HackDetails from '../HackDetails';



const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        // backgroundImage: `url(${process.env.PUBLIC_URL + "/hackathon_4.jpeg"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor:"black", 
        
         
        
    },
   
    
    
    
}));

const Hackathon = ({})=> {
     const classes = useStyles();

    return(   
        <div className={classes.root} >
            <CssBaseline/>
            <Header></Header>
            <HackDetails />
        </div>    
        

        
    );
};

export default Hackathon;
import React from 'react';
import { AppBar, Card, Collapse, CssBaseline, IconButton, List, makeStyles, Toolbar,Avatar } from '@material-ui/core';
import './About.css'
import ImageCard2 from '../ImageCard2';
import aboutInfo from '../static/aboutInfo';
import ImageCard3 from '../ImageCard3';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
const useStyles = makeStyles((theme) => ({
    root:{
        display:"flex",
        flexDirection:"column",
        // alignItems:"center",
        // justifyContent:"center",
        minHeight:"200vh",
        
        fontSize:"32px",
       color:"black",
       backgroundColor:"white",
       padding:"10px",
       border:"solid black",
       backgroundColor: "#FCEEEA"
    },
    

    paragraph:{
        fontSize:"20px",
        color:"black",
        padding:"10px",
        wordSpacing: 5,
        lineHeightStep: 10,
        
    },

    image:{
        height:"90vh",
        margin:"10,20,20,0",
        // borderRadius:"30px"
       
       
        
    },

    image1:{
        height:"40vh",
        //margin:"10,20,20,0",
        // borderRadius:"30px"
       
       
        
    },

    cards:{
        
        display:"flex",
        flexDirection:"row",                      
        backgroundColor:"black",
        margin:100,
        alignItems:"center",
        justifyContent:"center",
        minHeight:"85vh",
        borderRadius:"20px"
        
    }


}));




const About = ()=> {
    const classes = useStyles();
    return (
            <div className={classes.root} >
                <div >
                    <h1>SRH University Heidelberg</h1>
                    <h3>About Us</h3>
            </div>

        <p className={classes.paragraph}> We continually take the time 
        to work with you personally to help you reach your goals. We employ
         our proven CORE Principle to structure all study goals and exam formats, 
         as well as learning and teaching methods, to make studying enjoyable and help you achieve the best possible outcome in your studies.
         Six SRH universities of applied sciences in Germany – in Berlin, Fürth, Gera, Heidelberg, North Rhine-Westphalia and Riedlingen – as 
         well as SRH Paraguay and 
         the EBS Universität für Wirtschaft und Recht in Wiesbaden Oestrich-Winkel. </p>

        
         <img className={classes.image} src = "SRHCampus.jpg" />
         {/* <img className={classes.image} src = "hacker_2.jpeg"  padding="30px" /> */}

         <div className={classes.cards}>
         <ImageCard3 aboutInfo={aboutInfo[0]} ></ImageCard3> 
         <ImageCard3 aboutInfo={aboutInfo[1]} ></ImageCard3>
         <ImageCard3 aboutInfo={aboutInfo[2]} ></ImageCard3> 
         </div>

         
         <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
<div div className="yourContact">
<li>Your contact at SRH University Heidelberg</li>
            <li><EmailIcon/>hshd.info@srh.de</li>
            <li>Your contact at SRH University Heidelberg</li>
            <li><EmailIcon/>hshd.info@srh.de</li>
            <li>Your contact at SRH University Heidelberg</li>
            <li><EmailIcon/>hshd.info@srh.de</li> 
</div>
<div>
         <img className={classes.image1} src = "Swati.jpeg" />
         Prof. Dr. Swati Chandna
School of Information, Media and Design | Professor | Study Programme Director Big Data & Business Analytics (M.Sc.)
         </div>
         </div>

         <div className="footer">
         <ul>
            <li>Your contact at SRH University Heidelberg</li>
            <li><EmailIcon/>hshd.info@srh.de</li>
            <li><CallIcon/>+49 6221 6799-000</li>
            </ul>



            <div className='social'>
        <FacebookIcon></FacebookIcon> 
        </div>
        </div>

        
        </div>



    )
}

export default About;
import './About.css'


import TwitterIcon from '@material-ui/icons/Twitter';
import AddAPhotoTwoToneIcon from '@material-ui/icons/AddAPhotoTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';

import React from 'react';
import { AppBar, Card, Collapse, CssBaseline, IconButton, List, makeStyles, Toolbar,Avatar } from '@material-ui/core';

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
        // padding:"10px",
        wordSpacing: 5,
        lineHeightStep: 10,
        padding: "40px 120px",
        textAlign:"justify",
        
        
    },

    image:{
        height:"90vh",
        margin:"10,20,20,0",
        // borderRadius:"30px"
       width: "100%"
       
        
    },

    cards:{
        
        display:"flex",
        flexDirection:"row",                      
        // backgroundColor:"black",
        margin:50,
        alignItems:"center",
        justifyContent:"center",
        minHeight:"85vh",
        borderRadius:"20px",
       
        
    },

    uni:{
        fontWeight:"bold",
        fontSize:"26px",
        //  wordSpacing: 5,
    },

   


}));



const About = () => {
    const classes = useStyles();
    return (

            <div className={classes.root} >
                <div className="title_head">
                    <h1>About Us</h1>
                    
            </div>
                
            
        <p className={classes.paragraph}><span className={classes.uni}>In SRH Heidelberg, </span> we continually take the time 
        to work with you personally to help you reach your goals. We employ
         our proven CORE Principle to structure all study goals and exam formats, 
         as well as learning and teaching methods, to make studying enjoyable and help you achieve the best possible outcome in your studies.
         Six SRH universities of applied sciences in Germany – in Berlin, Fürth, Gera, Heidelberg, North Rhine-Westphalia and Riedlingen – as 
         well as SRH Paraguay and 
         the EBS Universität für Wirtschaft und Recht in Wiesbaden Oestrich-Winkel. </p>

         <img className={classes.image} src = "./SRHCampus.jpg" />
         {/* <img className={classes.image} src = "hacker_2.jpeg"  padding="30px" /> */}

         <div className={classes.cards}>
         <ImageCard3 aboutInfo={aboutInfo[0]} ></ImageCard3> 
         <ImageCard3 aboutInfo={aboutInfo[1]} ></ImageCard3>
         <ImageCard3 aboutInfo={aboutInfo[2]} ></ImageCard3> 
         </div>

         <div className="footer">
         {/* <ul>
            <li>Your contact at SRH University Heidelberg</li>
            <li><EmailIcon/>hshd.info@srh.de</li>
            <li><CallIcon/>+49 6221 6799-000</li>
            </ul> */}



            {/* <div className='social'>
        <FacebookIcon></FacebookIcon> 
        </div> */}
        </div>

        
      


























          
        <div className="content_about">
            


    <div className="footer">
     <ul className="footer1">
   <li className='listhead'>At our University</li>
   <li className='list'> What defines us</li>
   <li className='list'>College team</li>
   <li className='list'>Our Institutes</li>
   <li className='list'>Research</li>

   </ul>


   <ul className="footer2">
   <li className='listhead'>About your study</li>
   <li className='list'> Bachelor</li>
   <li className='list'>Master</li>
   <li className='list'>Study and campus</li>
   <li className='list'>Study Financing</li>

   </ul>

   <ul className="footer3">
   <li className='listhead'>Your contact at SRH Heidelberg</li>
   <li className='list'><span className='email'> <EmailTwoToneIcon/></span>hshd.info@srh.de</li>
   <li className='list'> <span className='email'><CallIcon/></span>+49 6221 6799-000</li>
   <span className='social'>
   <FacebookIcon ></FacebookIcon> 
   </span>
   <span className='social'>

   <TwitterIcon></TwitterIcon> 
   </span>
   <span className='social'>

   <AddAPhotoTwoToneIcon ></AddAPhotoTwoToneIcon> 


   </span>
   </ul>

  



  
</div>
        </div>
        </div>


    )
}
export default About;


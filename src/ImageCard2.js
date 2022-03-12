import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Collapse, makeStyles } from '@material-ui/core';
import { lightGreen, red } from '@material-ui/core/colors';
import hackInfo from './static/hackInfo';
import { colors } from '@mui/material';
import { boxSizing, fontSize, maxHeight, padding, sizeHeight } from '@mui/system';

import statInfo from './static/statInfo';

const useStyles = makeStyles((theme) => ({
    root: {      
        height: 200,
          
        
    },

    text:{
        //  background:"black" ,
         
    },

    text2:{
      color:"white",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      fontWeight:'bold',
      fontSize:20,
      
    },
    
  

}));


export default function ImageCard2({statInfo}) {
    const classes = useStyles()
  return (
   
    <Card sx={{ borderRadius: 5,margin:2.5, width:250,/* marginTop:1,*/ fontFamily:"Poppins",
      
      
    background:" linear-gradient(133.84deg, #4E4E4E -16.04%, #333333 9.33%, #1A1A1A 32.02%, #1A1A1A 62.06%, #262626 87.42%, #4E4E4E 112.12%)"}}>
      
     
      <CardMedia
      className={classes.root}
      component="img" 
      image = {statInfo.imageUrl}
             
            
      />

       
      <CardContent className={classes.text}>
        <Typography gutterBottom variant="h2" component="div" className={classes.text2} 
        fontWeight="bold" color="mediumaquamarine" 
        border="solid white" bgcolor="black" 
        borderRadius="20px" >
          
          {statInfo.title}

        </Typography>
        <Typography variant="body" className={classes.text2}  color="palegoldenrod">
        {statInfo.subtitle}
        </Typography>
      </CardContent>

      
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}





      
    </Card>
  );
}
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
import { boxSizing, padding, sizeHeight } from '@mui/system';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth:330,
        margin: "15px",
        border:"solid wheat", 
        paddingTop:"10px",        
        
    },

    
  

}));


export default function ImageCard({hackInfo,checked}) {
    const classes = useStyles();
  return (
      

    <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}>
        

    <Card className={classes.root}  >
      <CardMedia        
        component="img"   
        image={hackInfo.imageUrl}
        alt="Location"
        
           
      />
      
      <CardContent>
        <Typography  variant="h4" component="h4" fontWeight="semibold" fontFamily="Poppins"
         textAlign="center" color="black"  fontStyle="italic">
          {hackInfo.title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
        </Typography> */}
      </CardContent>
         
    </Card>
    
    </Collapse>
  );
}
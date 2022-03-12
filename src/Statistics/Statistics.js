import ImageCard2 from '../ImageCard2';
import './Statistics.css';
import { AppBar, Card, Collapse, CssBaseline, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import ImagesList from '../ImageList';
import ImageCard from '../ImageCard';
import statInfo from '../static/statInfo';


const useStyles = makeStyles((theme) => ({
    root: {
        
        display:"flex",
        flexDirection:"row",                      
        backgroundColor:"black",
        // margin:100,
        alignItems:"center",
        justifyContent:"center",
        minHeight:"85vh",
        
       
        
        
    },

    heading:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
         margin:"50px 10px -60px 30px",
        fontSize: 56,
        color:"white",
        
        
       

        
        
    },

    bg:{
        backgroundColor:"black"
    }

}));



const Statistics = () => {
    const classes = useStyles();
    
    return (
        
        
        <div className={classes.bg}>
            <h1 className={classes.heading} > Statistics</h1>
        
        <div className={classes.root}>

            
            <ImageCard2 statInfo={statInfo[0]} ></ImageCard2> 
            <ImageCard2 statInfo={statInfo[1]} ></ImageCard2> 
            <ImageCard2 statInfo={statInfo[2]} ></ImageCard2> 
            <ImageCard2 statInfo={statInfo[3]} ></ImageCard2>                        
            
            </div>

            </div>

                 
       

        

        

       
        
    )
}
export default Statistics;
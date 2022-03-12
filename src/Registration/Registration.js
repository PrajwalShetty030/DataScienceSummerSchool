
import styled from 'styled-components';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import './Registration.css';
import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@material-ui/core';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';



const Registration = ()=> {
    const paperStyle ={padding:"20px", height:'80vh', width: 400, margin:"50px auto", backgroundColor: "white"}

    const avatarStyle = {backgroundColor: "green"}

    const buttonStyle ={margin:"20px 0", padding:"10px"}

    return(
        <Grid>
        <Paper elevation={20} style={paperStyle}>
            <Grid align="center" >
            <Avatar style={avatarStyle}>
                <WysiwygIcon/>               
                </Avatar>
                <h3 > Register </h3>
                </Grid>
                <TextField  label="Firstname" placeholder="Enter  Firstname" fullWidth required/>
                <TextField  label="Lastname" placeholder="Enter Lastname"  fullWidth required/>
                <TextField  label="Email" placeholder="Enter email address"  fullWidth required/>
                <TextField  label="Password" placeholder="Enter Password" type="password" fullWidth required/>
                <TextField  label="Confirm Password" placeholder="Enter Password" type="password" fullWidth required/>
                <TextField  label="Nationality" placeholder="Enter nationality"  fullWidth required/>
                <br/> <br/>
                <Button variant="contained" component="label">  Upload Documents <input  type="file" hidden />
                
                
                </Button>
                <Typography> (CV & University Transcript)
                    </Typography>
                <Button type = "submit" color = "secondary" fullWidth variant="contained" style={buttonStyle}>Register </Button>
                <Typography > Already have an account?        
                        <Link href = "/login" >
                            Login here 
                        </Link>
                    </Typography>    
                <br/>
                
        </Paper>

    </Grid>
    )
}

export default Registration;
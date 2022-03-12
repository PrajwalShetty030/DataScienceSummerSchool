import styled from 'styled-components';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import './Login.css';
import { Avatar, Button, Grid, Paper, TextField, Typography,Link } from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { fontWeight, padding } from '@mui/system';
import { useHistory } from 'react-router-dom';

import React from 'react';


const Login = ()=> {

   
        const history = useHistory();

        const handleLogin = () => {
            history.push("/courses")
        

    }


    const paperStyle ={padding:40, height:'60vh', width: 400, 
    margin:"100px auto",background:"rgba(255,255,255,0.8)"}

    const avatarStyle = {backgroundColor: "red"}

    const buttonStyle ={margin:"20px 0", padding:"10px", fontWeight:"bold"}

    // const regStyle ={margin:"10px"}

    return(
        
        <Grid>
            
            <Paper elevation={20} style={paperStyle}>
                <Grid align="center" >
                <Avatar style={avatarStyle}>
                    <LockOutlinedIcon/>               
                    </Avatar>
                    <h3> Login </h3>
                    </Grid>
                    <TextField label="Email" placeholder="Enter your Email address" fullWidth required/>
                    <TextField  label="Password" placeholder="Enter Password" type="password" fullWidth required/>
                    
                    <FormControlLabel  control = {<Checkbox color="primary" />} label="Remember me" />
                    <Button type = "submit" color = "primary" onClick ={handleLogin} fullWidth variant="contained" style={buttonStyle}>Log In</Button>
                   
                    <Typography>
                        <Link href = "#" >
                            Forgot Password?
                        </Link>

                    </Typography>           
                    <Typography > Don't have an account?        
                        <Link href = "/registration" >
                            Register here
                        </Link>
                    </Typography>           
            </Paper>
            

        </Grid>
        

        
    )

}



export default Login;
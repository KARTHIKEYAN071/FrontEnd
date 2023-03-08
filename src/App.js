import * as React from 'react';
// import {TextField} from '@mui/material';
// import Appbar from './Appbar';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { pink } from '@mui/material/colors';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./App.css"
import { Link } from 'react-router-dom';

export default function MyApp() {
  return (
    <div>
      
    <div className='body'>
    <div className="menu">
                    <ul>
                        
                       <button> <li>HOME</li></button>
                       <button> <li>EXAMS</li></button>
                       <button><li>RESEARCH</li></button>
                       <button><li>TOOLS</li></button>
                       <button><li>ABOUT</li></button>
                       <button> <li>CONTACT</li></button>
                    </ul>
                </div>
                <div class="search">
                    <input className="srch" type="search" name="search" placeholder="search here..."/>
                    <button className="btnn">Search</button></div>
      <div className='container'>

        <div className='pic'>
          <br/>
         <div className='h1'> <h1>LOGIN HERE</h1></div>
          <br/>
          <div className='lab'>
            <input type="email" placeholder='Enter Email' required></input>
          </div>
          <br/>
          <div className='lab'>
            <input type="password" placeholder='Enter Password' required></input>
          </div>
          <br/>
          <br/>
          <div className='btn'>
            <Link to="/Login"><button type='submit'><b>LOGIN</b></button></Link>
          </div>
        <p className='link'>New user? / <Link to="/SignUp"><button>Sign Up </button></Link><br/></p>
        <div className='icon'>
      <GoogleIcon fontSize="large"/></div>
        <div className='icon'>
     <FacebookIcon fontSize="large" color="primary"/></div>
        <div className='icon'>
     <InstagramIcon sx={{ color: pink[500] }}fontSize="large"/></div>
        <div className='icon'>
        <TwitterIcon fontSize="large" color="primary"/></div>
        <div className='icon'>
        <LinkedInIcon fontSize="large" color="primary"/></div> </div>

        
      </div>
    </div>
    </div>
  );
}
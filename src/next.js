import * as React from 'react';
import { Link } from 'react-router-dom';
// import {TextField} from '@mui/material';
// import Appbar from './Appbar';
// import GoogleIcon from '@mui/icons-material/Google';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import { pink } from '@mui/material/colors';

// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./App.css"
// import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      
    <div className='body'>
    <div className="menu">
                    <ul>
                        
                       <button> <li>HOME</li></button>
                       <Link to="/SignUp"><button> <li>ADD</li></button></Link>
                       <Link to="/Update"><button><li>UPDATE</li></button></Link>
                       <button><li>SHOW</li></button>
                       <Link to="/delete"><button><li>DELETE</li></button></Link>
                       <button> <li>CONTACT</li></button>
                    </ul>
                </div>
                <div class="search">
                    <input className="srch" type="search" name="search" placeholder="search here..."/>
                    <button className="btnn">Search</button></div>
      

        
      </div>
    </div>
  );
}

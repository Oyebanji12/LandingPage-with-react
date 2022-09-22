import React from 'react'
import {FaFacebookSquare} from "react-icons/fa";
import { AiFillYoutube} from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='ft'>
        <div className='footer-box'>
            <div className='row-1'>
           <div className='row-1-text'> <h2>Manage</h2> </div>
            <FaFacebookSquare />
            <AiFillYoutube />
            <AiFillTwitterCircle />
            <AiOutlineInstagram />
            </div>
            <div className='row-2'>
                <ul>
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>Product</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className='row-3'>
                <ul>
                    <li>Careers</li>
                    <li>Community</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='row-4'>
                <div >
                <input type="text" placeholder='update in your inbox' className='input-field' />
                </div>

            </div>
            <div className='row-5'>
                <button className='footer-button'>Go</button>
            </div>
        </div>
        <div className='footer-copyright'>
          &copy; All right reserved & copyright 2022
         <p> <a href="https://dev-biodun.netlify.app">Built by Biodun</a> </p>
        </div>
        
    </div>
  )
}

export default Footer
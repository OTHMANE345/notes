import './footer.css';
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Footer() {

    return (  

        <div className="footer">

            <div className="container">
                <div className="box">
                    <h3>footer</h3>
                    <ul className="social">
                       
                        <li><a href="https://www.linkedin.com/in/othmane-ballat-24a12a26a/">
                            <span className="icon_linkdn"><FaLinkedin />
                            </span></a>

                        </li>

                        <li><a href="https://github.com/OTHMANE345/">
                            <span className="icon_github"><FaGithub />
                            </span></a>

                        </li>
                       
                    </ul>
                    <p className='text'>Hello! I hope you'll enjoy exploring my portfolio. If you'd like to get in touch, you can find my email, LinkedIn profile, and phone number here.</p>
                </div>
               
                <div className="box">
                  
                    <div className="line">
                    <span className='icon icon_forCall'><FaPhoneSquareAlt />
                    </span>
                    <span >0664257159</span>
                    </div>

                    <div className="line">
                    <span className='icon icon_gmail'><SiGmail />
                    </span>
                    <span >ballateothmane32@gmail.com</span>
                    </div>

                    <div className="line">
                    <span className='icon icon_gmail'><SiGmail />
                    </span>
                    <span >othmane.ballat@uit.ac.ma</span>
                    </div>
                </div>
                

            </div>


        </div>
    )
}

export default Footer
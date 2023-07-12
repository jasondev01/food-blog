import React from 'react'
import "../styles/footer.css"
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className='container container__footer'>
                <div className="logo">
                    <Link to="/">
                        <h2>
                            <span>
                                Food
                            </span>
                            <span>
                                Blog
                            </span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </Link>
                </div>
                <div className='footer__icons'>
                    <BsFacebook className='footer__icon'/>
                    <BsInstagram className='footer__icon'/>
                    <BsLinkedin className='footer__icon'/>
                    <BsTwitter className='footer__icon'/>
                </div>
            </div>
        </footer>
    )
}

export default Footer

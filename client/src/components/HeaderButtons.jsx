import React, { useState } from 'react'
import "../styles/header.css"
import { HiOutlineUser } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import useAuthContext from '../context/AuthContext'

const HeaderButtons = () => {
    const { user, logoutUser } = useAuthContext();
    const [ isVisible, setIsVisible ] = useState(false)
    
    const toggleMenu = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <div className='header__buttons'>
                {
                    user ? (
                        <div className='profile__hover'>
                            <div className='user profile'
                                onClick={toggleMenu}
                            >
                                <HiOutlineUser className="icon"/>
                                <span>
                                    {user ? user?.name : 'Profile'}
                                </span>
                            </div>
                            <div 
                                className={isVisible ? "view__menu" : "view__menu none"}
                            >
                                <Link to="/profile" className='view__profile'>
                                    View Profile
                                </Link>
                                <Link to="/" className='view__profile'
                                    onClick={e => logoutUser()}
                                >
                                    Logout
                                </Link>
                            </div>
                        </div>
                    )  : (
                        <>
                             <Link to="/login" className='user'>
                                <span>
                                    Login
                                </span>
                            </Link>

                            <Link to="/register" className='user'>
                                <span>
                                    Register
                                </span>
                            </Link>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default HeaderButtons

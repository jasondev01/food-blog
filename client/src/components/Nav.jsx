import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
        <nav>
            <div className="container__navbar">
                <ul className='nav__items'>
                    <li className='nav__item'>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className='nav__item'>
                        <Link to="/">
                            About
                        </Link>
                    </li>
                    <li className='nav__item'>
                        <Link to="/recipes">
                            Recipes
                        </Link>
                    </li>
                    <li className='nav__item'>
                        <Link to="/">
                            Blog
                        </Link>
                    </li>
                    <li className='nav__item'>
                        <Link to="/">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav

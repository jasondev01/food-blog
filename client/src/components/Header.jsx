import { Link } from 'react-router-dom'
import '../styles/header.css'
import HeaderButtons from './HeaderButtons'
import Nav from './Nav'

const Header = () => {
    return (
        <header>
            <div className='container container__header'>
                <div className="logo">
                    <Link to='/'>
                        <h2>
                            <span>
                                Food
                            </span>
                            <span>
                                Blog
                            </span>
                        </h2>
                    </Link>
                </div>
                <Nav />
                <HeaderButtons />
            </div>
        </header>
    )
}

export default Header

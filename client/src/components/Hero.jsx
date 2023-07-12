import React from 'react'
import "../styles/hero.css"
import Banner from '../assets/hero.png'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='container container__hero'>
                <article className='hero__article'>
                    <h1>
                        Cooking is not a problem anymore, <br/> find your recipes here
                    </h1>
                    <p>
                        Many people want to start cooking and don't know where to start, here you can start with various recipes from all over the world!
                    </p>
                    <div className='hero__cta'>
                        <a href="#" className='btn btn-primary'>Get Started</a>
                        <Link to="/recipes" className='btn'>Explore Recipes</Link>
                    </div>
                </article>
                <div className='hero__image'>
                    <img src={Banner} alt="Hero Banner Image" />
                </div>
            </div>
        </section>
    )
}

export default Hero

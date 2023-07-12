import { useState } from "react";
import "../styles/cards.css"
import { Link } from 'react-router-dom'

const RecipeCards = ({data, pageNumber}) => {
    const result = data?.hits;
    // console.log("data: ", data)
    return (
        <>
        <section className='cards'>
            <h3>Search Result {data?.count} Recipes</h3>
            <p>
                Page {pageNumber}
            </p>
            <div className="container container__cards">
                {
                    result && 
                    result?.map((item, index) => {
                        return (
                            <Link to={`/recipe/${encodeURIComponent(item.recipe?.uri)}`} key={index} className="container__card">
                                <div className="card__image">
                                    <img src={item.recipe?.image} alt={item.recipe?.label} />
                                </div>
                                <p>
                                    {item.recipe?.label}
                                </p>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
        
        </>
    )
}

export default RecipeCards

import React, { useEffect, useState } from 'react'
import "../styles/popular.css"
import { fetchData } from '../utils/service'
import { Link } from 'react-router-dom';

const PopularRecipe = () => {
    const [ query, setQuery ] = useState('popular');
    const [ data, setData ] = useState(null);

    useEffect(() => {
        fetchData(query)
        .then(res => {
            const filteredData = res?.data?.hits.slice(0, 3);
            setData(filteredData);
            console.log(filteredData);
        })
    }, [])

    return (
        <section className='popularRecipe'>
            <div className="container container__popular">
                <h2>Popular Recipe</h2>
                <div className='popular__recipes'>
                    {
                        data &&
                        data.map((item, index) => {
                            return (
                                <div key={index} className="popular__recipe">
                                    <div className='recipe__image'>
                                        <img src={item?.recipe?.image} alt="Recipe Image" />
                                    </div>
                                    <article className='recipe__info'>
                                        <span>{item?.recipe?.mealType}</span>
                                        <h3>{item?.recipe?.label}</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deserunt repudiandae ducimus.<br/> <br/> <span>
                                                <Link to={`/recipe/${encodeURIComponent(item.recipe?.uri)}`} >Learn More</Link>
                                            </span>
                                        </p>
                                    </article>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default PopularRecipe

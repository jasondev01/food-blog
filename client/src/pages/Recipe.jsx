import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { searchData } from '../utils/service';
import '../styles/recipe.css'
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import useAuthContext from '../context/AuthContext';

const Recipe = () => {
    const [ data, setData ] = useState([]);
    const [ isFavorite, setIsFavorite ] = useState(false)
    const { user, addFavoriteRecipe, removeFavoriteRecipe } = useAuthContext();

    const { uri } = useParams();
    const encodedUri = encodeURIComponent(uri)
    // console.log("encodedUri: ", encodedUri)
    console.log("userFavorites: ", user)

    useEffect(() => {
        if (user && user.favorites && user.favorites.includes(encodedUri)) {
            setIsFavorite(true);
        } else {
            setIsFavorite(false);
        }
    }, [user, encodedUri]);

    const handleAddFavorite = () => {
        if (user && encodedUri) {
            if (isFavorite) {
                removeFavoriteRecipe(encodedUri);
            } else {
                addFavoriteRecipe(encodedUri);
            }
        }
    };

    useEffect(() => {
        searchData(encodedUri)
        .then(res => {
            const response = res?.data?.hits[0];
            setData(response);
            // console.log("Recipe!",response);
        })
        .catch(error => {
            console.log("Error: ", error)
            return error;
        })
    }, [encodedUri]);

    return (
        <section className='recipe'>
            <div className='container container__recipe'>

            {
                data && data?.recipe ? (
                <>
                    <div className="recipe__info__image">
                        <img src={data?.recipe?.image} alt="" />
                    </div>
                    <div className='recipe__info'>
                        <h2>{data?.recipe?.label}</h2>
                        <ul className='recipe__ingredients'>
                            {
                                data.recipe.ingredientLines &&
                                data.recipe.ingredientLines.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                            </ul>
                            <div className='recipe__cta'>
                                {
                                    user ? (
                                        <Link className='btn'
                                            onClick={handleAddFavorite}
                                        >
                                            {
                                                isFavorite ? (
                                                    <>
                                                        Favorite
                                                        <MdOutlineFavorite className='fave-icon'/>
                                                    </>
                                                ) : (
                                                    <>
                                                        Add to Favorites 
                                                        <MdOutlineFavoriteBorder className='fave-icon'/>
                                                    </>
                                                )
                                            }
                                            
                                        </Link>
                                    ) : (
                                        <Link to={`/login`} target='__blank' className='btn'>
                                            Add to Favorites 
                                            <MdOutlineFavoriteBorder className='fave-icon'/>
                                        </Link>
                                    )
                                }
                                
                                <a href={data?.recipe.url} target="_blank" rel="noreferrer">View Source</a>
                            </div>
                    </div>
                    </>
                ) : (
                    <div>Loading...</div>
                )
            }
            </div>
        </section>
    )
}

export default Recipe

import { Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext"
import "../styles/profile.css"
import { searchData } from "../utils/service";
import { useEffect, useState } from "react";
import { MdOutlineFavorite } from 'react-icons/md'
 
const Profile = () => {
    const { user, removeFavoriteRecipe } = useAuthContext();
    const [ favoriteRecipesData, setFavoriteRecipesData ] = useState([]);

    const favoriteRecipes = user?.favorites || [];
    // console.log("favoriteRecipes", favoriteRecipes)

    useEffect(() => {
        const fetchFavoriteRecipes = async () => {
            if (favoriteRecipes.length > 0) { // Check if favoriteRecipes is not empty
                const recipesData = await Promise.all(
                    favoriteRecipes.map(async (uri) => {
                        const response = await searchData(uri);
                        const responseData = response?.data?.hits[0].recipe;
                        return responseData;
                    })
                );
                setFavoriteRecipesData(recipesData);
            }
        };
        fetchFavoriteRecipes();
    }, [favoriteRecipes]);

    const handleRemoveFavorite = (uri) => {
        const encodedUri = encodeURIComponent(uri)
        return () => {
            if (user && encodedUri) {
                removeFavoriteRecipe(encodedUri);
            }
        };
    };
    
    console.log("favoriteRecipesData: ", favoriteRecipesData);
    return (
        <section className="profile">
            <div className="container container__profile">
                <div className="profile__header">
                    <h2>{user?.name}, keep track of your favorite recipes!</h2>
                </div>
                <div className="container__favorites">
                    {
                        favoriteRecipesData && favoriteRecipesData.length !== 0 ? (
                            favoriteRecipesData.map((item, index) => {
                                return (
                                    <div key={index} className="container__favorite">
                                        <div className="favorite__image">
                                            <img src={item?.image} alt="" />
                                        </div>
                                        <article className="favorite__article">
                                            <h3>
                                                {item?.label}
                                            </h3>
                                            <ul className="favorite__ingredients">
                                                {
                                                    item?.ingredientLines &&
                                                    item?.ingredientLines.map((item, index) => {
                                                        return (
                                                            <li className="ingredient__line" key={index}>
                                                                {item}
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <Link to={`/recipe/${encodeURIComponent(item?.uri)}`} className="btn view">
                                                View In Full
                                            </Link>
                                        </article>
                                        <Link className="btn favorite"
                                            onClick={handleRemoveFavorite(item?.uri)}
                                        >
                                            Favorite
                                            <MdOutlineFavorite className='fave-icon'/>
                                        </Link>
                                    </div>
                                )
                            })
                        ) : (
                            <div>
                               You have no favorites yet... Please go ahead to recipes page to search for a recipe!
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Profile

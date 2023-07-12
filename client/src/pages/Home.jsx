import Hero from '../components/Hero'
import PopularRecipe from '../components/PopularRecipe'
import RecipeWeek from '../components/RecipeWeek'
import Subscribe from '../components/Subscribe'
import TrendingRecipe from '../components/TrendingRecipe'

const Home = () => {
    return (
        <>
            <Hero />
            <PopularRecipe />
            <RecipeWeek />
            <TrendingRecipe /> 
            <Subscribe />
        </>
    )
}

export default Home

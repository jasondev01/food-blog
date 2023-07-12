import "../styles/week.css"
import Week from "../assets/week.png"

const RecipeWeek = () => {
    return (
        <section className='week'>
            <div className="container container__week">
                <article className='week__info'>
                    <h3>
                        Recipe of the Week
                    </h3>
                    <h2>Vegetable Lorem Alla Vodka</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda eaque ratione, excepturi error veniam.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ex deserunt, doloribus quisquam rerum nisi dignissimos.
                    </p>
                    <a href="#" className='btn btn-primary'>Get the Recipe</a>
                </article>
                <div className="week__image">
                    <img src={Week} alt="Week Display Image" />
                </div>
            </div>
        </section>
    )
}

export default RecipeWeek

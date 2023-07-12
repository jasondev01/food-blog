import "../styles/trending.css"

const TrendingRecipe = () => {
    return (
        <section className="trending">
            <div className="container container__trending">
                <div className="trending__image">
                    <img src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Trending Display Image" />
                </div>
                <article className='trending__info'>
                    <h3>
                        Trending Recipe
                    </h3>
                    <h2>Burger Alla Gin Tan</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda eaque ratione, excepturi error veniam.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ex deserunt, doloribus quisquam rerum nisi dignissimos.
                    </p>
                    <a href="#" className='btn btn-primary'>Get the Recipe</a>
                </article>
            </div>
        </section>
    )
}

export default TrendingRecipe

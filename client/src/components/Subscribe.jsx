import "../styles/subs.css"

const Subscribe = () => {
    return (
        <section className='subs'>
            <div className="overlay"></div>
            <div className='container container__subs'>
                <article className="article__subs">
                    <h3>If you want a weekly update for Recipes</h3>
                    <h2>Subscribe Now!</h2>
                    <input type="text" placeholder="Enter your Email Address"/>
                </article>
            </div>
        </section>
    )
}

export default Subscribe

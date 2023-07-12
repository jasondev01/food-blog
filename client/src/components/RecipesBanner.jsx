import { useEffect, useState } from "react"
import "../styles/recipes.css"
import RecipeCards from "./RecipeCards"
import { fetchData, fetchDataFromLink } from "../utils/service"
import { Link } from "react-router-dom"

const RecipesBanner = () => {
    const [ data, setData ] = useState([]);
    const [ defaultDisplay, setDefaultDisplay ] = useState('chicken');
    const [ query, setQuery ] = useState('');
    const [ currentLink, setCurrentLink] = useState('');
    const [ previousLinks, setPreviousLinks] = useState([]);
    const [ nextLink, setNextLink ] = useState(null);
    const [ pageNumber, setPageNumber ] = useState(1);

    // default displays
    useEffect(() => {
        fetchData(defaultDisplay)
        .then(res => {
            const responseData = res.data;
            setData(responseData);
            setNextLink(responseData?._links?.next?.href);
            setCurrentLink(res.url);
            setPageNumber(1);
        })
    }, []);

    // on submit displays
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(query)
        .then(res => {
            const responseData = res.data;
            setData(responseData);
            setQuery("");
            setNextLink(responseData?._links?.next?.href);
            setCurrentLink(res.url);
            setPageNumber(1);
        })
    }

    // next page navigation
    const handleNextPage = () => {
        if (nextLink) {
            fetchDataFromLink(nextLink)
            .then(res => {
                const responseData = res.data;
                setData(responseData);
                setNextLink(responseData?._links?.next?.href);
                setPreviousLinks(prevLinks => [...prevLinks, currentLink]);
                setCurrentLink(res.url);
                setPageNumber((prevPageNumber) => prevPageNumber + 1);
            })
            .catch(error => {
                console.log("Error fetching data from link:", error);
            });
        }
    };

    // previous page navigation
    const handlePreviousPage = () => {
        if (previousLinks.length > 0) {
            const previousLink = previousLinks[previousLinks.length - 1];
            fetchDataFromLink(previousLink)
            .then(res => {
                const responseData = res.data;
                setData(responseData);
                setNextLink(responseData?._links?.next?.href);
                setPreviousLinks(prevLinks => prevLinks.slice(0, -1));
                setCurrentLink(res.url);
                setPageNumber((prevPageNumber) => prevPageNumber - 1);
            })
            .catch(error => {
                console.log("Error fetching data from link:", error);
            });
        }
    };

    useEffect(() => {
        window.scrollTo({top: 0});
    }, [currentLink]);

    console.log("currentLink: ", currentLink)

    return (
        <>
        <section className='recipes'>
            <div className="container container__recipes">
                <article className="recipes__article">
                    <h2>
                        There are thousands of recipes to try
                    </h2>
                    <p>
                        Start by searching what you want to try today! 
                    </p>
                    <form onSubmit={handleSubmit} className="recipes__form">
                        <input 
                            type="text"
                            value={query}
                            placeholder="Search for recipes.."  
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </form>
                </article>
            </div>
        </section>
        <RecipeCards data={data} pageNumber={pageNumber}/>
        <section className="prevNext__buttons">
            <div className="container container__prevNext">
                <Link className={previousLinks.length === 0 ? 'btn btn-primary display-none' : 'btn btn-primary'}
                    onClick={handlePreviousPage}
                    disabled={previousLinks.length === 0}
                >
                    Prev Page
                </Link>
                <p>
                    Page {pageNumber}
                </p>
                <Link className="btn btn-primary"
                    onClick={handleNextPage}
                    disabled={!nextLink}
                >
                    Next Page
                </Link>
            </div>
        </section>
        </>
    )
}

export default RecipesBanner

import React from 'react'
import '../App.css';


const MovieSearch = (props) => {

    if (!props.dataMovie.results) return null


    return (
        <>
        <div className="main">
        <h1 className="titlemain">Movies</h1>
        <div className="categories">
            {
                props.dataMovie.results.map((item => {

                   return(
                        <div className="card1">
                        <img src={(item.poster_path == null) ? "https://icons8.github.io/flat-color-icons/svg/remove_image.svg" : `http://image.tmdb.org/t/p/w500${item.poster_path}`} alt={"Not Found"}/>
                        <h1>{(item.original_name) ? item.original_name : item.original_title}</h1>
                        <p>{item.overview}</p>
                        </div>
                   
                   )
                }))
            }
         </div>
         </div>
         <div class="footer">© 2021 Copyright:
            <span> Made By Ketan Totlani</span>
        </div>
        </>
    )
}

export default MovieSearch

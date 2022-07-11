
import React from "react";
import "../App.css"

const MovieCard = ({Movie}) => {
    return (
    <div className="card">
        {/* <img src="img_avatar.png" alt="Avatar" style="width:100%" /> */}
        <div className="container">
            <h4><b>Title: {Movie.title} </b></h4>
            <h4><b>Description: {Movie.description} </b></h4>
            <h4><b> rate : {Movie.rating} </b></h4>
            <a href={Movie.posterURL}>Movie url</a>     
        </div>
    </div>
    )
        
    
}
export default MovieCard

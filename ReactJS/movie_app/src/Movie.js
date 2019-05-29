// import React, { Component } from 'react';
import React from "react";
import PropTypes from 'prop-types';
import "./Movie.css";

// stataless component functional component.
function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">

          <div className="Movie__Column">
            <MoviePoster poster={poster}/>
          </div>

          <div className="Movie__Column">
            <h1> {title}</h1>
            <div className="Movie__Genres">
                {genres.map((genre, index) => <MovieGenres genre={genre} key={index} />)}
            </div>
            <p className="Movie__Synopsis">
              {synopsis}
            </p>
          </div>
        </div>
    )
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    synopsis:PropTypes.string.isRequired,
}

function MovieGenres({genre}){
    return (
        <span className="Movie__Genre"> {genre}  </span>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

MoviePoster.propTypes = {
    poster:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired
}
MovieGenres.propTypes = {
    genre:PropTypes.string.isRequired
}

export default Movie;


// class Movie extends Component{
//
//     static propTypes = {
//         title : PropTypes.string.isRequired,
//         poster : PropTypes.string.isRequired,
//     }
//
//     render() {
//         // console.log(this.props);
//         return (
//             <div>
//             <h1> {this.props.title}</h1>
//             <MoviePoster poster={this.props.poster}/>
//             </div>
//         )
//     }
// }

// class MoviePoster extends Component{
//
//     static propTypes = {
//         poster : PropTypes.string.isRequired,,
//     }
//
//     render(){
//         return (
//             <img src={this.props.poster} alt="this is the poster of this movies" />
//         )
//     }
// }

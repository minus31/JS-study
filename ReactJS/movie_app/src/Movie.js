// import React, { Component } from 'react';
import React from "react";
import PropTypes from 'prop-types';
import "./Movie.css";

// stataless component functional component.
function Movie({title, poster}){
    return (
        <div>
            <h1> {title}</h1>
            <MoviePoster poster={poster}/>
        </div>
    )
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired
}

function MoviePoster({poster}){
    return (
        <img src={poster} alt="this is the poster of this movies" />
    )
}

MoviePoster.propTypes = {
    poster:PropTypes.string.isRequired
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

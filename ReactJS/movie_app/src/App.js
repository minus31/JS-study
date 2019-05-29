import React, { Component} from 'react';
import './App.css';
import Movie from "./Movie";

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// const movies = [
//     {
//         title : "Paterson",
//         poster : "https://m.media-amazon.com/images/M/MV5BMmU2ZTY3NTYtMDgxMS00ZDVlLWE0ZjAtNWVjN2JiMzc4ZjQwXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
//     },
//     {
//         title : "Green Book",
//         poster : "https://pixel.nymag.com/imgs/daily/vulture/2018/11/27/27-greenbook.w700.h467.2x.jpg",
//     },
//     {
//         title : "Call me by your name",
//         poster : "https://geekireland.com/wp-content/uploads/2017/09/Callmebyyourname.jpg",
//     },
// ];

class App extends Component {
    state = {}
    // below is how we add contents when the user get the end of the scroll.
    componentDidMount(){
        this._getMovies()
    }

    _renderMovies = () => {
        const movies = this.state.movies.map((movie, index) => {
            console.log(movie);
        return <Movie
        title={movie.title}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis = {movie.synopsis}
         />;
        })
        return movies
    }
    _callApi = () => {
        return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
        .then(response => response.json())
        .then(json => json.data.movies) //=> 이 걸로 만든 function은 return이 자동을 설정됨
        .catch(err => console.log(err));
    }
    _getMovies = async () => {
        const movies = await this._callApi();
        this.setState({
            movies // = movies: movies
        })
    }
    render(){
        return (
            <div className={this.state.movies ? "App" : "App--loading"}>
            {this.state.movies ? this._renderMovies() : "Loading..."}
            </div>
        );
    }
}

export default App;


// {this.state.movies.map((movie, index) => {
// return <Movie title={movie.title} poster={movie.poster} key={index} />;
// })}

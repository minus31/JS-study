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

    state = {
    }
    // below is how we add contents when the user get the end of the scroll.
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                movies : [
                  {
                      title:  "Good will hunting" ,
                      poster: "https://i.ytimg.com/vi/ReIJ1lbL-Q8/maxresdefault.jpg"
                  },
                  {
                      title : "Paterson",
                      poster : "https://m.media-amazon.com/images/M/MV5BMmU2ZTY3NTYtMDgxMS00ZDVlLWE0ZjAtNWVjN2JiMzc4ZjQwXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
                  },
                  {
                      title : "Green Book",
                      poster : "https://pixel.nymag.com/imgs/daily/vulture/2018/11/27/27-greenbook.w700.h467.2x.jpg",
                  },
                  {
                      title : "Call me by your name",
                      poster : "https://geekireland.com/wp-content/uploads/2017/09/Callmebyyourname.jpg",
                  },
                ]
            })
        }, 3000)
    }


    _renderMovies = () => {
        const movies = this.state.movies.map((movie, index) => {
        return <Movie title={movie.title} poster={movie.poster} key={index} />;
        })
        return movies
    }

    render(){
        return (
            <div className="App">
            {this.state.movies ? this._renderMovies() : "Loading..."}
            </div>
        );
    }
}

export default App;


// {this.state.movies.map((movie, index) => {
// return <Movie title={movie.title} poster={movie.poster} key={index} />;
// })}

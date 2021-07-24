import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
// import {Link} from 'react-router-dom'
import MovieSearch from '../components/MovieSearch'

const URL = 'https://api.themoviedb.org/3/search/multi?api_key=22016cddd8194d83d236a8f02bd88949&language=en-US&query='

export default class Home extends Component {


    constructor(props) {
        super(props);
        this.state = ({
            movieData: []
        })
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=22016cddd8194d83d236a8f02bd88949&language=en-US&page=1`)
        .then(res => {
            console.log(res);
            this.setState({
                movieData : res.data
            })
        })
        .catch(err => console.log(err));
        };
    
        getMovieData = (movietitle) =>{
            axios
            .get(`${URL}${movietitle}&include_adult=false`)
            .then((res) => {
              console.log(res);
              this.setState({
                movieData: res.data,
              });
            })
            .catch((err) => console.log(err));
        }
                 

    render() {
        return (
            <>
                <Nav movieSearch={this.getMovieData} />
                <MovieSearch dataMovie={this.state.movieData}/>
            </>
        )
    }
}

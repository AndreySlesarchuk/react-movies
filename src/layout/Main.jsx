import React from 'react'
import {Movies} from '../component/Movies'
import {Preloader} from "../component/Preloader";
import {Search} from "../component/Search";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
    state = {
        movies: [], loading: true
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=die hard`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch((err) => {
                    console.log(err)
                    this.setState({loading: false})
                }
            )
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch((err) => {
                    console.log(err)
                    this.setState({loading: false})
                }
            )
    }

    render() {
        const {movies, loading} = this.state

        return (<main className='container content'>
            <Search searchMovies={this.searchMovies}/>
            {loading ? (<Preloader/>) : (<Movies movies={movies}/>)}
        </main>)
    }
}

export {Main}

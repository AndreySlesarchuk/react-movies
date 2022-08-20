import React, {useEffect, useState} from 'react'
import {Movies} from '../component/Movies'
import {Preloader} from "../component/Preloader";
import {Search} from "../component/Search";

const API_KEY = process.env.REACT_APP_API_KEY

function Main() {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=die hard`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search)
                setLoading(false)
            })
            .catch((err) => {
                    console.log(err)
                    setLoading(false)

                }
            )
    }, [])

    const searchMovies = (str, type = 'all') => {
        setLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search)
                setLoading(false)
            })
            .catch((err) => {
                    console.log(err)
                    setLoading(false)
                }
            )
    }


    return (<main className='container content'>
        <Search searchMovies={searchMovies}/>
        {loading ? (<Preloader/>) : (<Movies movies={movies}/>)}
    </main>)

}

export {Main}

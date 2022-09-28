import React, { useState } from 'react'
import './movies.css'

import Image1 from '../Images/Movie1.jpg'

const Movies = () => {


    const MovieData = [
        {
            MovieImg : Image1,
            MovieName : "Interstellar",
            MovieYear : 2004,
            MovieLength : "2h 49min",
            MovieTags : ["Adventure " , "Sci-Fi " , "Drama"]
        },
        {
            MovieImg : Image1,
            MovieName : "Avengers",
            MovieYear : 2019,
            MovieLength : "2h 49min",
            MovieTags : ["Adventure " , "Sci-Fi " , "Drama"]
        }
        ,{
            MovieImg : Image1,
            MovieName : "Men In Black",
            MovieYear : 2014,
            MovieLength : "2h 49min",
            MovieTags : ["Adventure " , "Sci-Fi " , "Drama"]
        },
        {
            MovieImg : Image1,
            MovieName : "Spider Man",
            MovieYear : 2010,
            MovieLength : "2h 49min",
            MovieTags : ["Adventure " , "Sci-Fi " , "Drama"]
        }
        ,
        {
            MovieImg : Image1,
            MovieName : "Spider Man 2",
            MovieYear : 2014,
            MovieLength : "2h 49min",
            MovieTags : ["Adventure " , "Sci-Fi " , "Drama"]
        },
        {
            MovieImg : Image1,
            MovieName : "Interstellar 2",
            MovieYear : 2012,
            MovieLength : "2h 49min",
            MovieTags : ["Adventure " , "Sci-Fi " , "Drama"]
        }
    ]

    
    
    
    const [List,UpdateList] = new useState(MovieData);

    const Search = (event) => {
        
        const inp = event.target.value
        var NewList = MovieData;
        NewList = NewList.filter((item) => {
        return item.MovieName.toLowerCase().indexOf(inp.toLowerCase()) !== -1;});

        console.log(NewList);
        UpdateList(NewList);
        
    }

    return (

        <div>
            <p class="greet">Hello User ..!! </p>
            <div class="search-movies">
            <input type="text" placeholder="Search for Movies..." onChange={Search}></input>
            </div>
            <div class="movie-container">
            <div class="movies-list">
                {
                    List.map(s => {
                        return (
                            <div class="movie-card">
                                <img src={s.MovieImg}></img>
                                <p class="name">{s.MovieName}</p>
                                <p class="year">Year : {s.MovieYear}</p>
                                <p class="len">Duration : {s.MovieLength}</p>
                                <p class="tags">Genre : {s.MovieTags}</p>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
        




    )
}

export default Movies
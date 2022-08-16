import { Chip } from '@material-ui/core';
import axios from 'axios'
import React, { useEffect } from 'react'

const Genres = ({
    selectedGenres, 
    genres,
    setGenres,
    setSelectedGenres,
    setpage,
    type
}) => {
    const fetchGenres=async()=>{
        const {data} =await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);

        setGenres(data.genres);
    };

    // console.log(genres)

    useEffect(() => {
      fetchGenres();
    //   return()=>{
    //     setGenres({});
    //   };
    }, [])
    
  return (
    <div style={{padding: '0 6px'}}>
        {genres && genres.map((genre)=>
            <Chip label={genre.name}/>
        )}
    </div>
  )
}

export default Genres
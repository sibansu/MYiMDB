import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react"
import SingleContent from '../../Components/SingleContent/SingleContent';
import './Trending.css'
import Genres from '../../Components/Genres';
import useGenre from '../../hooks/useGenre';

import CustomPagination from '../../Components/CustomPagination/CustomPagination';
const Trending=()=> {
  const [selectedGenres, setSelectedGenres] = useState([])
  const [genres, setGenres] = useState([])
  const [content, setContent] = useState([])
  const [page, setpage] = useState(1);
  const genreforURL=useGenre(selectedGenres)
  const fetchTrending = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`);
    console.log(data.results);
    setContent(data.results);
  };

  useEffect(() => {
    // SOME CHANGE MAY BE
    fetchTrending();
  }, [page, genreforURL]);



  return (
    <div>
      <span className='pt'>Trending</span>
      <Genres type= 'movie' selectedGenres={selectedGenres} genres={genres} setGenres={setGenres} setSelectedGenres={setSelectedGenres} setpage={setpage}/>

      <div className="trending">
        {
          content && content.map((c)=>(
            <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type = {c.media_type} vote_average={c.vote_average}/>
          ))
        }
      </div>
      <CustomPagination setpage={setpage}/>
    </div>
  )
}

export default Trending;
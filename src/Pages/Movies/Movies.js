import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CustomPagination from '../../Components/CustomPagination/CustomPagination';
import Genres from '../../Components/Genres';
import SingleContent from '../../Components/SingleContent/SingleContent';

function Movies() {
  const [page, setpage] = useState(1)
  const [content, setcontent] = useState([]);
  const [numOfpages, setNumOfPages] = useState()
  const [selectedGenres, setSelectedGenres] = useState([])
  const [genres, setGenres] = useState([])

  const fetchMovies=async()=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`);
    // console.log(data);

    setcontent(data.results);
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    fetchMovies()
  }, [page])
  
  return (
    <div>
      <span className='pt'>Movies</span>
      <Genres type= 'movie' selectedGenres={selectedGenres} genres={genres} setGenres={setGenres} setSelectedGenres={setSelectedGenres} setpage={setpage}/>
      <div className="trending">
        {
          content && content.map((c)=>(
            <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type = "movie" vote_average={c.vote_average}/>
          ))
        }
      </div>
      {numOfpages>1 &&(
      <CustomPagination setpage={setpage} numOfpages={numOfpages} />
      )}
    </div>
  )
}

export default Movies
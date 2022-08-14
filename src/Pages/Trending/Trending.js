import React from 'react'
import axios from "axios"
import { useState, useEffect } from "react"
import SingleContent from '../../Components/SingleContent/SingleContent';
import './Trending.css'
import CustomPagination from '../../Components/CustomPagination/CustomPagination';
const Trending=()=> {
  const [content, setContent] = useState([])
  const [page, setpage] = useState(1);
  const fetchTrending = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );

    // console.log(data.results);
    setContent(data.results);
  };

  useEffect(() => {
    // SOME CHANGE MAY BE
    fetchTrending();
  }, [page]);



  return (
    <div>
      <span className='pt'>Trending</span>
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
import { Badge } from '@material-ui/core'
import React from 'react'
import { img_300, unavailable } from "../../Config/Config"
import './SingleContent.css'
function checkRating(rating){
    if(rating>6){
        return 'primary'
    }
    else{
        return 'secondary'
    }
}
const SingleContent = ({ id, poster, title, date, media_type, vote_average }) => {
    return (
        <div className='media'>
            <Badge badgeContent={vote_average} color={checkRating(vote_average)}></Badge>
            <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <b className="title">{title}</b>
            <span className='subtitle'>
                {media_type === "tv" ? "TV Series" : "Movie"}
                <span className="subtitle">{date}</span>
            </span>
        </div>
    )
}

export default SingleContent
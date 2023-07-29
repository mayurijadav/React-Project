"use client"
import React, { useState } from 'react';
import Delete from './delete.js'
const Action = () => {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

    const handleDisLikeClick =() => {
        setLikes(likes-1);b
    };


    return (
        <>
            <div className="actionRow">
                <img src="Like.png" className=" like" onClick={handleLikeClick} />
                <div className="count">{likes}</div>
                <img img src="DisLike.png" className="dislike" onClick={handleDisLikeClick} />
                <Delete/>
            </div>
        </>
    );
}
export default Action;

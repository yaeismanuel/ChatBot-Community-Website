import { useState } from 'react';
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import defaultProfile from '../assets/defaultProfile.png';

export const DisplayAnnouncements = ({ announcements }) => {
  const likePost = async () => {
    
  }
  
  return (
    <>
      { 
        announcements.map((announce, id) => (
          <div className="announceCard" key={id + 1}>
            <div className="cardHead">
              <div className="cardAuthor">
                <div className="authorImg" style={{ backgroundImage: announce.authorImg ? `url("${announce.authorImg}")` : `url("${defaultProfile}")` }}></div>
                <div className="authorInfo">
                  <p>{ announce.author }</p>
                  <span>{ announce.role }</span>
                </div>
              </div>
              <div className="date">
                <p>{ announce.date }</p>
              </div>
            </div>
            <div className="cardBody">
              <pre>{ announce.message }</pre>
              <div className="actions">
                { announce.liked ? <FaThumbsUp /> : <FaRegThumbsUp /> }
                <span>{ announce.likes }</span>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}
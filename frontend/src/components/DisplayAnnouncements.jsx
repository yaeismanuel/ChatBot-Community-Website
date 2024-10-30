import { useState, useRef, useEffect } from 'react';
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { usePost } from '../hooks/Requests';
import defaultProfile from '../assets/defaultProfile.png';

export const DisplayAnnouncements = ({ announcements, refetch }) => {
  const announceIdRefs = announcements.map(a => useRef(null));
  
  const { loading, data, error, postData } = usePost('/api/homepage/like');
  
  const handleAction = (ref) => {
    postData({ _id: ref.current.textContent });
  }
  
  useEffect(() => {
    if (data) refetch();
  }, [data]);
  
  return (
    <>
      { 
        announcements.map((announce, id) => (
          <div className="announceCard" key={ id + 1 }>
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
              <p className="announceId" ref={ announceIdRefs[id] }>{ announce._id }</p>
              <div className="actions" onClick={() => handleAction(announceIdRefs[id])}>
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
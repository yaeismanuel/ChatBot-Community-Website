import { useState, useRef, useEffect, useContext } from 'react';
import { ContextData } from '../App';
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { FaXmark } from 'react-icons/fa6';
import { usePost } from '../hooks/Requests';
import defaultProfile from '../assets/defaultProfile.png';

export const DisplayAnnouncements = ({ announcements, refetch }) => {
  const { userData } = useContext(ContextData);
  const { loading, data, error, postData } = usePost('/api/homepage/like');
  const [current, setCurrent] = useState(announcements);
  const [announceId, setAnnounceId] = useState(null);
  const [authError, setToggle] = useState(null);
  const announceIdRefs = announcements?.map(a => useRef(null));
  
  
  const handleAction = (ref) => {
    postData({ _id: ref.current.textContent });
    setAnnounceId(ref.current.textContent);
  }
  
  useEffect(() => {
    if (data) {
      const d = data.response;
      let newdata = new Array();
      for (let a of current) {
        a._id === d._id
          ? newdata.push(d)
          : newdata.push(a);
      }
      setCurrent(newdata);
    }
    
    if (error) {
      if (error.authError) {
        setToggle(true);
        setTimeout(function() {
          setToggle(false);
        }, 7000);
      }
    }
  }, [data, error]);
  
  return (
    <>
      <div className="popupBox" style={{
        height: authError && '75px',
        border: authError && '1px solid var(--primary)'
      }}>
        <div className="boxContents">
          You need to be logged in to do this action...
        </div>
      </div>
      { 
        current?.map((announce, id) => (
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
                {
                  loading && announceIdRefs[id].current.textContent === announceId ?
                    <>...</> :
                    <>
                      {
                        announce.whoLiked.includes(userData?.id) ? 
                        <FaThumbsUp /> : 
                        <FaRegThumbsUp />
                      }
                      <span>{ announce.likes }</span>
                    </>
                }
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}
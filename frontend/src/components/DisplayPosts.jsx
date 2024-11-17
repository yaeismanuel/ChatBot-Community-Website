import { FaRegThumbsUp, FaRegComment, FaLink, FaImages, FaPaperPlane, FaPlusCircle } from 'react-icons/fa';
import { RxDotsHorizontal } from "react-icons/rx";
import { Link } from 'react-router-dom';

import defaultProfile from '../assets/defaultProfile.png';

const DisplayPosts = ({ posts }) => {
  
  return (
    <div className="posts">
      <h2>
        <Link to="/addpost" >
          <FaPlusCircle className="newpostIcon" />
        </Link>
        📰 Newsfeed
      </h2>
      {
        posts?.map((post, id) => (
          <div className="post" key={id}>
            <div className="postContent">
              <div className="postHeader">
                <div className="author">
                  <div className="img" style={{ backgroundImage: `url("${defaultProfile}")` }}></div>
                  <div className="info">
                    <p>{ post.author.name }</p>
                    <span>{ post.author.role } • { post.date }</span>
                  </div>
                </div>
                <div className="postSettings">
                  <RxDotsHorizontal className="icon" />
                </div>
              </div>
              <div className="postBody">
                <pre>{ post.message }</pre>
              </div>
              <div className="postAction">
                <li>
                  <FaRegThumbsUp className="icon" />
                  <span>{ post.likes }</span>
                </li>
                <li className="commentsBtn">
                  <Link to={`/post/${post._id}`}>
                    <FaRegComment className="icon" />
                    <span>{ post.comments.length }</span>
                  </Link>
                </li>
                <li>
                  <FaLink className="icon linkIcon" />
                </li>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default DisplayPosts
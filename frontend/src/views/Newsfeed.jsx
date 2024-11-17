import { useFetch } from '../hooks/Requests';
import DisplayPosts from '../components/DisplayPosts';

const Newsfeed = () => {
  const { loading, data, error, retry } = useFetch('/api/posts');
  
  if (loading) return (
    <div className="loaderContainer">
      <div className="loader"></div>
    </div>
  );
  
  if (error) return (
    <div className="errorContainer">
      <div className="errorBox">
        <p> Failed to load posts.</p>
        <button onClick={retry}>Retry</button>
      </div>
    </div>
  );
  
  return (
    <div className="container">
      <DisplayPosts posts={data.response}/>
    </div>
  )
}

export default Newsfeed
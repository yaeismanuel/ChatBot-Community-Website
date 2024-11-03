import { useState, useEffect, useRef, useContext } from 'react';
import { ContextData } from '../App';
import { usePost } from '../hooks/Requests';

const AddApi = () => {
  const { setActive } = useContext(ContextData);
  const nameRef = useRef(null);
  const ownerRef = useRef(null);
  const imgRef = useRef(null);
  const linkRef = useRef(null);

  const { loading, data, error, postData } = usePost('/api/apis/add');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nameRef.current.value.trim() == '' ||
      ownerRef.current.value.trim() == '' ||
      linkRef.current.value.trim() == ''
      ) return alert('Please fill out the required field.');
    
    if (!linkRef.current.value.trim().startsWith('http')) return alert('Thumbnail and ink input should be a link.');
    if (!imgRef.current.value.trim().startsWith('http')) return alert('Thumbnail and link input should be a link.');
    
    const credentials = {
      name: nameRef.current.value.trim(),
      link: linkRef.current.value.trim(),
      img: imgRef.current.value.trim(),
      owner: ownerRef.current.value.trim()
    }
    postData(credentials);
  }
  
  useEffect(() => {
    setActive({});
  }, []);
  
  useEffect(() => {
    if (data?.success) {
      nameRef.current.value = '';
      linkRef.current.value = '';
      imgRef.current.value = '';
      ownerRef.current.value = '';
      alert('Added successfully.');
    }
  }, [data]);
  
  return (
    <div className="addAnnounce">
      <form onSubmit={handleSubmit}>
        <h2>Add API</h2>
        <label>
          Web Name:
          <input ref={nameRef} type="text" />
        </label>
        <label>
          Website link:
          <input ref={linkRef} type="text" />
        </label>
        <label>
          Owner:
          <input ref={ownerRef} type="text" />
        </label>
        <label>
          Thumbnail (link/optional):
          <input ref={imgRef} type="text" />
        </label>
        <button>{ loading ? 'Processing...' : 'Submit'}</button>
      </form>
        {
          (error && error.authError) ?
          <p className="err">You are not authorized to do this action.</p> :
          error && !loading ?
            <p className="err">Something went wrong.</p> :
            data?.success ?
              <p style={{ textAlign: 'center', padding: '1rem 0' }}>Added successfully.</p> :
              <></>
        }
    </div>
  )
}

export default AddApi
import { useState, useEffect, useRef, useContext } from 'react';
import { ContextData } from '../App';
import { usePost } from '../hooks/Requests';

const AddWebsite = () => {
  const { setActive } = useContext(ContextData);
  const nameRef = useRef(null);
  const thumbnailRef = useRef(null);
  const descRef = useRef(null);
  const linkRef = useRef(null);
  const devRef = useRef(null);
  const devFbRef = useRef(null);
  const devFbLinkRef = useRef(null);
  
  const { loading, data, error, postData } = usePost('/api/websites/add');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nameRef.current.value.trim() == '' ||
      thumbnailRef.current.value.trim() == '' ||
      linkRef.current.value.trim() == '' ||
      devRef.current.value.trim() == '' ||
      devFbRef.current.value.trim() == ''
      ) return alert('Please fill out the required field.');
    
    if (!thumbnailRef.current.value.trim().startsWith('http')) return alert('Thumbnail and Link input should be a link.');
    if (!linkRef.current.value.trim().startsWith('http')) return alert('Thumbnail and link input should be a link.');
    
    console.log('pass');
    
    const credentials = {
      name: nameRef.current.value.trim(),
      description: descRef.current.value.trim(),
      link: linkRef.current.value.trim(),
      thumbnail: thumbnailRef.current.value.trim(),
      developer: devRef.current.value.trim(),
      devFb: devFbRef.current.value.trim(),
      devFbLink: devFbLinkRef.current.value.trim(),
    }
    postData(credentials);
  }
  
  useEffect(() => {
    setActive({});
  }, []);
  
  useEffect(() => {
    if (data?.success) {
      nameRef.current.value = '';
      descRef.current.value = '';
      linkRef.current.value = '';
      thumbnailRef.current.value = '';
      devRef.current.value = '';
      devFbRef.current.value = '';
      devFbLinkRef.current.value = '';
      alert('Added successfully.');
    }
  }, [data]);
  
  return (
    <div className="addAnnounce">
      <form onSubmit={handleSubmit}>
        <h2>Add Website</h2>
        <label>
          Web Name:
          <input ref={nameRef} type="text" />
        </label>
        <label>
          Description (optional):
          <input ref={descRef} type="text" />
        </label>
        <label>
          Thumbnail (link/landscape):
          <input ref={thumbnailRef} type="text" />
        </label>
        <label>
          Link:
          <input ref={linkRef} type="text" />
        </label>
        <label>
          Developer:
          <input ref={devRef} type="text" />
        </label>
        <label>
          Developer Fb:
          <input ref={devFbRef} type="text" />
        </label>
        <label>
          Dev Fb link (optional):
          <input ref={devFbLinkRef} type="text" />
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

export default AddWebsite
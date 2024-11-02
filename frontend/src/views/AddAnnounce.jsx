import { useState, useEffect, useRef, useContext } from 'react';
import { ContextData } from '../App';
import { usePost } from '../hooks/Requests';
import axios from 'axios';

const AddAnnounce = () => {
  const { setActive } = useContext(ContextData);
  const messageRef = useRef(null);
  
  const { loading, data, error, postData } = usePost('/api/homepage/add');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageRef
      .current.value.trim() == '') return;
    const credentials = {
      message: messageRef
      .current.value.trim(),
    }
    postData(credentials);
  }
  
  useEffect(() => {
    setActive({});
  }, []);
  
  return (
    <div className="addAnnounce">
      <form onSubmit={handleSubmit}>
        <h2>Add Announcement</h2>
        <label>
          Message:
          <textarea ref={messageRef} placeholder="Enter a message..." rows={4}></textarea>
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

export default AddAnnounce
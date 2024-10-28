import { useState, useEffect, useRef } from 'react';
import { server } from '../config.json';
import axios from 'axios';

const baseUrl = 'http://localhost:5000';

export const useFetch = (endpoint) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const abortController = useRef(null);
  
  const fetchData = async () => {
    try {
      if (abortController.current) abortController.current.abort();
      abortController.current = new AbortController();
      setLoading(true);
      
      const token = localStorage.getItem('token');
      const { data: d } = await axios.get(`${baseUrl + endpoint}`, {
        headers: {
          Authentication: `Bearer ${token}`
        },
        signal: abortController.current.signal 
      });
      
      if (d.success) {
        setData(d);
        setError(null);
        setLoading(false);
      } else {
        throw new Error('Failed to fetch data.');
      }
    } catch (e) {
      if (e.code === 'ERR_CANCELED') return;
      setError('Failed to fetch data.');
      setLoading(false);
    }
  }
  
  const retry = () => fetchData();
  
  useEffect(() => {
    fetchData();
  }, []);
  
  return { 
    loading, 
    data, 
    error, 
    retry 
  }
}

export const usePost = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const abortController = useRef(null);
  
  const postData = async (postdata) => {
    try {
      if (abortController.current) abortController.current.abort();
      abortController.current = new AbortController();
      setLoading(true);
      
      const token = localStorage.getItem('token');
      const { data: d } = await axios.post(`${baseUrl + endpoint}`, postdata, {
        headers: {
          Authentication: `Bearer ${token}`
        },
        signal: abortController.current.signal 
      });
      
      if (d.success) {
        setData(d);
        setError(null);
        setLoading(false);
      } else {
        setError(d?.response?.error);
        setLoading(false);
      }
    } catch (e) {
      if (e.code === 'ERR_CANCELED') return;
      setError({
        network: e.message
      });
      setLoading(false);
    }
  }
  
  return { 
    loading,
    data,
    error,
    postData
  }
}
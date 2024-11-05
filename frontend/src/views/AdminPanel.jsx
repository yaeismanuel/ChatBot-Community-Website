import { useState, useEffect } from 'react';
import { useFetch, usePost } from '../hooks/Requests';
import { FaTrashCan } from "react-icons/fa6";
import DataTable, { createTheme } from 'react-data-table-component';

createTheme('mamamo', {
  background: {
    default: 'var(--bg)',
  },
  divider: {
    default: 'var(--dtableDivide)',
  },
});

function AdminPanel() {
  const [profiles, setProfiles] = useState([]);
  const [postreq, setPostreq] = useState(null);
  
  const { loading, data, error, retry, editData } = useFetch('/users');
  const { loading: isloading, data: postdata, error: posterror, postData } = usePost('/user/update');
  
  const makeAdmin = (e) => {
    if (confirm(`Are you sure you want to update ${e.name} account to admin?`)) {
      postData({ id: e.id, q: 'Admin'});
      setPostreq({ name: e.name, query: 'Admin' });
    }
  }
  const makeModerator = (e) => {
    if (confirm(`Are you sure you want to update ${e.name} account as moderator?`)) {
      postData({ id: e.id, q: 'Moderator'});
      setPostreq({ name: e.name, query: 'Moderator' });
    }
  }
  const demoteToMember = (e) => {
    if (confirm(`Are you sure you want to demote ${e.name} to member?`)) {
      postData({ id: e.id, q: 'Member'});
      setPostreq({ name: e.name, query: 'Member' });
    }
  }
  const deleteUser = (e) => {
    if (confirm(`Are you sure you want to delete ${e.name} account?`)) {
      postData({ id: e.id, q: 'Member', del: true});
      setPostreq({ name: e.name, query: 'Delete', del: true });
    }
  }
  
  const customStyles = {
    padding: '0.2rem 0.5rem',
    color: 'var(--dtableText)',
    border: '1px solid var(--primary)',
    borderRadius: '4px',
    background: 'var(--darkColor)',
  }

  const columns = [
    {
      name: 'Name',
      width: 'auto',
      selector: row => row.name,
    },
    {
      name: 'Username',
      width: 'auto',
      selector: row => row.username,
    },
    {
      name: 'Role',
      width: 'auto',
      selector: row => row.role,
    },
    {
      name: 'Action',
      width: 'auto',
      cell: row => (
        <div style={{
          display: 'flex',
          gap: '5px',
        }}>
          <button style={{ ...customStyles, background: 'green' }} onClick={() => makeAdmin(row)}>A</button>
          <button style={{ ...customStyles, background: 'blue' }} onClick={() => makeModerator(row)}>M</button>
          <button style={{ ...customStyles, background: '#ff4a4a' }} onClick={() => demoteToMember(row)}>D</button>
          <button style={{ ...customStyles, background: 'red' }} onClick={() => deleteUser(row)}>
            <FaTrashCan style={{ color: '#fff' }} />
          </button>
        </div>
      ),
    },
  ];
  
  useEffect(() => {
    if (data?.success) {
      setProfiles(data.response)
    }
    if (postdata?.success) {
      if (postreq.del) {
        const updated = profiles.filter(d => d.id !== postdata.response.id ? true : false);
        setProfiles(updated);
        alert(`Successfully deleted ${postreq.name}.`);
      } else {
        const updated = profiles.map(d => {
          if (d.id === postdata.response.id) {
            return postdata.response;
          } else {
            return d;
          }
        });
        setProfiles(updated);
        alert(`Successfully updated ${postreq.name} as ${postreq.query}.`);
      }
    }
    if (posterror) {
      alert(`Unable to update ${postreq.name} as ${postreq.query}.`)
    }
  }, [data, postdata])
  
  if (loading) return (
    <div className="loaderContainer">
      <div className="loader"></div>
    </div>
  );
  
  if (error?.authError) return (
    <div className="errorContainer">
      <div className="errorBox">
        <p> You are not authorized to access this page.</p>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="errorContainer">
      <div className="errorBox">
        <p> Failed to load users data.</p>
        <button onClick={retry}>Retry</button>
      </div>
    </div>
  );
  
  return (
    <div className="container">
      <DataTable
        className="adminPanel"
        columns={columns}
        data={profiles}
        pagination
        theme="mamamo"
      />
    </div>
  );
};

export default AdminPanel
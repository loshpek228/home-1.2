import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Page1() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Page 1</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
      
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
         
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <h2>{user.name}</h2>
               
                <p>
               
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Page1;


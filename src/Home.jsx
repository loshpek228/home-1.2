import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/page1"> <h1>Page1</h1></Link>
      <Link to="/page2"><h1>Page2</h1></Link>
    </div>
  );
}

export default Home;

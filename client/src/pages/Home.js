import React, { useContext } from 'react'
import RenderJson from '../components/RenderJson';
import StateSearch from '../components/StateSearch';
import { AuthContext } from '../providers/AuthProvider';

const Home =  () => {
  const auth = useContext(AuthContext)
  return(
    <div>
      <h1>Home</h1>
      {/* Testing for GitHub Repo */}
      <h2> Hey there! Glad to see you. Please login to save a route to your prefered locations, or use the finder below to search for your State</h2>
      <StateSearch />
    </div>
  )
};

export default Home;
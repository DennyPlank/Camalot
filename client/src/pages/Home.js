import React, { useContext, useState } from 'react'
import RenderJson from '../components/RenderJson';
import StateSearch from '../components/StateSearch';
import { AuthContext } from '../providers/AuthProvider';

const Home =  () => {
  const [stateChoice, setStateChoice] = useState('')
  const auth = useContext(AuthContext)
  console.log(stateChoice)

  const getChoice = (choice) => {
    setStateChoice(choice)
  }
  return(
    <div>
      <h1>Welcome</h1>
      <h2> Hey there! Glad to see you. Please login to save a route to your prefered locations, or use the finder below to search for your State</h2>
      <StateSearch 
      getChoice={getChoice} 
      />
    </div>
  )
};

export default Home;
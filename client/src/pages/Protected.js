import React, { useContext, useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';

const Protected = () => {
  const {authenticated} = useContext(AuthContext);
  const [states, setStates] = useState(null)
  useEffect(() => {
    getStates();
  }, []);
  
  const getStates = async () =>{
    let response = await axios.get('/states')
    setStates(response.data)
  }
  console.log(states)
  const renderPage = () => {
    return (
      <h1>{JSON.stringify(states)}</h1>
    )
   
  };
  return (
    <Container>
      <h1>Top Secret!!!</h1>
      {renderPage()}
    </Container>
  )
};

export default Protected;
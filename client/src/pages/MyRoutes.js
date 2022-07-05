import React, { useContext, useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';

const MyRoutes = () => {
  const {authenticated} = useContext(AuthContext);
  const [states, setStates] = useState(null)
  useEffect(() => {
    getStates();
  }, []);
  
  const getStates = async () =>{
    let response = await axios.get('/states')
    setStates(response.data)
    console.log(response.data)
  }
   
  return (
    <Container>
      <h1>My saved rotues</h1>
    </Container>
  )
};

export default MyRoutes;
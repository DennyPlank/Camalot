import React, { useEffect, useState } from 'react'
import {DropdownButton, Dropdown} from 'react-bootstrap';
import axios from 'axios';
const StateSearch = () =>{
    const [states, setStates] = useState([])

    useEffect (()=>{
        getStates();
    },[])

    const getStates = async () => {
        let response = await axios.get('/states')
        setStates(response.data)
        console.log(response.data)
    }

    const populateDropdown = () => {
         return states.map((s)=>{
            return (
                      <Dropdown.Item as="button">{s.name}</Dropdown.Item>
             )
         })
    }

    return (
        <div>
            <DropdownButton id="state-dropdown-menu" title="States">
                {populateDropdown()}
            </DropdownButton>
        </div>
    )
}

export default StateSearch; 
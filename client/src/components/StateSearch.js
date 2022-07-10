import React, { useEffect, useState } from 'react'
import {DropdownButton, Dropdown} from 'react-bootstrap';
import axios from 'axios';
const StateSearch = (props) =>{
    const [states, setStates] = useState([])
    const [stateChoice, setStateChoice] = useState(null)

    useEffect (()=>{
        getStates();
    },[])

    const getStates = async () => {
        let response = await axios.get('/states')
        setStates(response.data)
    }

    const populateDropdown = () => {
         return states.map((s)=>{
            return (
                 <Dropdown.Item key={s.id} as="button" value={s.name}>{s.name}</Dropdown.Item>
             )
         })
    }
    const handleSubmit = (value) => {
        props.getChoice(value);
        setStateChoice(value);
    }
    return (
        <div>
            <DropdownButton
             onClick={(event) => handleSubmit(event.target.value)}
             id="state-dropdown-menu" 
             title={stateChoice? stateChoice : "Pick a State"}
             >
                {populateDropdown()}
            </DropdownButton>
        </div>
    )
}

export default StateSearch; 
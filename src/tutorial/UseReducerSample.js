import React, {useReducer, useState } from 'react';
import Modal from "./Modal";
import {data} from "./data";

// useReducer sample
// used to add more structured form
const reducer = (state,action) => {};
const defaultState = {
    //no records printed
    //people:[],
    //print array
    people:data,
    isModalOpen:false,
    modalContent:"hello world"
}
const UseReducerSample = () => {
    const [name, setName] = useState('');
    // superseded by 'useReducer'
    // const [people, setPeople] = useState(data);
    // const [showModal, setShowModal] = useState(false);

    // useReducer init 'state' passing object 'defaultState' to it
    // it's always assotiated to 'dispatcher'
    const [state, dispatch] = useReducer(reducer, defaultState)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name){

        }
        else {
        }
    }
    return (
        <>
            {/* render component Modal if 'showModal' is true */}
            {/* showModal && <Modal />*/}
            {/* read boolean of modalContent using 'state' */}
            {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <button type="submit">add</button>
            </form>
            {/* print of array */}
            {state.people.map((person) => {
                return <div key={person.id}>
                    <h3>{person.name}</h3>
                </div>
            })}
        </>
    )
}

export default UseReducerSample;

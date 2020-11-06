import './Form.css';
import React from 'react';

//creating stateless function
const Form=(props)=>{
    return(
        <>
        <form className="container" onSubmit={props.getWeather} >
            <input className="city"
            type="text"
            placeholder="City"
            name="city"
            />
            <input className="country"
            type="text"
            placeholder="Country"
            name="country"
            />
            <button className="btn btn-outline-light" > <i class="fa fa-search fa-1g"/>  Search </button>
        </form>
       
        </>
    );
}

export default Form;
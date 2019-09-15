import React from 'react';
import './Person.css';

const person = (props) => {

  return (
    <div className="Person">

      <h3>I'm {props.name}</h3>
      <p>I love {props.hobby} </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name}/>

    </div>
  );


}

export default person;

import React from 'react';
import './Person.css';

const person = (props) => {

  return (
    <div className="Person">

      <h3>I'm {props.name}</h3>
      <p>I love {props.hobby} </p>

    </div>
  );


}

export default person;

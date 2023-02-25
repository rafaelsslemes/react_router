import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext';

const About = () => {

  const {counter, setCounter} = useContext(CounterContext);

  return (
    <div>
      About
      
      <h1>Context Counter - {counter}</h1>
      <button onClick={()=> setCounter(counter+1)}>
        Increment Counter
      </button>
      
    </div>
  )
}

export default About
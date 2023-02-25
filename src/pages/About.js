import { useCounterContext } from "../hooks/useCounterContext"

const About = () => {

  const {counter, setCounter} = useCounterContext();
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
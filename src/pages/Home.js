import { type } from '@testing-library/user-event/dist/type';
import { Link } from 'react-router-dom';
import { useCounterContext } from '../hooks/useCounterContext';
import { useFetch } from '../hooks/useFetch';
import { useTitleColorContext } from '../hooks/useTitleColorContext';
import './Home.css';

const Home = () => {

  const backendURL = 'http://localhost:3000/products';
  const {data, loading, errorMsg} = useFetch(backendURL);

  const {counter, setCounter} = useCounterContext();

  const {color, number, dispatch} = useTitleColorContext();

  return (
    <div>
      <h1 style={{color:color}}>Product List</h1>
      <button onClick={()=> dispatch({type:"RED"})}>Red</button>
      <button onClick={()=> dispatch({type:"BLUE"})}>Blue</button>
      <button onClick={()=> dispatch({type:"GREEN"})}>Green</button>
      <h2>{number}</h2>

      <ul className='products'>
        {errorMsg === null 
          ? (data && data.map(product => (
            <li key={product.id}>
              <p>{product.name} R${product.price}</p>
              <Link to={`/product/${product.id}`}>Details</Link>
            </li>
          )))
          : (<h2>{errorMsg}</h2>)
        }
      </ul>
      <br/>
      <h1>Context Counter - {counter}</h1>
      <button onClick={()=> setCounter(counter+1)}>
        Increment Counter
      </button>
      
    </div>
  )
}

export default Home
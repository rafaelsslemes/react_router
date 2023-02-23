import React from 'react'
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import './Home.css';

const Home = () => {

  const backendURL = 'http://localhost:3000/products';
  const {data, loading, errorMsg} = useFetch(backendURL);

  return (
    <div>
      <h1>Product List</h1>
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

    </div>
  )
}

export default Home
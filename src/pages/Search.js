import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const Search = () => {

    const [searchParams] = useSearchParams();
    const backendURL = 'http://localhost:3000/products?' + searchParams;

    const {data:products, loading, errorMsg} = useFetch(backendURL);

  return (
    <div>
        <ul className='products'>
            {errorMsg === null 
            ? (products && products.map(product => (
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

export default Search
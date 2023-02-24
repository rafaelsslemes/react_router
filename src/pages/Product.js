import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const Product = () => {

    const {id} = useParams();
    const productURL = 'http://localhost:3000/products/' + id;

    const {data : product, loading, errorMsg} = useFetch(productURL)

    return (
        <div>
            <h1>
                Product {id}
            </h1>
            {loading && <h2>Loading product...</h2>}
            {errorMsg && <h2>{errorMsg}</h2>}
            {product && (
                <div>
                    <h2>{product.name}</h2>
                    <h2>R$ {product.price}</h2>
                </div>
            )}
        </div>
    )
}

export default Product
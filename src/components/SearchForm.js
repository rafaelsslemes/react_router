import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {

    const navigate = useNavigate();
    const [query, setQuery] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('search?q=' + query);
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>Search
            <input onChange={(event) => setQuery(event.target.value)} />
        </label>
        <input type='submit' value='Search'/> 

    </form>
  )
}

export default SearchForm
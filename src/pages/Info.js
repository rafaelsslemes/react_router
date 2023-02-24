import React from 'react'
import { useParams } from 'react-router-dom';

const Info = () => {

const {id} = useParams();

  return (
    <div>Information of Product {id}</div>
  )
}

export default Info
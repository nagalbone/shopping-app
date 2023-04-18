import React from 'react'
import {Spinner} from 'react-bootstrap';

const spinner = () => {
  return (
    <Spinner animation="border" role="status" style={{width:'50px',height:'50px',margin:'auto',marginTop:'200px',display:'block'}}>
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  )
}

export default spinner
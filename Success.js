import React from 'react';
import { Redirect } from 'react-router-dom'
import Registration from '../Registration/Registration';

function Success(authorized) {
  // if(!authorized){
  //   return <Redirect to="/" element={<Registration/>} />
  // }
  return (
    <div>
        <h1>Your Account is created</h1>
        
    </div>
  )
}

export default Success
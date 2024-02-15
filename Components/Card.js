import React from 'react'

const Card = ({id, name, username, email, address}) => {
  return (
   
  
      <div className='bg-[#2C2C2C] p-3 rounded-md text-white'>
        <h1>{id}</h1>
        <h1 className='text-[#FEF50F] font-bold'>{name}</h1>
        <p>{email}</p>
        <p>{address.zipcode}</p>
      </div>
  )
}

export default Card

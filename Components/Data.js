'use client'
import React, { useEffect, useState } from 'react'
import Card from './Card'

const Data = () => {
    const [Data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [IsLoading, setIsLoading] = useState(true)
    const ErrorMessage = "Caught an error while loading"
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res)=>{
        if(!res.ok){
          throw Error(ErrorMessage)
        }else{
          return res.json()
        }
      })
      .then((data)=>{
        setData(data)
        setIsLoading(false)
      })
      .catch((err)=>{
        setError(err.message)
        setIsLoading(false)
      })
      }, [])

      console.log(Data)
  return (
    <>    
          <div className='w-[70%] m-auto'>
            <h1 className='text-center mt-5 mb-5 text-2xl text-white'>Users management App</h1>

            {
              error && <p className='text-[#FEF50F]'>{error}</p>
            }
            {
              IsLoading && <p className='text-[#FEF50F]'>Loading...</p>
            }

           <div className='grid grid-cols-4 grid-flow-row gap-4 md:grid-cols-3 sm:grid-cols-1 '>
           {
            Data && Data.map((user)=> {
              return <Card key={user.id} {...user} />
            }
            )
           }
           </div>
          </div>
    </>
  )
}

export default Data

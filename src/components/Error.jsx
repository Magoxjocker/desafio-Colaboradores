import React from 'react'


const Error = ({message}) => {
  return (
    <div>
        <p className='bg-warning text-white p-2 text-center w-50 text-uppercase rounded font-bold'>{message}</p>
    </div>
  )
}

export default Error
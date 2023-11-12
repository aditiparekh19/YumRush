import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
const error = useRouteError();
  return (
     <div className='text-xl m-8 p-2 text-center font-semibold'>
     <h2>Oops! Something went wrong..</h2>
     <h3 className='text-red-600'>{error.status}: {error.statusText}</h3>
   </div>
  )
}

export default ErrorPage

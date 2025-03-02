import React from 'react'

const Container = ({children}) => {
  return (
    <div className='bg-primary-0 rounded-xl h-auto w-auto px-6 py-4'>
      {children}
    </div>
  )
}

export default Container

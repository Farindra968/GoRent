import Link from 'next/link'
import React from 'react'

const Title = ({title, href}) => {
  return (
    <div className='flex justify-between items-center'>
          <h3 className='font-Poppins-Medium text-secondary-400'>{title}</h3>
          <Link href={`${href}`} className='font-Poppins-Medium text-sm text-primary-500'>View all</Link>
    </div>
  )
}

export default Title

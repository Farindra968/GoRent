import React from 'react'

const Label = ({label, htmlFor}) => {
  return (
      <label htmlFor={htmlFor} className='font-Poppins-SemiBold text-secondary-500'>{label}</label>
  )
}

export default Label

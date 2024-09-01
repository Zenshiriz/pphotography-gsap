import React from 'react'

const ButtonComponent = ({className, children, onClick}) => {
  return (
    <button className={`py-2 font-light text-xs px-5 bg-white text-black  rounded-full shadow-md hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-50 focus:ring-opacity-75 ${className}`}>
      {children}
    </button>
  )
}

export default ButtonComponent

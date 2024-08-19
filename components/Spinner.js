import React from 'react'

const Spinner = (props) => {
  const btc = props['color'];
  return (
    <div style={{
        'borderTopColor': `${btc}`,
        'animation': 'spin 1.5s linear infinite',
      }} className="ease-linear rounded-full border-2 border-t-2 border-gray-200 h-16 w-16 fixed top-1/2"></div>
  )
}

export default Spinner
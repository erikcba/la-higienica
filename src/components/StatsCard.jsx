import React from 'react'

const StatsCard = ({ numero, texto, color, textColor }) => {
  return (
    <div className={`rounded-md flex flex-col gap-1 sm:gap-2 items-start justify-center px-4 py-2 sm:px-6 sm:py-4 ${color}`}>
      <h1 className={`text-2xl sm:text-3xl font-bold ${textColor}`}>
        {numero}
      </h1>
      <p className='text-md sm:text-lg'>
        {texto}
      </p>
    </div>
  )
}

export default StatsCard

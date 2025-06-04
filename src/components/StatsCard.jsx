import React from 'react'

const StatsCard = ({ numero, texto, color, textColor }) => {
  return (
    <div className={`rounded-md flex flex-col gap-2 items-start justify-center px-6 py-4 ${color}`}>
      <h1 className={`text-3xl font-bold ${textColor}`}>
        {numero}
      </h1>
      <p className='text-lg'>
        {texto}
      </p>
    </div>
  )
}

export default StatsCard

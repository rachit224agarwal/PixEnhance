import React from 'react'

function ImagePreview() {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>

      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-xl tracking-tight font-semibold text-center bg-blue-800 text-white py-2'>Orignal Image</h2>
        <img src="" alt="" className='w-full h-full object-center' />
        <div className='h-80 bg-gray-200 flex items-center justify-center text-center'>
          No Item Selected
        </div>
      </div>

      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-xl tracking-tight font-semibold text-center bg-blue-400 text-white py-2'>Enhanced Image</h2>
        <img src="" alt="" className='w-full h-full object-center' />
      </div>
      <div className='h-80 bg-gray-200 flex items-center justify-center text-center'>
          No Enhanced Image
        </div>

    </div>
  )
}

export default ImagePreview

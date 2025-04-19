import React from 'react'

function ImageUpload() {
  return (
    <div className='bg-white shadow-lg rounded-2xl p-5 w-full max-w-2xl'>
     <label htmlFor="fileInput" className='block w-full cursor-pointer border-2 border-gray-300 rounded-lg p-5 border-dashed text-center hover:border-blue-500 transition-all'>
     <input type="file" className='hidden' id='fileInput' />
     <span className='tracking-tight'>Click and drag to upload your Image</span>
     </label>
    
    </div>
  )
}

export default ImageUpload

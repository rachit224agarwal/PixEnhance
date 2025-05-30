import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>
      <div className='text-center mb-8'>
      <h1 className='text-5xl font-bold text-blue-600 mb-1.5 glow-text'>
  AI Image Enhancer
</h1>


        <p className='text-lg text-gray-500'> Upload your Image and let AI enhance to in seconds!</p>
      </div>
      <Home/>
      <div className='text-sm text-gray-500 hover:text-blue-500 mt-4'>
        Powered by @PicEnhance_AI
      </div>

    </div>
  )
}

export default App

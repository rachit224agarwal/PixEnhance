import React, { useState } from 'react'
import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'
import { enhancedImageAPI } from '../utils/EnhanceimageApi'

function Home() {
  const [uploadImage, setuploadImage] = useState(null)
  const [enhanceImage, setenhanceImage] = useState(null)
  const [loading, setloading] = useState(false)
  const uploadImageHandler = async (file)=>{
    setuploadImage(URL.createObjectURL(file))
    setloading(true)
    try {
      const enhancedURL = await enhancedImageAPI(file)
      setenhanceImage(enhancedURL)
      setloading(false)
    } catch (error) {
      console.log(error)
      alert("Error while Enhancing your image , try again after 2 mins.")
    }
  };

  return (
    <>
      
    <ImageUpload uploadImageHandler={uploadImageHandler} />
    <ImagePreview
      uploadImage={uploadImage}
      enhanceImage={enhanceImage}
      loading={loading}
    />

    </>
  )
}

export default Home;
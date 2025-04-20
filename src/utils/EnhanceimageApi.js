const API_KEY = "wxgtabmxzkab3hkvb"
const BASE_URL = "https://techhk.aoscdn.com/"

export const enhancedImageAPI = async (file)=>{
    try {
        const taskID = await uploadImage(file)
        console.log("Image Uploaded Successfully",taskID)
        const enhanceImageData = await fetchEnhanceImage(taskID)
        console.log("Enhance Image is ",fetchEnhanceImage)  
    } catch (error) {
        
    }
};

const uploadImage = async (file)=>{
    const formdata = new FormData();
    formdata.append("image_file",file);
    await axios.post(`${BASE_URL}/api/tasks/visual/scale`,formdata,{
        headers:{
            "Content-Type" : "multipart/form-data",
            "X-API-KEY" : API_KEY,
        },
    });
    return taskID
}

const fetchEnhanceImage = async (taskID)=>{
    await axios.get(`${BASE_URL}/api/tasks/visual/scale${taskID}`,{
        headers:{
            "X-API-KEY" : API_KEY,
        },
    });
    if(!data?.data) {
        throw new Error("Failed to fetch Enhance Image! Image not found !!")
    }
    return data.data;
}
import axios from 'axios';

const endpoint = "https://pixabay.com/api/?key";
const APIKey = "13417145-d0c367819415b077de5e950e3";

// https://pixabay.com/api/?key={ KEY }&q=yellow+flowers&image_type=photo
// Assume photos only for this project

async function queryImage(query){
    //Sanitize input
    query = query.replace(' ', '+');
    const apiCall = `${endpoint}=${APIKey}&q=${query}&image_type=photo`;
    let responseArr = []; 
    try{
        const response = await axios.get(apiCall)
        // Ideally I would paginate response, but for sake of time I am
        // selecting the first 9 images in the response.
        for(var i = 0; i < 9;i++){
            responseArr.push(response.data.hits[i].webformatURL);
        }
        
    } catch (e){
        console.log(e);
    }
    return responseArr;
}

export default queryImage;
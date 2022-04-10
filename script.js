const apiKey ='m730i1pNJ7wdGAC6u7pSD0hzt8WbJ_Jv2EmMmf82-uc';
const count=10;
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=landscape&`;




// Get photos from unsplash API

async function getPhotos(){
    try{
        const response=await fetch(apiUrl);
        const data = await response.json();
        console.log(data);  
    }

    catch(error){
        // catch error here
    }
}
getPhotos();
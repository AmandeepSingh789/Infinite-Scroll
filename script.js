const apiKey ='m730i1pNJ7wdGAC6u7pSD0hzt8WbJ_Jv2EmMmf82-uc';
const count=10;
const apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=landscape&`;

const imageContainer = document.getElementById('image-container');

const loader = document.getElementById('loader');

let photosArray=[];
 
// Create Elements For Links and Photos, add to DOM
function displayPhotos(){
    photosArray.forEach((photo)=>{

        //Create <a> to link to Unsplash
        const item = document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target','_blank');

        //create<img>
        const img=document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('alt',photo.alt_description);
        img.setAttribute('title',photo.alt_description);

        //put img inside anchor element, put both inside container

        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}
// Get photos from unsplash API
async function getPhotos(){
    try{
        const response=await fetch(apiUrl);
       photosArray = await response.json();
       console.log(photosArray);
       displayPhotos()

    }

    catch(error){
        // catch error here
    }
}
getPhotos();
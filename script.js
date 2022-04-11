const apiKey ='m730i1pNJ7wdGAC6u7pSD0hzt8WbJ_Jv2EmMmf82-uc';
const count=30;
const apiUrl=`https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;


let ready = false;
let imagesLoaded =0;
let totalImages =0;

//https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}&orientation=landscape
const imageContainer = document.getElementById('image-container');

const loader = document.getElementById('loader');

let photosArray=[];
 
// check if all images are loaded
function imageLoaded(){
    imagesLoaded++;
    console.log(imagesLoaded);
    if(imagesLoaded===totalImages){
        ready=true;
        console.log('ready = ',ready);
    }
}

//HELPER FUNCTION to set Attributes to DOM Elements
function setAttributes(element,attributes){

    for (const key in attributes){
        element.setAttribute(key,attributes[key]);
    }
}
// Create Elements For Links and Photos, add to DOM
function displayPhotos(){
    imagesLoaded=0;
    displayPhotos= photosArray.length;
    console.log('Total images',totalImages)
    photosArray.forEach((photo)=>{

        //Create <a> to link to Unsplash
        const item = document.createElement('a');

        setAttributes(item,{
            href: photo.links.html,
            target: '_blank',
        });

        //create<img>
        //alt way of setting attributes
        const img=document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('alt',photo.alt_description);
        img.setAttribute('title',photo.alt_description);
        img.addEventListener('load',imageLoaded());
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

//Check to see if scrolling is near bottom of page.Load more photos
window.addEventListener('scroll',()=>{
    if(window.innerHeight + window.scrollY>= document.body.offsetHeight -1000 && ready==true){
        ready=false;
        getPhotos();
    }
});
getPhotos();
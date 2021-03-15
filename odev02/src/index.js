const image_array = [
    "../images/img1.jpg",
    "../images/img2.jpg",
    "../images/img3.jpg",
];


let latestIndex;
var guessStatus = new Boolean(true);
let guessCount=0;
let html1;
let html2;
let html3;



export const newImage1 = () =>{    
    
    if(guessStatus) {
        let index1 = Math.floor(Math.random()*image_array.length);
        if(latestIndex===index1) {
            index1 = (index1+1)%image_array.length;
        }
        const random_img1 = image_array[index1];
        latestIndex=index1;
        html1 = document.getElementById("img0").src=random_img1;
        while(guessCount<2){
            if(image_array[0]===random_img1){
                document.getElementById("areaId").innerHTML="Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
                break;
            }            
            guessCount+=1; 
        }
        if(guessCount>=2) {
        document.getElementById("areaId").innerHTML="Kaybettin :( Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
        guessStatus=false;
        }
        
    }
}




export const newImage2 = () =>{ 
    if(guessStatus) {
        let index2 = Math.floor(Math.random()*image_array.length);
        if(latestIndex===index2) {
            index2 = (index2+1)%image_array.length;
        }
        const random_img2 = image_array[index2];
        latestIndex=index2;
        html2 = document.getElementById("img1").src=random_img2;
        while(guessCount<2){
            if(image_array[0]===random_img2){
                document.getElementById("areaId").innerHTML="Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
                break;
            }
            guessCount+=1;
        }
        if(guessCount>=2) {
        document.getElementById("areaId").innerHTML="Kaybettin :( Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
        guessStatus=false;
        }
        
    }
}



export const newImage3 = () =>{   
    if(guessStatus) {
        let index3 = Math.floor(Math.random()*image_array.length);
        if(latestIndex===index3) {
            index3 = (index3+1)%image_array.length;
        }
        const random_img3 = image_array[index3];
        latestIndex=index3;
        html3 = document.getElementById("img2").src=random_img3;
        while(guessCount<2){
            if(image_array[0]===random_img3){
                document.getElementById("areaId").innerHTML="Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
                break;
            }
            guessCount+=1;
        }     
        if(guessCount>=2) {
        document.getElementById("areaId").innerHTML="Kaybettin :( Yeni bir oyun oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıklayabilirsin.";
        guessStatus=false;
        }
        
    }
}
const image_array = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
];

let latestIndex;
var guessStatus = new Boolean(true);
let guessCount=0;

const newImage1 = () =>{
    if(guessStatus) {
            let index = Math.floor(Math.random()*image_array.length);
            if(latestIndex===index) {
                index = (index+1)%image_array.length;
        }
        const random_img = image_array[index];
        latestIndex=index;
        html = document.getElementById("img0").src=random_img;
        while(guessCount<2)
            if(image_array[0]===random_img){
                document.getElementById("areaId").innerHTML="Bravo:) Yeniden oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıkla!";
                break
        }
        else{
            document.getElementById("areaId").innerHTML="Kaybettin:( Yeniden oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıkla!";
            guessStatus=false;
        }
    }
}




const newImage2 = () =>{
    if(guessStatus) {
            let index2 = Math.floor(Math.random()*image_array.length);
            if(latestIndex===index2) {
                index2 = (index2+1)%image_array.length;
        }
        const random_img2 = image_array[index2];
        latestIndex=index2;
        html2 = document.getElementById("img1").src=random_img2;
        while(guessCount<2)
            if(image_array[0]===random_img2){
                document.getElementById("areaId").innerHTML="Bravo:) Yeniden oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıkla!";
                break;
        }
        else{
            document.getElementById("areaId").innerHTML="Kaybettin:( Yeniden oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıkla!";
            guessStatus=false;
        }
    }
}




const newImage3 = () =>{
    if(guessStatus) {
            let index3 = Math.floor(Math.random()*image_array.length);
            if(latestIndex===index3) {
                index3 = (index3+1)%image_array.length;
        }
        const random_img3 = image_array[index3];
        latestIndex=index3;
        html3 = document.getElementById("img2").src=random_img3;
        while(guessCount<2)
            if(image_array[0]===random_img3){
                document.getElementById("areaId").innerHTML="Bravo:) Yeniden oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıkla!";
                break;
        }
        else{
            document.getElementById("areaId").innerHTML="Kaybettin:( Yeniden oynamak istersen <span class='link' onclick='document.location.reload(true);'>buraya</span> tıkla!";
            guessStatus=false;
        }
    }
}

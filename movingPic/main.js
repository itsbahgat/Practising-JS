var container = document.getElementById("container");
var images = document.getElementById("container").children;
var p = document.getElementsByTagName("p")[0];

var stopGoBtn = document.getElementById("mybtn");
var resetBtn = document.getElementById("reset");

//the pics will move towards the center
var direction = true;

function start(){
    setPicLocations(285,10,10);
    movePics();
    resetBtn.addEventListener('click',()=>{stop(); start();})
}
start();

function movePics(){
    timer = setInterval(() => {
        img1_location = parseInt(images[0].style.left);
        img2_location = parseInt(images[1].style.left);
        imgTop_location = parseInt(images[2].style.top);
        updateDirection();
        
        if(direction){
            imgTop_location++;
            img2_location++;
            
            img1_location--;
        }
        else{
            imgTop_location--;
            img2_location--;
            img1_location++;
        } 
        setPicLocations(img1_location,img2_location,imgTop_location)
    }, 20);  

    toggleBtn(1);
}

function updateDirection(){
    if(imgTop_location>285||imgTop_location<10)
         direction = (!direction)
}

function setPicLocations(l1,l2,l3){
    images[0].style.left= l1+"px";
    images[1].style.left= l2+"px";
    images[2].style.top= l3+"px";

    p.style.color="blue";
    p.innerHTML=`&lt;img src=icon1.gif &nbsp style="left: <strong>${l1}px</strong>"&gt;<br>`
    p.innerHTML+=`&lt;img src=icon2.gif &nbsp style="left: <strong>${l2}px</strong>"&gt;</span>`
}

function stop(){
    clearInterval(timer); 
    toggleBtn();
}   

function toggleBtn(on){
switch(on){
    case 1:
        stopGoBtn.removeEventListener('click', movePics);
        stopGoBtn.addEventListener('click', stop);
        stopGoBtn.innerHTML = "Stop";
        break;
    default:
        stopGoBtn.removeEventListener('click', stop);
        stopGoBtn.addEventListener('click', movePics);
        stopGoBtn.innerText = "Start"; 
    }
}
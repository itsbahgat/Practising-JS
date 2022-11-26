var win;
var selectedImage;
var images = document.getElementsByTagName("img");

//adding listeners 
document.getElementById("btn").addEventListener("click", generateCard);
for(let i=0; i<6; i++){
    let elem = document.getElementsByTagName("input")[i];
    elem.addEventListener("change",()=>{
        selectImg(i);        
    });
}

function selectImg(selectedIndex){
    for(let i=0; i< images.length; i++){
        if(i==selectedIndex){
            images[i].setAttribute("style", "border:2px solid red");
            selectedImage = images[i].cloneNode(true);
        }
        else
            images[i].setAttribute("style", ""); 
    }
}

function generateCard(){
    win=open("","","width=500,height=500");
    addElements(win);
}

function addElements(win){
    //create div 
    let container =  win.document.createElement("div");
    container.setAttribute("style","width:50% margin:auto; text-align: center;");

    //create img   
    let img =  win.document.createElement("img");
    img.setAttribute("src",selectedImage.src)
    img.setAttribute("style","width:80%; height:80%;")

    //create paragraph 
    let p= win.document.createElement("p");
    let msg= win.document.createTextNode(document.getElementById("textBox").value);
    p.appendChild(msg)

    //create btn
    let btn= win.document.createElement("input");
    btn.type = "button";
    btn.value = "close";
    btn.onclick = function(){
        win.close();
    }

    container.append(img,p,btn);
    win.document.body.append(container);
}
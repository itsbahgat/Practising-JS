(function (){
    alert("Press Enter to change the dom");
    document.onkeyup = function (e){  
        if (e.which===13)
                changeDOM();
    }
})()

function changeDOM(){
    const originalImg = document.getElementById("header");
    const clonedImg = originalImg.cloneNode(true);
    const list = document.getElementById("nav");

    originalImg.setAttribute("style",`text-align:right;`);
    clonedImg.setAttribute("style","position: absolute; bottom:0px;");
    list.setAttribute("style","list-style-type: circle;");

    document.body.append(clonedImg);
}
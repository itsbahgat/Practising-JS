
var timeoutEvent = new Event("timeout");

var input  = document.getElementsByTagName("input");
var form  = document.getElementsByTagName("form")[0];

document.addEventListener("timeout",
()=>{
    if(!checkInfo())
        alert("Please, Enter Your Info");
})

setTimeout(()=>{
    document.dispatchEvent(timeoutEvent);
},3000)


function checkInfo(){
    let isFilled;
    for(let i=0; i<input.length-1; i++){
        
        if (input[i].type == 'text');
            isFilled = Boolean(input[i].value);

        if(input[i].type == 'radio')
            isFilled = Boolean(input[i].checked);
        
        if(isFilled)
            return true;
    }
    return false;
}


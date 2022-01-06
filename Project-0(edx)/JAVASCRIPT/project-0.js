var btn=document.getElementById("btn");
var input=document.getElementById("search");

btn.addEventListener("click",function (){
    // console.log(input.value);
    if(input.value!=""){
    url="https://www.google.com/search?q="+input.value;
    window.location.href = url
    }
    else{
        document.getElementById('errorname').innerHTML="*******SOMETHING WENT WRONG!*******";
    }
    
})








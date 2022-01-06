
function myFunction(){
    var input=document.getElementById('search');
    // console.log(input.value);
    url="https://www.google.com/search?q="+input.value+"+images&ei=";
    window.location.href = url;

}



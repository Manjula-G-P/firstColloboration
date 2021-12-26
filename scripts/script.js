
let btnDownload=document.querySelector('button');

btnDownload.addEventListener('click',()=>{
    let img_url="https://thumbs.dreamstime.com/z/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-122741764.jpg";
    let file_name=getFileName(img_url);

    saveAs(img_url,file_name);

});

function getFileName(str){
    return str.substring(str.lastIndexOf('-')+1);
}

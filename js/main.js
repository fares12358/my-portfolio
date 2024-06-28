

let getCv =document.getElementById("getCV");


getCv.onclick=function(){

    let fileUrl = 'cv.pdf';

    // Create a temporary anchor element
    let link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'cv.pdf';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}
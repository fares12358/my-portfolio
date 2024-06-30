

let getCv = document.getElementById("getCV");


getCv.onclick = function () {

    let fileUrl = 'cv.pdf';

    // Create a temporary anchor element
    let link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'cv.pdf';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}


let bgAnim = document.querySelectorAll(".bg-anim div");

window.addEventListener('load', function () {
    bgAnim.forEach((ele) => {
        ele.classList.add("animBg");
    });
});






let sections = document.querySelectorAll("section");

let home = document.querySelector(".intro");
let homeBtn = document.querySelector(".home-btn");


homeBtn.onclick = function () {

    bgAnim.forEach((ele) => {
        ele.classList.add("animBg");
    })

    sections.forEach((ele) => {
        ele.style.display = "none";
    });
    home.style.display = "block";

}




let servicesCon = document.querySelector(".services-content");
let servicesBtn = document.querySelector(".services-btn");

servicesBtn.onclick = function () {
    bgAnim.forEach((ele) => {
        ele.classList.remove("animBg");
    })
    sections.forEach((ele) => {
        ele.style.display = "none";
    });
    servicesCon.style.display = "block";

}

let resume = document.querySelector(".resume");
let resumeBtn = document.querySelector(".resume-btn");

resumeBtn.onclick = function(){

    bgAnim.forEach((ele) => {
        ele.classList.remove("animBg");
    })

    sections.forEach((ele) => {
        ele.style.display = "none";
    });

    resume.style.display = "block";

}


let work = document.querySelector(".work");
let workBtn = document.querySelector(".work-btn");

workBtn.onclick = function () {

    sections.forEach((ele) => {
        ele.style.display = "none";
    });

    work.style.display = "block";

}




let btnRes = document.querySelectorAll(".btns-dom button");
let domViewer = document.querySelector(".resume .dom-viewer");
let btnActive;

let experinceDom = `
                    <h1 class="text-light fw-bold">My experience</h1>
                    <p class="text-white-50 lh-lg my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit exercitationem corporis recusandae, repudiandae illo quia at ad ex doloremque deleniti.
                    </p>
                    <div class="row ">
                        <div class="data-card col-md-6 col-12 text-center py-4">
                            <p class="">2021 - 2024</p>
                            <h3 class="text-light">
                            </h3>
                        </div>
                    </div>
`;

let educationDom=`
                    <h1 class="text-light fw-bold">My education</h1>
                    <p class="text-white-50 lh-lg my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit exercitationem corporis recusandae, repudiandae illo quia at ad ex doloremque deleniti.
                    </p>
                    <div class="row justify-content-around ">
                        <div class="data-card col-md-5 col-12 p-3">
                            <p class="">2021 - 2022</p>
                            <h5 class="text-light py-2 ">
                                Study the basic principles of programming languages using Python, C, and C++
                            </h5>
                        </div>
                        <div class="data-card col-md-5 col-12 p-3">
                            <p class="">2022 - 2024</p>
                            <h5 class="text-light py-2 ">
                                Study the front-end and learn the programming languages html, css, and js
                            </h5>
                        </div>
                    </div>
`;
let skillsDom=`
                    <h1 class="text-light fw-bold">My skills</h1>
                    <p class="text-white-50 lh-lg my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                        exercitationem corporis recusandae, repudiandae illo quia at ad ex doloremque deleniti.
                    </p>
                    <div class="row gap-3 justify-content-around justify-content-around ">
                        <div class="data-card p-3 col-sm-12  col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
                            <i class="fa-brands fa-html5 text-light"></i>
                        </div>
                        <div class="data-card p-3 col-sm-12 col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
                            <i class="fa-brands fa-css3-alt text-light"></i>
                        </div>
                        <div class="data-card p-3 col-sm-12 col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
                            <i class="fa-brands fa-js text-light"></i>
                        </div>
                        <div class="data-card p-3 col-sm-12 col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
                            <i class="fa-brands fa-bootstrap text-light"></i>
                        </div>
                        <div class="data-card p-3 col-sm-12 col-md-4 col-lg-2 d-flex align-items-center justify-content-center">
                            <i class="fa-brands fa-github text-light"></i>
                        </div>

                    </div>

`;

let aboutDom=`
                    <h1 class="text-light fw-bold">About me</h1>
                    <p class="text-white-50 lh-lg my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                        exercitationem corporis recusandae, repudiandae illo quia at ad ex doloremque deleniti.
                    </p>
                    <p class="text-light fs-5 lh-lg">
                        Name fares mohamed <br>
                        Phone 01124711424 <br>
                        Experience 2+ years <br>
                        Nationality Egyptian <br>
                        Email fm883254@gmail.com <br>
                        Language b2 English
                    </p>
`;

function DomFunction(i) {

    if (i === 1) {
        domViewer.innerHTML = experinceDom;
        btnActive=btnRes[0];
    }else if(i===2){
        domViewer.innerHTML = educationDom;
        btnActive=btnRes[1];
    }else if(i===3){
        domViewer.innerHTML = skillsDom;
        btnActive=btnRes[2];
    }else if(i===4){
        domViewer.innerHTML = aboutDom;
        btnActive=btnRes[3];
    }else{
        domViewer.innerHTML = experinceDom;
        btnActive=btnRes[0];
    }

    btnRes.forEach((ele) => {
        ele.classList.remove("active");
        btnActive.classList.add("active");
    });
}

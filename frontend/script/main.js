let nav_bar = document.querySelector(".dropdown-content");
let dropdown = document.querySelector(".dropdown");
let link = document.querySelectorAll(".dropdown-content a");
function navbar_show(){
    let check = window.getComputedStyle(nav_bar);
    let check_1 = window.getComputedStyle(dropdown);
    nav_bar.style.height = check.height == "0px" ?"170px":'0px';
    dropdown.style.backgroundColor = check_1.backgroundColor == "rgb(255, 255, 255)" ? "rgb(186, 186, 186)":"rgb(255, 255, 255)";
    for (let i = 0; i < link.length; i++) {
        if (window.getComputedStyle(link[i]).opacity == "0" || getComputedStyle(link[i]).opacity === "0") {
            link[i].style.opacity = "1";
        } else {
            link[i].style.opacity = "0";
        }
    }
}
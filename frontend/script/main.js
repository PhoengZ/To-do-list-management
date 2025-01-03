let nav_bar = document.querySelector(".dropdown-content");
let dropdown = document.querySelector(".dropdown");

function navbar_show(){
    let check = window.getComputedStyle(nav_bar);
    let check_1 = window.getComputedStyle(dropdown);
    nav_bar.style.display = check.display == "block" ? 'none':'block';
    dropdown.style.backgroundColor = check_1.backgroundColor == "rgb(255, 255, 255)" ? "rgb(186, 186, 186)":"rgb(255, 255, 255)";
}
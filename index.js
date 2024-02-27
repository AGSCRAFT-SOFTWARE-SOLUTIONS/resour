const nav = document.querySelector("nav");
const hamburger = document.getElementById("hamburger");

let isMobileNavActive = false;

const toggleMobileNav = () => {
    console.log("ASdfsdf");
    nav.style.height = isMobileNavActive ? "0" : "min(80%,24rem)";
    nav.style.padding = isMobileNavActive ? "0 2rem" : "2rem";
    isMobileNavActive = !isMobileNavActive;
};

window.onclick = (e) =>
    e.target != hamburger && isMobileNavActive ? toggleMobileNav() : null;

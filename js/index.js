document.oncontextmenu = function(){ return false; };
document.body.oncontextmenu = "return false;"

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.pageYOffset - menu.offsetTop >= 200) {
        //stickyクラスをnavbarに付与する。
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});
document.oncontextmenu = function(){ return false; };
document.body.oncontextmenu = "return false;"

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
/* if you scroll, the header-bar will fead-out-move at 350pt just one time.*/
window.addEventListener("scroll", () => {
    if (window.pageYOffset - menu.offsetTop >= 350) {
        //stickyクラスをnavbarに付与する。
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});
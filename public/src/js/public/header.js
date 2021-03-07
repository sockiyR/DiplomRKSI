import $ from "jquery";
document.querySelectorAll(".header").forEach(header=>{
    header.querySelector(".hamburger").onclick=()=>{
        header.querySelector(".hamburger__line-container").querySelector(".hamburger__line:first-child").classList.toggle("hamburger__line_left-active");
        header.querySelector(".hamburger__line-container").querySelector(".hamburger__line:last-child").classList.toggle("hamburger__line_right-active");
        header.querySelector(".hamburger__line_midl").classList.toggle("hamburger__line_none");

        if (document.documentElement.clientWidth <= 1200) {
            if ($(`.header__content-mobil `).is(":hidden")) {
                $(`.header__content-mobil `).slideDown("slow");
                $(`.header__content-mobil `).css("display", "flex");
            } else {
                $(`.header__content-mobil `).slideUp("slow");
            }

        } else {
            return;
        }

    };
});
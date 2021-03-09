import $ from "jquery";
document.querySelectorAll(".swiper-container").forEach(block => {
    block.querySelectorAll(".swiper-slide").forEach(slide=>{
        $(slide).click(function(){
            let content =  $(slide).attr("data-popup");
            $("#PopupContainer").append(content);
            document.querySelector(".popup").style.display = "block";
            document.querySelector('.close').onclick = () =>{
                document.querySelector(".popup").style.display = "none";
                document.querySelector(".popup").remove();
            }
        });
    });
});
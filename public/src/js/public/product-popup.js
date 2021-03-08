import "./popupC";

// data-popup
document.querySelectorAll(".swiper-container").forEach(block => {
    block.querySelectorAll(".swiper-slide").forEach(slide=>{
        slide.onclick = () =>{
            alert("ЖЕПА");
        }
    });
});
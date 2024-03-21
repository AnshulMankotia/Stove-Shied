// overlay js------------------
const overlay = document.querySelector(".overlay");
function addOverlay(){
    overlay.classList.add("open");
}
function removeOverlay(){
    overlay.classList.remove("open");
}

// Search modal js
document.addEventListener('DOMContentLoaded', () => {
    const search_icon = document.querySelector(".main_row_header .serach_icon");
    const search_modal = document.getElementById("search_modal");
    const close_icon = document.querySelector(".close_icon");
    
    
    search_icon.addEventListener("click", () => {
        search_modal.classList.add("open_modal");
        addOverlay();
    });

    close_icon.addEventListener("click", () => {
        search_modal.classList.remove("open_modal");
        removeOverlay();
    });

    overlay.addEventListener("click",()=>{
        search_modal.classList.remove("open_modal");
        removeOverlay();
    });

});


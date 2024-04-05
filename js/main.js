// back to top btn
const backToTopBtn = document.getElementById('back-to-top-btn');

backToTopBtn.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});

var popup = document.querySelector(".modal-write-us");
var close =document.querySelector(".cross");

// popup.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     popup.classList.add("modal-show");
// });

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});




const thumbnails = document.querySelectorAll(".thumbnail");
const displayBox = document.querySelector("#displayBox");
const mainImage = document.querySelector("#mainImage");
const placeholder = document.querySelector("#placeholder");

thumbnails.forEach(function (thumbnail) {

    thumbnail.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("imageSrc", thumbnail.src);
    });

    thumbnail.addEventListener("dragend", function () {
        console.log("Image dragging has ended.");
    });

});

displayBox.addEventListener("dragover", function (event) {
    event.preventDefault();
    displayBox.classList.add("drag-over");
});

displayBox.addEventListener("dragleave", function () {
    displayBox.classList.remove("drag-over");
});

displayBox.addEventListener("drop", function (event) {
    event.preventDefault();

    const selectedImage = event.dataTransfer.getData("imageSrc");

    if (selectedImage) {
        mainImage.src = selectedImage;
        mainImage.style.display = "block";
        placeholder.style.display = "none";
    }

    displayBox.classList.remove("drag-over");
});

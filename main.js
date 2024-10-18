document.addEventListener("DOMContentLoaded", function() {
    const lastListItem = document.querySelector(".card-info ul li:last-child");
    const readMoreButton = document.querySelector(".read-more");

    lastListItem.addEventListener("mouseenter", function() {
        readMoreButton.style.display = "block";
    });

    // lastListItem.addEventListener("mouseleave", function() {
    //     readMoreButton.style.display = "none";
    // });
});

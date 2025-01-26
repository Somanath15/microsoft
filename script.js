document.getElementById("changeContentBtn").addEventListener("click", function() {
    const moreContent = document.getElementById("moreContent");
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
    } else {
        moreContent.style.display = "none";
    }
});

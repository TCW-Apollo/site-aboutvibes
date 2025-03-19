document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-box");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove("active");
            if (i === index) {
                img.classList.add("active");
            }
        });
    }

    function handleScroll() {
        let newIndex = Math.round(window.scrollY / window.innerHeight);

        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < images.length) {
            currentIndex = newIndex;
            showImage(currentIndex);
        }
    }

    window.addEventListener("scroll", handleScroll);
    showImage(currentIndex); // Show first image on page load
});

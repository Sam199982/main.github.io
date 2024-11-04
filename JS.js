// 스크롤 애니메이션 (부드럽게 나타나기)
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const options = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// 이미지 일렁임 효과
const galleryItems = document.querySelectorAll(".gallery-item img");

galleryItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.classList.add("wobble");
    });

    item.addEventListener("mouseleave", () => {
        item.classList.remove("wobble");
    });
});

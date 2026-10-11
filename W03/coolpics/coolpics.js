const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

function toggleMenu() {
    nav.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function viewerTemplate(src, alt) {
    return `<div class="viewer">
        <div class="viewer-content">
            <button class="close-viewer">X</button>
            <img src="${src}" alt="${alt}">
        </div>
    </div>`;
}

function viewImage(event) {
    if (event.target.tagName === "IMG") {
        const src = event.target.getAttribute("src");
        const largeSrc = src.replace("-sm", "-full"); 
        const alt = event.target.getAttribute("alt");

        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(largeSrc, alt));

        const closeButton = document.querySelector(".close-viewer");
        const viewer = document.querySelector(".viewer");

        closeButton.addEventListener("click", closeViewer);
        viewer.addEventListener("click", (e) => {
            if (e.target.classList.contains("viewer")) {
                closeViewer();
            }
        });

        window.addEventListener("keydown", handleKeyDown);
    }
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
        window.removeEventListener("keydown", handleKeyDown);
    }
}

function handleKeyDown(event) {
    if (event.key === "Escape") {
        closeViewer();
    }
}

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewImage);
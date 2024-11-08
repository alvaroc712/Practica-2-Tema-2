document.querySelectorAll("#blogGalery figure").forEach((el) => {
    el.addEventListener("click", () => {
        const fig = el;
        
        const image = fig.querySelector("img").src;
        const title = fig.querySelector("img").getAttribute("data-title");
        const intro = fig.querySelector("img").getAttribute("data-intro");
        const category = fig.querySelector("img").getAttribute("data-category");
        const content = fig.querySelector("img").getAttribute("data-content");
        const thumbnail = fig.querySelector("img").getAttribute("data-thumbnail");

        document.querySelector("#box #modalImage").src = image;
        document.querySelector("#box #modalTitle").innerText = title;
        document.querySelector("#box #modalIntro").innerText = intro;
        document.querySelector("#box #modalCategory").innerText = category;
        document.querySelector("#box #modalContent").innerText = content;
        document.querySelector("#box #modalThumbnail").innerText = thumbnail;
        
        document.querySelector("#box").showModal();
    });
});

const box = document.querySelector("#box");
const closeButton = box.querySelector("button[type='submit']");

closeButton.addEventListener("click", () => {
    box.close();
});

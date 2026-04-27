let video;

function enter() {
    const loader = document.getElementById("loader");
    const site = document.getElementById("site");

    video = document.getElementById("bg-video");

    loader.style.display = "none";
    site.classList.add("site-visible");

    if (video) {
        video.muted = false; // SES AÇ
        video.volume = 1;

        video.play().catch(err => {
            console.log("Video hatası:", err);
        });
    }

    updateViews();
}

/* SES BUTONU */
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("soundToggle");

    btn.addEventListener("click", () => {
        if (!video) return;

        video.muted = !video.muted;
        btn.textContent = video.muted ? "🔇" : "🔊";
    });
});

/* ZİYARETÇİ SAYACI */
function updateViews() {
    let views = localStorage.getItem("views");

    if (!views) views = 1;
    else views = parseInt(views) + 1;

    localStorage.setItem("views", views);
    document.getElementById("views").textContent = views;
}
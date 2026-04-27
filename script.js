function enter() {
    const loader = document.getElementById("loader");
    const site = document.getElementById("site");
    const video = document.getElementById("bg-video");

    loader.style.display = "none";
    site.classList.add("site-visible");

    if (video) {
        video.currentTime = 0;
        video.muted = false;   // 🔊 SES AÇ
        video.volume = 1;

        video.play().catch(err => {
            console.log("Video başlatılamadı:", err);
        });
    }

    updateViews();
}

/* ZİYARETÇİ SAYACI */
function updateViews() {
    let views = localStorage.getItem("views");

    if (!views) views = 1;
    else views = parseInt(views) + 1;

    localStorage.setItem("views", views);
    document.getElementById("views").textContent = views;
}
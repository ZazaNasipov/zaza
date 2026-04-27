function enter() {
    const loader = document.getElementById("loader");
    const site = document.getElementById("site");
    const video = document.getElementById("bg-video");

    loader.style.display = "none";
    site.classList.add("site-visible");

    if (video) {
        video.muted = true;
        video.play().catch(() => {});
    }

    updateViews();
}

/* SAAT (istersen kaldırırsın) */
function updateClock() {
    const now = new Date();
    return now.toLocaleTimeString("tr-TR");
}

/* ZİYARETÇİ SAYACI */
function updateViews() {
    let views = localStorage.getItem("views");

    if (!views) {
        views = 1;
    } else {
        views = parseInt(views) + 1;
    }

    localStorage.setItem("views", views);
    document.getElementById("views").textContent = views;
}
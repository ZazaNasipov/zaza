function enter() {
    const loader = document.getElementById("loader");
    const site = document.getElementById("site");
    const video = document.getElementById("bg-video");

    loader.style.display = "none";
    site.classList.remove("hidden");

    if (video) {
        video.muted = false;
        video.volume = 1;
        video.play().catch(() => {});
    }

    views();
}

function views() {
    let v = localStorage.getItem("views") || 0;
    v++;
    localStorage.setItem("views", v);
    document.getElementById("views").innerText = v;
}
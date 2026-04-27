function enter() {
    const loader = document.getElementById("loader");
    const site = document.getElementById("site");
    const video = document.getElementById("bg-video");

    loader.style.display = "none";
    site.classList.add("site-visible");

    if (video) {
        video.muted = true; // AUTOPLAY FIX
        video.play().catch(() => {});
    }
}

// CLOCK
function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    clock.textContent = now.toLocaleTimeString("tr-TR");
}

setInterval(updateClock, 1000);
updateClock();
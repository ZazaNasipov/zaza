function enter() {
    const loader = document.getElementById('loader');
    const site = document.getElementById('site');
    const video = document.getElementById('bg-video');

    loader.style.opacity = '0';

    setTimeout(() => {
        loader.style.display = 'none';
        site.classList.add('site-visible');
    }, 700);

    if (video) {
        video.play();
        video.muted = false;
        video.volume = 0.5;
    }
}

// CLOCK
function updateClock() {
    const el = document.getElementById("clock");
    if (!el) return;

    const now = new Date();
    el.textContent = now.toLocaleTimeString("tr-TR");
}

setInterval(updateClock, 1000);
updateClock();

// PARALLAX
document.addEventListener("mousemove", (e) => {
    const panel = document.querySelector(".glass-panel");
    if (!panel) return;

    let x = (window.innerWidth / 2 - e.clientX) / 40;
    let y = (window.innerHeight / 2 - e.clientY) / 40;

    panel.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});
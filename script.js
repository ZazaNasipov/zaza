function enter() {
    const loader = document.getElementById('loader');
    const site = document.getElementById('site');
    const video = document.getElementById('bg-video');

    // Loader'ı gizle
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';
    
    setTimeout(() => {
        loader.style.display = 'none';
        // Siteyi görünür yap
        site.classList.remove('site-hidden');
        site.classList.add('site-visible');
    }, 800);

    // Videoyu oynat ve sesi aç
    if (video) {
        video.play();
        video.muted = false;
        video.volume = 0.5;
    }
}

// Mouse Parallax
document.addEventListener('mousemove', (e) => {
    const panel = document.querySelector('.glass-panel');
    if(panel) {
        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;
        panel.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
    }
});

// Saat ve Sayaç
const updateClock = () => {
    const clockEl = document.getElementById('clock');
    if (clockEl) {
        const now = new Date();
        clockEl.innerText = now.toLocaleTimeString('tr-TR');
    }
};

setInterval(updateClock, 1000);
document.addEventListener('DOMContentLoaded', updateClock);
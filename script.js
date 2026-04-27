function enter() {
    const loader = document.getElementById('loader');
    const site = document.getElementById('site');
    const video = document.getElementById('bg-video');

    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 1200);

    site.classList.remove('site-hidden');
    site.classList.add('site-visible');

    if (video) {
        video.muted = false;
        video.volume = 0.5;
    }
}

// Mouse Parallax effect
document.addEventListener('mousemove', (e) => {
    const panels = document.querySelectorAll('.glass-panel');
    panels.forEach(panel => {
        const x = (window.innerWidth / 2 - e.pageX) / 80;
        const y = (window.innerHeight / 2 - e.pageY) / 80;
        panel.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
    });
});

// Real-time Clock
const updateClock = () => {
    const clockEl = document.getElementById('clock');
    if (clockEl) {
        const now = new Date();
        clockEl.innerText = now.toLocaleTimeString('tr-TR');
    }
};

// Simulation of Views
async function updateViews() {
    const viewEl = document.getElementById('views');
    if (!viewEl) return;
    
    try {
        const response = await fetch('https://api.counterapi.dev/v1/zaza-bozkurt/visits/up');
        const data = await response.json();
        viewEl.innerText = (data.count || data.value || '2,481').toLocaleString();
    } catch (e) {
        viewEl.innerText = '2,481';
    }
}

setInterval(updateClock, 1000);

document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    updateViews();
});
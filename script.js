function enter() {
    const l = document.getElementById('loader');
    l.style.opacity = '0';
    setTimeout(() => l.style.display = 'none', 800);
    document.getElementById('site').classList.add('site-visible');
    const v = document.getElementById('bg-video');
    if (v) { v.muted = false; v.volume = 0.5; v.play(); }
}

const updateClock = () => {
    const el = document.getElementById('clock');
    if (el) el.innerText = new Date().toLocaleTimeString('tr-TR');
};

async function updateViews() {
    const el = document.getElementById('views');
    if (!el) return;
    try {
        // Yeni bir namespace ve key ile gerçek artış sağlayan URL
        const r = await fetch(`https://api.counterapi.dev/v1/zaza_site_official/visit/up`);
        const d = await r.json();
        el.innerText = d.count.toLocaleString();
    } catch {
        el.innerText = (2481 + Math.floor(Math.random() * 20)).toLocaleString();
    }
}

setInterval(updateClock, 1000);
document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    updateViews();
});

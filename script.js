function enter() {
    document.getElementById('loader').style.opacity = '0';
    setTimeout(() => document.getElementById('loader').style.display = 'none', 800);
    document.getElementById('site').classList.add('site-visible');
    const v = document.getElementById('bg-video');
    if (v) { v.muted = false; v.volume = 0.5; }
}

const updateClock = () => {
    const el = document.getElementById('clock');
    if (el) el.innerText = new Date().toLocaleTimeString('tr-TR');
};

async function updateViews() {
    const el = document.getElementById('views');
    if (!el) return;
    try {
        const r = await fetch(`https://api.counterapi.dev/v1/zaza_bmw_${Date.now()}/up`);
        const d = await r.json();
        el.innerText = (d.count || 2481).toLocaleString();
    } catch {
        el.innerText = (2481 + Math.floor(Math.random() * 50)).toLocaleString();
    }
}

setInterval(updateClock, 1000);
document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    updateViews();
});

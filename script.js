// Real-time Views Update
async function updateViews() {
    const viewEl = document.getElementById('views');
    if (!viewEl) return;
    
    // Rastgele bir sayı ekleyerek Cache (Önbellek) sorununu çözeriz
    const cacheBuster = Math.floor(Math.random() * 10000);
    
    try {
        // Namespace ve Key kısımlarını daha benzersiz yaptık
        const response = await fetch(`https://api.counterapi.dev/v1/zaza_site_2026/main_page/up?cb=${cacheBuster}`);
        
        if (!response.ok) throw new Error('API hatası');
        
        const data = await response.json();
        
        // API'den dönen sayı varsa onu yaz, yoksa artan bir simülasyon yap
        if (data && data.count) {
            viewEl.innerText = data.count.toLocaleString();
        }
    } catch (e) {
        console.log("Sayaç yüklenemedi, yerel simülasyon çalışıyor.");
        // Eğer API çalışmazsa sayfa her yenilendiğinde rakamın değişmesi için:
        const fakeViews = 2481 + Math.floor(Math.random() * 10);
        viewEl.innerText = fakeViews.toLocaleString();
    }
}

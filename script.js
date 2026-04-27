async function updateViews() {
    const viewEl = document.getElementById('views');
    if (!viewEl) return;
    
    // Tarayıcı önbelleğini aşmak için rastgele bir sayı
    const cacheBuster = Date.now();
    
    try {
        // Yeni bir namespace ve anahtar kullanıyoruz (zaza_bmw_site)
        const response = await fetch(`https://api.counterapi.dev/v1/zaza_bmw_site/counter/up?t=${cacheBuster}`);
        
        if (response.ok) {
            const data = await response.json();
            // API'den gelen gerçek rakamı yaz
            viewEl.innerText = data.count.toLocaleString();
        } else {
            throw new Error();
        }
    } catch (e) {
        // API HATA VERİRSE: Takılı kalmasın diye rastgele bir artış göster
        // 2481 rakamının üzerine o anki dakikayı ekleyerek değişiyormuş gibi gösterir
        const date = new Date();
        const fakeIncrease = (date.getHours() * 60) + date.getMinutes();
        const finalCount = 2481 + fakeIncrease;
        viewEl.innerText = finalCount.toLocaleString();
    }
}

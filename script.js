function updateTanggal() {
    const now = new Date();
    
    // Opsi untuk format Bahasa Indonesia
    const options = {
        weekday: 'long', // Nama hari lengkap (e.g., Senin)
        year: 'numeric', // Tahun (e.g., 2025)
        month: 'long',   // Nama bulan lengkap (e.g., November)
        day: 'numeric',  // Tanggal (e.g., 22)
        hour: '2-digit', // Jam (e.g., 11)
        minute: '2-digit', // Menit (e.g., 07)
        second: '2-digit', // Detik (e.g., 38)
        hour12: false,   // Gunakan format 24 jam
        timeZoneName: 'short' // Nama zona waktu singkat (e.g., WIB)
    };

    // Menggunakan Intl.DateTimeFormat dengan locale 'id-ID' untuk Bahasa Indonesia
    // Output: "Sabtu, 22 November 2025 Pukul 11.07.38 WIB"
    const tanggalIndonesia = new Intl.DateTimeFormat('id-ID', options).format(now);

    // Menampilkan ke elemen HTML
    document.getElementById('tanggal-sekarang').textContent = tanggalIndonesia.replace('pukul', 'Pukul');
}

// Panggil fungsi sekali saat halaman dimuat
updateTanggal();

// Set interval untuk memanggil fungsi setiap 1000 milidetik (1 detik)
setInterval(updateTanggal, 1000);

// --- KONTEN TEKS UNTUK SETIAP HALAMAN ---
const pageTexts = {
    // Teks untuk index.html
    '/index.html': "Terkadang, melepaskan air mata adalah bentuk kekuatan terbesar. Di sini kita berbagi kesunyian.",
    // Teks untuk story.html
    '/story.html': "Ada saat di mana hati terasa begitu berat, rasanya seperti memikul banyak sekali beban. Kata-katanya yang terucap tanpa makna, dan setiap senyum yang kita berikan terasa palsu. Kenangan indah hanyalah bayangan yang ada di dalam kepala kita yang dapat membuat kita merasakan sakit yang begitu dalam, sama seperti melihat dirimu dengan yang lain...",
    // Teks untuk video.html
    '/video.html': "Duduklah sebentar, dan biarkan melodi serta visual ini menyentuh jiwamu. Setiap tetes air mata adalah sebuah cerita yang diam."
};

/**
 * Fungsi utama untuk efek mengetik (Typewriter Effect)
 * @param {HTMLElement} element - Elemen DOM tempat teks akan ditampilkan.
 * @param {string} text - Teks lengkap yang akan diketik.
 * @param {number} speed - Kecepatan ketikan dalam milidetik.
 */
function typeWriter(element, text, speed = 50) {
    let i = 0;
    
    // Terapkan animasi kursor berkedip (seperti di CSS)
    element.style.animation = 'blink 0.75s step-end infinite';

    function typing() {
        if (i < text.length) {
            // Tampilkan satu karakter per panggilan fungsi
            element.innerHTML += text.charAt(i);
            i++;
            // Panggil fungsi ini lagi setelah 'speed' milidetik
            setTimeout(typing, speed); 
        } else {
            // Setelah selesai mengetik, hapus animasi kursor berkedip
            element.style.borderRight = 'none';
            element.style.animation = 'none';
        }
    }
    
    typing();
}

/**
 * Fungsi untuk menginisialisasi efek mengetik berdasarkan halaman saat ini.
 */
function initializeTypingEffect() {
    // Ambil path (jalur) halaman saat ini (misal: /index.html)
    const currentPath = window.location.pathname.endsWith('/') 
                        ? '/index.html' // Jika hanya domain (misalnya http://localhost/), anggap index.html
                        : window.location.pathname;
    
    // Temukan teks yang sesuai untuk halaman saat ini
    const textToType = pageTexts[currentPath.toLowerCase()] || pageTexts[currentPath.toLowerCase().substring(currentPath.lastIndexOf('/'))] || null;
    
    // Temukan elemen target dengan kelas 'type-target'
    const targetElement = document.querySelector('.type-target');
    
    // Jika elemen dan teks ditemukan, jalankan efek mengetik
    if (targetElement && textToType) {
        typeWriter(targetElement, textToType, 50); // Kecepatan 50ms per karakter
    }
}


// --- INISIALISASI (Jalankan kode saat halaman selesai dimuat) ---
document.addEventListener('DOMContentLoaded', () => {
    initializeTypingEffect();
    
    console.log(`Halaman saat ini: ${window.location.pathname}. Efek mengetik diinisialisasi.`);
});
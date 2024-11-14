// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    // Menambahkan event listener pada setiap link dalam menu navigasi
    anchor.addEventListener('click', function (e) {
        // Mencegah aksi default saat link diklik (misalnya, melompat langsung ke target)
        e.preventDefault();

        // Mengambil elemen yang dituju berdasarkan nilai atribut 'href' (id atau selector)
        // Kemudian melakukan scroll ke elemen tersebut dengan efek smooth
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Mengaktifkan scroll yang halus
        });
    });
});

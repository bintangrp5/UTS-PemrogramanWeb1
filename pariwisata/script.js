let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times'); // Menambahkan atau menghapus kelas 'fa-times' pada menu saat diklik
   navbar.classList.toggle('active');  // Menambahkan atau menghapus kelas 'active' pada navbar saat diklik
};

window.onscroll = () =>{
   menu.classList.remove('fa-times'); // Menghapus kelas 'fa-times' ketika pengguna menggulir halaman
   navbar.classList.remove('active');  // Menghapus kelas 'active' pada navbar saat menggulir
};


document.addEventListener('DOMContentLoaded', function() {
    // Menangani formulir pemesanan
    document.getElementById('booking-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Mencegah form dari reload halaman

        // Menampilkan pop-up konfirmasi
        document.getElementById('popup').style.display = 'flex';

        // Menyembunyikan bagian pemesanan setelah dikirim
        document.getElementById('booking-form').style.display = 'none';
    });

    // Menutup pop-up dengan tombol "OK"
    document.getElementById('ok-button').addEventListener('click', function () {
        // Menyembunyikan pop-up
        document.getElementById('popup').style.display = 'none';

        // Menampilkan kembali bagian pemesanan setelah pop-up ditutup
        document.getElementById('booking-form').style.display = 'block';
    });

    // Menutup pop-up dengan klik pada icon 'x'
    document.getElementById('close-popup').addEventListener('click', function () {
        // Menyembunyikan pop-up
        document.getElementById('popup').style.display = 'none';

        // Menampilkan kembali bagian pemesanan setelah pop-up ditutup
        document.getElementById('booking-form').style.display = 'block';
        
    });

    document.getElementById("ok-button").addEventListener("click", function() {
        // Reset form
        document.getElementById("booking-form").reset();
        
        // Menyembunyikan pop-up setelah tombol OK diklik
        document.getElementById("popup").style.display = "none";
    });
});



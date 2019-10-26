//Unlink FS = Hapus Data/file

//Panggil library FS
const fs = require('fs');

//Baca file terserah.txt apakah ada filenya? menggunakn fs.readFile */
fs.readFile('terserah.txt', async (err,data) => {
    //Jika data tidak ditemukan
    if(err) console.log('Data tidak ditemukan');

    //Jalankan console.log dulu menggunakan await
    await console.log('Data ditemukan');

    //Data ditemukan kitalangsung eksekusi delete
    fs.unlink('terserah.txt', (err) => {
        //Jika gagal delete
        if(err) return console.log("Gagal hapus data");

        //jika berhasil delete
        console.log("Hapus data berhasil!");
    })
})


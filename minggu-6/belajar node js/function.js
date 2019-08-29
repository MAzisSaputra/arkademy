// const tambah = (satu,dua)=>{
//     return satu+dua
// }

// module.exports = {
//     fungsiTambah : (satu,dua)=>{
//         return satu+dua
//     },
//     fungsiKali : (satu,dua)=>{
//         return satu*dua
//     },
//     fungsiBagi : (satu,dua)=>{
//         return satu/dua
//     }
// }

class mobil {
    constructor(tipe,warna){
        this.tipe = tipe
        this.warna = warna
    }

    jalankan(){
        console.log("jalankan mobil "+this.tipe+" yang warnanya"+ this.warna)
    }
}

const classMobil = new mobil('jip','merah')
console.log(classMobil.jalankan())
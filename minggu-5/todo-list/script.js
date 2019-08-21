let todo = [
    {
        title:"Rendang",
        description:"Rendang atau randang adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak yang dipanaskan berulang-ulang menggunakan santan sampai kuahnya kering sama sekali."
    },
    {
        title:"kebab",
        description:"Kebab adalah penganan cepat saji terdiri atas daging sapi yang dipanggang seperti satai kemudian diiris-iris ditambah dengan sayuran segar dan mayones, lalu dibalut dengan kulit tortila."
    },
    {
        title:"Burger",
        description:"Hamburger adalah sejenis makanan berupa roti berbentuk bundar yang diiris dua dan ditengahnya diisi dengan patty yang biasanya di ambil dari daging, kemudian sayur-sayuran berupa selada, tomat dan bawang bombay. Sebagai sausnya, burger diberi berbagai jenis saus seperti mayones, saus tomat dan sambal serta mustard."
    },
    {
        title:"Martabak",
        description:"Martabak merupakan sajian yang biasa ditemukan di Arab Saudi, Yaman, Indonesia, Malaysia, Singapura, dan Brunei. Bergantung pada lokasinya, nama, dan komposisi martabak dapat bervariasi."
    },
    {
        title:"Cappucino",
        description:"Kapucino adalah minuman khas Italia yang dibuat dari espresso dan susu, tetapi referensi lain juga ada yang menyebutkan bahwa kapucino berawal dari biji biji kopi tentara Turki yang tertinggal setelah peperangan yang di pimpin oleh Kara Mustapha Pasha di Wina, Austria melawan tentara gabungan Polandia-Germania. Kapucino biasanya didefinisikan sebagai 1/3 espresso, 1/3 susu yang dipanaskan dan 1/3 susu yang dikocok hingga berbusa. Definisi yang lain menyebutkan 1/3 espresso dan 2/3 mikrofoam. Kapucino berbeda dengan latte macchiato, yang kebanyakan terdiri dari susu dan sedikit busa. ( mengandung lebih sedikit susu.)"
    }
]

class TodoList{
    item = document.getElementById('todo-list')
    content = document.getElementById('todo-description')
    listItem = ()=>{
        for(let x in todo){
            this.item.innerHTML+='<div class="list-item">'+todo[x].title+'</div>'
        }
    }
    setDisplay = (n=0)=>{
        this.content.innerHTML = '<div class="title">'+todo[n].title+'</div>\
        <div class="container">'+todo[n].description+'</div>'
    }
}

const todoList = new TodoList()
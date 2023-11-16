var filmes = [
    "https://play-lh.googleusercontent.com/lWyd5ayBZmqYNLi2UJdHRJbp4t3ouTVscICwh1bNEpNFj7yp45L3qJ4oGriIpepL2Ak",
    "https://cinepop.com.br/wp-content/uploads/2022/04/tudo-em-todo-lado-ao-mesmo-tempo.jpg",
    "https://m.media-amazon.com/images/I/818gBZG5c6L._AC_UF1000,1000_QL80_.jpg",
    "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
    "https://sm.ign.com/ign_br/screenshot/default/image002_uuhb.jpg",
    "https://www.patosshopping.com.br/wp-content/uploads/2023/04/guardioesdagalaxiafilme.png"
];

for (var i = 0; i < filmes.length; i++){
    document.write(`<img src="${filmes[i]}">`)
}
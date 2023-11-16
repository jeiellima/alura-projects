function adicionarFilme() {
    let filmeFavorito = document.getElementById('filme').value;
    let elementFilmes = document.getElementById('listaFilmes');
    let inputFilme = document.getElementById('filme');
    let urlValida = /^(http|https):\/\/[^ "]+$/.test(filmeFavorito);
  
    if (urlValida) {
      elementFilmes.innerHTML = elementFilmes.innerHTML + '<img src=' + filmeFavorito + '>';
      inputFilme.value = '';
    } else {
      inputFilme.value = '';
      inputFilme.placeholder = 'Link inválido! Insira uma URL válida.';
    }
}
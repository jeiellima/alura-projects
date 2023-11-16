function adicionarFilme() {
    let filmeFavorito = document.getElementById('filme').value;
    let elementoListaFilmes = document.getElementById('listaFilmes');
    let inputFilme = document.getElementById('filme');
    let urlValida = /^(http|https):\/\/[^ "]+$/.test(filmeFavorito);
  
    if (urlValida) {
      elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src=' + filmeFavorito + '>';
      inputFilme.value = '';
    } else {
      inputFilme.value = '';
      inputFilme.placeholder = 'Link inválido! Insira uma URL válida.';
    }
}
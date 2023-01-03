// Método para mostrar o ano atual no rodapé da página  //
const date = new Date();
const year = date.getFullYear();
document.getElementById('year').innerHTML = year;

// JavaScript code
function search_marca() {
    let input = document.getElementById('txtPesquisa').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('Marca');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
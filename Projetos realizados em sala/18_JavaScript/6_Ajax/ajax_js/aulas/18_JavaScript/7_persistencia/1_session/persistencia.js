function salvarNome(){
    let nome = document.querySelector('#nome');
    sessionStorage.setItem('nomeSalvo',nome.value);
    //alert(nome.value);
}
let lerNome = function(){
    var nome = sessionStorage.getItem('nomeSalvo');
    var paragrafo =document.querySelector('#mensagem');

    if( nome === null ){
        paragrafo.innerHTML = "Não tem registro nome";
    }else{
        paragrafo.innerHTML = nome;
    }
}
let apagarNome = ()=>{
    sessionStorage.removeItem('nomeSalvo');
    document.querySelector('#mensagem').innerHTML="Registro apagado";
}
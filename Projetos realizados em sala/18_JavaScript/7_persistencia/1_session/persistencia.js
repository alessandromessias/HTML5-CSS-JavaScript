function salvarNome(){
    let nome = document.querySelector('#nome');

    sessionStorage.setItem('nomeSalvo',nome.value);
    //sessionStorage.nomeSalvo = nome.value;
    //sessionStorage['nomeSalvo']=nome.value
    
    document.querySelector('#mensagem').innerHTML = "Informação <em>"+ nome.value+"</em> foi armazenada com sucesso";

    nome.value = "";
    nome.focus();

}
let lerNome = function(){
    let nome = sessionStorage.getItem('nomeSalvo');
    //let nome = sessionStorage.nomeSalvo;

    if(nome === null){
        document.querySelector('#mensagem').innerHTML = "Não tem registro nome";
    }else{
        document.querySelector('#mensagem').innerHTML = "O nome é :"+nome;
    }
}

let apagarNome = ()=>{
    sessionStorage.removeItem('nomeSalvo');
    document.querySelector('#mensagem').innerHTML = "Registro nome Apagado";
}

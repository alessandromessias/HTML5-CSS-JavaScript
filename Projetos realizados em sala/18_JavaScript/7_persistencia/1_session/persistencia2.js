function salvarNome(){
    let nome = document.querySelector('#nome');
    let idade = document.querySelector('#idade');

    let pessoa = {"nome":nome.value,"idade":idade.value};
    //console.log(pessoa);
    //console.log(pessoa.nome);
    //console.log(pessoa.idade);
    let pessoaJSON = JSON.stringify(pessoa);//'{"nome":nome.value,"idade":idade.value}';
    //console.log(pessoaJSON);


    sessionStorage.setItem('pessoaSalva',pessoaJSON);
    
    
    document.querySelector('#mensagem').innerHTML = "Informação foi armazenada com sucesso";

    nome.value = "";
    nome.focus();

}
let lerNome = function(){
    let pessoaSalva = sessionStorage.getItem('pessoaSalva');//String
    console.log(pessoaSalva);//String
    let pessoa = JSON.parse(pessoaSalva);
    console.log(pessoa); 
    console.log(pessoa.nome);


   
    if(pessoaSalva === null){
        document.querySelector('#mensagem').innerHTML = "Não tem registro nome";
    }else{
        document.querySelector('#mensagem').innerHTML = "O nome é :"+pessoa.nome;
        document.querySelector('#mensagem').innerHTML += " - ";//document.querySelector('#mensagem').innerHTML = document.querySelector('#mensagem').innerHTML + " - "
        document.querySelector('#mensagem').innerHTML += "A idade é :"+pessoa.idade;
    }
    
}

let apagarNome = ()=>{
    sessionStorage.removeItem('pessoaSalva');
    document.querySelector('#mensagem').innerHTML = "Registro nome Apagado";
}

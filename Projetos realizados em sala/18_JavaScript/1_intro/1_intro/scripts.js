function primeira()
        {
            var nome = prompt('Entre com seu nome');
            alert("O nome é: "+nome);
            console.log(nome);
        }
    //document.getElementById('um').onclick = primeira;
    //document.getElementById('um').addEventListener();
    document.getElementById('um').addEventListener('click',primeira);

    
    //document.getElementById('dois').addEventListener('dbclick',function(){});
    document.getElementById('dois').addEventListener('dblclick',function(){
            var nome = prompt('Entre com seu nome');
            alert("O nome é: "+nome);
            console.log(nome);
    });

     
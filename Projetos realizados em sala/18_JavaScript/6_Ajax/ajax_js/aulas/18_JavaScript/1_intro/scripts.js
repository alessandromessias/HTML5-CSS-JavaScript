
            function primeira()
                {
                    var nome = prompt('Entre com seu nome');
                    alert("O nome é: "+nome);
                    console.log(nome);
                }

            document.getElementById('um').onclick = function()
            {
                primeira();
            }

            document.getElementById('dois').ondblclick = primeira;

            document.getElementById('tres').onmouseover = function()
            {
                    var nome = prompt('Entre com seu nome');
                    alert("O nome é: "+nome);
                    console.log(nome);
            }

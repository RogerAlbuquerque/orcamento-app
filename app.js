


function obterDados() {
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value


    let BD = {

        ano,
        mes,
        dia,
        tipo,
        descricao,
        valor 
        
        }

       var DadosBd = localStorage.setItem("1", JSON.stringify(BD))


}


let tabela = document.getElementById('tabela')

tabela.tr.write('teste')







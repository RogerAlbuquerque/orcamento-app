class Despesa {

    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor

    }


    validarDados(){                     
 //-------------------------------------//Primeiro preciso ler todos os elementos guardados no despesa que vem LÁÁÁÁ de baixo usando o loop ForIn
        for(let i in this) {            //Quando o this ta sozinho ele se refere ao proprio objeto em que ele ta dentro

            if (this[i] == undefined || this[i] == '' || this[i] == null ){

                return false
            }
                
            }

            return true
    }

    

}




class Bd {

    constructor() {

        let id = localStorage.getItem("id")

        if (id === null) {
            localStorage.setItem("id", 0)
        }

    }



    getProximoId() {     //Identifica se ó ID a ser salvo ja existe em localStorage

        let proximoId = localStorage.getItem("id")
        return (parseInt(proximoId) + 1)   //ParseInt porque o getItem vai retornar uma string e aqui eu quero um número

    }


    gravar(d) {
        let id = this.getProximoId()


        localStorage.setItem(id, JSON.stringify(d))      //Salva em localStorage

        localStorage.setItem("id", id)

    }

}













let bd = new Bd()


function cadastrarDespesa() {

    let ano = document.getElementById("ano")
    let mes = document.getElementById("mes")
    let dia = document.getElementById("dia")
    let tipo = document.getElementById("tipo")
    let descricao = document.getElementById("descricao")
    let valor = document.getElementById("valor")

    let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)


    if (despesa.validarDados()) {

      //  bd.gravar(despesa)

      console.log("Dados válidos")

    }

    else {
        console.log("Dados inválidos")

    }

    
}


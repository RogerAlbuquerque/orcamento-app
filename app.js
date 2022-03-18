


function obterDados()
{
    let ano         = document.getElementById('ano').value
    let mes         = document.getElementById('mes').value
    let dia         = document.getElementById('dia').value
    let tipo        = document.getElementById('tipo').value
    let descricao   = document.getElementById('descricao').value
    let valor       = document.getElementById('valor').value


    let BD = 
    {

        ano,
        mes,
        dia,
        tipo,
        descricao,
        valor,


            registroBD: function (key, ano, mes, dia, tipo, descricao, valor)
            {

                ano = this.ano
                mes = this.mes
                dia = this.dia
                tipo = this.tipo
                descricao = this.descricao
                valor = this.valor


                localStorage.setItem(key, JSON.stringify(BD))
                
            }
        
    }

         
    
    for (i = 0; i <= localStorage.length ; i++)
    {    

       if (ano =="" || mes =="" || dia =="" || tipo =="" || descricao =="" || valor =="" )
       {
       
       document.getElementById("botao").setAttribute("data-target", "#ModalFalha")
           
           break

        }

        else{

            if (localStorage.getItem(i) == null)
            {            
            
                    BD.registroBD(i, ano,mes,dia,tipo,descricao,valor)

                     ano         = document.getElementById('ano').value         =""
                     mes         = document.getElementById('mes').value         =""
                     dia         = document.getElementById('dia').value         =""
                     tipo        = document.getElementById('tipo').value        =""
                     descricao   = document.getElementById('descricao').value   =""
                     valor       = document.getElementById('valor').value       =""

                     document.getElementById("botao").setAttribute("data-target", "#ModalSucesso")
                      
                    break            

            }
            
            else
                {
                    continue 
                }
        }





    }

}





function registrar()
{

    

}




function criarTabela() {

    for (i=0 ; i < localStorage.length ; i++){

let Dados = JSON.parse(localStorage.getItem(i))

        switch (Dados.tipo)
        {

            case '1':
                Dados.tipo = "Alimentação";
                break;
                

            case '2':
                Dados.tipo = "Educação";
                break;
                

            case '3':
                Dados.tipo = "Lazer";
                break;
                

            case '4':
                Dados.tipo = "Saúde";
                break;
                
            case '5':
                Dados.tipo = "Transporte";
                break;
        
        }


   

    let tabela = document.getElementById("tabela")

    let nova_td = document.createElement("tbody")
    nova_td.innerHTML = `<td>${Dados.dia}/${Dados.mes}/${Dados.ano}</td> 
                         <td> ${Dados.tipo}</td>
                         <td> ${Dados.descricao}</td>
                         <td> ${Dados.valor}</td>
    
    
    `

    tabela.appendChild(nova_td)


}



    

   


}





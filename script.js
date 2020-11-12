$(function(){
    //parte da interação com usuário
    // seleciona todos os botões pela classe
var btns = document.getElementsByClassName("btn");

for(var bts_ of btns){
   
   bts_.onclick = function(){
      
      // seleciona todos os botões com a classe .btn dentro de #methodlearn
      var childs = document.querySelectorAll("#methodlearn .btn");
      var index = 0;
      
      // determina o index do botão com base 0
      for(var el of childs){
         if(this == el) break;
         index++;
      }
      
      var contents = document.getElementsByClassName("content");
      
      // esconde todos
      for(var cts_ of contents){
         cts_.style.display = "none";
      }
      
      // mostra só a div do botão que foi clicado
      contents[index].style.display = "block";
      
   }
   
}
    //--------------------------------------------
    //parte do jogo da velha
    //O conteúdo deve ficar aqui
    var vez = 1;
    var vencedor = "";
    function casasIguais(a, b, c){
        var casaA = $("#casa"+a);
        var casaB = $("#casa"+b);
        var casaC = $("#casa"+c);
        var fundoA = $("#casa"+a).css("background-image");
        var fundoB = $("#casa"+b).css("background-image");
        var fundoC = $("#casa"+c).css("background-image");
        if( (fundoA == fundoB) && (fundoB == fundoC) && (fundoA != "none" && fundoA != "")){
            if(fundoA.indexOf("1.png") >= 0)
                vencedor = "1";
            else
                vencedor = "2";
            return true;
        }
        else{
            return false;
        }
    }

    function verificarFimDeJogo(){
        if( casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
            casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
            casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
            ){
            $("#resultado").html("<h1>O jogador " + vencedor + " venceu! </h1>");
            $(".casa").off("click");
        }else{
            $("#resultado").html("<h1>Deu velha!</h1>");
        }
    }
    
    $(".casa").click(function(){
        var bg = $(this).css("background-image");
        if(bg == "none" || bg == "")
        {          
            var fig = "url(" + vez.toString() + ".png)";
            $(this).css("background", fig);
            vez = (vez == 1? 2:1); 
            verificarFimDeJogo();
        }
    });
    });
    
    

    
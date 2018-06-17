//Declaramos variables
var operandoa;
var operandob;
var operacion;

function init(){
  //variables
  var resultado = document.getElementById('display');
  var reset = document.getElementById('on');
  var signo = document.getElementById('sign');
  var suma = document.getElementById('mas');
  var resta = document.getElementById('menos');
  var multiplicacion = document.getElementById('por');
  var division = document.getElementById('dividido');
  var igual = document.getElementById('igual');
  var punto = document.getElementById('punto');
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');
  var cero = document.getElementById('0');

  //Eventos de click

    uno.onclick = function(e){
      if(resultado.textContent.length < 8){
        if(resultado.textContent == "0"){
          resultado.textContent = "1";
        }else{
          resultado.textContent = resultado.textContent  + "1";
        }
      }
    }
    dos.onclick = function(e){
      if(resultado.textContent.length < 8){
        if(resultado.textContent == "0"){
          resultado.textContent = "2";
        }else{
          resultado.textContent = resultado.textContent  + "2";
        }
      }
    }
    tres.onclick = function(e){
      if(resultado.textContent.length < 8){
        if(resultado.textContent == "0"){
          resultado.textContent = "3";
        }else{
          resultado.textContent = resultado.textContent  + "3";
        }
      }
    }
    cuatro.onclick = function(e){
      if(resultado.textContent.length < 8){
        if(resultado.textContent == "0"){
          resultado.textContent = "4";
        }else{
          resultado.textContent = resultado.textContent  + "4";
        }
      }
    }
    cinco.onclick = function(e){
      if(resultado.textContent.length < 8){
        if(resultado.textContent == "0"){
          resultado.textContent = "5";
        }else{
          resultado.textContent = resultado.textContent  + "5";
        }
      }
    }
    seis.onclick = function(e){
      if(resultado.textContent.length < 8){
        if(resultado.textContent == "0"){
          resultado.textContent = "6";
        }else{
          resultado.textContent = resultado.textContent  + "6";
        }
      }
    }
    siete.onclick = function(e){
      if(resultado.textContent.length < 8){
        if(resultado.textContent == "0"){
          resultado.textContent = "7";
        }else{
          resultado.textContent = resultado.textContent  + "7";
        }
      }
    }
    ocho.onclick = function(e){
      if(resultado.textContent.length < 8){
        if(resultado.textContent == "0"){
          resultado.textContent = "8";
        }else{
          resultado.textContent = resultado.textContent  + "8";
        }
      }
    }
    nueve.onclick = function(e){
      if(resultado.textContent.length < 8){
        if(resultado.textContent == "0"){
          resultado.textContent = "9";
        }else{
          resultado.textContent = resultado.textContent  + "9";
        }
      }
    }
    cero.onclick = function(e){
      if(resultado.textContent.length < 8){
        if(resultado.textContent == "0"){
          resultado.textContent = "0";
        }else{
          resultado.textContent = resultado.textContent  + "0";
        }
      }
    }

    punto.onclick = function(e){
      if(resultado.textContent.length < 7){
        if (resultado.textContent.indexOf(".")==-1){
          if(resultado.textContent == "0"){
            resultado.textContent = "0.";
          }else{
            resultado.textContent = resultado.textContent  + ".";
          }
        }
      }
    }

    signo.onclick = function(e){
      var res = 0;
      if(resultado.textContent == "0"){
        resultado.textContent = "0";
      }else{
        operandoa = resultado.textContent;
        res = parseFloat(operandoa) * (-1); // "-" + resultado.textContent;
        resetear();
        resultado.textContent = res;
      }
    }

    //Procesos Matematicos
    reset.onclick = function(e){
        resetear();
    }

    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }

    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }

    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }

    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }

    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }

    function limpiar(){
      resultado.textContent = "";
    }

    function resetear(){
      resultado.textContent = "0";
      operandoa = 0;
      operandob = 0;
      operacion = "";
    }

    function resolver(){
      var res = 0;
      switch(operacion){
        case "+":
          res = parseFloat(operandoa) + parseFloat(operandob);
          break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
          res = parseFloat(operandoa) * parseFloat(operandob);
          break;
        case "/":
          res = parseFloat(operandoa) / parseFloat(operandob);
          break;
      }
      resetear();
      if(res.toString().length > 8){
        //solo los 8 digitos primeros
        resultado.textContent = res.toString().substr(0,8);
      }else{
        resultado.textContent = res;
      }

    }
}

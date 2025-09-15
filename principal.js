//muda o nome a partir do seletor de classe
var subtitulo = document.querySelector("subtitulo");
var titulo = document.querySelector("titulo");
titulo.textContent = "Dicas Nutrição";
subtitulo.textContent = "Meus Pacientes";

//acessar a tag tr - paciente Paulo
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

        //seleciona o conteúdo da tag
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    //seleciona o conteúdo altuta tag
    var tdAltura = paciente.querySelector(".info-altura"); 
    var altura = tdAltura.textContent;
    
    //calcula imc
    var imc = peso / (altura * altura);

    //variáveis com valor true
    var pesoValido = true;
    var alturaValida = true; 

    if(pesoValido && alturaValida){
        //acessa e altura po imc
        var tdImc = paciente.querySelector("info-imc");
        tdImc.textContent = imc;
    }
    //define limetes do peso e altura
    if(peso <= 0 || peso >= 1000){
    var pesoValido = false;
        tdImc.textContent = "Peso Inválido";
    }
    if(altura <= 0 || altura >= 3.00){
        var alturaValida = false;
        tdImc.textContent = ("Altura Inválida");
    }
}
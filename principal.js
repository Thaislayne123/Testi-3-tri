//muda o nome a partir do seletor de classe
var subtitulo = document.querySelector("subtitulo")
var titulo = document.querySelector("titulo");
titulo.textContent = "Dicas Nutrição";
pacientes.textContent = "Meus Pacientes";

//acessar a tag tr - paciente Paulo
var paciente = document.querySelector(".paciente");

for(var i = 0; i < paciente.leagth; i++){
    //seleciona o conteúdo da tag
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

//seleciona o conteúdo altuta tag
var tdAltura = paciente.querySelector(".info-altura") 
var altura = tdAltura.textContent;
 
//calcula imc
var imc = peso / (altura * altura);

//variáveis com valor true
var pesaValido = true;
var alturaValida = true; 

if(pesoValido && alturaValida){
    //acessa e altura po imc
    var tdImc = paciente.querySelector("info-imc");
    tdImc.textContent = imc;
 }
//define limetes do peso e altura
if(peso <= 0 || peso >= 1000){
    console.log("Peso inválido");
    var pesoValido = false;
    tdImc.textContent = "Peso Inválido";
}
if(altura < 0 || altura > 3.000){
    alert("Altura inválido");
    var alturaValida = false;
    tdImc.textContent = ("Altura Inválida");
}
}
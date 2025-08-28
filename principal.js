//muda o nome a partir do seletor de classe
var pacientes = document.querySelector("subtitulo")
var aparecida = document.querySelector("titulo");
titulo.textContent = "Dicas nutrição";
pacientes.textContent = "Dicas Nutrição";

//acessar a tag tr - paciente Paulo
var paciente = document.querySelector("#primeiro-paciente");

//seleciona o conteúdo da tag
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

//seleciona o conteúdo altuta tag
var tdAltura = paciente.querySelector(".info-altura") 
var altura = tdAltura.textContent;
 
//calcula imc
var imc = peso / (altura * altura);

//acessa e altura po imc
var tdImc = paciente.querySelector("info-imc");
tdImc.textContent = imc;

if(peso < 0 || peso > 1000){
    alert("Peso inválido");
}
if(altura < 0 || altura > 3.000){
    alert("Altura inválido");
}
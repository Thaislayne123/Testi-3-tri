//muda o nome a partir do seletor de classe
var subtitulo = document.querySelector(".subtitulo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Fernanda Nutrição";
subtitulo.textContent = "Meus Pacientes";

//acessar a tag tr - paciente Paulo
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    //seleciona o conteúdo peso da tag
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    // seleciona o conteúdo altura da tag
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //calcula o imc
    var imc = peso / (altura * altura);

    //variáveis com valor true
    var pesoValido = true;
    var alturaValida = true; 

    if(pesoValido && alturaValida){
        // acessa e altera o imc
        var tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = imc.toFixed(2);
    }
    //define limites de peso e altura
    if(peso <= 0 || peso >= 1000){
        var pesoValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("campo-invalido");
        
    }
    if(altura <= 0 || altura >= 3.00){
        var alturaValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("campo-invalido");

    }
}
//QUANDO CLICAR NO SUBTITULO, APAREÇA UMA MENGAGEM
subtitulo.addEventListener('click', mostraMensagem);

function mostraMensagem(){
    alert("Este elemento foi clicado");
}

//Acessa o botão
var botaoAdicionar = document.querySelector("#adicionar-paciente");
//Executa os códigos ao clicar no botão
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();

    //acessa o formulário
var formulario = document.querySelector ("#form-adiciona");

//Captura os valores digitados
var nome = formulario.nome.value;
var peso = formulario.peso.value;
var altura = formulario.altura.value;
var gordura = formulario.gordura.value;

//Cria a tag , <tr>
var pacienteTr = document.createElement("tr");
//Cria as tag , <td>
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = imc;

//Adiciona as tags na tela do usuário
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);
});


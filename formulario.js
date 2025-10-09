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
 //adiciona valor as tags criadas 
nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calcularIMC(peso, altura);

//Adiciona as tags na tela do usuário
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);

});
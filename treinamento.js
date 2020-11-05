/* comentario de bloco*/
document.querySelector('#botao').addEventListener('dblclick', () => {
    /*Neste momento o js vai pegar o nome digitado e armazenar numa variavel de memória ram */

    let nome; /*declaração da variavel de memoria ram*/
   nome = document.getElementById ('nome').value; /*atribuindo o nome digitado para a variavel nome*/

   let sobrenome= document.getElementById ('sobrenome').value;
  
   /*impirmir o nome digitado é: Kelvin */
   /*Concatenar = Juntar*/
   document.write ('O nome digitado é:'+nome + " " + sobrenome);
})

 /*vamos criar um evento para escutar o botão*/
  document.querySelector('#botao').addEventListener('click', ()=> {
 /* corpo da função*/
 let nome = document.getElementById('nome').value , sobrenome = document.getElementById('sobrenome').value;
  
 /*cubo rosa= metodo de fazer alguma ação*/
 alert ('O nome digitado é:'+nome+' '+sobrenome);
 

 })

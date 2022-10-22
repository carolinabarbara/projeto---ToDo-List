let id = 0

//(ação abaixo é uma arrow function - função) // o novaTarefa abaixo ele é um parametro
const tarefa = (id, novaTarefa) => `<div '${id}'> 
<p>${novaTarefa}<p/>
<imput type="checkbox"/>
<div>`
//(ação abaixo é uma função)// novaTarefa abaixo é a variavel criada e ela não precisa ser a mesma do paremetro da função acima
function adicionarTarefa(){
    id++
    const novaTarefa= document.getElementById('nome-tarefa').value // O Value vai pegar o valor que esta inserido dentro do meu input
       document.querySelector('#lista-tarefas').innerHTML
       += tarefa(id, novaTarefa) // tarefa esta sendo chamando da arrow function - função acima  
}
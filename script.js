const input = document.getElementById("inputPrincipal");
const ul = document.getElementById("lista");

function adicionarTarefa() {
  if (input.value !== "") {
    //Criando uma nova lista:
    const li = document.createElement("li");
    li.textContent = input.value;

    //Remover a tarefa:
    const removerBotao = document.createElement("button");
    const imagem1 = document.createElement("img");
    imagem1.src = "../Lista de Tarefas/icons/remover.png";
    removerBotao.appendChild(imagem1);
    removerBotao.onclick = function () {
      ul.removeChild(li);
    };

    //reordenar tarefa:
    const reordenarTarefa = new Sortable(ul, {
      animation: 150,
    });

    //Marcar como concluída:
    const marcarComoConcluida = document.createElement("button");
    const imagem2 = document.createElement("img");
    imagem2.src = "../Lista de Tarefas/icons/concluido.png";
    marcarComoConcluida.appendChild(imagem2);
    marcarComoConcluida.onclick = function () {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
        marcarComoConcluida.appendChild(imagem2);
      } else {
        li.style.textDecoration = "line-through";
        marcarComoConcluida.appendChild(imagem2);
      }
    };

    //Editar tarefa:
    const editarTarefa = document.createElement("button");
    const imagem3 = document.createElement("img");
    imagem3.src = "../Lista de Tarefas/icons/editar.png";

    editarTarefa.appendChild(imagem3);
    editarTarefa.onclick = function () {
      const valor = prompt("Insira o novo valor");
      li.textContent = valor;
      li.appendChild(editarTarefa);
      li.appendChild(marcarComoConcluida);
      li.appendChild(removerBotao);
      ul.appendChild(li);
    };

    li.appendChild(editarTarefa);
    li.appendChild(marcarComoConcluida);
    li.appendChild(removerBotao);
    ul.appendChild(li);

    input.value = "";
  } else {
    alert("Por favor, insira uma tarefa!");
  }
}

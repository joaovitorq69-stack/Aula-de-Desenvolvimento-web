// WEB CODING — JavaScript básico, sem bibliotecas externas.
"use strict";

// 1. Contador: let é usada porque o número muda a cada clique.
let cliques = 0;
const contador = document.querySelector("#contador");
const mensagemContador = document.querySelector("#mensagem-contador");
const botaoSomar = document.querySelector("#somar");
const botaoReiniciar = document.querySelector("#reiniciar");

botaoSomar.addEventListener("click", function () {
  cliques += 1;
  contador.textContent = String(cliques);
  mensagemContador.textContent = cliques === 1
    ? "Você deu o primeiro clique!"
    : `Você já clicou ${cliques} vezes.`;
});

botaoReiniciar.addEventListener("click", function () {
  cliques = 0;
  contador.textContent = "0";
  mensagemContador.textContent = "Contador reiniciado.";
});

// 2. Tema: adiciona ou remove uma configuração de cores da página.
const botaoTema = document.querySelector("#alternar-tema");

function atualizarTema(escuro) {
  document.documentElement.dataset.theme = escuro ? "dark" : "light";
  botaoTema.setAttribute("aria-pressed", String(escuro));
  botaoTema.setAttribute("aria-label", escuro ? "Ativar tema claro" : "Ativar tema escuro");
  botaoTema.title = escuro ? "Ativar tema claro" : "Ativar tema escuro";
}

atualizarTema(false);
botaoTema.addEventListener("click", function () {
  const temaEscuro = document.documentElement.dataset.theme === "dark";
  atualizarTema(!temaEscuro);
});

// 3. Formulário: demonstra alert(), mas NÃO envia dados a um servidor.
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // Evita o recarregamento da página.

  const dados = new FormData(formulario);
  const nome = String(dados.get("nome") || "").trim();
  const email = String(dados.get("email") || "").trim();
  const curso = String(dados.get("curso") || "");

  if (!nome || !email || !curso) {
    alert("Preencha todos os campos antes de continuar.");
    return;
  }

  alert(
    "FORMULÁRIO DE DEMONSTRAÇÃO\n\n" +
    `Nome: ${nome}\n` +
    `E-mail: ${email}\n` +
    `Tecnologia: ${curso}\n\n` +
    "Os dados foram lidos pelo JavaScript, mas NÃO foram enviados ou salvos."
  );
});

// 4. O ano do rodapé acompanha a data do dispositivo.
document.querySelector("#ano").textContent = String(new Date().getFullYear());

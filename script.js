const botoes = document.querySelectorAll(".btn-cor");
const body = document.body;

const cores = ["#f5f7fa", "#d0e7f5", "#1e1e2f"];

botoes.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    body.style.backgroundColor = cores[i];
  });
});

document.getElementById("menu-toggle").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("aberto");
});

const imagensSlide = [
  "/src/assets/imgs/bueiro-enchente.png",
  "/src/assets/imgs/bueiro-tecnologia.png",
  "/src/assets/imgs/bueiro-objetivos.png",
];
let indice = 0;

setInterval(() => {
  indice = (indice + 1) % imagensSlide.length;
  document.getElementById("slide").src = imagensSlide[indice];
}, 3000);

document.getElementById("form-contato").addEventListener("submit", (e) => {
  const campos = e.target.querySelectorAll("input, textarea");
  let valido = true;
  campos.forEach((campo) => {
    if (!campo.value.trim()) valido = false;
  });
  if (!valido) {
    e.preventDefault();
    alert("Por favor, preencha todos os campos.");
  }
});

const quizContainer = document.getElementById("quiz");
const perguntas = [
  { pergunta: "O que o dispositivo detecta?", opcoes: ["Vazamento de gás", "Nível da água", "Fumaça"], correta: 1 },
  { pergunta: "Qual tecnologia é usada?", opcoes: ["Bluetooth", "LoRa", "Wi-Fi"], correta: 1 },
  { pergunta: "Quem é o público-alvo?", opcoes: ["Turistas", "Moradores e Defesa Civil", "Estudantes"], correta: 1 },
  { pergunta: "Qual o objetivo principal?", opcoes: ["Evitar buracos", "Prevenir enchentes", "Aumentar impostos"], correta: 1 },
  { pergunta: "Qual sensor é usado?", opcoes: ["Temperatura", "Luz", "Nível de água"], correta: 2 },
  { pergunta: "Qual rede é alternativa ao LoRa?", opcoes: ["NB-IoT", "WiMax", "3G"], correta: 0 },
  { pergunta: "Qual tipo de alerta é emitido?", opcoes: ["Manual", "Sonoro", "Automático"], correta: 2 },
  { pergunta: "Quem age com os alertas?", opcoes: ["Defesa Civil", "Bombeiros", "Motoristas"], correta: 0 },
  { pergunta: "O sistema funciona quando?", opcoes: ["Em dias secos", "Durante chuvas", "Somente à noite"], correta: 1 },
  { pergunta: "O que o sistema reduz?", opcoes: ["Água potável", "Inspeções presenciais", "Gastos com internet"], correta: 1 }
];

perguntas.forEach((q, i) => {
  const div = document.createElement("div");
  div.innerHTML = `<p><strong>${i + 1}. ${q.pergunta}</strong></p>` +
    q.opcoes.map((op, j) => `
      <label><input type="radio" name="q${i}" value="${j}"/> ${op}</label><br>`
    ).join("");
  quizContainer.appendChild(div);
});

document.getElementById("enviar-quiz").addEventListener("click", () => {
  let pontos = 0;
  perguntas.forEach((q, i) => {
    const selecionado = document.querySelector(`input[name=q${i}]:checked`);
    if (selecionado && Number(selecionado.value) === q.correta) {
      pontos++;
    }
  });
  document.getElementById("resultado").textContent = `Você acertou ${pontos} de ${perguntas.length} perguntas.`;
});

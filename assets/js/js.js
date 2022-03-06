const nota = document.querySelector(".nota");
const botao = document.querySelector(".botao");
const numeroAdvice = document.querySelector(".numeroAdvice");
botao.addEventListener("click", () => {
    let random = Math.floor(Math.random() * 200);
    const url = fetch(`https://api.adviceslip.com/advice/${random}`);
    url.then((resposta) => {
        return resposta.json();
    }).then((dados) => {
        nota.innerHTML = `"${dados.slip.advice}"`;
        numeroAdvice.innerHTML = `ADVICE #${dados.slip.id}`;
    });
});

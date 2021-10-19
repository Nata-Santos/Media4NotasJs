let nota1 = parseFloat(prompt("Digite a Primeira nota:") || 0);
let nota2 = parseFloat(prompt("Digite a Segunda nota:") || 0);
let nota3 = parseFloat(prompt("Digite a Terceira nota:") || 0);
let nota4 = parseFloat(prompt("Digite a Quarta nota:") || 0);

if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0 ||
    nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10) {
    alert("Media invalida, digite somente notas entre 0 e 10");
}
else {
    let notaMedia = (nota1 + nota2 + nota3 + nota4) / 4;

    let resultado;
    if (notaMedia < 5) {
        resultado = "Reprovado";
    } else if (notaMedia > 6) {
        resultado = "Aprovado";
    } else {
        resultado = "Em Recuperação"
    }

    const mensagem = `Voce ficou com media ${notaMedia.toFixed(1)}, resultado ${resultado}`
    alert(mensagem)
}


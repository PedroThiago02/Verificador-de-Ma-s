function dados() {
    var quantidade_de_maças = Number(document.getElementById("maças").value); // Obtém o valor inserido no input de quantidade de maçãs e converte para número
    var maça_verde = Number(document.getElementById("verde").value); // Obtém o valor inserido no input de quantidade de maçãs verdes e converte para número
    var div_result = document.getElementById("resultado"); // Obtém a referência da div onde será exibido o resultado

    if (quantidade_de_maças > 1 && maça_verde === quantidade_de_maças) { // Verifica se a quantidade de maçãs verdes é igual à quantidade total de maçãs
        div_result.innerHTML = "Verdadeiro"; // Exibe "Verdadeiro" na div de resultado
        div_result.style.backgroundColor = "#28a745"; // Define cor de fundo verde
        div_result.style.color = "#fff"; // Define cor do texto branco
    } else {
        div_result.innerHTML = "Falso"; // Exibe "Falso" na div de resultado
        div_result.style.backgroundColor = "#dc3545"; // Define cor de fundo vermelha
        div_result.style.color = "#fff"; // Define cor do texto branco
    }
}
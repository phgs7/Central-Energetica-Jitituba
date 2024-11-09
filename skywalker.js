const dadosUsina = [
    { ano: 2023, mes: 'Janeiro', producao: 5000, exportacao: 3000 },
    { ano: 2023, mes: 'Fevereiro', producao: 6000, exportacao: 3500 },
    // Adicione mais dados conforme necessário
];

function carregarDados() {
    const tabela = document.getElementById('dados-usina').getElementsByTagName('tbody')[0];
    
    dadosUsina.forEach(dado => {
        const linha = tabela.insertRow();
        linha.insertCell(0).textContent = dado.ano;
        linha.insertCell(1).textContent = dado.mes;
        linha.insertCell(2).textContent = dado.producao;
        linha.insertCell(3).textContent = dado.exportacao;
    });
}

window.onload = carregarDados;

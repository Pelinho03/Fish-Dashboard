// Arquivo JSON com os dados dos peixes
var dadosPeixes = `
{
    "peixes": [
        {
            "nome": "Água fria",
            "ph": 7.8,
            "luminosidade": "Fraco",
            "temperatura": 20
        },
        {
            "nome": "Goldfish",
            "ph": 8.0,
            "luminosidade": "Média",
            "temperatura": 25
        },
        {
            "nome": "Colisa",
            "ph": 7.4,
            "luminosidade": "Média",
            "temperatura": 28
        },
        {
            "nome": "Tetra neon",
            "ph": 7.0,
            "luminosidade": "Fraco",
            "temperatura": 28
        },
        {
            "nome": "Coridora",
            "ph": 7.5,
            "luminosidade": "Média",
            "temperatura": 27
        }
    ]
}`;

// Parse o conteúdo do arquivo JSON para obter um objeto JavaScript
var objetoPeixes = JSON.parse(dadosPeixes);

// Acesse a lista de peixes dentro do objeto JavaScript
var listaPeixes = objetoPeixes.peixes;

// Selecione o elemento da lista de seleção
var listaSelecao = document.querySelector(".peixe-select-list ul");

// Para cada peixe na lista, crie um elemento <option> e atribua valores
listaPeixes.forEach(function (peixe) {
    // Crie um elemento <option>
    var option = document.createElement("option");

    // Defina o valor do atributo data-id como o identificador do peixe
    option.setAttribute(
        "data-id",
        "peixe-" + peixe.nome.toLowerCase().replace(/\s/g, "-")
    );

    // Defina o conteúdo do elemento <option> como o nome do peixe
    option.textContent = peixe.nome;

    // Adicione o elemento <option> à lista de seleção
    listaSelecao.appendChild(option);
});

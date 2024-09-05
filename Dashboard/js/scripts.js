///constantes
const _elements = {
    loading: document.querySelector(".loading"),
    switch: document.querySelector(".switch_track"),
    peixeSelectToggle: document.querySelector(".peixe-select-toggle"),
    selectOptions: document.querySelectorAll(".peixe-select-list_item"),
    selectList: document.querySelector(".peixe-select-list"),
    selectToggleIcon: document.querySelector(".peixe-select-toggle_icon"),
    selectSearchBox: document.querySelector(".peixe-select-list_search"),
    selectPeixeSelected: document.querySelector(
        ".peixe-select-toggle_peixe-selected"
    ),
    luz: document.querySelector(".info_total--luz"),
    ph: document.querySelector(".info_total--ph"),
    testeDescription: document.querySelector(".data-box__description"),
    temperatura: document.querySelector(".info_total--temperatura"),
    turbidez: document.querySelector(".info_total--turbidez"),
};

const _data = {
    id: "peixe=true",
    turbidez: undefined,
    temperatura: undefined,
    luz: undefined,
    ph: undefined,
};

//constantes para a dição de gráficos
const _charts = {};

//função para alternar entre modo dark e light
_elements.switch.addEventListener("click", () => {
    const isDark = _elements.switch.classList.toggle("switch_track--dark");
    if (isDark) document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.setAttribute("data-theme", "light");
});

//na caixa de pesquisa, o icon roda cada vez que é clicado para abrir ou fechar a section
_elements.peixeSelectToggle.addEventListener("click", () => {
    _elements.selectToggleIcon.classList.toggle(
        "peixe-select-toggle_icon--rotate"
    );
    _elements.selectList.classList.toggle("peixe-select-list--show");
});

//guarda o valor selecionado na caixa de pesquisa cada vez que clicado num dado peixe
_elements.selectOptions.forEach((item) => {
    item.addEventListener("click", () => {
        _elements.selectPeixeSelected.innerText = item.innerText;
        _data.id = item.getAttribute("data-id");
        _elements.peixeSelectToggle.dispatchEvent(new Event("click"));

        loadData(_data.id);
    });
});

//através da pesquisa, cada letra, vai buscar sempre valores aproximados do nome
_elements.selectSearchBox.addEventListener("keyup", (e) => {
    const search = e.target.value.toLowerCase();

    for (const item of _elements.selectOptions) {
        const peixe = item.innerText.toLowerCase();

        if (peixe.includes(search)) {
            item.classList.remove("peixe-select-list_item--hide");
        } else {
            item.classList.add("peixe-select-list_item--hide");
        }
    }
});

//vai sempre esperar até conseguir buscar o link do api para ser convertido em json e retornar os valores
/*const request = async (api, id) => {
    try{
        const url = api + id;

        const data = await fetch(url);
        const json = await data.json();

        return json;
    }
    catch(e) {
        console.log(e);
    }
}*/

//o ecra de loading aparece cada vez que atualiza valores
//retorna os valores da api para dentro das section de cada sensor
// const loadData = async (id) => {
//     _elements.loading.classList.remove("loading--hide");

//     _data.luz = await request(_api.teste, id);
//     _data.ph  = await request(_api.teste, id);
//     _data.temperatura  = await request(_api.teste, id);
//     _data.turbidez  = await request(_api.teste, id);

//     updateCards();

//     _elements.loading.classList.add("loading--hide");
// }

//algumas configurações dos gráficos de apexcharts
const createBasicChart = (element, config) => {
    const options = {
        chart: {
            background: "transparent",
        },

        xaxix: {
            type: "datetime",
        },

        series: [],
    };
    const chart = new ApexCharts(document.querySelector(element), options);
    chart.render();
    return chart;
};

const createDonutChart = (element) => {};

const createStackedColumnsChart = (element) => {};

//criar os gráficos para cada caixa de cada sensor dentro das section criadas no index
const createCharts = () => {
    _charts.luz = createBasicChart(".data-box--luz .data-box_body");
    _charts.ph = createBasicChart(".data-box--ph .data-box_body");
    _charts.temperatura = createBasicChart(
        ".data-box--temperatura .data-box_body"
    );
    _charts.turbidez = createBasicChart(".data-box--turbidez .data-box_body");
};

//vai buscar os dados da api para dentro das caixas de cada peixe e em seguida uma conversão para número
/*const updateCards = () => {
    const PX = _PXS[_data.id];

    _elements.luz.innerText = _data.luz[_data.luz.length-1]["total_de_casos"];
    _elements.ph.innerText = _data.ph[_data.ph.length-1]["total_de_casos"];
    _elements.temperatura.innerText = _data.temperatura[_data.temperatura.length-1]["total_de_casos"];
    _elements.turbidez.innerText = _data.turbidez[_data.turbidez.length-1]["total_de_casos"];

    _elements.luz.innerText = Number(_elements.luz.innerText).toLocaleString();
    _elements.ph.innerText = Number(_elements.ph.innerText).toLocaleString();
    _elements.temperatura.innerText = Number(_elements.temperatura.innerText).toLocaleString();
    _elements.turbidez.innerText = Number(_elements.turbidez.innerText).toLocaleString();
}*/

const updateCharts = () => {};

const getChartOptions = (series, labels, colors) => {};

const getDonutChartOptions = (value, name, colors) => {};

loadData(_data.id);
createCharts();

//botão para voltar ao topo da página
const botao = document.querySelector(".btn");

window.addEventListener("scroll", function (event) {
    if (this.window.scrollY == 0) {
        botao.classList.remove("visible");
    } else {
        botao.classList.add("visible");
    }
});

// *****************************************
//TESTE PARA VALORES ATRIBUIDOS PELOS PEIXES
// *****************************************

// // Seleciona os elementos relevantes
// const peixeItems = document.querySelectorAll(".peixe-select-list_item");
// const infoLabels = document.querySelectorAll(".info_label");
// const infoTotals = document.querySelectorAll(".info_total");

// // Função para atualizar as informações com base no peixe selecionado
// function atualizarInformacoes(peixeId) {
//     // Lógica para atualizar as informações com base no peixe selecionado
//     // Aqui você pode usar um switch/case ou um objeto com as informações dos peixes

//     // Exemplo:
//     switch (peixeId) {
//         case "peixe-agua-fria":
//             infoLabels[0].textContent = "Luz";
//             infoTotals[0].textContent = "Média";
//             infoLabels[1].textContent = "pH";
//             infoTotals[1].textContent = "7,5";
//             infoLabels[2].textContent = "Temperatura";
//             infoTotals[2].textContent = "20ºC";
//             infoLabels[3].textContent = "Turbidez";
//             infoTotals[3].textContent = "2";
//             break;
//         case "peixe-goldfish":
//             // Atualize as informações para o peixe Goldfish
//             break;
//         case "peixe-colisa":
//             // Atualize as informações para o peixe Colisa
//             break;
//         case "peixe-tetra-neon":
//             // Atualize as informações para o peixe Tetra neon
//             break;
//         case "peixe-coridora":
//             // Atualize as informações para o peixe Coridora
//             break;
//         default:
//             // Caso nenhum peixe seja selecionado, defina as informações como vazias
//             infoLabels.forEach((label) => (label.textContent = ""));
//             infoTotals.forEach((total) => (total.textContent = ""));
//     }
// }

// // Adiciona um evento de clique a cada item de peixe
// peixeItems.forEach((item) => {
//     item.addEventListener("click", function () {
//         // Obtém o ID do peixe selecionado
//         const peixeId = this.getAttribute("data-id");

//         // Atualiza as informações com base no peixe selecionado
//         atualizarInformacoes(peixeId);
//     });
// });

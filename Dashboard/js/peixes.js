// DADOS DE CADA PEIXE
//elementos importantes
const peixeItems = document.querySelectorAll(".peixe-select-list_item");
const infoLabels = document.querySelectorAll(".info_label");
const infoTotals = document.querySelectorAll(".info_total");

// Função para atualizar as informações com base no peixe selecionado
function atualizarInformacoes(peixeId) {
    // Lógica para atualizar as informações com base no peixe selecionado

    switch (peixeId) {
        case "peixe-agua-fria":
            infoLabels[0].textContent = "Luz";
            infoTotals[0].textContent = "Fraca";
            infoLabels[1].textContent = "pH";
            infoTotals[1].textContent = "Entre 6,8 e 7,8";
            infoLabels[2].textContent = "Temperatura";
            infoTotals[2].textContent = "15ºC a 20ºC";
            infoLabels[3].textContent = "Turbidez";
            infoTotals[3].textContent = "2";
            infoTotals[4].textContent = "Descrição";
            infoTotals[4].textContent =
                "O peixe de água fria, como o salmão, é uma criatura aquática espetacular adaptada para sobreviver em temperaturas mais baixas. Com escamas brilhantes, corpo esguio e habilidades de natação ágil, esses peixes encantam os observadores. Sua jornada migratória épica, desde rios até o mar e de volta, é impressionante. Além do salmão, outras espécies como a truta e o bacalhau também desempenham um papel vital nos ecossistemas aquáticos, tornando-os essenciais para a biodiversidade. Em suma, os peixes de água fria são tesouros naturais adaptados às condições desafiadoras e desempenham um papel importante nos ecossistemas aquáticos.";
            break;
        case "peixe-goldfish":
            infoLabels[0].textContent = "Luz";
            infoTotals[0].textContent = "Média";
            infoLabels[1].textContent = "pH";
            infoTotals[1].textContent = "Entre 6,5 e 8,0";
            infoLabels[2].textContent = "Temperatura";
            infoTotals[2].textContent = "10ºC a 25ºC";
            infoLabels[3].textContent = "Turbidez";
            infoTotals[3].textContent = "2";
            infoTotals[4].textContent = "Descrição";
            infoTotals[4].textContent =
                "O peixe-goldfish é uma espécie fascinante que encanta os amantes de aquários em todo o mundo. Com seu corpo elegante e escamas brilhantes, o goldfish é conhecido por sua variedade de cores vibrantes, incluindo laranja, vermelho, branco e até mesmo preto. Seus olhos protuberantes e redondos conferem uma expressão cativante, enquanto suas barbatanas delicadas se movem graciosamente na água. Esses peixes são caracterizados por seu comportamento pacífico e amigável, tornando-os ideais para compartilhar um habitat com outros peixes de água doce. Além disso, sua capacidade de se adaptar facilmente a diferentes condições de água e sua resistência tornam-nos uma escolha popular entre os criadores de aquários. O goldfish é verdadeiramente uma maravilha aquática que traz beleza e alegria para qualquer ambiente aquático.";
            break;
        case "peixe-colisa":
            infoLabels[0].textContent = "Luz";
            infoTotals[0].textContent = "Média";
            infoLabels[1].textContent = "pH";
            infoTotals[1].textContent = "Entre 6,8 e 7,4";
            infoLabels[2].textContent = "Temperatura";
            infoTotals[2].textContent = "22ºC a 28ºC";
            infoLabels[3].textContent = "Turbidez";
            infoTotals[3].textContent = "2";
            infoTotals[4].textContent = "Descrição";
            infoTotals[4].textContent =
                "O peixe-colisa é uma espécie fascinante que cativa os olhares dos entusiastas de aquários de água doce. Com seu corpo elegante e cores vibrantes, o peixe-colisa é uma verdadeira obra de arte viva. Sua forma é delicada, com nadadeiras exuberantes que se movem graciosamente na água. Suas escamas brilham em tons iridescentes, variando de azul, verde e vermelho, dependendo da espécie. Além disso, os machos exibem uma barbatana dorsal longa e elegante, que se estende como uma bandeira, adicionando um toque de majestade ao seu porte. Os olhos do peixe-colisa são brilhantes e expressivos, revelando sua curiosidade e inteligência. Comportamentalmente, eles são conhecidos por serem tranquilos e pacíficos, tornando-os ótimos companheiros para outros peixes de aquário. Seu comportamento peculiar inclui construir ninhos de espuma para a reprodução e cuidar dos ovos e alevinos com zelo. Em suma, o peixe-colisa é um tesouro aquático, combinando beleza, elegância e comportamento interessante para alegrar qualquer aquário de água doce.";
            break;
        case "peixe-tetra-neon":
            infoLabels[0].textContent = "Luz";
            infoTotals[0].textContent = "Fraca";
            infoLabels[1].textContent = "pH";
            infoTotals[1].textContent = "Entre 6,0 e 7,0";
            infoLabels[2].textContent = "Temperatura";
            infoTotals[2].textContent = "20ºC a 28ºC";
            infoLabels[3].textContent = "Turbidez";
            infoTotals[3].textContent = "2";
            infoTotals[4].textContent = "Descrição";
            infoTotals[4].textContent =
                "O peixe-tetra-neon é uma espécie fascinante e vibrante que cativa os olhos com suas cores brilhantes. Originário das águas tropicais da América do Sul, esse peixe pequeno, porém encantador, possui um corpo prateado e uma faixa horizontal brilhante que se estende do meio do corpo até a cauda. Essa faixa é intensamente colorida em tons de azul-cobalto radiante, que se destacam em contraste com o resto do corpo. Os olhos do peixe-tetra-neon são grandes e brilhantes, adicionando uma expressividade cativante ao seu visual. Sua nadadeira caudal é elegante e bifurcada, permitindo que se mova graciosamente na água. Considerado um peixe de cardume, o peixe-tetra-neon geralmente é mantido em grupos, o que amplifica a beleza visual de seu nado sincronizado. Sua presença em um aquário é uma verdadeira festa para os olhos e uma adição encantadora a qualquer comunidade aquática.";
            break;
        case "peixe-coridora":
            infoLabels[0].textContent = "Luz";
            infoTotals[0].textContent = "Média";
            infoLabels[1].textContent = "pH";
            infoTotals[1].textContent = "Entre 6,5 e 7,5";
            infoLabels[2].textContent = "Temperatura";
            infoTotals[2].textContent = "22ºC a 28ºC";
            infoLabels[3].textContent = "Turbidez";
            infoTotals[3].textContent = "2";
            infoTotals[4].textContent = "Descrição";
            infoTotals[4].textContent =
                "A peixe-coridora é um peixe pequeno e cativante, amplamente apreciado por sua aparência única e comportamento interessante. Com seu corpo achatado e alongado, é fácil reconhecê-la. Sua pele é coberta por uma série de placas ósseas que lembram uma armadura, conferindo-lhe uma aparência distintiva. Além disso, seu padrão de cores varia entre diferentes espécies, podendo apresentar tons de marrom, preto, prateado e até mesmo algumas manchas de laranja ou amarelo. Uma característica marcante da peixe-coridora é a presença de nadadeiras peitorais em formato de ventosa, que ela utiliza para se fixar em superfícies e se mover habilmente em busca de alimentos. Esse peixe é conhecido por ser pacífico e sociável, geralmente sendo mantido em grupos para estimular seu comportamento natural. Sua natureza curiosa e ativa faz dela uma adição encantadora a qualquer aquário, trazendo vida e movimento para o ambiente aquático.";
            break;
        default:
            // Caso nenhum peixe seja selecionado, defina as informações como vazias
            infoLabels.forEach((label) => (label.textContent = ""));
            infoTotals.forEach((total) => (total.textContent = ""));
    }
}

// Adiciona um evento de clique a cada item de peixe
peixeItems.forEach((item) => {
    item.addEventListener("click", function () {
        // Obtém o ID do peixe selecionado
        const peixeId = this.getAttribute("data-id");

        // Atualiza as informações com base no peixe selecionado
        atualizarInformacoes(peixeId);
    });
});

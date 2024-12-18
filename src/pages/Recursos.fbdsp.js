import wixData from 'wix-data';
import wixWindowFrontend from 'wix-window-frontend';

$w("#dropdownCategory").hide();

$w("#repeater4").onItemReady(($item, itemData) => {
    $w('#text59').html = '<h1 class="font_0 wixui-rich-text__text" style="font-size: auto;line-height: 1em; color: transparent; background-image: linear-gradient(to right, #9F2803, #EC391A); -webkit-background-clip: text; background-clip: text"><span style="font-size: auto;" class="wixui-rich-text__text"><span style="font-weight: bold;" class="wixui-rich-text__text">Explore nossos artigos e dicas de nutrição</span></span></h1>';
    
    $item("#tituloBlog").text = itemData.titulo.length > 30 ? itemData.titulo.substring(0, 30) + "..." : itemData.titulo;
    $item("#descricaoBlog").text = itemData.conteudo.length > 80 ? itemData.conteudo.substring(0, 80) + "..." : itemData.conteudo;

    var boxColor = "#ffffff";
    var textColor = "#000000";
    switch (itemData.categoria) {
        case "Performance Esportiva":
            boxColor = "#FBE0CB";
            textColor = "#FF7A00";
            break;
        case "O Corpo Fala":
            boxColor = "#FACCDA";
            textColor = "#FF0069";
            break;
        case "Motivação & Saúde Mental":
            boxColor = "#DBCEFB";
            textColor = "#7638FA";
            break;
        case "Dicas & Ideias":
            boxColor = "#F0C9EF";
            textColor = "#D300C5";
            break;
        case "Conhecendo Alimentos":
            boxColor = "#D1E7FD";
            textColor = "#00A3FF";
            break;
        default:
            break;
    }

    $item("#box50").style.backgroundColor = boxColor;
    $item("#text60").html = `<p class="font_9 wixui-rich-text__text" style="font-weight: bold; font-size: auto; text-align: center; color: ${textColor};">
        <span class="wixui-rich-text__text">
            <span class="wixui-rich-text__text">${itemData.categoria}</span>
        </span>
    </p>
`;
});

$w.onReady(function () {
    if (wixWindowFrontend.formFactor === "Mobile") {
        $w("#dropdownCategory").show();
            
        const dropdownOptions = [
            { label: "Todos Artigos", value: "Todos Artigos" },
            { label: "Performance Esportiva", value: "Performance Esportiva" },
            { label: "O Corpo Fala", value: "O Corpo Fala" },
            { label: "Motivação & Saúde Mental", value: "Motivação & Saúde Mental" },
            { label: "Dicas & Ideias", value: "Dicas & Ideias" },
            { label: "Conhecendo Alimentos", value: "Conhecendo Alimentos" }
        ];

        $w("#dropdownCategory").options = dropdownOptions;
        $w("#dropdownCategory").onChange((event) => {
            const selectedCategory = event.target.value;
            if (selectedCategory === "Todos Artigos") {
                $w("#dataset1").setFilter(wixData.filter());
                $w("#dataset1").refresh();
            } else {
                filterCategory(selectedCategory);
            }
        });
    }

    const buttons = [
        { id: "buttonPerformance", category: "Performance Esportiva" },
        { id: "buttonCorpo", category: "O Corpo Fala" },
        { id: "buttonMotivacao", category: "Motivação & Saúde Mental" },
        { id: "buttonDicas", category: "Dicas & Ideias" },
        { id: "buttonConhecendo", category: "Conhecendo Alimentos" }
    ];

    const categoryColors = {
        "Performance Esportiva": { boxColor: "#FBE0CB", textColor: "#FF7A00" },
        "O Corpo Fala": { boxColor: "#FACCDA", textColor: "#FF0069" },
        "Motivação & Saúde Mental": { boxColor: "#DBCEFB", textColor: "#7638FA" },
        "Dicas & Ideias": { boxColor: "#F0C9EF", textColor: "#D300C5" },
        "Conhecendo Alimentos": { boxColor: "#D1E7FD", textColor: "#00A3FF" }
    };

    buttons.forEach(button => {
        const btnElement = $w(`#${button.id}`);
        btnElement.onClick(() => {
            setButtonActive(button.id);
            filterCategory(button.category);
        });
    });

    $w("#inputSearch").onInput((event) => {
        const searchText = event.target.value.toLowerCase().trim();
        filterResults(searchText);
    });

    $w("#todosArtigos").onClick(() => {
        resetButtonColors();
        $w("#dataset1").setFilter(wixData.filter());
        $w("#dataset1").refresh();
    });

    function filterResults(searchText) {
        $w("#dataset1").setFilter(
            wixData.filter()
            .contains("titulo", searchText)
            .or(wixData.filter().contains("conteudo", searchText))
            .or(wixData.filter().contains("categoria", searchText))
        );
        $w("#dataset1").refresh();
    }

    function filterCategory(category) {
        $w("#dataset1").setFilter(
            wixData.filter()
            .eq("categoria", category)
        );
        $w("#dataset1").refresh();
    }

    function setButtonActive(buttonId) {
        buttons.forEach(button => {
            const btnElement = $w(`#${button.id}`);
            if (button.id === buttonId) {
                const colors = categoryColors[button.category];
                if (colors) {
                    const { boxColor, textColor } = colors;
                    btnElement.style.backgroundColor = boxColor;
                    $w(`#text${button.id.substring(6)}`).html = `<p class="font_9 wixui-rich-text__text" style="font-weight: bold; font-size: auto; text-align: center; color: ${textColor};">
                        <span class="wixui-rich-text__text">
                            <span class="wixui-rich-text__text">${button.category}</span>
                        </span>
                    </p>`;
                }
            } else {
                btnElement.style.backgroundColor = "#CBCACA";
            }
        });
    }

    function resetButtonColors() {
        buttons.forEach(button => {
            const btnElement = $w(`#${button.id}`);
            const colors = categoryColors[button.category];
            if (colors) {
                const { boxColor } = colors;
                btnElement.style.backgroundColor = boxColor;
            }
        });
    }
});
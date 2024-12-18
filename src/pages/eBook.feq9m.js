import wixData from 'wix-data';
import wixWindowFrontend from 'wix-window-frontend';

let categoriaAtiva = "";
let restricaoAtiva = "";

$w('#text59').html = '<h1 class="font_0 wixui-rich-text__text" style="font-size: auto;line-height: 1em; color: transparent; background-image: linear-gradient(to right, #9F2803, #EC391A); -webkit-background-clip: text; background-clip: text"><span style="font-size: auto;" class="wixui-rich-text__text"><span style="font-weight: bold;" class="wixui-rich-text__text">Receitas Práticas para uma Vida Melhor</span></span></h1>';

$w.onReady(function() {
    if (wixWindowFrontend.formFactor === "Desktop") {
        $w('#dropdownCategoria').hide();
        $w('#dropdownRestricao').hide();

        $w("#repeater6").onItemReady(($item, itemData) => {
            $item("#descricaoBlog").text = itemData.modoDePreparo.length > 56 ? itemData.modoDePreparo.substring(0, 56) + "..." : itemData.modoDePreparo;
        });

        const categorias = [
            { id: "cafeManhaFilter", category: "Café da Manhã" },
            { id: "lanchesIntermediarioFilter", category: "Lanche Intermediário" },
            { id: "preTreinoFilter", category: "Pré-treino" },
            { id: "jantarFilter", category: "Jantar" },
        ];

        categorias.forEach(button => {
            $w(`#${button.id}`).onClick(() => {
                filtrarCategoria(button.category);
                mostrarFiltroCategoria();
            });
        });

        const restricoes = [
            { id: "vegetarianoFilter", restrition: "Vegetariano" },
            { id: "semGlutenFilter", restrition: "Sem Glúten" },
            { id: "semLactoseFilter", restrition: "Sem Lactose" },
        ];

        restricoes.forEach(button => {
            $w(`#${button.id}`).onClick(() => {
                filtrarRestricao(button.restrition);
                mostrarFiltroRestricao();
            });
        });

        $w("#limparFiltroCategoria").onClick(() => {
            limparFiltros();
            ocultarFiltroCategoria();
        });

        $w("#limparFiltroRestricao").onClick(() => {
            limparFiltros();
            ocultarFiltroRestricao();
        });
    }

    if (wixWindowFrontend.formFactor === "Mobile") {
        $w("#dropdownCategoria").show();
        $w("#dropdownRestricao").show();
            
        const dropdownCategoryItems = [
            { label: "Todas Receitas", value: "Todas Receitas" },
            { label: "Café da Manhã", value: "Café da Manhã" },
            { label: "Lanches Intermediários", value: "Lanches Intermediários" },
            { label: "Pré-treino", value: "Pré-treino" },
            { label: "Jantar", value: "Jantar" }
        ];

        $w("#dropdownCategoria").options = dropdownCategoryItems;
        $w("#dropdownCategoria").onChange((event) => {
            const selectedCategory = event.target.value;
            if (selectedCategory === "Todas Receitas") {
                $w("#dataset1").setFilter(wixData.filter());
                $w("#dataset1").refresh();
            } else {
                filtrarCategoria(selectedCategory);
            }
        });

        const dropdownRestritionItems = [
            { label: "Sem Restrição", value: "Sem Restrição" },
            { label: "Vegetariano", value: "Vegetariano" },
            { label: "Sem glúten", value: "Sem glúten" },
            { label: "Sem lactose", value: "Sem lactose" }
        ];

        $w("#dropdownRestricao").options = dropdownRestritionItems;
        $w("#dropdownRestricao").onChange((event) => {
            const selectedCategory = event.target.value;
            if (selectedCategory === "Sem Restrição") {
                $w("#dataset1").setFilter(wixData.filter());
                $w("#dataset1").refresh();
            } else {
                filtrarRestricao(selectedCategory);
            }
        });
    }

    $w("#buscaFiltro").onInput((event) => {
        const searchText = event.target.value.toLowerCase().trim();
        filtrarTexto(searchText);
    });

    function filtrarTexto(searchText) {
        $w("#dataset1").setFilter(
            wixData.filter()
            .contains("titulo", searchText)
            .or(wixData.filter().contains("categoria", searchText))
            .or(wixData.filter().contains("restricao", searchText))
            .or(wixData.filter().contains("ingredientes", searchText))
            .or(wixData.filter().contains("modoDePreparo", searchText))
            .or(wixData.filter().contains("conteudo", searchText))
        );
        $w("#dataset1").refresh();
    }

    function filtrarCategoria(category) {
        if (restricaoAtiva !== "") {
            filtrarCategoriaRestricao(category, restricaoAtiva);
        } else {
            $w("#dataset1").setFilter(
                wixData.filter()
                .eq("categoria", category)
            );
            $w("#dataset1").refresh();
            categoriaAtiva = category;
        }
    }

    function filtrarRestricao(restrition) {
        if (categoriaAtiva !== "") {
            filtrarCategoriaRestricao(restrition, categoriaAtiva);
        } else {
            $w('#dataset1').setFilter(
                wixData.filter()
                .eq("restricao", restrition)
            );
            $w('#dataset1').refresh();
            restricaoAtiva = restrition;
        }
    }

    function filtrarCategoriaRestricao(category, restricao) {
        $w("#dataset1").setFilter(
            wixData.filter().eq("categoria", category)
            .and(wixData.filter().eq("restricao", restricao))
        );
        $w("#dataset1").refresh();
        categoriaAtiva = category;
        restricaoAtiva = restricao;
    }

    function limparFiltros() {
        $w("#dataset1").setFilter(wixData.filter());
        $w("#dataset1").refresh();
        categoriaAtiva = "";
        restricaoAtiva = "";
    }

    function mostrarFiltroCategoria() {
        $w("#txtFiltro").show();
        $w("#limparFiltroCategoria").show();
    }

    function mostrarFiltroRestricao() {
        $w("#txtFiltro").show();
        $w("#limparFiltroRestricao").show();
    }

    function ocultarFiltroCategoria() {
        $w("#limparFiltroCategoria").hide();
        filtroVisivel();
    }

    function ocultarFiltroRestricao() {
        $w("#limparFiltroRestricao").hide();
        filtroVisivel();
    }

    function filtroVisivel() {
        const categoriaOculta = $w("#limparFiltroCategoria").collapsed;
        const restricaoOculta = $w("#limparFiltroRestricao").collapsed;
        
        if (categoriaOculta && restricaoOculta) {
            $w("#txtFiltro").collapse();
        } else {
            $w("#txtFiltro").expand();
        }
    }

    function atualizarContagemFiltros() {
        const categorias = ["Café da Manhã", "Lanche Intermediário", "Pré-treino", "Jantar"];
        const restricao = ["Vegetariano", "Sem Glúten", "Sem Lactose", ""];
        const contagem = {};

        categorias.forEach(item => {
            wixData.query("Receitas")
            .eq("categoria", item)
            .count()
            .then((quantidade) => {
                contagem[item] = quantidade;
                atualizarContagemTela(contagem);
            })
        });

        restricao.forEach(item => {
            wixData.query("Receitas")
            .eq("restricao", item)
            .count()
            .then((quantidade) => {
                contagem[item] = quantidade;
                atualizarContagemTela(contagem);
            })
        });
    }
    atualizarContagemFiltros();

    function atualizarContagemTela(contagem) {
        $w("#numberCafeManhaFilter").text = contagem["Café da Manhã"] !== undefined ? contagem["Café da Manhã"].toString() : "0";
        $w("#numberLanchesIntermediarioFilter").text = contagem["Lanche Intermediário"] !== undefined ? contagem["Lanche Intermediário"].toString() : "0";
        $w("#numberPreTreinoFilter").text = contagem["Pré-treino"] !== undefined ? contagem["Pré-treino"].toString() : "0";
        $w("#numberJantarFilter").text = contagem["Jantar"] !== undefined ? contagem["Jantar"].toString() : "0";
        $w("#numberVegetarianoFilter").text = contagem["Vegetariano"] !== undefined ? contagem["Vegetariano"].toString() : "0";
        $w("#numberSemGlutenFilter").text = contagem["Sem Glúten"] !== undefined ? contagem["Sem Glúten"].toString() : "0";
        $w("#numberSemLactoseFilter").text = contagem["Sem Lactose"] !== undefined ? contagem["Sem Lactose"].toString() : "0";
    }
});
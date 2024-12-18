import wixData from 'wix-data';
import wixWindowFrontend from 'wix-window-frontend';
import { differenceInDays } from "date-fns";

$w.onReady(function () {
    $w('#text59').html = '<h1 class="font_0 wixui-rich-text__text" style="font-size: auto; line-height: 1em; color: transparent; background-image: linear-gradient(to right, #9F2803, #EC391A); -webkit-background-clip: text; background-clip: text"><span style="font-size: auto;" class="wixui-rich-text__text"><span style="font-weight: bold;" class="wixui-rich-text__text">Nutrir, Sentir, Cuidar e Transformar</span></span></h1>';
    $w('#text88').html = '<h2 class="font_2 wixui-rich-text__text" style="text-align: center; line-height: 1em; font-size: auto; color: transparent; background-image: linear-gradient(to right, #9F2803, #EC391A); -webkit-background-clip: text; background-clip: text"><span style="font-weight: bold;" class="wixui-rich-text__text">Transforme seu corpo</span></h2>';
    $w('#text89').html = '<h2 class="font_2 wixui-rich-text__text" style="line-height: 1em; font-size: auto; color: transparent; background-image: linear-gradient(to right, #9F2803, #EC391A); -webkit-background-clip: text; background-clip: text"><span style="font-weight: bold;" class="wixui-rich-text__text">Géssica Carvalho</span></h2>';
    $w('#text90').html = '<h2 class="font_2 wixui-rich-text__text" style="line-height: 1em; font-size: auto; color: transparent; background-image: linear-gradient(to right, #9F2803, #EC391A); -webkit-background-clip: text; background-clip: text"><span style="font-weight: bold;" class="wixui-rich-text__text">Conteúdo para quem tem fome de praticidade</span></h2>';
    $w('#text91').html = '<h2 class="font_2 wixui-rich-text__text" style="line-height: 1em; font-size: auto; color: transparent; background-image: linear-gradient(to right, #9F2803, #EC391A); -webkit-background-clip: text; background-clip: text"><span style="font-weight: bold;" class="wixui-rich-text__text">Toda jornada é mais leve quando compartilhada</span></h2>';
    $w('#text101').html = '<h2 class="font_2 wixui-rich-text__text" style="line-height: 1em; font-size: auto; color: transparent; background-image: linear-gradient(to right, #9F2803, #EC391A); -webkit-background-clip: text; background-clip: text"><span style="font-weight: bold;" class="wixui-rich-text__text">Confira o que estão falando sobre nós</span></h2>';
    $w('#text92').html = '<h2 class="font_2 wixui-rich-text__text" style="line-height: 1em; font-size: auto; color: transparent; background-image: linear-gradient(to right, #9F2803, #EC391A); -webkit-background-clip: text; background-clip: text"><span style="font-weight: bold;" class="wixui-rich-text__text">Comece a melhorar o seu estilo de vida</span></h2>';
    $w('#text93').html = '<h2 class="font_2 wixui-rich-text__text" style="line-height: 1em; font-size: auto; color: transparent; background-image: linear-gradient(to right, #9F2803, #EC391A); -webkit-background-clip: text; background-clip: text"><span style="font-weight: bold;" class="wixui-rich-text__text">Fique atualizado</span></h2>';

    const satisfacao = $w("#satisfacao");
    const comunidade = $w("#comunidade");
    const clientes = $w("#clientes");
    const anos = $w("#vidas");

    let satisfacaoValue = 0;
    let comunidadeValue = 0;
    let clientesValue = 0;
    let vidasValue = 0;

    const intervaloSatisfacao = 100;
    const intervaloComunidade = 130;
    const intervaloClientes = 6;
    const intervaloVidas = 250;

    function aumentarSatisfacao() {
        satisfacaoValue++;
        satisfacao.text = satisfacaoValue.toString();
        if (satisfacaoValue >= 100) {
            clearInterval(satisfacaoID);
        }
    }

    function aumentarComunidade() {
        comunidadeValue += intervaloComunidade;
        comunidade.text = comunidadeValue.toLocaleString();
        if (comunidadeValue >= 13000) {
            clearInterval(comunidadeID);
        }
    }

    function aumentarClientes() {
        clientesValue += intervaloClientes;
        clientes.text = clientesValue.toString();
        if (clientesValue >= 600) {
            clearInterval(clientesID);
        }
    }

    function aumentarAnos() {
        vidasValue += intervaloVidas;
        anos.text = vidasValue.toLocaleString();
        if (vidasValue >= 25000) {
            clearInterval(vidasID);
        }
    }
    const satisfacaoID = setInterval(aumentarSatisfacao, intervaloSatisfacao);
    const comunidadeID = setInterval(aumentarComunidade, intervaloSatisfacao);
    const clientesID = setInterval(aumentarClientes, intervaloSatisfacao);
    const vidasID = setInterval(aumentarAnos, intervaloSatisfacao);

    wixData.query("Blog")
    .eq("categoria", "Conhecendo Alimentos")
    .find()
    .then(results => {
        $w("#imagemBlog1").src = results.items[0].imagem;
        $w("#tituloBlog1").text = results.items[0].titulo.substring(0,34) + "...";
        $w("#descricaoBlog1").text = results.items[0].conteudo.substring(0,140) + "...";
        $w("#buttonBlog1").link = "/blog/" + results.items[0].urlAmigavel;
    });

    wixData.query("Blog")
    .eq("categoria", "Dicas & Ideias")
    .find()
    .then(results => {
        $w("#imagemBlog2").src = results.items[0].imagem;
        $w("#tituloBlog2").text = results.items[0].titulo.substring(0,34) + "...";
        $w("#descricaoBlog2").text = results.items[0].conteudo.substring(0,85) + "...";
        $w("#buttonBlog2").link = "/blog/" + results.items[0].urlAmigavel;
    });

    wixData.query("Blog")
    .eq("categoria", "Motivação & Saúde Mental")
    .find()
    .then(results => {
        $w("#imagemBlog3").src = results.items[0].imagem;
        $w("#tituloBlog3").text = results.items[0].titulo.substring(0,34) + "...";
        $w("#descricaoBlog3").text = results.items[0].conteudo.substring(0,85) + "...";
        $w("#buttonBlog3").link = "/blog/" + results.items[0].urlAmigavel;
    });

    if (wixWindowFrontend.formFactor === "Mobile") {
        wixData.query("Blog")
        .eq("categoria", "Conhecendo Alimentos")
        .find()
        .then(results => {
            $w("#imagemBlog1").src = results.items[0].imagem;
            $w("#tituloBlog1").text = results.items[0].titulo.substring(0,34) + "...";
            $w("#descricaoBlog1").text = results.items[0].conteudo.substring(0,85) + "...";
            $w("#buttonBlog1").link = "/blog/" + results.items[0].urlAmigavel;
        });
    
        wixData.query("Blog")
        .eq("categoria", "Dicas & Ideias")
        .find()
        .then(results => {
            $w("#mobileImage2").src = results.items[0].imagem;
            $w("#tituloBlog2").text = results.items[0].titulo.substring(0,34) + "...";
            $w("#descricaoBlog2").text = results.items[0].conteudo.substring(0,85) + "...";
            $w("#buttonBlog2").link = "/blog/" + results.items[0].urlAmigavel;
        });

        wixData.query("Blog")
        .eq("categoria", "Motivação & Saúde Mental")
        .find()
        .then(results => {
            $w("#mobileImage3").src = results.items[0].imagem;
            $w("#tituloBlog3").text = results.items[0].titulo.substring(0,34) + "...";
            $w("#descricaoBlog3").text = results.items[0].conteudo.substring(0,85) + "...";
            $w("#buttonBlog3").link = "/blog/" + results.items[0].urlAmigavel;
        });
    }

    let allItems = [];
    let currentIndex = 0;
    let itemsPerPage = wixWindowFrontend.formFactor === "Mobile" ? 1 : 4;
    let intervalId;
    let totalPages = 0;
    let progressBarValue = 1;
    $w('#progressBar1').value = 1;

    wixData.query('Avaliacoes')
    .find()
    .then(results => {
        allItems = results.items;
        showItems();
        startAutoSlide();
        totalPages = Math.ceil(allItems.length / itemsPerPage);
        $w('#progressBar1').targetValue = totalPages;
    }) .catch (error => {
        console.error(error)
    });

    function showItems() {
        const startIndex = currentIndex % allItems.length;
        let itemsToShow = allItems.slice(startIndex, startIndex + itemsPerPage);

        if (itemsToShow.length < itemsPerPage) {
            itemsToShow = itemsToShow.concat(allItems.slice(0, itemsPerPage - itemsToShow.length));
        }
        $w('#repeater5').data = itemsToShow;
    }

    function nextSlide() {
        currentIndex++;
        showItems();
        progressBarValue++;
        if (progressBarValue > totalPages) {
            progressBarValue = 1;
        }
        $w('#progressBar1').value = progressBarValue;
    }

    function startAutoSlide() {
        intervalId = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    $w('#repeater5').onMouseIn(() => {
        stopAutoSlide();
    });

    $w('#repeater5').onMouseOut(() => {
        startAutoSlide();
    });

    $w('#repeater5').onItemReady(($item, itemData) => {
        const commentDate = itemData.date;
        const currentDate = new Date();
        const daysDifference = differenceInDays(currentDate, commentDate);

        let formattedDate;
        if (daysDifference === 0) {
            formattedDate = "Hoje";
        } else if (daysDifference === 1) {
            formattedDate = "Ontem";
        } else if (daysDifference <= 7) {
            formattedDate = `1 semana atrás`;
        } else if (daysDifference <= 14) {
            formattedDate = '2 semanas atrás';
        } else if (daysDifference <= 21) {
            formattedDate = '3 semanas atrás';
        } else if (daysDifference <= 30) {
            formattedDate = '1 mês atrás';
        } else if (daysDifference <= 60) {
            formattedDate = '2 meses atrás';
        } else if (daysDifference <= 90) {
            formattedDate = '3 meses atrás';
        } else if (daysDifference <= 120) {
            formattedDate = '4 meses atrás';
        } else if (daysDifference <= 150) {
            formattedDate = '5 meses atrás';
        } else if (daysDifference <= 180) {
            formattedDate = '6 meses atrás';
        } else {
            formattedDate = 'Há mais de 6 meses';
        }
        $item('#text103').text = formattedDate;
    });
});
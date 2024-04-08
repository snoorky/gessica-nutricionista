import wixLocation from 'wix-location';
import wixWindow from 'wix-window';

$w('#text93').html = '<h2 class="font_2 wixui-rich-text__text" style="line-height: 1em; font-size: auto; color: transparent; background-image: linear-gradient(to right, #9F2803, #EC391A); -webkit-background-clip: text; background-clip: text"><span style="font-weight: bold;" class="wixui-rich-text__text">Veja mais artigos de outras categorias</span></h2>';

$w("#dynamicDataset").onReady(() => {
    let itemData = $w("#dynamicDataset").getCurrentItem();
    let viewCount = itemData.visualizacoes || 0;
    viewCount++;

    $w("#dynamicDataset").setFieldValue("visualizacoes", viewCount);
    $w("#dynamicDataset").save()
    .then(() => {
        let mensagemVisualizacao = "";
            
        if (viewCount === 0) {
            mensagemVisualizacao = "Nenhuma visualização";
        } else if (viewCount === 1) {
            mensagemVisualizacao = "1 visualização";
        } else {
            mensagemVisualizacao = `${viewCount} visualizações`;
        }
        $w('#viewsPage').text = mensagemVisualizacao;
    })
    .catch((err) => {
        console.error("Erro ao salvar visualizações:", err);
    });
});

$w.onReady(function () {
    $w("#dynamicDataset").onReady(() => {
        const item = $w("#dynamicDataset").getCurrentItem();
        if (item) {
            const categoria = item.categoria;
            const titulo = item.titulo;

            switch (categoria) {
                case "Conhecendo Alimentos":
                    $w('#text104').html = `<h1 class="font_0 wixui-rich-text__text" style="font-size:64px;line-height:1em; color: #00A3FF;"><span style="font-size:64px;" class="wixui-rich-text__text"><span style="font-weight:bold;" class="wixui-rich-text__text">${titulo}</span></span></h1>`;
                    break;
                case "Dicas & Ideias":
                    $w('#text104').html = `<h1 class="font_0 wixui-rich-text__text" style="font-size:64px;line-height:1em; color: #D300C5;"><span style="font-size:64px;" class="wixui-rich-text__text"><span style="font-weight:bold;" class="wixui-rich-text__text">${titulo}</span></span></h1>`;
                    break;
                case "Motivação & Saúde Mental":
                    $w('#text104').html = `<h1 class="font_0 wixui-rich-text__text" style="font-size:64px;line-height:1em; color: #7638FA;"><span style="font-size:64px;" class="wixui-rich-text__text"><span style="font-weight:bold;" class="wixui-rich-text__text">${titulo}</span></span></h1>`;
                    break;
                case "O Corpo Fala":
                    $w('#text104').html = `<h1 class="font_0 wixui-rich-text__text" style="font-size:64px;line-height:1em; color: #FF0069;"><span style="font-size:64px;" class="wixui-rich-text__text"><span style="font-weight:bold;" class="wixui-rich-text__text">${titulo}</span></span></h1>`;
                    break;
                case "Performance Esportiva":
                    $w('#text104').html = `<h1 class="font_0 wixui-rich-text__text" style="font-size:64px;line-height:1em; color: #FF7A00;"><span style="font-size:64px;" class="wixui-rich-text__text"><span style="font-weight:bold;" class="wixui-rich-text__text">${titulo}</span></span></h1>`;
                    break;
                default:
                    $w('#text104').html = `<h1 class="font_0 wixui-rich-text__text" style="font-size:64px;line-height:1em; color: #000000;"><span style="font-size:64px;" class="wixui-rich-text__text"><span style="font-weight:bold;" class="wixui-rich-text__text">${titulo}</span></span></h1>`;
            }
            $w("#button5").link = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(wixLocation.url)}`;
            $w("#button6").link = `https://twitter.com/intent/tweet?text=${encodeURIComponent(wixLocation.url)}`;
            $w("#button7").link = `mailto:?body=${encodeURIComponent(wixLocation.url)}`;
            $w("#button8").link = `https://api.whatsapp.com/send?text=*${encodeURIComponent(wixLocation.url)}`;
            $w("#button9").onClick(() => { const url = wixLocation.url; wixWindow.copyToClipboard(url) });
            $w("#mobileButton1").link = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(wixLocation.url)}`;
            $w("#mobileButton2").link = `https://twitter.com/intent/tweet?text=${encodeURIComponent(wixLocation.url)}`;
            $w("#mobileButton3").link = `mailto:?body=${encodeURIComponent(wixLocation.url)}`;
            $w("#mobileButton4").link = `https://api.whatsapp.com/send?text=*${encodeURIComponent(wixLocation.url)}`;
            $w("#mobileButton5").onClick(() => { const url = wixLocation.url; wixWindow.copyToClipboard(url) });
        }
    });
});

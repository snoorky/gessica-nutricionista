import wixLocation from 'wix-location';
import wixWindow from 'wix-window';

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
	$w('#dynamicDataset').onReady(() => {
		const item = $w("#dynamicDataset").getCurrentItem();
		const titulo = item.titulo;
		const ingredientes = item.ingredientes;

		$w('#txtTitulo').html = `<h1 class="font_0 wixui-rich-text__text" style="font-size:64px;line-height:1em; color: transparent; background-image: linear-gradient(to right, #9F2803, #EC391A); -webkit-background-clip: text; background-clip: text"><span style="font-size:64px;" class="wixui-rich-text__text"><span style="font-weight:bold;" class="wixui-rich-text__text">${titulo}</span></span></h1>`;
		$w('#text93').html = '<h2 class="font_2 wixui-rich-text__text" style="line-height:1em; font-size:40px; color: transparent; background-image: linear-gradient(to right, #9F2803, #EC391A); -webkit-background-clip: text; background-clip: text"><span style="font-weight:bold;" class="wixui-rich-text__text">Ingredientes</span></h2>';
		$w('#text94').html = '<h2 class="font_2 wixui-rich-text__text" style="line-height:1em; font-size:40px; color: transparent; background-image: linear-gradient(to right, #9F2803, #EC391A); -webkit-background-clip: text; background-clip: text"><span style="font-weight:bold;" class="wixui-rich-text__text">Modo de Preparo</span></h2>';

		if (!ingredientes || ingredientes.trim() === "") {
			$w('#text93').collapse();
			$w('#text62').collapse();
		}
	})
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
});
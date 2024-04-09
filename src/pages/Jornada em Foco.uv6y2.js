import wixWindowFrontend from 'wix-window-frontend';

$w.onReady(function () {
    $w('#text125').html = '<h1 class="font_0 wixui-rich-text__text" style="font-size: 240px; line-height: 1em; color: transparent; background-image: linear-gradient(to right, #9F2803, #EC391A); -webkit-background-clip: text; background-clip: text"><span style="font-size: auto;" class="wixui-rich-text__text"><span style="font-family: wfont_e43bdd_b91e947f0c3a4a60801f61b2db0a2b96,wf_b91e947f0c3a4a60801f61b2d,orig_sora_extrabold;" class="wixui-rich-text__text"><span style="font-weight: bold;" class="wixui-rich-text__text">FOCO</span></span></span></h1>';
    $w('#text89').html = '<h2 class="font_2 wixui-rich-text__text" style="font-size: auto; line-height: 1.2em; color: transparent; background-image: linear-gradient(to right, #9F2803, #EC391A); -webkit-background-clip: text; background-clip: text"><span style="font-size: auto;" class="wixui-rich-text__text"><span style="font-weight: bold;" class="wixui-rich-text__text">SERÃO 21 DIAS DE ACOMPANHAMENTO EM GRUPO NO WHATSAPP</span></span></h2>';
    $w('#text90').html = '<h2 class="font_2 wixui-rich-text__text" style="line-height: 1.2em; font-size: auto; color: transparent; background-image: linear-gradient(to right, #9F2803, #EC391A); -webkit-background-clip: text; background-clip: text"><span style="font-weight: bold;" class="wixui-rich-text__text">Esqueça o medo de não conseguir seguir o plano alimentar !!</span></h2>';

    if (wixWindowFrontend.formFactor === "Mobile") {
        $w('#text125').html = '<h1 class="font_0 wixui-rich-text__text" style="font-size: 90px; text-align: center; line-height: 1em; color: transparent; background-image: linear-gradient(to right, #9F2803, #EC391A); -webkit-background-clip: text; background-clip: text"><span style="font-size: auto;" class="wixui-rich-text__text"><span style="font-family: wfont_e43bdd_b91e947f0c3a4a60801f61b2db0a2b96,wf_b91e947f0c3a4a60801f61b2d,orig_sora_extrabold;" class="wixui-rich-text__text"><span style="font-weight: bold;" class="wixui-rich-text__text">FOCO</span></span></span></h1>';

        $w("#image65").show();
        $w("#image66").hide();
        $w("#image67").hide();

        setInterval(() => {
            if ($w("#image65").visible) {
                $w("#image65").hide();
                $w("#image66").show();
                $w("#image67").hide();
            } else if ($w("#image66").visible) {
                $w("#image65").hide();
                $w("#image66").hide();
                $w("#image67").show();
            } else {
                $w("#image65").show();
                $w("#image66").hide();
                $w("#image67").hide();
            }
        }, 2000);
    }
});
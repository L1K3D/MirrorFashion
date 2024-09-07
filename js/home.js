function validaBusca() {

    if (document.querySelector('#q').value == '') {

        alert('Não podia ter deixado em branco a busca!');
        return false;

    }
}

// fazendo a associação da função com o evento
document.querySelector('#form-busca').onsubmit = validaBusca;

var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;

function trocaBanner() {

    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.destaque img').src = banners[bannerAtual];

}

setInterval(trocaBanner, 4000);
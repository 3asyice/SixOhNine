function saveToWayback() {
  var e = document.getElementById("urlInput").value;
  e ? (e = "https://web.archive.org/save/" + encodeURIComponent(e), window.open(e, "_blank")) : alert("Por favor, insira uma URL válida.")
}

function filterItems() {
  const t = document.querySelector(".search-input").value.toLowerCase();
  document.querySelectorAll(".link-item").forEach(e => {
    var s = e.querySelector("a").textContent.toLowerCase(),
      a = e.querySelector(".date").textContent.toLowerCase(),
      i = e.querySelector("hr");
    s.includes(t) || a.includes(t) ? (e.style.display = "", i.style.display = "") : (e.style.display = "none", i.style.display = "none")
  })
}
const linkstwentytwentyfour = document.getElementById("linksScripted").innerHTML = `<div id="links">





<div class="link-item">
<a href="https://web.archive.org/web/20250611015646/https://3asyice.github.io/Spck-Test/"/>004 Archives/</a><p class="date">jun 11, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://drive.google.com/drive/folders/1pk5NaqoPW2afinGSfSPeetL8qc4Rv8P8"/>final destination 1-5/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250605012236/https://escola25dejulho.com.br/info/cpm.php"/>cpm 25 de julho/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://3asyice.github.io/SixOhNine/script/black-news/Soldado-atropelado-por-advogada-enfrenta-sindic%C3%A2ncia.html"/>sindicância carvalho/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250605011818/https://3asyice.github.io/SixOhNine/script/black-news/Coronel-Soares-expulsa-Carvalho-da%20B-ADM-GU-SM.html"/>expulso da badmgusm/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250605011729/https://3asyice.github.io/SixOhNine/script/black-news/Suic%C3%ADdio-na-B-ADM-GU-SM.html"/>suicídio de soldado/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250605011216/https://3asyice.github.io/SixOhNine/script/cv/camila-dalcol-da-silva.html"/>advogada camila/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250605010216/https://3asyice.github.io/SixOhNine/script/instrucao/ordem-das-pecas-do-fuzil-7-62.html"/>peças do fuzil 7,62/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250605005739/https://3asyice.github.io/SixOhNine/script/instrucao/ordem_unida.html"/>ordem unida/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250605005453/https://3asyice.github.io/SixOhNine/script/instrucao/duque_de_caxias.html"/>duque de caxias/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250605005202/https://3asyice.github.io/SixOhNine/script/instrucao/principios_e_valores.html"/>principios e valores/</a><p class="date">jun 05, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250604223622/https://3asyice.github.io/SixOhNine/script/cv/luciano-de-souza.html"/>fotógrafo luciano/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250604233059/https://3asyice.github.io/SixOhNine/assets/txt/conversa.txt"/>2025 conversa.txt/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604231630/https://3asyice.github.io/SixOhNine/script/sd/752.html"/>752 josé gabriel/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604231442/https://3asyice.github.io/SixOhNine/script/sd/640.html"/>640lucas van der sand/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604231255/https://3asyice.github.io/SixOhNine/script/sd/639.html"/>639 arthur keller/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604231113/https://3asyice.github.io/SixOhNine/script/sd/638.html"/>638 juliano oliveira/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604230829/https://3asyice.github.io/SixOhNine/script/sd/637.html"/>637 igor silva santos/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604230606/https://3asyice.github.io/SixOhNine/script/sd/636.html"/>636 emanuel pereira/</a><p class="date">jun 04, 2025 </p> <hr> </div> 
<div class="link-item">
<a href="https://web.archive.org/web/20250604230339/https://3asyice.github.io/SixOhNine/script/sd/635.html"/>635 carlos eduardo/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604225322/https://3asyice.github.io/SixOhNine/script/sd/634.html"/>634 gabriel de vargas/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604225102/https://3asyice.github.io/SixOhNine/script/sd/633.html"/>633 vagner coelho/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604224925/https://3asyice.github.io/SixOhNine/script/sd/632.html"/>632 cassio alberto/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604224729/https://3asyice.github.io/SixOhNine/script/sd/631.html"/>631 jeremias fagundes/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604224343/https://3asyice.github.io/SixOhNine/script/sd/630.html"/>630 matheus machado/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604224033/https://3asyice.github.io/SixOhNine/script/sd/629.html"/>629 Cirineu Magalhães/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604223820/https://3asyice.github.io/SixOhNine/script/sd/627.html"/>627 joão vitor lemos/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604223319/https://3asyice.github.io/SixOhNine/script/sd/626.html"/>626 miguel xavier/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604222939/https://3asyice.github.io/SixOhNine/script/sd/625honig.html"/>625 leonardo hönig/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604222604/https://3asyice.github.io/SixOhNine/script/sd/624.html"/>624 alisson nesske/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604222246/https://3asyice.github.io/SixOhNine/script/sd/623.html"/>623 joão cardoso/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604221928/https://3asyice.github.io/SixOhNine/script/sd/622.html"/>622 charles preuss/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604221159/https://3asyice.github.io/SixOhNine/script/sd/621.html"/>621kainan zippenfeild/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604220929/https://3asyice.github.io/SixOhNine/script/sd/620.html"/>620 jeferson da silva/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604220707/https://3asyice.github.io/SixOhNine/script/sd/619.html"/>619 alisson zancan/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604215246/https://3asyice.github.io/SixOhNine/script/sd/618roger.html"/>618 luan roger/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604213332/https://3asyice.github.io/SixOhNine/script/sd/617.html"/>617 everton silvano/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604211640/https://3asyice.github.io/SixOhNine/script/sd/616.html"/>616 frederico gregori/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604211413/https://3asyice.github.io/SixOhNine/script/sd/615.html"/>615 ricardo bernardi/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604210958/https://3asyice.github.io/SixOhNine/script/sd/614.html"/>614 carlos teixeira/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604210751/https://3asyice.github.io/SixOhNine/script/sd/613.html"/>613 gabriel ebling/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604205831/https://3asyice.github.io/SixOhNine/script/sd/612.html"/>612 adrian gonçalves/</a><p class="date">jun 04, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250604205652/https://3asyice.github.io/SixOhNine/script/sd/611.html"/>611 carlos daniel/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250604205518/https://3asyice.github.io/SixOhNine/script/sd/610.html"/>610 lucas da rosa/</a><p class="date">jun 04, 2025</p><hr></div>



<div class="link-item">
<a style="text-transform:uppercase;font-weight:900;" href="https://web.archive.org/web/20250604203736/https://3asyice.github.io/SixOhNine/script/sd/609.html"/>609 Carvalho/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250604203538/https://3asyice.github.io/SixOhNine/script/sd/608.html"/>608 gustavo drescher/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250604203337/https://3asyice.github.io/SixOhNine/script/sd/607.html"/>607 Diniz Chimainski/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250604203010/https://3asyice.github.io/SixOhNine/script/sd/606.html"/>606 Micael Schumacher/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250604202744/https://3asyice.github.io/SixOhNine/script/sd/605.html"/>605 allan gabriel/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250604202417/https://3asyice.github.io/SixOhNine/script/sd/604.html"/>604 Richard rafael/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250604201720/https://3asyice.github.io/SixOhNine/script/sd/603.html"/>603 Guilherme Maidana/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250604201248/https://3asyice.github.io/SixOhNine/script/sd/602.html"/>602 samuel weber/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250604200937/https://3asyice.github.io/SixOhNine/script/sd/601.html"/>601 gabriel tassinari/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250604200544/https://3asyice.github.io/SixOhNine/script/sd/39.html"/>39 grégori forgerini/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250604200259/https://3asyice.github.io/SixOhNine/script/sd/37.html"/>37 augusto bergamnn/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250604200120/https://3asyice.github.io/SixOhNine/script/sd/03.html"/>03 gabriel azevedo/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250604195945/https://3asyice.github.io/SixOhNine/script/cel/soares.html"/>## everton soares bio/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250604194006/https://outraspalavras.net/outrasmidias/pioneiro-da-internet-brasileira-conta-como-se-vigia-a-rede/"/>backdoor e vigilância/</a><p class="date">jun 04, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250531193513/https://www.big-loser.site/M/Maio/Eterna%20Vigil%C3%A2ncia%20(Edward%20S_%20(Z-Library)"/>edward snowden.pdf/</a><p class="date">may 31, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250529175736/https://3asyice.github.io/Spck-Test/butterfly-effect"/>teoria do caos/</a><p class="date">may 29, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250529172715/https://www.big-loser.site/Caso/001"/>Caso 001/</a><p class="date">may 29, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250529172004/https://3asyice.github.io/Tapes/script/ep/11.html"/>Ep 11: A Expulsão/</a><p class="date">may 29, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250529171505/https://3asyice.github.io/Tapes/script/ep/10.html"/>Ep 10: A Alteração/</a><p class="date">may 29, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250529170535/https://3asyice.github.io/Tapes/script/ep/8.html"/>Ep 8: Incorporação/</a><p class="date">may 29, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250529165827/https://3asyice.github.io/Tapes/script/ep/7.html"/>Ep 7: O Campo/</a><p class="date">may 29, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://youtu.be/qZhD2cU0UOo?si=OJ_AZy7NqLPBwtb-"/>YouTube Link/</a><p class="date">may 29, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250520114123/https://3asyice.github.io/SixOhNine/script/sd/602.html"/>602 Weber/</a><p class="date">may 20, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250520113858/https://3asyice.github.io/SixOhNine/script/sd/601.html"/>601 Tassinari/</a><p class="date">may 20, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250511220143/https://www.big-loser.site/M/Maio/everton-conceicao-soares-profile.mp4"/>everton soares.mp4/</a><p class="date">may 11, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250511002501/https://noticias.stf.jus.br/postsnoticias/mandado-de-seguranca-pede-anulacao-de-acordo-entre-brasil-e-oea-sobre-morte-de-cadete/"/>morte de cadete/</a><p class="date">may 11, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250510122753/https://saopauloantiga.com.br/a-tragedia-do-cine-oberdan/?hl=en-US"/>tragédia cinema/</a><p class="date">may 10, 2025 </p> <hr> </div>

<div class="link-item">
<a href="https://web.archive.org/web/20250510122449/https://www.social.org.br/relatorio2001/relatorio003.htm?hl=en-US"/>Tortura Militar/</a><p class="date">may 10, 2025 </p> <hr> </div>
<div class="link-item">
<a style="text-transform:uppercase;" href="https://web.archive.org/web/20250509232434/https://3asyice.github.io/Tapes/script/ep/9.html"/>Ep 9: a dor do luto/</a><p class="date">may 09, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://archive.org/download/vid-20240825-wa-0000/vid-20240825-wa-0000_archive.torrent"/>acidente.torrent/</a><p class="date">apr 27, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250427013446/https://3asyice.github.io/Tapes/script/ep/4.html"/>ep 4: sindicância/</a><p class="date">apr 27, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250427013307/https://3asyice.github.io/Tapes/script/ep/3.html"/>ep 3: sd Isaias/</a><p class="date">apr 27, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250427013320/https://3asyice.github.io/Tapes/script/ep/2.html"/>ep 2: a mensagem/</a><p class="date">apr 27, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250427013338/https://3asyice.github.io/Tapes/script/ep/6.html"/>ep 6: plantão/</a><p class="date">apr 27, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250427013309/https://3asyice.github.io/Tapes/script/ep/5.html"/>ep 5: Internato/</a><p class="date">apr 27, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250427013253/https://3asyice.github.io/Tapes/script/category.html"/>609 - Categorias/</a><p class="date">apr 27, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250427013048/https://3asyice.github.io/Tapes/script/home.html"/>ep 1: decisão errada/</a><p class="date">apr 27, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250423200251/https://www.big-loser.site/A/Audio/FITA-10,-LADO-A.m4a"/>Fita 10 Lado A/</a><p class="date">apr 23, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250421115329/https://3asyice.github.io/Loja-doRoni/"/>Roni's Old Store/</a><p class="date">apr 21, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250421113527/https://3asyice.github.io/Birthday-2024/"/>Birthday Note/</a><p class="date">apr 21, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250420231731/https://3asyice.github.io/frontend_course/"/>html, css, js/</a><p class="date">apr 20, 2025 </p> <hr> </div>
<div class="link-item">
<a href="https://web.archive.org/web/20250420190604/https://3asyice.github.io/Spck-Test/"/>archived media 004/</a><p class="date">apr 20, 2025 </p> <hr> </div>
<div class="link-item">
             <a href="https://web.archive.org/web/20250420185859/https://3asyice.github.io/natal/"/>malditonatal origem/</a><p class="date">apr 20, 2025 </p> <hr> </div>
<div class="link-item">
             <a href="https://web.archive.org/web/20250419043752/https://www.ocafezinho.com/2024/07/22/exercito-brasileiro-insistente-em-nao-revelar-militares-envolvidos-em-carta-golpista/"/>Carta Golpista EB/</a><p class="date">apr 19, 2025 </p> <hr> </div>
<div class="link-item">
             <a href="https://web.archive.org/web/20250418172619/https://www.scielo.br/j/rbh/a/3B49LhDfNKhDKqVPZjvxY5R/"/>Gran Circus Tragedy/</a><p class="date">apr 18, 2025 </p> <hr> </div>
<div class="link-item">
             <a href="https://web.archive.org/web/20250405050541/https://ric.com.br/seguranca/acidentes/aluna-ufsm-decidiu-nao-embarcar-na-vespera-de-acidente/"> sorte ou premonição?/</a><p class="date">apr 05, 2025 </p> <hr> </div>
<div class="link-item">
             <a href="https://web.archive.org/web/20250405064854/https://www.big-loser.site/Caso/031"/>All Cassetes Fitas/</a><p class="date">apr 05, 2025 </p> <hr> </div>
<div class="link-item">
             <a href="https://web.archive.org/web/20250405045939/https://ric.com.br/seguranca/acidentes/veja-lista-nomes-vitimas-acidente-onibus-ufsm/">bus accident 7 death/</a><p class="date">apr 05, 2025 </p> <hr> </div>
<div class="link-item">
             <a href="https://web.archive.org/web/20250328081437/https://aventurasnahistoria.com.br/noticias/reportagem/perdida-no-oceano-trajetoria-de-bahia-bakari-unica-sobrevivente-de-um-terrivel-acidente-de-aviao.phtml"> Bahia Bakari_survivor/</a><p class="date"> mar 28, 2025 </p> <hr> </div>
<div class="link-item">
             <a href="https://web.archive.org/web/20250328075757/https://www.cnnbrasil.com.br/nacional/sudeste/sp/queda-de-aviao-relembre-cronologia-do-acidente-da-voepass-em-vinhedo-sp/">Voepass 2283/</a> <p class="date"> mar 28, 2025 </p> <hr> </div>
<div class="link-item">
             <a href="https://web.archive.org/web/20250328075304/https://cgn.inf.br/noticia/1773188/mae-de-vitima-do-voo-2283-critica-voepass-e-como-se-eles-matassem-nossos-familiares-outra-vez"> critica Voepass/</a><p class="date"> mar 28, 2025 </p> <hr> </div>
<div class="link-item">
             <a href="https://web.archive.org/web/20250328072720/https://manchetempo.uff.br/?p=2941">242 mortes Boate Kiss/</a> <p class="date"> mar 28, 2025 </p> <hr> </div>
<div class="link-item">
             <a href="https://web.archive.org/web/20250328072137/https://www.bbc.com/portuguese/articles/c89y43gvdl4o">503 dead gran circus/</a> <p class="date"> mar 28, 2025 </p> <hr> </div>
<div class="link-item">
             <a href="https://web.archive.org/web/20250325075854/https://www.big-loser.site/A/Audio/FITA-9,-LADO-A.opus">2:03 Fita 9 Lado a/</a> <p class="date"> mar 25, 2025 </p> <hr> </div> <div class="link-item">
<a href="https://web.archive.org/web/20250325075425/https://www.big-loser.site/A/Audio/FITA-8,-LADO-B.opus">0:59 Fita 8 Lado b/</a> <p class="date"> mar 25, 2025 </p> <hr> </div>
  <div class="link-item">
          <a href="https://web.archive.org/web/20250325075007/https://www.big-loser.site/A/Audio/FITA-8,-LADO-A.opus">1:59 Fita 8 Lado a/</a>
          <p class="date">mar 25, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a style="text-transform:uppercase;text-shadow:1px 0 0 rgba(18, 255, 0, 1);" href="https://web.archive.org/web/20250320094119/https://www.big-loser.site/Caso/100">BACK TO BLACK/</a>
          <p class="date">mar 20, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250319102007/https://www.big-loser.site/Caso/004">004 Archived Media/</a>
          <p class="date">mar 19, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250318124659/https://www.big-loser.site/A/Audio/FITA-7,-LADO-B.opus">10:58 Fita 7 Lado B/</a>
          <p class="date">mar 18, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250315131320/https://www.big-loser.site/A/Audio/FITA-7,-LADO-A.opus">8:12 Fita 7 Lado A/</a>
          <p class="date">mar 15, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250313093351/https://www.big-loser.site/Caso/070">609 butterfly/</a>
          <p class="date">mar 13, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250312203737/https://badmgusm.eb.mil.br/index.php/component/content/article?id=2298&">Licenciamento SD EP/</a>
          <p class="date">mar 12, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250312131355/https://www.big-loser.site/Caso/005">Camila Dalcol/</a>
          <p class="date">mar 12, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250312130354/https://www.big-loser.site/Project_Apocalypse/comandante">everton soares/</a>
          <p class="date">mar 12, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250312114500/https://www.big-loser.site/Project_Apocalypse/assedio">assédio 6bdainfbld/</a>
          <p class="date">mar 12, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250312112446/https://www.big-loser.site/Project_Apocalypse/expulso">expulsão - carvalho/</a>
          <p class="date">mar 12, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250312103040/https://www.big-loser.site/Project_Apocalypse/atropelamento">sd 609 carvalho/</a>
          <p class="date">mar 12, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250312093156/https://www.big-loser.site/Project_Apocalypse/suicide">614 sd teixeira/</a>
          <p class="date">mar 12, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250310232106/https://designculture.com.br/tipografia-para-web/">tipografia web²/</a>
          <p class="date">mar 10, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250310231418/https://productoversee.com/um-guia-completo-de-tipografia-para-a-web/">tipografia para web/</a>
          <p class="date">mar 10, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250310231032/https://rockcontent.com/br/blog/tipografia/">conceito tipografia/</a>
          <p class="date">mar 10, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250310230359/https://www.futuraexpress.com.br/blog/o-que-e-tipografia/">termo tipografia/</a>
          <p class="date">mar 10, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250310132256/https://www.big-loser.site/Caso/014">014 memorial/</a>
          <p class="date">mar 10, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250310084236/https://www.change.org/p/stop-army-from-taking-back-signing-bonuses-10-years-later-after-vets-completed-contracts">army steals signing/</a>
          <p class="date">mar 10, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250310062544/https://www.big-loser.site/Caso/004">004 Archived Media/</a>
          <p class="date">mar 10, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250310061904/https://www.big-loser.site/A/Audio/FITA-6,-LADO-B.m4a">13:57 Fita 6 Lado b/</a>
          <p class="date">mar 10, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250308234225/https://www.big-loser.site/M/May/cfc_2019_motivacao.mkv">29° bib²⁰¹⁹cfc.mkv/</a>
          <p class="date">mar 08, 2025 </p>
          <hr>
        </div>
        
        <div class="link-item">
          <a href="https://web.archive.org/web/20250308185226/https://www.big-loser.site/M/May/cfc_2019_motivation.mp4">29° bib²⁰¹⁹cfc.mp4/</a>
          <p class="date">mar 08, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250308185734/https://www.big-loser.site/Caso/004">004 Archived media/</a>
          <p class="date">mar 08, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250308175311/https://veja.abril.com.br/mundo/mais-de-70-mil-russos-morreram-lutando-na-ucrania-diz-levantamento">70mil russos mortos/</a>
          <p class="date">mar 08, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250308174549/https://www.big-loser.site/Project_Apocalypse/suicide">R.I.P 614 Teixeira/</a>
          <p class="date">mar 08, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250307155847/https://www.big-loser.site/A/Audio/FITA-6,-LADO-A.opus">21:06 Fita 6 Lado A/</a>
          <p class="date">mar 07, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250307162017/https://www.big-loser.site/Caso/img/helloNeo.gif">hello Neo.gif/</a>
          <p class="date">mar 07, 2025 </p>
          <hr>
        </div>
        
        <div class="link-item">
          <a href="https://web.archive.org/web/20250306020933/https://www.big-loser.site/Caso/004">004 archives/</a>
          <p class="date">mar 06, 2025 </p>
          <hr>
        </div> <div class="link-item">
        <a href="https://web.archive.org/web/20250306013305/https://www.big-loser.site/Caso/080TI.html">curso t.i./</a> <p class="date"> mar 06, 2025 </p> <hr>
          </div> <div class="link-item">
          <a href="https://web.archive.org/web/20250306013007/https://www.big-loser.site/Caso/080Aluno.html">Alunos T.I./</a> <p class="date"> mar 06, 2025 </p> <hr>
          </div> <div class="link-item">
          <a href="https://web.archive.org/web/20250306012825/https://www.big-loser.site/Caso/080">Gangsters de T.I./</a> <p class="date"> mar 06, 2025 </p> <hr>
          </div> <div class="link-item">
          <a href="https://web.archive.org/web/20250303005234/https://www.big-loser.site/M/Fev/plantao.txt">plantao.txt/</a> <p class="date"> mar 03, 2025 </p> <hr>
          </div> <div class="link-item">
          <a href="https://web.archive.org/web/20250303005031/https://www.big-loser.site/Caso/004">004 Archives/</a> <p class="date"> mar 03, 2025 </p> <hr>
          </div>

         <div class="link-item">
         <a href="https://web.archive.org/web/20250303003949/https://www.big-loser.site/A/Audio/FITA-5,-LADO-B.opus">13:18 Fita 5 Lado B/</a>
        <p class="date">mar 03, 2025 </p>
             <hr>
            </div>

       <div class="link-item">
          <a href="https://web.archive.org/web/20250302152958/https://www.big-loser.site/A/Audio/Fita-5,-Lado-A.opus">15:03 Fita 5 Lado A/</a>
            <p class="date">mar 02, 2025 </p>
                  <hr>
                </div>
                  
        <div class="link-item">
          <a href="https://web.archive.org/web/20250302153444/https://www.big-loser.site/A/Audio/FITA-4,-LADO-B.m4a">7:56 Fita 4 Lado B/</a>
              <p class="date">mar 02, 2025 </p>
                 <hr>
                  </div>


    <div class="link-item">
     <a href="https://web.archive.org/web/20250302152744/https://www.big-loser.site/A/Audio/FITA-4,-LADO-A.opus">5:02 Fita 4 Lado A/</a>
        <p class="date">mar 02, 2025 </p>
           <hr>
           </div>   

        <div class="link-item">
          <a href="https://web.archive.org/web/20250301032023/https://www.montedo.com.br/2024/10/31/familia-e-oab-contestam-versao-do-exercito-de-suicidio-de-soldado-em-quartel-do-rio/">suicídio sd vitor/</a>
          <p class="date">mar 01, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250301025023/https://www.big-loser.site/M/Fev/incorporacao.txt">incorporação.txt/</a>
          <p class="date">mar 01, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250301024833/https://www.big-loser.site/M/Fev/decisao_errada.txt">decisao_errada.txt/</a>
          <p class="date">mar 01, 2025 </p>
          <hr>
        </div>
        
        <div class="link-item">
          <a href="https://web.archive.org/web/20250301024655/https://www.big-loser.site/M/Fev/internato.txt">internato.txt/</a>
          <p class="date"> mar 01, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250301024124/https://www.big-loser.site/Caso/106">106 incorporacao/</a>
          <p class="date"> mar 01, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250301023707/https://www.big-loser.site/Caso/095">095 audio files/</a>
          <p class="date"> mar 01, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250301022959/https://www.big-loser.site/A/Audio/Mensagem.m4a">Mensagem.m4a/</a>
          <p class="date">Mar 01, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250301002826/https://www.saocarlosagora.com.br/regiao/seis-militares-suspeitos-de-torturar-soldado-sao-expulsos-do-exercito/179370/">tortura de sd/</a>
          <p class="date"> Mar 01, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250227193616/https://www.sociedademilitar.com.br/2025/02/militares-do-exercito-faz-relatos-chocantes-em-entrevista-sobre-suicidio-na-forca-denuncias-de-humilhacao-perseguicao-e-adoecimento-psicologico.html">relatos chocantes/</a>
          <p class="date"> Feb 27, 2025 </p>
          <hr>
        </div>
 <div class="link-item" >
                <a href="https://youtu.be/Gfvo3kMHoUs?si=39SJPFIcAq486Gdv">morte sd Vitor/</a> <p class="date"> Feb 27, 2025 </p> <hr>
                  </div>
  
          <div class="link-item">
          <a href="https://web.archive.org/web/20250227173247/https://noticias.r7.com/minas-gerais/mg-record/videos/familia-de-soldado-que-se-matou-em-quartel-do-exercito-diz-que-ele-sofria-humilhacoes-21022018/">suicídio sd pablo/</a>
          <p class="date"> Feb 27, 2025 </p>
          <hr>
        </div> <div class="link-item">
        <a href="https://web.archive.org/web/20250227174730/https://www.big-loser.site/M/Fev/pablo_soares.mp4"> sd pablo soares.mp4/</a> <p class="date"> Feb 27, 2025 </p>
        <hr>
          </div> <div class="link-item">
          <a href="https://web.archive.org/web/20250227172730/https://www1.folha.uol.com.br/fsp/brasil/fc22069814.htm">suicídio sd Weslley/</a> <p class ="date"> Feb 27, 2025 </p> <hr>
          </div>  <div class = "link-item">
          <a href="https://web.archive.org/web/20250227090800/https://badmgusm.eb.mil.br/index.php/galeria-dos-eternos-comandantes">badmgusm last cmt/</a> <p class ="date"> Feb 27, 2025 </p> <hr>
          </div> <div class = "link-item">
          <a href="https://web.archive.org/web/20250226193728/https://g1.globo.com/rs/rio-grande-do-sul/video/policial-militar-e-flagrado-agredindo-mulher-gravida-com-cassetete-13360745.ghtml">pm agride grávida/</a> <p class ="date"> Feb 26, 2025 </p> <hr>
          </div>
  
                  <div class="link-item">
          <a href="https://web.archive.org/web/20250226192512/https://noticias.uol.com.br/cotidiano/ultimas-noticias/2025/02/21/policial-agride-mulher-gravida-rs.htm">pm agride grávida/</a>
          <p class="date"> Feb 26, 2025 </p>
          <hr>
        </div>
                <div class="link-item">
          <a href="https://web.archive.org/web/20250226185730/https://www.big-loser.site/A/Audio/Audio_001">a decisão errada/</a>
          <p class="date"> Feb 26, 2025 </p>
          <hr>
        </div>

        <div class="link-item">
          <a href="https://web.archive.org/web/20250226182415/https://www.big-loser.site/Caso/004">004 archives/</a>
          <p class="date"> Feb 26, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250226181518/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date"> Feb 26, 2025 </p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250226055552/https://www.big-loser.site/Caso/053">053 falecimento/</a>
          <p class="date"> Feb 26, 2025 </p>
          <hr>
        </div>
        

        


        <div class="link-item">
          <a href="https://jack-sbraincancer.github.io/CHAT-ONLINE/frontend/index.html">chat online/</a>
          <p class="date">Feb 23, 2025</p>
          <hr>
        </div>
  

 <div class = "link-item">
          <a href="https://web.archive.org/web/20250221180205/https://www.big-loser.site/">big-loser.site/</a> <p class = "date"> Feb 21, 2025 </p> <hr>
          </div> <div class = "link-item">
          <a href="https://web.archive.org/web/20250220055600/https://www.big-loser.site/A/Feb/soldiers%20salary%20.pdf">sd salary.pdf/</a> <p class = "date"> Feb 20, 2025 </p> <hr>
          </div> <div class = "link-item">
          <a href="https://web.archive.org/web/20250220013715/https://www.big-loser.site/BADMGUSM.xlsx">sd salary.xlsx/</a> <p class = "date"> Feb 20, 2025 </p> <hr>
          </div>
           <div class="link-item">
           <a href="https://docs.google.com/document/d/1Efy3SJXIWxvfZS-2DAayph6DKpgwggCY/edit?usp=drivesdk&ouid=110305946732979825489&rtpof=true&sd=true">a recruit's story/</a>
           <p class="date">feb 16, 2025</p>
           <hr>
         </div>
         <div class="link-item">
   <a href="https://docs.google.com/document/d/1LJSJu4HxLEwiAy7bkEPqqC3SsH2C1lGA3pArmm2pVpc/edit?usp=drivesdk">police power abuse/</a>
   <p class="date">feb 16, 2025</p>
   <hr>
 </div>

                 <div class="link-item">
         <a href="https://web.archive.org/web/20250216171319/https://www.big-loser.site/Caso/004">archives 004/</a>
         <p class="date">Feb 16, 2025</p>
         <hr>
       </div>
       <div class="link-item">
          <a href="https://web.archive.org/web/20250216164225/https://www.big-loser.site/A/Audio/FITA-3,-LADO-B.opus">10:38 fita 3 lado b/</a>
          <p class="date">Feb 16, 2025</p>
          <hr>
        </div> 
       <div class="link-item">
          <a href="https://web.archive.org/web/20250216163930/https://www.big-loser.site/A/Audio/FITA-3,-LADO-A.opus">14:43 fita 3 lado a/</a>
          <p class="date">Feb 16, 2025</p>
          <hr>
        </div> 
        <div class="link-item">
          <a href="https://web.archive.org/web/20250216163513/https://www.big-loser.site/A/Audio/FITA-2,-LADO-B.m4a">4:10 fita 2, lado b/</a>
          <p class="date">Feb 16, 2025</p>
          <hr>
        </div>
        <div class="link-item">
  <a href="https://web.archive.org/web/20250216163326/https://www.big-loser.site/A/Audio/FITA-2,-LADO-A.m4a">1:22 fita 2, lado a/</a>
  <p class="date">Feb 16, 2025</p>
  <hr>
</div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250216163024/https://www.big-loser.site/A/Audio/FITA-1,-LADO-B.opus">2:08 fita 1, lado b/</a>
          <p class="date">Feb 16, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250216162814/https://www.big-loser.site/A/Audio/FITA%201,%20LADO%20A.opus">6:06 fita 1, lado a/</a>
          <p class="date">Feb 16, 2025</p>
          <hr>
        </div>
        
        <div class="link-item">
          <a href="https://web.archive.org/web/20250216144046/https://www.big-loser.site/M/Fev/Big%20Loser%20-%20Sd%20609%20Carvalho%20FITA%201,%20LADO%20A.m4a"> 6:06 fita 1, lado a/</a>
          <p class="date">Feb 16, 2025</p>
          <hr>
        </div>
        
        <div class="link-item">
          <a href="http://g7ejphhubv5idbbu3hb3wawrs5adw7tkx7yjabnf65xtzztgg4hcsqqd.onion/">ofc defcon site/</a>
          <p class="date">Feb 11, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250208032740/https://www.big-loser.site/Caso/004">Caso 004/</a>
          <p class="date">Feb 08, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250208025819/https://www.big-loser.site/">big loser.site/</a>
          <p class="date">Feb 08, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250201102618/https://www.big-loser.site/">big loser.site/</a>
          <p class="date">Feb 01, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250127170619/https://www.big-loser.site/">big loser.site/</a>
          <p class="date">Jan 27, 2025</p>
          <hr>
        </div>
        <div <div <div class="link-item">
          <a href="https://youtu.be/F9fflX-9wRA">big loser podcast/</a>
          <p class="date">Jan 19, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250125013140/https://www.big-loser.site/Caso/aeropass/VID-20240825-WA0000.mp4">Vídeo atropelamento/</a>
          <p class="date">Jan 19, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250118021045/https://www.big-loser.site/Caso/040">040 ocorrência/</a>
          <p class="date">Jan 18, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250114010510/https://www.big-loser.site/Project_Apocalypse/scherer">douglas Scherer/</a>
          <p class="date">Jan 14, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250110005911/https://www.big-loser.site/Caso/050">S0ar5s [project]/</a>
          <p class="date">Jan 10, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20250109232809/https://www.big-loser.site/Caso/033">033 RDE/</a>
          <p class="date">Jan 09, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20250109234242/https://www.big-loser.site/Project_Apocalypse/assedio">assédio alojamento/</a>
          <p class="date">Jan 09, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20250109233559/https://www.big-loser.site/Project_Apocalypse/atropelamento">atropelamento/</a>
          <p class="date">Jan 09, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20250109232651/https://www.big-loser.site/Project_Apocalypse/expulso">expulsão Carvalho/</a>
          <p class="date">Jan 09, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20250109232308/https://www.big-loser.site/Project_Apocalypse/suicide">Suicídio do sd 614/</a>
          <p class="date">Jan 09, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250106222448/https://www.poder360.com.br/poder-brasil/numero-de-pessoas-em-situacao-de-rua-aumenta-25-no-brasil/">situação de rua/</a>
          <p class="date">Jan 06, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20250103042712/https://www.big-loser.site/Caso/004">004rquives&copy;/</a>
          <p class="date">Jan 03, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250103042712/https://www.big-loser.site/Caso/004"> 004Archives&copy;/</a>
          <p class="date">Jan 03, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250103014950/https://blogatualidade.com/militar-morre-e-outros-tres-ficam-feridos-apos-acidente-em-atividade-dentro-de-quartel-em-santa-maria/">morte do sd breno/</a>
          <p class="date">Jan 03, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20250103013604/http://radaraltovale.com/noticia/noticias/soldado-de-fraiburgo-comete-suicidio-no-quartel-do-exercito-e-deixa-carta-de-despedida-51071">Wennigkamp suicide/</a>
          <p class="date">Jan 03, 2025</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241231005253/https://www.big-loser.site/Caso/014">014 - Memorial/</a>
          <p class="date">Dec 31, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241230181835/https://www.big-loser.site/M/Dec/sindicancia.html">sindicância/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241230180953/https://3asyice.github.io/login/salvar_senhas.html">Save Passwords/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
  
  <div class="link-item">
          <a href="https://web.archive.org/web/20241230175328/https://www.big-loser.site/Caso/099">099 - infohazard/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
            <div class="link-item">
          <a href="https://web.archive.org/web/20241230174901/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241230172502/https://www.big-loser.site/Caso/017#expand">017 - quebrado/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
  
              <div class="link-item">
          <a href="https://web.archive.org/web/20241230172113/https://www.big-loser.site/Caso/030">Expulsão das FAB/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
              <div class="link-item">
          <a href="https://web.archive.org/web/20241230171719/https://www.big-loser.site/Caso/029">029 - estupro/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
              <div class="link-item">
          <a href="https://web.archive.org/web/20241230171330/https://www.big-loser.site/Caso/028">028 - vereador/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
              <div class="link-item">
          <a href="https://web.archive.org/web/20241230171106/https://www.big-loser.site/Caso/sobre.html">&copy;[...sobre/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
              <div class="link-item">
          <a href="https://web.archive.org/web/20241230170808/https://www.big-loser.site/Caso/027">027 - Codes/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
              <div class="link-item">
          <a href="https://web.archive.org/web/20241230170247/https://www.big-loser.site/Caso/026">Avenida026Liberdade/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241230165713/https://www.big-loser.site/music">020/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241230164719/https://www.big-loser.site/Caso/001">001/</a>
          <p class="date">Dec 30, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241207113247/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Dec 07, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://4wjffvdqkc4xmu6yx7dqmiab6gtmtdtx2zs45mjy6i535ygxovjvoiid.onion">Cebola.onion/</a>
          <p class="date">Dec 06, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://1drv.ms/u/c/e2112d3399c3a63a/ETqmw5kzLREggOJrAAAAAAABM-cVStNc7DRLRGMdD8Li9A">OneDrive - Archives/</a>
          <p class="date">Dec 06, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241202051245/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Dec 02, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241202051049/https://www.big-loser.site/Caso/018">Caso 018/</a>
          <p class="date">Dec 02, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241202051738/https://www.big-loser.site/Caso/015">Caso 015/</a>
          <p class="date">Dec 02, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241117030251/https://3asyice.github.io/TALK-TO-ME/Frontend/index.html">Caso 016/</a>
          <p class="date">Nov 17, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241117043440/https://www.big-loser.site/">big-loser.site/ </a>
          <p class="date">Nov 17, 2024</p>
          <hr>
        </div>
        <div class = "link-item">
          <a href="https://web.archive.org/web/20241112232004/https://noticias.r7.com/hora7/morte-explorador-caverna-cabeca-para-baixo-eua-04122023/">John Edward Jones/</a> <p class ="date">nov 12, 2024 </p> <hr>
          </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241106052953/https://www.big-loser.site/Caso/015">Caso 015/</a>
          <p class="date">Nov 06, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241105062214/https://3asyice.github.io/login/">Página misteriosa/</a>
          <p class="date">Nov 05, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241105070719/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/008">Caso 008/</a>
          <p class="date">Nov 05, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241104184913/https://www.big-loser.site/">big-loser.site/ </a>
          <p class="date">Nov 04, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241005085052/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/006">Caso 006/</a>
          <p class="date">Oct 05, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241005085343/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/005">Caso 005/</a>
          <p class="date">Oct 05, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241002050442/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/007">Caso 007/</a>
          <p class="date">Oct 02, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001200029/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/004">Caso 004/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001133832/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/003">Caso 003/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001131431/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/002">Caso 002/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001131327/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/c/001">Caso 001/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001131908/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/s/comandante">Soares, um Monstro?/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
  
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001131830/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/s/assediado">Militar assediado/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001131622/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/s/atropelado">Atropelamento/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001131537/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/s/suicide">Suicídio do Sd 614/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001131730/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/s/sindicancia">Expulsão do Sd 609/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20241001131146/https://jack-sbraincancer.github.io/NoticiasDelTomorrow/">NoticiasDelTomorrow/</a>
          <p class="date">Oct 01, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240930040725/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Sep 30, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240920044105/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Sep 20, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="./badmgusm.html">BADMGUSM LINKS/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915113235/https://badmgusm.eb.mil.br/">BADMGUSM/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915201121/https://hack.chat/">hack.chat/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915200033/https://www.big-loser.site/Project_Apocalypse/comandante.html">big-loser - Soares/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915195902/https://www.big-loser.site/Project_Apocalypse/assedio.html">big-loser - assédio/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915195559/https://www.big-loser.site/Project_Apocalypse/expulso">big-loser expulsão/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915195338/https://www.big-loser.site/Project_Apocalypse/atropelamento">big-loser acidente/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915131558/https://www.big-loser.site/Project_Apocalypse/suicide">big-loser - suicide/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915130525/https://3asyice.github.io/big-loser.site/">big-loser.site test/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915122933/https://www.malditonatal.online/">malditonatal.online/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915121230/https://www.big-loser.site/Caso/004_4RCH1V3S">004&copy; archives/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915114109/https://badmgusm.eb.mil.br/index.php/todas-as-noticias/2253-palestra-sobre-valorizacao-da-vida-aos-soldados-do-efetivo-variavel">BADMGUSM - CVV?/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915115722/https://badmgusm.eb.mil.br/index.php/todas-as-noticias/2252-campo-do-periodo-basico-e-entrega-da-boina-preta-aos-soldados-do-efetivo-variavel">BADMGUSM - CAMPO/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240809042433/https://bandersnatch.club/">bandersnatch.club/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240809042434/https://3asyice.github.io/Regulamento-Disciplinar-do-Ex-rcito-Brasileiro/">Artigo do RDE/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915115222/https://badmgusm.eb.mil.br/index.php/todas-as-noticias/2232-incorporacao-dos-novos-recrutas-do-ano-de-2024">Incorporação/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915114816/https://badmgusm.eb.mil.br/index.php/todas-as-noticias/2227-instrucao-basica-de-primeiros-socorros-3">BADMGUSM - EB F@cil/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915061856/https://www.big-loser.site/Caso/004_4RCH1V3S">004&copy; archives/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240915053759/https://www.malditonatal.online/daniele.html">malditonatal - dani/</a>
          <p class="date">Sep 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240914144838/https://www.big-loser.site/Caso/004_4RCH1V3S">Con_Archives_&copy;_004/</a>
          <p class="date">Sep 14, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240913031505/https://www.big-loser.site/Caso/004_4RCH1V3S">Con_Archives_&copy;_004/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240913175959/https://bandersnatch.club/">bandersnatch.club/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20240913052319/https://3asyice.github.io/MirrorNEWS/chop-suey.html">MirrorNEWS - chop/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240913231132/https://3asyice.github.io/Regulamento-Disciplinar-do-Ex-rcito-Brasileiro/">Artigo do RDE/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240913050423/https://3asyice.github.io/Hospital-Bom-Pastor-Iju-/">Hospital Bom Pastor/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20240913051624/https://3asyice.github.io/MirrorNEWS/julho.html">MirrorNEWS - julho/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20240913051401/https://3asyice.github.io/MirrorNEWS/junho.html">MirrorNEWS - junho/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
        
          <a href="http://web.archive.org/web/20240913045629/https://3asyice.github.io/MirrorNEWS/maio.html">MirrorNEWS - maio/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20240913045043/https://3asyice.github.io/MirrorNEWS/buttons.html">MirrorNEWS - opções/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20240913044317/https://3asyice.github.io/MirrorNEWS/">MirrorNEWS/</a>
          <p class="date">Sep 13, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240912021313/https://www.big-loser.site/Opinions/Relatos">relatos.html/</a>
          <p class="date">Sep 12, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240912020831/https://www.big-loser.site/Project_Apocalypse/comandante">Soares.html/</a>
          <p class="date">Sep 12, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240912020433/https://www.big-loser.site/Project_Apocalypse/assedio">rapeCase.html/</a>
          <p class="date">Sep 12, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240911204454/https://www.big-loser.site/Caso/003">Caso - 003.html/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240911204122/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240912015343/https://www.big-loser.site/Caso/011">Caso - 011.html/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240912015131/https://www.big-loser.site/Caso/010">Caso - 010.html/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240911205320/https://www.big-loser.site/dark_web/avoid">Caso - 009 Risk/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240911205248/https://www.big-loser.site/dark_web/dados">Caso - 009 Data/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240911205206/https://www.big-loser.site/dark_web/vpn">Caso - 009.VPN/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240911205126/https://www.big-loser.site/dark_web/tor">Caso - 009.Tor/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240911205049/https://www.big-loser.site/dark_web/privacy">Caso - 009.DarkWeb/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20240911204817/https://www.big-loser.site/Project_Apocalypse/chat">Caso - 008.html/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240911204706/https://www.big-loser.site/Caso/007">Caso - 007.html/</a>
          <p class="date">Sep 11, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827180613/https://www.big-loser.site/Opinions/horizon">horizon.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827173350/https://www.big-loser.site/Caso/004_4RCH1V3S">Con_Archives_&copy;_004/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827174003/https://www.big-loser.site/Project_Apocalypse/expulso">Expelled.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827173832/https://www.big-loser.site/Project_Apocalypse/atropelamento">Accident.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827173752/https://www.big-loser.site/Project_Apocalypse/suicide"> Suicide.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827173544/https://www.big-loser.site/Caso/006">Caso - 006.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827173428/https://www.big-loser.site/Caso/005">Caso - 005.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
                        <div class="link-item">
            <a href="https://web.archive.org/web/20240827213157/https://ponte.org/militar-do-exercito-e-encontrado-morto-com-indicios-de-suicidio-em-quartel-de-sp/">Antônio - Suicídio/</a>
            <p class="date">Aug 27, 2024</p>
            <hr>
          </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827173350/https://www.big-loser.site/Caso/004_4RCH1V3S">Caso - 004.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827173106/https://www.big-loser.site/Caso/003">Caso - 003.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827172634/https://www.big-loser.site/Opinions/002">Caso - 002.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827172504/https://www.big-loser.site/Caso/001">Caso - 001.html/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827172322/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240827180851/https://raw.githubusercontent.com/3asyice/Noticias/main/Caso/Conversa%20do%20WhatsApp%20com%20B%20ADM%20GU%20SM%F0%9F%94%B0%F0%9F%87%A7%F0%9F%87%B7.txt">2024 conversa.txt/</a>
          <p class="date">Aug 27, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://onedrive.live.com/?authkey=%21AE%5FJKH8TjAFMdmU&id=E2112D3399C3A63A%21109&cid=E2112D3399C3A63A&parId=root&parQt=sharedby&o=OneUp">SECRET CON/</a>
          <p class="date">Aug 22, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240819213021/https://bandersnatch.club/">bandersnatch.club/</a>
          <p class="date">Aug 19, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240816165949/https://www.malditonatal.online/">malditonatal.online/</a>
          <p class="date">Aug 16, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240809053055/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Aug 09, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240809042446/https://3asyice.github.io/military/">Diario Militar/</a>
          <p class="date">Aug 09, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240809042409/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Aug 09, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240808173720/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Aug 08, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240806133333/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Aug 06, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240806234351/https://3asyice.github.io/Regulamento-Disciplinar-do-Ex-rcito-Brasileiro/">Artigo do RDE/</a>
          <p class="date">Aug 06, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20240806234350/https://3asyice.github.io/military/">Diario Militar/</a>
          <p class="date">Aug 06, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240802223609/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Aug 02, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240729201825/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 29, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240729201825/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 29, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240728211312/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 28, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240725213620/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 25, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240725062826/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 25, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240717022130/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 17, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240717005335/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 17, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240716211532/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 16, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240716083645/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 16, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240716015740/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 16, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240716004427/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 16, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240616101250/https://bandersnatch.club/">bandersnatch.club/</a>
          <p class="date">Jul 16, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240716005216/https://www.malditonatal.online/">malditonatal.online/</a>
          <p class="date">Jul 16, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240715031605/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="http://web.archive.org/web/20240715034331/https://3asyice.github.io/military/">Diario Militar/</a>
          <p class="date">Jul 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240715033139/https://www.malditonatal.online/">malditonatal.online/</a>
          <p class="date">Jul 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240715124739/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jul 15, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240603235628/https://www.big-loser.site/">big-loser.site/</a>
          <p class="date">Jun 03, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240603235628/https://www.big-loser.site/">big-loser.site old/</a>
          <p class="date">Jun 03, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240419155855/https://bandersnatch.club/">bandersnatch.club /</a>
          <p class="date">Apr 19, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240418171838/https://www.malditonatal.online/">malditonatal.online/</a>
          <p class="date">Apr 18, 2024</p>
          <hr>
        </div>
        <div class="link-item">
          <a href="https://web.archive.org/web/20240418171838/https://www.malditonatal.online">malditonatal.online/</a>
          <p class="date">Apr 18, 2024</p>
          <hr>
        </div> <div>`;
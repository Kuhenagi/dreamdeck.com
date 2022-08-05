function descriptionregulation(){
    var selectreg = document.getElementById("reg").value;
    if(selectreg == `or`)
    document.getElementById("regdes").innerHTML = "禁断や零龍などのゲーム開始時から場にあるカードや、<br>GR、超次元のようなデッキ外ゾーンを用いないレギュレーションです。"
    if(selectreg == `ad`)
    document.getElementById("regdes").innerHTML = "現状存在するデュエルマスターズのすべてのカードが使える、<br>殿堂システムの導入されているレギュレーションです。"
    if(selectreg == `2b`)
    document.getElementById("regdes").innerHTML = "過去二年以内のカードのみ使用可能な、<br>殿堂システムの導入されているレギュレーションです。"
    if(selectreg == `sh`)
    document.getElementById("regdes").innerHTML = "拡張パックを剥いて、<br>その中のカードを用いるレギュレーションです。"
    if(selectreg == `d0`)
    document.getElementById("regdes").innerHTML = "すべてのカードを用いることのできる、<br>殿堂、プレミアム殿堂のないレギュレーションです。"
    if(selectreg == `t2`)
    document.getElementById("regdes").innerHTML = "すべてのカード内のテキストが、<br>2倍になるレギュレーションです。"
    if(selectreg == `t0`)
    document.getElementById("regdes").innerHTML = "すべてのカード内のテキストが、<br>0倍になるレギュレーションです。"
    if(selectreg == `to`)
    document.getElementById("regdes").innerHTML = "すべてのカード内のテキストが、<br>100倍になるレギュレーションです。"
    if(selectreg == `oc`)
    document.getElementById("regdes").innerHTML = "カードを1種類しか用いないレギュレーションです。"
    if(selectreg == `tc`)
    document.getElementById("regdes").innerHTML = "二種類のカードを、<br>20枚ずつ用いるレギュレーションです。"
    if(selectreg == `at`)
    document.getElementById("regdes").innerHTML = "デュエルマスターズに限らずすべての、<br>カードゲームのカードが使えるレギュレーションです。"
    if(selectreg == `fg`)
    document.getElementById("regdes").innerHTML = "4枚制限が存在しないレギュレーションです。"
}
/*
            <option value="ad"></option>
            <option value="2b"></option>
            <option value="sh"></option>
            <option value="d0"></option>
            <option value="t2"></option>
            <option value="t0"></option>
            <option value="to"></option>
            <option value="oc"></option>
            <option value="tc"></option>
            <option value="at"></option>
            <option value="fg"></option>
*/
function downloadHTML(){
    if(document.getElementById("reg").value == `or`)
    var selectreg = `オリジナル`;
    if(document.getElementById("reg").value == `ad`)
    var selectreg = `アドバンス`;
    if(document.getElementById("reg").value == `2b`)
    var selectreg = `2ブロック構築戦`;
    if(document.getElementById("reg").value == `sh`)
    var selectreg = `シールド戦`;
    if(document.getElementById("reg").value == `d0`)
    var selectreg = `殿堂ゼロ`;
    if(document.getElementById("reg").value == `t2`)
    var selectreg = `テキスト2倍`;
    if(document.getElementById("reg").value == `t0`)
    var selectreg = `テキスト0倍`;
    if(document.getElementById("reg").value == `to`)
    var selectreg = `テキスト100倍`;
    if(document.getElementById("reg").value == `oc`)
    var selectreg = `ワンカード構築戦`;
    if(document.getElementById("reg").value == `tc`)
    var selectreg = `ツーカード構築戦`;
    if(document.getElementById("reg").value == `at`)
    var selectreg = `全TCG異種格闘技`;
    if(document.getElementById("reg").value == `fg`)
    var selectreg = `構築自由`;
    var content = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="src/main.css">
        <title>空想構築.com</title>
    </head>
    <body>
        <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous"></script>
        <script src="src/main.js"></script>
        <div class="header">
            <center><img src="src/header.png" alt="DreamDecksOnline" width="800"></center>
            <div id="humberger">
                <div></div>
                <div></div>
                <div></div>
              </div>    
        </div>
        <div style="background-color: rgb(146, 220, 255);
        color: rgb(0, 0, 0);
        height: 200px;">
        <h1 style="left: 30px;top: 30px;position: relative;">管理者名  :  ` + 
        document.getElementById("organizer").value +
        `<br>募集人数   :   ` + 
        document.getElementById("members").value +
        `<br>レギュレーション   :   ` + 
        selectreg + 
        `</h1></div>` +
        document.getElementById("index").value + 
    + `</body>
    </html>`;
    document.getElementById("download").download = document.getElementById("organizer").value + ".html"
    var blob = new Blob([ content ], { "type" : "text/plain" });
    if (window.navigator.msSaveBlob) { 
        window.navigator.msSaveBlob(blob,document.getElementById("organizer").value + ".html"); 
        // msSaveOrOpenBlobの場合はファイルを保存せずに開ける
        window.navigator.msSaveOrOpenBlob(blob,document.getElementById("organizer").value + ".html"); 
        } else {
        document.getElementById("download").href = window.URL.createObjectURL(blob);
    }
}
'use strict';

const sentenceJS = document.getElementById('sentence-html');
const buttonJsKanji = document.getElementById('button-html-kanji');
const buttonJsHiragana = document.getElementById('button-html-hiragana');
const buttonJsKatakana = document.getElementById('button-html-katakana');
const resultAreaJS = document.getElementById('resultArea-html');
const resultAnnounceJS = document.getElementById('resultAnnounce-html');

//漢字抽出ボタン
buttonJsKanji.onclick = () => {
    resultAreaJS.innerText = "";
    resultAnnounceJS.innerText = "";
    const sentence = sentenceJS.value;
    if (sentence.length === 0){
        const header = document.createElement('h3');
        return;
    }
    
    let characters_kanji = /([\u{3005}\u{3007}\u{303b}\u{3400}-\u{9FFF}\u{F900}-\u{FAFF}\u{20000}-\u{2FFFF}][\u{E0100}-\u{E01EF}\u{FE00}-\u{FE02}]?|\n)/mu;

    let result = "";
    for (let i = 0; i < sentence.length; i++){
    if (characters_kanji.test(sentence[i])){
        result = result + sentence[i];
    }else{

    }}
console.log(result);
 const header = document.createElement('p');
 header.innerText = "作業が完了しました。";
 resultAnnounceJS.appendChild(header);

 const paragraph = document.createElement('p');
 paragraph.setAttribute("id", "id-copy")
 paragraph.innerText = result;
 resultAreaJS.appendChild(paragraph);
}

//ひらがな抽出ボタン
buttonJsHiragana.onclick = () => {
    resultAreaJS.innerText = "";
    resultAnnounceJS.innerText = "";
    const sentence = sentenceJS.value;
    if (sentence.length === 0){
        const header = document.createElement('h3');
        return;
    }
    
    let characters_hiragana = /[\u{3000}-\u{301C}\u{3041}-\u{3093}\u{309B}-\u{309E}]|\n/mu;

    let result = "";
    for (let i = 0; i < sentence.length; i++){
    if (characters_hiragana.test(sentence[i])){
        result = result + sentence[i];
    }else{

    }}

 const header = document.createElement('p');
 header.innerText = "作業が完了しました。";
 resultAnnounceJS.appendChild(header);

 const paragraph = document.createElement('p');
 paragraph.setAttribute("id", "id-copy")
 paragraph.innerText = result;
 resultAreaJS.appendChild(paragraph);
}

//カタカナ抽出ボタン
buttonJsKatakana.onclick = () => {
    resultAreaJS.innerText = "";
    resultAnnounceJS.innerText = "";
    const sentence = sentenceJS.value;
    if (sentence.length === 0){
        const header = document.createElement('h3');
        return;
    }
    
    let characters_katakana = /[\u{3000}-\u{301C}\u{30A1}-\u{30F6}\u{30FB}-\u{30FE}]|\n/mu;

    let result = "";
    for (let i = 0; i < sentence.length; i++){
    if (characters_katakana.test(sentence[i])){
        result = result + sentence[i];
    }else{

    }}

 const header = document.createElement('p');
 header.innerText = "作業が完了しました。";
 resultAnnounceJS.appendChild(header);

 const paragraph = document.createElement('p');
 paragraph.setAttribute("id", "id-copy")
 paragraph.innerText = result;
 resultAreaJS.appendChild(paragraph);
}

//コピペボタン
function copyToClipboard() {
    let copyTarget = document.getElementById("id-copy").innerText;
    navigator.clipboard.writeText(copyTarget).then(()=> {;
    alert("正常にコピーが完了しました。: " + copyTarget);
    });
}
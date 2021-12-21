//https://www.learn-japanese-adventure.com/katakana-chart.html

document.getElementById('text_input').addEventListener('input', function() {
    console.log(getURL());
    console.log(this.value);
});

document.getElementById("search").onclick = function () {
        window.open(getURL(), "_blank");
};

function getURL(){
    return "https://www.google.com/search?q=" + $('textarea#text_input').val();
}

$(document).ready(function(){
    $("span").click(function () {
        location.href = "popup.html";
    });
});



function contains_double(str){
    for(var i = 0; i < str.length-1; i ++){
        if(str.charAt(i) == str.charAt(i + 1)){
            return true
        }
    }
    return false
}

function first_char(str){
    const consonants = ['m', 'p', 'b', 't', 'd', 's', 'z', 'r', 'j', 'w', 'h', 'k', 'g'];
    for(var i = 0; i < str.length-1; i ++){
        if(consonants.includes(str.charAt(i)) && str.charAt(i) == str.charAt(i + 1)){
            return str.charAt(i)
        }
    }
}
$('body').on('input', 'textarea[name=text_input]', function() {
    
    if(contains_double($(this).val())){
        var temp = first_char($(this).val())
        $(this).val($(this).val().replace(temp, "ッ"));
        
    }
    
    //higher priority
    $(this).val($(this).val().replace('tsu', 'ツ'));
    
    $(this).val($(this).val().replace('kya', 'キャ'));
    $(this).val($(this).val().replace('kyu', 'キュ'));
    $(this).val($(this).val().replace('kyo', 'キョ'));
    
    $(this).val($(this).val().replace('gya', 'ギャ'));
    $(this).val($(this).val().replace('gyu', 'ギュ'));
    $(this).val($(this).val().replace('gyo', 'ギョ'));
    
    $(this).val($(this).val().replace('ja', 'ジャ'));
    $(this).val($(this).val().replace('ju', 'ジュ'));
    $(this).val($(this).val().replace('jo', 'ジョ'));
    
    $(this).val($(this).val().replace('bya', 'ビャ'));
    $(this).val($(this).val().replace('byu', 'ビュ'));
    $(this).val($(this).val().replace('byo', 'ビョ'));
    
    $(this).val($(this).val().replace('pya', 'ピャ'));
    $(this).val($(this).val().replace('pyu', 'ピュ'));
    $(this).val($(this).val().replace('pyo', 'ピョ'));
    
    $(this).val($(this).val().replace('sha', 'シャ'));
    $(this).val($(this).val().replace('shu', 'シュ'));
    $(this).val($(this).val().replace('sho', 'ショ'));
    
    $(this).val($(this).val().replace('cha', 'チャ'));
    $(this).val($(this).val().replace('chu', 'チュ'));
    $(this).val($(this).val().replace('cho', 'チョ'));
    
    $(this).val($(this).val().replace('ンya', 'ニャ'));
    $(this).val($(this).val().replace('ンyu', 'ニュ'));
    $(this).val($(this).val().replace('ンyo', 'ニョ'));
    
    $(this).val($(this).val().replace('rya', 'リャ'));
    $(this).val($(this).val().replace('ryu', 'リュ'));
    $(this).val($(this).val().replace('ryo', 'リョ'));

    $(this).val($(this).val().replace('mya', 'ミャ'));
    $(this).val($(this).val().replace('myu', 'ミュ'));
    $(this).val($(this).val().replace('myo', 'ミョ'));
    
    $(this).val($(this).val().replace('hya', 'ヒャ'));
    $(this).val($(this).val().replace('hyu', 'ヒュ'));
    $(this).val($(this).val().replace('hyo', 'ヒョ'));
    
    
    $(this).val($(this).val().replace('a', 'ア'));
    $(this).val($(this).val().replace('i', 'イ'));
    $(this).val($(this).val().replace('u', 'ウ'));
    $(this).val($(this).val().replace('e', 'エ'));
    $(this).val($(this).val().replace('o', 'オ'));
    
    $(this).val($(this).val().replace('kア', 'カ'));
    $(this).val($(this).val().replace('kイ', 'キ'));
    $(this).val($(this).val().replace('kウ', 'ク'));
    $(this).val($(this).val().replace('kエ', 'ケ'));
    $(this).val($(this).val().replace('kオ', 'コ'));
    
    $(this).val($(this).val().replace('gア', 'ガ'));
    $(this).val($(this).val().replace('gイ', 'ギ'));
    $(this).val($(this).val().replace('gウ', 'グ'));
    $(this).val($(this).val().replace('gエ', 'ゲ'));
    $(this).val($(this).val().replace('gオ', 'ゴ'));
    

    
    $(this).val($(this).val().replace('sア', 'サ'));
    $(this).val($(this).val().replace('shイ', 'シ'));
    $(this).val($(this).val().replace('sウ', 'ス'));
    $(this).val($(this).val().replace('sエ', 'セ'));
    $(this).val($(this).val().replace('sオ', 'ソ'));
    

    $(this).val($(this).val().replace('zア', 'ザ'));
    $(this).val($(this).val().replace('jイ', 'ジ'));
    $(this).val($(this).val().replace('zウ', 'ズ'));
    $(this).val($(this).val().replace('zエ', 'ゼ'));
    $(this).val($(this).val().replace('zオ', 'ゾ'));
    
    $(this).val($(this).val().replace('tア', 'タ'));
    $(this).val($(this).val().replace('chイ', 'チ'));
    $(this).val($(this).val().replace('tエ', 'テ'));
    $(this).val($(this).val().replace('tオ', 'ト'));
    
    $(this).val($(this).val().replace('dア', 'ダ'));
    $(this).val($(this).val().replace('ジ2', 'ヂ'));
    $(this).val($(this).val().replace('ズ2', 'ヅ'));
    $(this).val($(this).val().replace('dエ', 'デ'));
    $(this).val($(this).val().replace('dオ', 'ド'));
    
    $(this).val($(this).val().replace('ンア', 'ナ'));
    $(this).val($(this).val().replace('ンイ', 'ニ'));
    $(this).val($(this).val().replace('ンウ', 'ヌ'));
    $(this).val($(this).val().replace('ンエ', 'ネ'));
    $(this).val($(this).val().replace('ンオ', 'ノ'));
    
    
    $(this).val($(this).val().replace('hア', 'ハ'));
    $(this).val($(this).val().replace('hイ', 'ヒ'));
    $(this).val($(this).val().replace('fウ', 'フ'));
    $(this).val($(this).val().replace('hエ', 'ヘ'));
    $(this).val($(this).val().replace('hオ', 'ホ'));
    
    
    $(this).val($(this).val().replace('bア', 'バ'));
    $(this).val($(this).val().replace('bイ', 'ビ'));
    $(this).val($(this).val().replace('bウ', 'ブ'));
    $(this).val($(this).val().replace('bエ', 'ベ'));
    $(this).val($(this).val().replace('bオ', 'ボ'));
    
    $(this).val($(this).val().replace('pア', 'パ'));
    $(this).val($(this).val().replace('pイ', 'ピ'));
    $(this).val($(this).val().replace('pウ', 'プ'));
    $(this).val($(this).val().replace('pエ', 'ペ'));
    $(this).val($(this).val().replace('pオ', 'ポ'));
    
    $(this).val($(this).val().replace('mア', 'マ'));
    $(this).val($(this).val().replace('mイ', 'ミ'));
    $(this).val($(this).val().replace('mウ', 'ム'));
    $(this).val($(this).val().replace('mエ', 'メ'));
    $(this).val($(this).val().replace('mオ', 'モ'));
    
    $(this).val($(this).val().replace('yア', 'ヤ'));
    $(this).val($(this).val().replace('yウ', 'ユ'));
    $(this).val($(this).val().replace('yオ', 'ヨ'));
    
    $(this).val($(this).val().replace('rア', 'ラ'));
    $(this).val($(this).val().replace('rイ', 'リ'));
    $(this).val($(this).val().replace('rウ', 'ル'));
    $(this).val($(this).val().replace('rエ', 'レ'));
    $(this).val($(this).val().replace('rオ', 'ロ'));
    
    $(this).val($(this).val().replace('wア', 'ワ'));
    $(this).val($(this).val().replace('wオ', 'ヲ'));
    $(this).val($(this).val().replace('n', 'ン'));
    $(this).val($(this).val().replace('.', '。'));
    $(this).val($(this).val().replace('-', 'ー'));
    
    


});


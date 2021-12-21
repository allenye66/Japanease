//https://www.learn-japanese-adventure.com/hiragana-chart.html

//document.getElementById('text_input').addEventListener('input', function() {
//    console.log(this.value);
//});

$(document).ready(function(){
     $("span").click(function () {
         location.href = "popup2.html";
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
        console.log("HAS DOUBLE")
        $(this).val($(this).val().replace(temp, "っ"));
        
    }
    
    //higher priority
    $(this).val($(this).val().replace('tsu', 'つ'));
    
    $(this).val($(this).val().replace('kya', 'きゃ'));
    $(this).val($(this).val().replace('kyu', 'きゅ'));
    $(this).val($(this).val().replace('kyo', 'きょ'));
    
    $(this).val($(this).val().replace('hya', 'ひゃ'));
    $(this).val($(this).val().replace('hyu', 'ひゅ'));
    $(this).val($(this).val().replace('hyo', 'ひょ'));
    
    $(this).val($(this).val().replace('gya', 'ぎゃ'));
    $(this).val($(this).val().replace('gyu', 'ぎゅ'));
    $(this).val($(this).val().replace('gyo', 'ぎょ'));
    
    $(this).val($(this).val().replace('ja', 'じゃ'));
    $(this).val($(this).val().replace('ju', 'じゅ'));
    $(this).val($(this).val().replace('jo', 'じょ'));
    
    $(this).val($(this).val().replace('bya', 'びゃ'));
    $(this).val($(this).val().replace('byu', 'びゅ'));
    $(this).val($(this).val().replace('byo', 'びょ'));
    
    $(this).val($(this).val().replace('pya', 'ぴゃ'));
    $(this).val($(this).val().replace('pyu', 'ぴゅ'));
    $(this).val($(this).val().replace('pyo', 'ぴょ'));
    
    $(this).val($(this).val().replace('sha', 'しゃ'));
    $(this).val($(this).val().replace('shu', 'しゅ'));
    $(this).val($(this).val().replace('sho', 'しょ'));
    
    $(this).val($(this).val().replace('cha', 'ちゃ'));
    $(this).val($(this).val().replace('chu', 'ちゅ'));
    $(this).val($(this).val().replace('cho', 'ちょ'));
    
    $(this).val($(this).val().replace('んya', 'にゃ'));
    $(this).val($(this).val().replace('んyu', 'にゅ'));
    $(this).val($(this).val().replace('んyo', 'にょ'));
    
    $(this).val($(this).val().replace('rya', 'りゃ'));
    $(this).val($(this).val().replace('ryu', 'りゅ'));
    $(this).val($(this).val().replace('ryo', 'りょ'));

    $(this).val($(this).val().replace('mya', 'みゃ'));
    $(this).val($(this).val().replace('myu', 'みゅ'));
    $(this).val($(this).val().replace('myo', 'みょ'));
    
    
    $(this).val($(this).val().replace('a', 'あ'));
    $(this).val($(this).val().replace('i', 'い'));
    $(this).val($(this).val().replace('u', 'う'));
    $(this).val($(this).val().replace('e', 'え'));
    $(this).val($(this).val().replace('o', 'お'));
    
    $(this).val($(this).val().replace('kあ', 'か'));
    $(this).val($(this).val().replace('kい', 'き'));
    $(this).val($(this).val().replace('kう', 'く'));
    $(this).val($(this).val().replace('kえ', 'け'));
    $(this).val($(this).val().replace('kお', 'こ'));
    
    $(this).val($(this).val().replace('gあ', 'が'));
    $(this).val($(this).val().replace('gい', 'ぎ'));
    $(this).val($(this).val().replace('gう', 'ぐ'));
    $(this).val($(this).val().replace('gえ', 'げ'));
    $(this).val($(this).val().replace('gお', 'ご'));
    

    
    $(this).val($(this).val().replace('sあ', 'さ'));
    $(this).val($(this).val().replace('shい', 'し'));
    $(this).val($(this).val().replace('sう', 'す'));
    $(this).val($(this).val().replace('sえ', 'せ'));
    $(this).val($(this).val().replace('sお', 'そ'));
    

    $(this).val($(this).val().replace('zあ', 'ざ'));
    $(this).val($(this).val().replace('jい', 'じ'));
    $(this).val($(this).val().replace('zう', 'ず'));
    $(this).val($(this).val().replace('zえ', 'ぜ'));
    $(this).val($(this).val().replace('zお', 'ぞ'));
    
    $(this).val($(this).val().replace('tあ', 'た'));
    $(this).val($(this).val().replace('chい', 'ち'));
    $(this).val($(this).val().replace('tえ', 'て'));
    $(this).val($(this).val().replace('tお', 'と'));
    
    $(this).val($(this).val().replace('dあ', 'だ'));
    $(this).val($(this).val().replace('じ2', 'ぢ'));
    $(this).val($(this).val().replace('ず2', 'づ'));
    $(this).val($(this).val().replace('dえ', 'で'));
    $(this).val($(this).val().replace('dお', 'ど'));
    
    $(this).val($(this).val().replace('んあ', 'な'));
    $(this).val($(this).val().replace('んい', 'に'));
    $(this).val($(this).val().replace('んう', 'ぬ'));
    $(this).val($(this).val().replace('んえ', 'ね'));
    $(this).val($(this).val().replace('んお', 'の'));
    
    
    $(this).val($(this).val().replace('hあ', 'は'));
    $(this).val($(this).val().replace('hい', 'ひ'));
    $(this).val($(this).val().replace('fう', 'ふ'));
    $(this).val($(this).val().replace('hえ', 'へ'));
    $(this).val($(this).val().replace('hお', 'ほ'));
    
    
    $(this).val($(this).val().replace('bあ', 'ば'));
    $(this).val($(this).val().replace('bい', 'び'));
    $(this).val($(this).val().replace('bう', 'ぶ'));
    $(this).val($(this).val().replace('bえ', 'べ'));
    $(this).val($(this).val().replace('bお', 'ぼ'));
    
    $(this).val($(this).val().replace('pあ', 'ぱ'));
    $(this).val($(this).val().replace('pい', 'ぴ'));
    $(this).val($(this).val().replace('pう', 'ぷ'));
    $(this).val($(this).val().replace('pえ', 'ぺ'));
    $(this).val($(this).val().replace('pお', 'ぽ'));
    
    $(this).val($(this).val().replace('mあ', 'ま'));
    $(this).val($(this).val().replace('mい', 'み'));
    $(this).val($(this).val().replace('mう', 'む'));
    $(this).val($(this).val().replace('mえ', 'め'));
    $(this).val($(this).val().replace('mお', 'も'));
    
    
    $(this).val($(this).val().replace('yあ', 'や'));
    $(this).val($(this).val().replace('yう', 'ゆ'));
    $(this).val($(this).val().replace('yお', 'よ'));
    
    
    $(this).val($(this).val().replace('rあ', 'ら'));
    $(this).val($(this).val().replace('rい', 'り'));
    $(this).val($(this).val().replace('rう', 'る'));
    $(this).val($(this).val().replace('rえ', 'れ'));
    $(this).val($(this).val().replace('rお', 'ろ'));

    
    $(this).val($(this).val().replace('wあ', 'わ'));
    $(this).val($(this).val().replace('wお', 'を'));
    $(this).val($(this).val().replace('n', 'ん'));
    $(this).val($(this).val().replace('.', '。'));
    
    


});


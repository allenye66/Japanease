document.getElementById('text_input').addEventListener('input', function() {
    console.log(this.value);

});


$('body').on('input', 'input[name=text_input]', function() {
    
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
    $(this).val($(this).val().replace('tsう', 'つ'));
    $(this).val($(this).val().replace('tえ', 'て'));
    $(this).val($(this).val().replace('tお', 'と'));
    
    $(this).val($(this).val().replace('dあ', 'だ'));
    $(this).val($(this).val().replace('jい２', 'ぢ'));
    $(this).val($(this).val().replace('zう２', 'づ'));
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


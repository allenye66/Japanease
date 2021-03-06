//https://www.learn-japanese-adventure.com/katakana-chart.html

function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed"; 
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy"); 
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}
document.querySelector("#copy").onclick = function() {
    var result = copyToClipboard($('textarea#text_input').val());
    console.log("copied?", result);
};

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
        $(this).val($(this).val().replace(temp, "???"));
        
    }
    
    //higher priority
    $(this).val($(this).val().replace('tsu', '???'));
    
    $(this).val($(this).val().replace('kya', '??????'));
    $(this).val($(this).val().replace('kyu', '??????'));
    $(this).val($(this).val().replace('kyo', '??????'));
    
    $(this).val($(this).val().replace('gya', '??????'));
    $(this).val($(this).val().replace('gyu', '??????'));
    $(this).val($(this).val().replace('gyo', '??????'));
    
    $(this).val($(this).val().replace('ja', '??????'));
    $(this).val($(this).val().replace('ju', '??????'));
    $(this).val($(this).val().replace('jo', '??????'));
    
    $(this).val($(this).val().replace('bya', '??????'));
    $(this).val($(this).val().replace('byu', '??????'));
    $(this).val($(this).val().replace('byo', '??????'));
    
    $(this).val($(this).val().replace('pya', '??????'));
    $(this).val($(this).val().replace('pyu', '??????'));
    $(this).val($(this).val().replace('pyo', '??????'));
    
    $(this).val($(this).val().replace('sha', '??????'));
    $(this).val($(this).val().replace('shu', '??????'));
    $(this).val($(this).val().replace('sho', '??????'));
    
    $(this).val($(this).val().replace('cha', '??????'));
    $(this).val($(this).val().replace('chu', '??????'));
    $(this).val($(this).val().replace('cho', '??????'));
    
    $(this).val($(this).val().replace('???ya', '??????'));
    $(this).val($(this).val().replace('???yu', '??????'));
    $(this).val($(this).val().replace('???yo', '??????'));
    
    $(this).val($(this).val().replace('rya', '??????'));
    $(this).val($(this).val().replace('ryu', '??????'));
    $(this).val($(this).val().replace('ryo', '??????'));

    $(this).val($(this).val().replace('mya', '??????'));
    $(this).val($(this).val().replace('myu', '??????'));
    $(this).val($(this).val().replace('myo', '??????'));
    
    $(this).val($(this).val().replace('hya', '??????'));
    $(this).val($(this).val().replace('hyu', '??????'));
    $(this).val($(this).val().replace('hyo', '??????'));
    
    
    $(this).val($(this).val().replace('a', '???'));
    $(this).val($(this).val().replace('i', '???'));
    $(this).val($(this).val().replace('u', '???'));
    $(this).val($(this).val().replace('e', '???'));
    $(this).val($(this).val().replace('o', '???'));
    
    $(this).val($(this).val().replace('k???', '???'));
    $(this).val($(this).val().replace('k???', '???'));
    $(this).val($(this).val().replace('k???', '???'));
    $(this).val($(this).val().replace('k???', '???'));
    $(this).val($(this).val().replace('k???', '???'));
    
    $(this).val($(this).val().replace('g???', '???'));
    $(this).val($(this).val().replace('g???', '???'));
    $(this).val($(this).val().replace('g???', '???'));
    $(this).val($(this).val().replace('g???', '???'));
    $(this).val($(this).val().replace('g???', '???'));
    

    
    $(this).val($(this).val().replace('s???', '???'));
    $(this).val($(this).val().replace('sh???', '???'));
    $(this).val($(this).val().replace('s???', '???'));
    $(this).val($(this).val().replace('s???', '???'));
    $(this).val($(this).val().replace('s???', '???'));
    

    $(this).val($(this).val().replace('z???', '???'));
    $(this).val($(this).val().replace('j???', '???'));
    $(this).val($(this).val().replace('z???', '???'));
    $(this).val($(this).val().replace('z???', '???'));
    $(this).val($(this).val().replace('z???', '???'));
    
    $(this).val($(this).val().replace('t???', '???'));
    $(this).val($(this).val().replace('ch???', '???'));
    $(this).val($(this).val().replace('t???', '???'));
    $(this).val($(this).val().replace('t???', '???'));
    
    $(this).val($(this).val().replace('d???', '???'));
    $(this).val($(this).val().replace('???2', '???'));
    $(this).val($(this).val().replace('???2', '???'));
    $(this).val($(this).val().replace('d???', '???'));
    $(this).val($(this).val().replace('d???', '???'));
    
    $(this).val($(this).val().replace('??????', '???'));
    $(this).val($(this).val().replace('??????', '???'));
    $(this).val($(this).val().replace('??????', '???'));
    $(this).val($(this).val().replace('??????', '???'));
    $(this).val($(this).val().replace('??????', '???'));
    
    
    $(this).val($(this).val().replace('h???', '???'));
    $(this).val($(this).val().replace('h???', '???'));
    $(this).val($(this).val().replace('f???', '???'));
    $(this).val($(this).val().replace('h???', '???'));
    $(this).val($(this).val().replace('h???', '???'));
    
    
    $(this).val($(this).val().replace('b???', '???'));
    $(this).val($(this).val().replace('b???', '???'));
    $(this).val($(this).val().replace('b???', '???'));
    $(this).val($(this).val().replace('b???', '???'));
    $(this).val($(this).val().replace('b???', '???'));
    
    $(this).val($(this).val().replace('p???', '???'));
    $(this).val($(this).val().replace('p???', '???'));
    $(this).val($(this).val().replace('p???', '???'));
    $(this).val($(this).val().replace('p???', '???'));
    $(this).val($(this).val().replace('p???', '???'));
    
    $(this).val($(this).val().replace('m???', '???'));
    $(this).val($(this).val().replace('m???', '???'));
    $(this).val($(this).val().replace('m???', '???'));
    $(this).val($(this).val().replace('m???', '???'));
    $(this).val($(this).val().replace('m???', '???'));
    
    $(this).val($(this).val().replace('y???', '???'));
    $(this).val($(this).val().replace('y???', '???'));
    $(this).val($(this).val().replace('y???', '???'));
    
    $(this).val($(this).val().replace('r???', '???'));
    $(this).val($(this).val().replace('r???', '???'));
    $(this).val($(this).val().replace('r???', '???'));
    $(this).val($(this).val().replace('r???', '???'));
    $(this).val($(this).val().replace('r???', '???'));
    
    $(this).val($(this).val().replace('w???', '???'));
    $(this).val($(this).val().replace('w???', '???'));
    $(this).val($(this).val().replace('n', '???'));
    $(this).val($(this).val().replace('.', '???'));
    $(this).val($(this).val().replace('-', '???'));
    
    $(this).val($(this).val().replace('v???', '???'));
    
    
    


});


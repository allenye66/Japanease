document.getElementById('text_input').addEventListener('input', function() {
    console.log(this.value);

});

$('body').on('input', 'input[name=text_input]', function() {
      $(this).val($(this).val().replace('ka', 'か'));
});
$('body').on('input', 'input[name=text_input]', function() {
      $(this).val($(this).val().replace('ki', 'き'));
});
$('body').on('input', 'input[name=text_input]', function() {
      $(this).val($(this).val().replace('ku', 'く'));
});
$('body').on('input', 'input[name=text_input]', function() {
      $(this).val($(this).val().replace('ke', 'け'));
});
$('body').on('input', 'input[name=text_input]', function() {
      $(this).val($(this).val().replace('ko', 'こ'));
});

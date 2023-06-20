$('#home_page').css('display', 'none');
$('#nav_bar').css('display', 'block');
$('#dashboard').css('display', 'block');


$("#logout").click(function () {
    $('#home_page').css('display', 'block');
    $('#nav_bar').css('display', 'none');
    $('#dashboard').css('display', 'none');
})
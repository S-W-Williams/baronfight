function intro1() {
    $('#logo').hop({color: '#2E4053', radius: 150});
    $('.hop-inner').append('<div class="hop-content"><h2>Hop!</h2><p>It\'s time to highlight your new feature on your web site or application</p></div>');
    $('.hop-content').css({top:100, left: '120%', width: 450}).html('<h2>Welcome to Bust-A-Baron!</h2><p>The purpose of this site is to teach users about the Runes in the Runes Reforged system. You can continue with this tutorial, or skip to the game.</p>' +
        '<a style="cursor:pointer" class="btn" onclick="intro2()">Continue</a>' +
        '<a style="cursor:pointer" class="btn" onclick="closeHop()">Play</a>');
}

function intro2() {
    $('#playerImage').hop({color: '#FBC02D', radius: 500, borderWidth: 10})
    $('.hop-content').css({top:0, left: '120%', width: 450}).html('<h2>Customizable</h2><p>You can customize it as you want, move it, change the overlay color, border size and color and more on the fly</p>');

}

function intro3() {
    $('.btn:eq(3)').hop({color: '#E91E63', radius: 500, borderWidth: 25, borderColor: '#FFC107', opacity: .9})
    $('.hop-content').css({top:0, right: '100%', left: 'auto', width: 450}).html('<h2>Easy to start</h2><p>No css required by default, just <code>$(\'.logo\').hop()</code> and you are ready</p><a style="cursor:pointer" class="btn" onclick="closeHop()">Got It</a>');
}

function closeHop() {
    $('div').hop().data('hop').remove();
}

$(function(){
    intro1();
});


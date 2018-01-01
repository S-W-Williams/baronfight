function intro1() {
    $("body").css("overflow", "hidden");
    $('html,body').animate({scrollTop: $("#logo").offset().top - 300}, 500);
    $('#logo').hop({color: '#2E4053', radius: 150});
    $('.hop-inner').append('<div class="hop-content"><h2>Hop!</h2><p>It\'s time to highlight your new feature on your web site or application</p></div>');
    $('.hop-content').css({top:100, left: '120%', width: 450}).html('<h2>Welcome to Bust-A-Baron!</h2><p>The purpose of this site is to teach users about the Runes in the Runes Reforged system. You can continue with this tutorial, or skip to the game.</p>' +
        '<a style="cursor:pointer" class="btn hopBtn" onclick="intro2()">Continue</a>' +
        '<a style="cursor:pointer" class="btn hopBtn" onclick="closeHop()">Play</a>');
}

function intro2() {
    $('html,body').animate({scrollTop: $("#playerImage").offset().top - 300}, 500);
    $('#playerImage').hop({color: '#2E4053', radius: 400, borderWidth: 10})
    $('.hop-content').css({top:0, left: '120%', width: 450}).html('<h2>This is you!</h2><p>Here you will find your character, your health and mana bars, and your potions. Press 1 and 2 to use a health or mana potion.</p>' +
        '<a style="cursor:pointer" class="btn hopBtn" onclick="intro3()">Continue</a>');

}

function intro3() {
    $('html,body').animate({scrollTop: $("#baronImage").offset().top - 300}, 500);
    $('#baronImage').hop({color: '#2E4053', radius: 350, borderWidth: 10, borderColor: 'white', opacity: .9})
    $('.hop-content').css({top:0, right: '100%', left: 'auto', width: 450}).html('<h2>This is Baron!</h2><p>Your goal is to defeat Baron, which will advance you to the next level. Try to get to the highest level you can! There are multiple types of Barons, each with their own unique stats and traits. Baron will attack you every few seconds and also has the ability to stun you.</p>' +
        '<a style="cursor:pointer" class="btn hopBtn" onclick="intro4()">Continue</a>');
}

function intro4() {
    $('html,body').animate({scrollTop: $("#phaser").offset().top - 300}, 500);
    $('#phaser').hop({color: '#2E4053', radius: 200, borderWidth: 10, borderColor: 'white', opacity: .9})
    $('.hop-content').css({top:"-200px", right: '100%', left: 'auto', width: 450}).html('<h2>This is the board!</h2><p>Here you will find the board. The board will contain orbs that look like this:</p>' +
        '<img src=\'https://i.imgur.com/uSKC6YT.png\' style="width: 200px; height: 200px;" >' +
        '<p>To damage Baron, select 3 or more orbs in a row. The more orbs you select, the more damage you will deal.</p>' +
        '<a style="cursor:pointer" class="btn hopBtn" onclick="intro5()">Continue</a>');
}

function intro5() {
    $('html,body').animate({scrollTop: $("#spells").offset().top - 300}, 500);
    $('#spells').hop({color: '#2E4053', radius: 250, borderWidth: 10, borderColor: 'white', opacity: .9})
    $('.hop-content').css({top:0, right: '100%', left: 'auto', width: 450}).html('<h2>Your spells!</h2><p>Here you find spells you can use to help you defeat Baron. You can mouse over each spell to read their effects and the amount of mana they consume.</p>' +
        '<a style="cursor:pointer" class="btn hopBtn" onclick="intro6()">Continue</a>');
}

function intro6() {
    $('html,body').animate({scrollTop: $("#runeTrees").offset().top - 300}, 500);
    $('#runeTrees').hop({color: '#2E4053', radius: 250, borderWidth: 10, borderColor: 'white', opacity: .9})
    $('.hop-content').css({top:0, right: '100%', left: 'auto', width: 450}).html('<h2>Your Runes!</h2><p>Here you find the Runes that you pick. At the start you have the option to select a playstyle path. Each time you level up you will have the option to select a Rune from that tree. Each Rune has their own unique effect to help you out. ' +
        'Every time you select a Rune you will be prompted with helpful information about that Rune to help you remember them when on the Fields of Justice. </p>' +
        '<a style="cursor:pointer" class="btn hopBtn" onclick="intro7()">Continue</a>');
}

function intro7() {
    $('html,body').animate({scrollTop: $("#messageBox").offset().top - 300}, 500);
    $('#messageBox').hop({color: '#2E4053', radius: 100, borderWidth: 10, borderColor: 'white', opacity: .9})
    $('.hop-content').css({top:0, right: '100%', left: 'auto', width: 450}).html('<h2>Alerts!</h2><p>Finally, you can find any alerts from the game here. Press the play button once you\'re ready to start!</p>' +
        '<a style="cursor:pointer" class="btn hopBtn" onclick="closeHop()">Play!</a>');
}

function closeHop() {
    $('div').hop().data('hop').remove();
    $("body").css("overflow", "scroll");
    document.cookie = "tutorial=done";
}

$(function(){
    //if (getCookie("tutorial") !== "done") {
     intro1();
    //}

});


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

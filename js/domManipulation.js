
var HEALTH_BAR = $('.health-bar');
var BAR = HEALTH_BAR.find('.bar');
var HIT = HEALTH_BAR.find('.hit');
var nextRuneNumber = 1;
var treeNumber = 1;

var MANA_BAR = $('.mana-bar');
var M_BAR = MANA_BAR.find('.bar');
var M_PTS = MANA_BAR.find('.hit');


var timeOuts = {};

function updateHealthBar(playerNumber, newValue, total, damage, value) {
    // calculate the percentage of the total width
    var barWidth = (newValue / total) * 100;
    var hitWidth = (damage / value) * 100 + "%";

    // show hit bar and set the width
    HIT[playerNumber].style.width = hitWidth;
    HEALTH_BAR[playerNumber].dataset.value = newValue;

    setTimeout(function(){
        HIT[playerNumber].style.width = "0";
        BAR[playerNumber].style.width = barWidth + "%";
    }, 500);
}

function updateManaBar(playerNumber, newValue, total, damage, value) {
    // calculate the percentage of the total width
    var barWidth = (newValue / total) * 100;
    var hitWidth = (damage / value) * 100 + "%";

    // show hit bar and set the width
    M_PTS[playerNumber].style.width = hitWidth;
    MANA_BAR[playerNumber].dataset.value = newValue;

    setTimeout(function(){
        M_PTS[playerNumber].style.width = "0";
        M_BAR[playerNumber].style.width = barWidth + "%";
    }, 500);
}

function resetResourceBars() {
    HEALTH_BAR[0].dataset.total = playerStats.maxHP;
    HEALTH_BAR[1].dataset.total = GAME_BOSS_STATS(level).maxHP;

    HEALTH_BAR[0].dataset.value = HEALTH_BAR[0].dataset.total;
    HEALTH_BAR[1].dataset.value = HEALTH_BAR[1].dataset.total;

    BAR[0].style.width = "100%";
    BAR[1].style.width = "100%";

    MANA_BAR[0].dataset.total = playerStats.maxMP;
    MANA_BAR[0].dataset.value = playerStats.maxMP;
    M_BAR[0].style.width = "100%";

}


function updateNumPotions(red, blue) {

    $("#healthPotCounter .potionCounter").html(red);
    $("#manaPotCounter .potionCounter").html(blue);
}


function setCooldown(ability, duration) {

    if (timeOuts[ability]) {
        for (var i = 0 ; i < timeOuts[ability].length; i++) {
            clearTimeout(timeOuts[ability][i]);
        }
    }

    timeOuts[ability] = [];

    $("." + ability + " .cooldown-half").css({"opacity":1});

    $("." + ability + " .cooldown-half-rotator-right").css({
        "transform":"rotate(180deg)",
        "transition":"transform "+(duration/2000)+"s",
        "transition-timing-function":"linear"
    });


    timeOuts[ability][0] = setTimeout( function(){
        $("." + ability + " .cooldown-half-rotator-left").css({
            "transform":"rotate(180deg)",
            "transition":"transform "+(duration/2000)+"s",
            "transition-timing-function":"linear"
        });
    }, duration/2 );

    timeOuts[ability][1] = setTimeout( function(){
        $("." + ability + " .cooldown-half-rotator-right").css({"transform":"rotate(0deg)","transition":"transform 0s"});
        $("." + ability + " .cooldown-half-rotator-left").css({"transform":"rotate(0deg)","transition":"transform 0s"});
        $("." + ability + " .cooldown-half").css({"opacity":0});
    }, duration );
}

function addTreeToPanel(rune) {
    const identifier = "#tree" + treeNumber++;
    $(identifier).attr("src", "resources/runes/perkStyle/"+rune.id+".png");
    $(identifier).attr("data-original-title", rune.name);
    $(identifier).css({"display": "block"});

    if (rune.id === 8000) {
        $(identifier).css("border-style", "solid");
        $(identifier).css("border-width", "2px");
        $(identifier).css("border-color", "#bba97c");
    } else if (rune.id === 8100) {
        $(identifier).css("border-style", "solid");
        $(identifier).css("border-width", "2px");
        $(identifier).css("border-color", "#d94545");
    } else if (rune.id === 8200) {
        $(identifier).css("border-style", "solid");
        $(identifier).css("border-width", "2px");
        $(identifier).css("border-color", "#8d97f9");
    } else if (rune.id === 8300) {
        $(identifier).css("border-style", "solid");
        $(identifier).css("border-width", "2px");
        $(identifier).css("border-color", "#49b0bc");
    } else if (rune.id === 8400) {
        $(identifier).css("border-style", "solid");
        $(identifier).css("border-width", "2px");
        $(identifier).css("border-color", "#a2d489");
    }
}

function addRuneToPanel(rune) {
    const identifier = "#rune" + nextRuneNumber++;
    $(identifier).attr("src", "resources/runes/perk/"+rune.id+".png");
    $(identifier).attr("data-original-title", rune.name);
    $(identifier).attr("data-content", runeDescriptions[rune.id].baronfight);
    $(identifier).attr("data-rune-id", rune.id);

    $(identifier).css({"display": "block"});
    $(identifier).popover("enable");
}

function resetRunePanel() {
    $(".runeTable img").attr("src", RUNE_PLACEHOLDER);
    $(".runeTable img").css("border", "none");
    $(".rune ~ .cooldown-half").css({"opacity":0});
    $(".rune").popover("disable");

    nextRuneNumber = 1;
    treeNumber = 1;
}

function updateStackCount(count) {

    for (var i = 0 ; i < playerStats.currentRunes.length ; i++) {
        if (runeDescriptions[playerStats.currentRunes[i].id].stacks) {
            updateRuneCooldown(playerStats.currentRunes[i].id, GAME_STACK_DURATION);
        }
    }

}

function updateRuneCooldown(runeid, duration) {
    if (timeOuts[runeid]) {
        for (var i = 0 ; i < timeOuts[runeid].length; i++) {
            clearTimeout(timeOuts[runeid][i]);
        }
    }

    var position;

    for (position = 1; position <= 6; position++) {
        if ($("#rune" + position).attr("data-rune-id") == runeid) {
            break;
        }
    }

    timeOuts[runeid] = [];

    $("#rune" + position + " ~ .cooldown-half").css({"opacity":1});

    $("#rune" + position + " ~ .cooldown-half .cooldown-half-rotator-right").css({
        "transform":"rotate(180deg)",
        "transition":"transform "+(duration/2000)+"s",
        "transition-timing-function":"linear"
    });


    timeOuts[runeid][0] = setTimeout( function(){
        $("#rune" + position + " ~ .cooldown-half .cooldown-half-rotator-left").css({
            "transform":"rotate(180deg)",
            "transition":"transform "+(duration/2000)+"s",
            "transition-timing-function":"linear"
        });
    }, duration/2 );

    timeOuts[runeid][1] = setTimeout( function(){
        $("#rune" + position + " ~ .cooldown-half .cooldown-half-rotator-right").css({"transform":"rotate(0deg)","transition":"transform 0s"});
        $("#rune" + position + " ~ .cooldown-half .cooldown-half-rotator-left").css({"transform":"rotate(0deg)","transition":"transform 0s"});
        $("#rune" + position + " ~ .cooldown-half").css({"opacity":0});
    }, duration );
}

function showRuneInfoModal(rune) {
    $('#runeInfoModalTitle').text("You selected the rune: " + rune.name);
    $('#runeInfoModalText').html(rune.text);

    //championIcons

    var html = "<div class=\"card-group\">";
    var key = rune.name.toLowerCase().replace(/[^\w\s]/gi, '');
    for (i = 0; i < runeChampions[key].length; i++) {
        var champId = champNameToIds[runeChampions[key][i][0]];
        html += "<div class=\"card text-center\" style='width: 120px'>\n" +
            "  <img class=\"card-img-top\" src='" + DATA_DRAGON_URL + championIcons[champId]['image'] + "' >\n" +
            "  <div class=\"card-block\">\n" +
            "    <h4 class=\"card-title\">" + runeChampions[key][i][0] + "</h4>\n" +
            "    <p class=\"card-text\">" + runeChampions[key][i][1] + "</p>\n" +
            "  </div>\n" +
            "</div>"
    }
    html += "</div>";

    if (rune.video) {
        var videoHtml = "<p>Check out this video from Riot Games of it in action:</p>" + "<iframe width=\"560\" height=\"315\" src=\"" + rune.video + "\" frameborder=\"0\" gesture=\"media\" allow=\"encrypted-media\" allowfullscreen></iframe>";
        $('#runeInfoModalVideo').html(videoHtml);
    } else {
        $('#runeInfoModalVideo').html("");
    }

    $('#runeInfoModalChampions').html(html);
    $('#runeInfoModal').modal();
}

function setStunned(on) {
    if (on) {
        $(".playerSide").css("display", "block");
        setMessageBoxText("You have been stunned!");
    } else {
        $(".playerSide").css("display", "none");
    }
}

function setBaronStunned(on) {
    if (on) {
        $(".baronSide").css("display", "block");
    } else {
        $(".baronSide").css("display", "none");
    }
}

function setZhonyas(on) {
    if (on) {
        $("#playerImage").attr("src", "resources/images/veigarZhonyaT.png");
    } else {
        $("#playerImage").attr("src", "resources/images/veigar0T.gif");
    }
}

function setMessageBoxText(text) {
    $('#messageBox').text(text);
}

$('#closeRuneInfoModal').click(function() {
    postRuneInfoModal();
});

$(".spell").popover();
resetRunePanel();
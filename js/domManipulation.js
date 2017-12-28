
var HEALTH_BAR = $('.health-bar');
var BAR = HEALTH_BAR.find('.bar');
var HIT = HEALTH_BAR.find('.hit');
var nextRuneNumber = 1;

var MANA_BAR = $('.mana-bar');
var M_BAR = MANA_BAR.find('.bar');
var M_PTS = MANA_BAR.find('.hit');

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

function resetHealthBars() {
    HEALTH_BAR[0].dataset.total = playerStats.maxHP;
    HEALTH_BAR[1].dataset.total = GAME_BOSS_STATS(level).maxHP;

    HEALTH_BAR[0].dataset.value = HEALTH_BAR[0].dataset.total;
    HEALTH_BAR[1].dataset.value = HEALTH_BAR[1].dataset.total;

    BAR[0].style.width = "100%";
    BAR[1].style.width = "100%";

}

var timeOuts = {};


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


function addRuneToPanel(rune) {
    const identifier = "#rune" + nextRuneNumber++;
    $(identifier).attr("src", "resources/runes/perk/"+rune.id+".png");
    $(identifier).attr("data-original-title", rune.name);
    $(identifier).attr("data-content", runeDescriptions[rune.id].baronfight);

    $(identifier).css({"display": "block"});
}

function resetRunePanel() {
    $("#rune1").css({display: "none"});
    $("#rune2").css({display: "none"});
    $("#rune3").css({display: "none"});
    $("#rune4").css({display: "none"});
    $("#rune5").css({display: "none"});
    $("#rune6").css({display: "none"});
}

$(".spell, .rune").popover();
resetRunePanel();
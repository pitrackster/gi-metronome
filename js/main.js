Gibberish.init();
Gibberish.Time.export();
Gibberish.Binops.export();

sound1 = new Gibberish.Cowbell({amp: 1}).connect();

$(document).ready(function () {
    Gibberish.Time.bpm = parseInt(document.getElementById('tempo-input').value);
});

s1 = new Gibberish.Sequencer({
    target: sound1,
    key: 'note',
    durations: [beats(1)]
});

s2 = new Gibberish.Sequencer({
    values: [function () {
            flash();
        }],
    durations: [beats(1)]
});

function flash() {
    $('.light').addClass('on');
    window.setTimeout(function(){
        $('.light').removeClass('on');
    },100);
}

function start() {
    s1.start();
    s2.start();
}

function stop() {
    s1.stop();
    s2.stop();
}

function changeTempo() {
    Gibberish.Time.bpm = parseInt(document.getElementById('tempo-input').value);
}
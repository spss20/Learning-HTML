const score_1 = document.querySelector('#team-one');
const score_2 = document.querySelector('#team-two');
const pong_level = document.querySelector('#pong-level');

const start = document.querySelector('#start');
const player_one_btn = document.querySelector("#player-one");
const player_two_btn = document.querySelector("#player-two");
const reset_btn = document.querySelector("#reset");

player_one_btn.parentElement.classList.toggle('d-none');
player_two_btn.parentElement.classList.toggle('d-none');
reset_btn.disabled = true;

player_one_btn.addEventListener('click', function (e) {
    updateScore(this);
});

player_two_btn.addEventListener('click', function (e) {
    updateScore(this);
});

start.addEventListener('click', function () {
    console.log("START CLICKED");
    pong_level.disabled = true;
    reset_btn.disabled = false;
    start.parentElement.classList.toggle('d-none');
    player_one_btn.parentElement.classList.toggle('d-none');
    player_two_btn.parentElement.classList.toggle('d-none');
});

reset_btn.addEventListener('dblclick', reset);
reset_btn.addEventListener('longclick', reset);

function reset() {
    player_one_btn.disabled = false;
    player_two_btn.disabled = false;
    pong_level.disabled = false;
    reset_btn.disabled = true;

    score_1.innerText = '0';
    score_2.innerText = '0';
    score_1.classList.remove('wins');
    score_2.classList.remove('wins');
    score_1.classList.remove('loose');
    score_2.classList.remove('loose');

    start.parentElement.classList.toggle('d-none');
    player_one_btn.parentElement.classList.toggle('d-none');
    player_two_btn.parentElement.classList.toggle('d-none');
}

function updateScore(context) {
    let current_score_1 = parseInt(score_1.innerText);
    let current_score_2 = parseInt(score_2.innerText);
    let playing_points = parseInt(pong_level.value);

    if (context === player_one_btn) {
        console.log("Player ONE");
        current_score_1++;
    } else {
        console.log("Player TWO");
        current_score_2++;
    }
    score_1.innerText = current_score_1.toString();
    score_2.innerText = current_score_2.toString();

    if (current_score_1 === playing_points || current_score_2 === playing_points) {
        if (current_score_1 === playing_points) {
            //player one wins
            score_1.classList.add('wins');
            score_2.classList.add('loose');
        } else {
            //player two wins
            score_2.classList.add('wins');
            score_1.classList.add('loose');
        }
        player_one_btn.disabled = true;
        player_two_btn.disabled = true;
    }
}


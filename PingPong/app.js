const score_1 = document.querySelector('#team-one');
const score_2 = document.querySelector('#team-two');
const pong_level = document.querySelector('#pong-level');

const start = document.querySelector('#start');
const player_one_btn = document.querySelector("#player-one");
const player_two_btn = document.querySelector("#player-two");
const reset_btn = document.querySelector("#reset");
const toast = document.querySelector('#liveToast');
let warning_timout;

player_one_btn.parentElement.classList.toggle('d-none');
player_two_btn.parentElement.classList.toggle('d-none');
reset_btn.disabled = true;

player_one_btn.addEventListener('click', function (e) {
    updateScore(this);
});

player_two_btn.addEventListener('click', function (e) {
    updateScore(this);
});

start.addEventListener('click', start_game);
reset_btn.addEventListener('dblclick', reset);
reset_btn.addEventListener('click', () => {
    clearTimeout(warning_timout);
    warning_timout = setTimeout(() => {
        toast.classList.remove('hide');
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
            toast.classList.add('hide');
        }, 700);
    }, 300);
});

function start_game() {
    console.log("START CLICKED");
    pong_level.disabled = true;
    reset_btn.disabled = false;
    start.parentElement.classList.toggle('d-none');
    player_one_btn.parentElement.classList.toggle('d-none');
    player_two_btn.parentElement.classList.toggle('d-none');
}

function reset() {
    clearTimeout(warning_timout);
    player_one_btn.disabled = false;
    player_two_btn.disabled = false;
    pong_level.disabled = false;
    reset_btn.disabled = true;

    score_1.innerText = '0';
    score_2.innerText = '0';
    score_1.classList.remove('wins', 'loose');
    score_2.classList.remove('wins', 'loose');

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
    score_1.textContent = current_score_1;
    score_2.textContent = current_score_2;

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


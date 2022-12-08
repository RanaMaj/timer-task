let [s, m, h] = [0, 0, 0];
let int = 0;
let timer = document.getElementById('txt');

function startTimer() {
    if (int != null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 1000);
}

function pauseTimer() {
    clearInterval(int);
}

function resetTimer() {
    clearInterval(int);
    [s, m, h] = [0, 0, 0];
    document.getElementById('txt').innerHTML = "00 : 00 : 00";
}

function displayTimer() {
    s = s + 1;

    if (s == 60) {
        m++;
        if (m == 60) {
            h++;
        }
    }

    let seconds = s < 10 ? "0" + s : s;
    let minutes = m < 10 ? "0" + m : m;
    let hours = h < 10 ? "0" + h : h;
    timer.innerHTML = hours + " : " + minutes + " : " + seconds;
}
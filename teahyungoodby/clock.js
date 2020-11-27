const clockContainer = document.querySelector('.ja-clock');
const clockTitle = clockContainer.querySelector('h2');

function Dday() {
    const xmasDay = new Date("2020-12-2:00:00:00+0900");
    const now = new Date();
    const intervalTime = xmasDay - now

    const day = parseInt(intervalTime / (24 * 60 * 60 * 1000));
    const hours = parseInt(intervalTime / (60 * 60 * 1000) % 24);
    const minute = parseInt(intervalTime / (60 * 1000) % 60);
    const seconds = parseInt(intervalTime / 1000 % 60);
    const ms = intervalTime % 1000;

    clockTitle.innerText = `${
        day < 10 ? `0${day}` : day}d ${
        hours < 10 ? `0${hours}` : hours}h ${
        minute < 10 ? `0${minute}` : minute}m ${
        seconds < 10 ? `0${seconds}` : seconds}s ${
        ms
        }ms`
}
function start() {
    Dday();
    setInterval(Dday, 1);
}
start();































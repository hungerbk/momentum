const clock = document.querySelector("h1#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    clock.classList.add("big-font");
}

getClock();
setInterval(getClock, 1000); //매초마다 호출하기 대문에 실시간으로 보임


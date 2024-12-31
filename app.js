var anoNovo = new Date().getFullYear() + 1;

document.querySelector(".titulo").innerHTML = `Heading To ${anoNovo}`;
document.querySelector("title").innerHTML = `Heading To ${anoNovo}`;
var x = setInterval(function()
{
    var nextYear = new Date().getFullYear() + 1;
    var fim = new Date(`Jan 1, ${nextYear} 00:00:00`).getTime();
    var agora = new Date().getTime();
    var dist = fim - agora;
    console.log(nextYear)
    const html = document.querySelector('html');
    //Calculo tempo
    var days = Math.floor(dist / (1000*60*60*24));
    var hour = Math.floor((dist % (1000*60*60*24)) / (1000*60*60));
    var min = Math.floor((dist % (1000*60*60)) / (1000*60));
    var sec = Math.floor((dist % (1000*60)) / 1000);

    const daysEl = document.querySelector('.day');
    const hourEl = document.querySelector('.hour');
    const minuteEl = document.querySelector('.minute');
    const secondEl = document.querySelector('.second');

    daysEl.innerHTML = formatTime(days);
    hourEl.innerHTML = formatTime(hour);
    minuteEl.innerHTML = formatTime(min);
    secondEl.innerHTML = formatTime(sec);

    if(dist<0)
    {
        var ano = new Date().getFullYear();
        clearInterval(x);
        alert(`Feliz ${ano}!`);
        // document.querySelector(".titulo").innerHTML = `Feliz`;
        html.setAttribute("go", "true");
    }
})

 function formatTime(time)
 {
     return time >= 10 ? time : `0${time}`;
 }
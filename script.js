// Retrieve all the hands and define the degree of rotation of the seconds hand
const deg_r = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    // Recovery of the current time and conversion for adaptation to the analogue clock
    let day = new Date();
    let hh = day.getHours() * 30;
    // because 360/12h = 30 and getHours returns the time in 24-hour format
    let mm = day.getMinutes() * deg_r;
    let ss = day.getSeconds() * deg_r;

    // Rotation of the hands
    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    // the $ because the angle of rotation here is a variable
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}, 1000);


// Change of theme
const light_dark = document.querySelector('.mode_d');
const bg = document.querySelector('body');
const clock = document.querySelector('.clock');

light_dark.addEventListener('click', () => {
    if (mn.classList.contains('mn_l')) {
        light_dark.style.backgroundColor = '#ff105e';
        light_dark.style.color = '#fff';
        bg.style.backgroundColor = '#091921';
        clock.style.backgroundColor = '#091921';
        mn.classList.remove('mn_l');
        sc.classList.remove('sc_l');
    } else {
        light_dark.style.backgroundColor = '#fff';
        light_dark.style.color = '#3a89dd';
        bg.style.backgroundColor = '#3a89dd';
        clock.style.backgroundColor = '#fefefe';
        mn.classList.add('mn_l');
        sc.classList.add('sc_l');
    }
})
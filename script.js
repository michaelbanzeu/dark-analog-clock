setInterval(() => {
    // Récupérer toutes les aiguilles et définir le dégré de rotation de l'aiguille des secondes
    const deg_r = 6;
    const hr = document.querySelector('#hr');
    const mn = document.querySelector('#mn');
    const sc = document.querySelector('#sc');

    // Récupération de l'heure actuelle et conversion pour une adaptation à l'horloge analogique
    let day = new Date();
    let hh = day.getHours() * 30;
    // car 360/12h = 30 et que getHours renvoie l'heure dans un format 24h
    let mm = day.getMinutes() * deg_r;
    let ss = day.getSeconds() * deg_r;

    // Rotation des aiguilles
    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    // le $ car l'angle de rotation içi est une variable
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}, 1000);


// Changement de thème
var light_dark = document.querySelector('.mode_d');
var bg = document.querySelector('body');
var clock = document.querySelector('.clock');
var mn = document.querySelector('.mn');
var sc = document.querySelector('.sc');


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
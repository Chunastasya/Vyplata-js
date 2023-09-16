document.body.innerHTML += 'Mesicni vyplata:';
document.body.innerHTML += (7 * 320) * 21;
document.body.innerHTML += '<br>';
document.body.innerHTML += 'Dan:';
document.body.innerHTML += (((7 * 320) * 21)  * 0.6 ) * 0.15
document.body.innerHTML += '<br>';
document.body.innerHTML += Math.floor((((7 * 320) * 21)  * 0.6 ) * 0.15); 

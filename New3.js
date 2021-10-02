var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');

function limpiar() {
    document.getElementById("formulario").reset();
    setTimeout(function() {
        respuesta.innerHTML = '';
    },3000);
}

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    var datos = new FormData(formulario);

    fetch('connect.php', {
        method: 'POST',
        body: datos
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)

            respuesta.innerHTML = '<div class="alert alert-primary" role="alert">' + data + '</div>';
            limpiar();
        })
});
© 2021 GitHub, Inc.


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
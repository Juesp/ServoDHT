const tx1 = document.getElementById('tx1');

const database = firebase.database();

BtnEnviar.addEventListener ('click', (e) => {
    e.preventDefault();
    database.ref('/Actuador').set({
        angulo: parseInt(tx1.value)
    })
})


function getdata() {
    firebase.database().ref('Sensor/').once('value').then(function (snapshort) {
        var humedad = snapshort.val().Humedad;
        var temp = snapshort.val().temperatura;

        document.getElementById("tempe").innerHTML = temp
        document.getElementById("hume").innerHTML = humedad
    })
}
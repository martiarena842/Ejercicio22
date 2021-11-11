var numeros = Array();



function resul() {

    let num = document.getElementById("inputnum").value;
    numeros.push(num);

    document.getElementById("printt").innerText = "" + numeros;
    document.getElementById("inputnum").value = "";

}
function mayorr() {
    var maxnumero = Math.max(...numeros);
    if (maxnumero > 100) {

        document.getElementById("nummayor").innerHTML = "el numero mas grande es: " + maxnumero;
        document.getElementById("nummayor").style.color = "green";
    } else {
        document.getElementById("nummayor").innerHTML = "el numero mas grande es: " + maxnumero;
        document.getElementById("nummayor").style.color = "red";
    }
}
function menorr() {
    var minimonum = Math.min(...numeros);
    if (minimonum > 100) {
        document.getElementById("nummenor").innerHTML = "el numero mas chico es: " + minimonum;
        document.getElementById("nummenor").style.color = "red";
    } else {
        document.getElementById("nummenor").innerHTML = "el numero mas chico es: " + minimonum;
        document.getElementById("nummenor").style.color = "green";
    }
}







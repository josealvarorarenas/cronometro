'use strict'

let h = 0;
let m = 0;
let s= 0;
let mls = 0;
let timeStarted = 0;


let nodoTemporizador = document.querySelector("#temporizador");

let nodoInicio = document.querySelector("#inicio");

let nodoParar = document.querySelector("#parar");

let nodoReset = document.querySelector("#reset");

let nodoGrabar = document.querySelector("#grabar");

let nodoAlmacenar = document.querySelector("#almacenar");



nodoInicio.addEventListener("click", start);
nodoParar.addEventListener("click", parar);
nodoReset.addEventListener("click", reset);
nodoGrabar.addEventListener("click", grabarContador);



function write(){
    let ht, mt, st, mlst;
    mls++;
    
    if (mls > 99){ s++ ; mls= 0; }
    if (s > 59){ m++; s= 0;}
    if (m > 59){ h++; m= 0;}
    if (h > 24) h= 0;
    
    mlst = ('0' + mls).slice(-2);
    st = ('0' + s).slice(-2);
    mt = ('0' + m).slice(-2);
    ht = ('0' + h).slice(-2);
 
    nodoTemporizador.innerHTML = `${ht}:${mt}:${st}.${mlst}`;
 }

 function start(){
    write();
    timeStarted = setInterval(write, 10);
    nodoInicio.addEventListener("click", start);
 }

 function parar(){
       clearInterval(timeStarted);
       nodoInicio.addEventListener("click", start);
       
 }

 function reset(){   
       clearInterval(timeStarted);
       nodoTemporizador.innerHTML = "00:00:00.00"
       h= 0; m= 0 ; s= 0; mls= 0;
       nodoReset.addEventListener("click", start);      
 }

function grabarContador(){
    if(nodoTemporizador.innerHTML == "0.00"){
        console.log("click en INICIAR");
    }
    else{
        let p = document.createElement ('ul');
        p.innerHTML = `<li>Tiempo : ${h}:${m}:${s}.${mls}
        </li>
        `;

        nodoAlmacenar.appendChild(p);
    }
}


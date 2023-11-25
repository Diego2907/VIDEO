
// let video = document.querySelector(".botonVideo");

// video.addEventListener("play", function(){
//     console.log("Di play en el video");
// });
// video.addEventListener('pause', function(){
//     console.log("Di pause en el video");
// });
// video.addEventListener('seeking', function(){
//     console.log("se esta viendo una parte del video", this.currentTime);
// });
// video.addEventListener('ended', function(){
//     console.log("termino el video");
//     alert("se termino el video");
//     let decision = confirm('¿Quieres ver el video de nuevo?');
//     console.log(decision);
//     if (decision){
//         video.play()
//     }else{
//         window.location = "https://www.google.com";
//     }
// });

// setInterval
// setTimeout

let temporizador = setInterval(function(){
    ponercolor();
},3000);

function ponercolor(){
    let pantalla = document.body;
    pantalla.style.backgroundColor =
    pantalla.style.backgroundColor = pantalla.style.backgroundColor == "red" ? "green"  : "red";
};

// Arreglos , Vectores , Arrays

// let array = ['uno' , 'dos' , 'tres'];

// let array2 = ['cuatro' , 'cinco' , 'seis'];

// let multidimensional = [array , array2];
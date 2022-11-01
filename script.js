 
const palabras = ['gato', 'perro', 'casa', 'java', 'uva', 'pera', 'elefante', 'mariposa'];//array de palablas
let des_boton = document.getElementById('btn_agregar').disabled;
let des_input = document.getElementById('id_texto').disabled;//desabilito input

palabra_correcta = palabras[Math.floor(Math.random()*palabras.length)];//obtengo una palabra aleatoria
let pistaLetra=document.getElementById('id_pista');
pistaLetra.innerHTML = 'Empieza con la letra: '+ palabra_correcta[0];//muestro la primera letra de la palabra
let palabra_guiones = palabra_correcta.replace(/./g, "_ ");//reemplazo las letras de la palabra por guiones

let contador = 0;
document.getElementById('id_guion').innerHTML = palabra_guiones;//escribo cada letra
document.getElementById('btn_agregar').addEventListener('click', () => {
    const letra_ingresada = document.getElementById('id_texto').value;//obtengo la letra que ingresa
    let si_falla = true;
    //comparo cada letra ingresada con las letras de la palabra_correcta
    for( const i in palabra_correcta){
        if(letra_ingresada === palabra_correcta[i]){//comparo si la letra introducida concida con palabra_correcta
            palabra_guiones = palabra_guiones.replaceAt(i*2, letra_ingresada);//donde encuentro la concidencia cambio la palabra
            si_falla = false;
        }else if(letra_ingresada ===''){
            document.getElementById('sugerencia').style.display='flex';//si no ingresa ningun caracter muestro sugerencia
        }
    }
    if(si_falla){
        contador++;
        document.getElementById('id_ahorcado').style.//accedo a la imagen
        backgroundPosition = -(297*contador)+ 'px 0';//la desplazo(izq) por la cantidad de fallos
        if(contador === 5){//contador igual al nro de intentos
            des_boton = true;//desabilito boton
            des_input = true;//desabilito input
            setTimeout(function(){//espera 1500ml y muestra que perdiste
                document.getElementById("id_formulario").style.display = 'none';
                document.getElementById('mensaje_perder').style.display='flex';
                document.getElementById('perdedor').style.display='flex';
            },1000);
        }
    }else if(palabra_guiones.indexOf('_')<0){
            des_boton = true;//desabilito boton
            des_input = true;//desabilito input
            setTimeout(function(){//espera 1500ml y muestra que ganas
                document.getElementById("id_formulario").style.display = 'none';
                document.getElementById('mensaje_ganador').style.display='flex';
                document.getElementById("ganador").style.display='flex';  
            },1500);
    }
    document.getElementById('id_guion').innerHTML = palabra_guiones;//escribo cada letra
    document.getElementById('id_texto').value = '';
    document.getElementById('id_texto').focus();
});
//funcion para sustituir en una posicion
String.prototype.replaceAt= function(index, character) {
    if (index >= this.length) {
        return this.valueOf();
    } 
    return this.substring(0, index) + character + this.substring(index+character.length);
 }

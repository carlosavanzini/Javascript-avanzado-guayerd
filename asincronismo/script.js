const p=document.querySelector("#planeta"); // traemos desde html

const planetas= new XMLHttpRequest();// aca lo que estamos usando es AJAX(Asynchronous JavaScript And XML) todo el codigo que trae lo trae en JSON. creamos un objeto de tipo request
const url='https://swapi.dev/api/planets/1/'; // esta en la direccion de la api
planetas.open("GET",url);// aca decimos que tipo de metodo vamos a usar que es Get y la url que vamos a usar. preparamos y abrimos la coneccion HTTP
planetas.send() // ejecutamos la coneccion HTTP
// una ves que envies los datos con send quiero que hagas lo de abajo
planetas.onreadystatechange=(e)=>{//creamos un evento que escucha y espera a que cambie el estado de mi peticion
    planeta=JSON.parse(planetas.responseText)//el json es para traer los datos en no fomato text
    console.log(planeta)
    p.innerHTML=planeta.name
}

//lo que tenemos que darle bola en console log es status y response

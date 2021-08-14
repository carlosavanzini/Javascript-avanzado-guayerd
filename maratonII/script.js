                                            // Maratón 1

// triple ed los que son pares
// La NASA nos pidió un programa que calcule la edad de las personas en sus planetas favoritos. Para eso necesitamos una web (sencilla!!) donde solicitaremos mediante un input y un select al usuario, su edad en la tierra y su planeta favorito. Luego, mostrarle en un tercer input o en un párrafo en el html, su edad correspondiente al planeta que eligió.
// Días que tardan en dar la vuelta al sol:
let Mercurio = 87.97;
let Venus= 224.7;
let Tierra= 365.26;
// (Por esto cada 4 años hay un año bisiesto)
let Marte=686.68;
let Jupiter= 4331.98;
let Saturno= 10760.55;
let Urano= 30685.49;
let Neptuno= 60191.19;
let total=0;
// // Por ejemplo si tu edad son 23 años, en Marte tu edad será: 12.23 años. Puede mostrarse redondeado a 12. (Por eso todos quieren ir a Marte, para ser más jóvenes!!!)

    let e= document.querySelector("#calcular")
    let calculo=()=>{
                edad= document.querySelector("#edad").value;
               let planetas= document.querySelector("#planetas");
               let planeta=planetas.value;
               switch (planeta) {
                    case "mercurio":
                       total=((edad*Tierra)/Mercurio).toFixed(2)
                       document.querySelector("#mostrar").innerText=`Su edad en el planeta Mercurio es de ${total} años`;
                       break;
                    case "venus":
                       total=((edad*Tierra)/Venus).toFixed(2)
                       document.querySelector("#mostrar").innerText=`Su edad en el planeta Venus es de ${total} años`;
                       break;
                    case "tierra":
                       total=edad
                       document.querySelector("#mostrar").innerText=`Su edad en la tierra es de ${total} años`
                       break;
                    case "marte":
                       total=((edad*Tierra)/Marte).toFixed(2)
                       document.querySelector("#mostrar").innerText=`Su edad en el planeta Marte es de ${total} años`;
                       break;
                    case "jupiter":
                       total=((edad*Tierra)/Jupiter).toFixed(2)
                       document.querySelector("#mostrar").innerText=`Su edad en el planeta Jupiter es de ${total} años`;
                       break;
                    case "saturno":
                       total=((edad*Tierra)/Saturno).toFixed(2)
                       document.querySelector("#mostrar").innerText=`Su edad en el planeta Saturno es de ${total} años`;
                       break;
                    case "urano":
                       total=((edad*Tierra)/Urano).toFixed(2)
                       document.querySelector("#mostrar").innerText=`Su edad en el planeta Saturno es de ${total} años`;
                       break;
                    case "neptuno":
                       total=((edad*Tierra)/Neptuno).toFixed(3)
                       document.querySelector("#mostrar").innerText=`Su edad en el planeta Saturno es de ${total} años`;
                       break;
               
                   default:
                       break;
               }
    }
    e.addEventListener("click",calculo)



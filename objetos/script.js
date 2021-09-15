// Ejercicios de objetos

//1) a) Crear un constructor de personas con las siguientes características: Nombre, apodo, hobbies, película favorita, lugar de residencia. 

    // class Persona {
    //     constructor(nombre, apodo, hobbies, peliculaFavorita, lugar) {
    //         this.nombre = nombre;
    //         this.apodo = apodo;
    //         this.hobbies = hobbies;
    //         this.peliculaFavorita = peliculaFavorita;
    //         this.lugar = lugar;
    //         this.info=()=>{
    //             console.log(`Mi nombre es ${this.nombre} mi apodo es ${this.apodo}, mi hobbies es ${this.hobbies}, mi pelicula favorita es ${this.peliculaFavorita} y vivo en la ciudad de ${this.lugar}`)            }
    //     }
    // }
       

    // const DatosCarlos = new Persona("Carlos", "Pelo", "Programar", "The notebook", "Entre Rios");
    //const DatosAlvaro = new Persona ("Alvaro","Alva","Programar","Vengadores","Buenos Aires");

    

    // console.log(datosAlvaro.info());
    // console.log(datosCarlos.info());


//     a) Crear un tipo de objeto “cuenta bancaria” que tenga los siguientes datos: Tipo de cuenta (Caja de ahorro, o cuenta corriente), saldo, titular y red que opera (link o Banelco).
// b) Incluir la acción de retirar dinero, que reciba un parámetro y actualice el nuevo valor del saldo.
// c) Incluir la acción de depositar dinero, que recibe un parámetro y actualice el nuevo valor del saldo.
// d) Incluir la acción de mostrar un saludo personalizado al titular, dandole la bienvenida a su red. (“Ej: Bienvenida Claudia a la red Banelco”).
// e) Incluir la acción de mostrar el saldo.
// f) Incluir otras acciones que consideren.
// g) Crear diferentes instancias y probar las acciones.

class CuentaBancaria {
   
    constructor(tipoCuenta, saldo, titular, red,) {
        this.tipoCuenta = tipoCuenta;
        this.saldo = saldo;
        this.titular = titular;
        this.red = red;
        this.saludo = () => {
            console.log(`Hola ${this.titular} bienvenido a la red ${this.red}`)
        }
        this.retirar = (dinero) => {
            this.saldo = this.saldo - dinero;
           console.log(`El saldo actual es luego del retiro es ${this.saldo}`);
        }
        this.depositar = (dinero) => {
            this.saldo = this.saldo + dinero;
            console.log(`El saldo actual es luego del deposito es ${this.saldo}`);
            
        }
       
        this.mostrarSaldo = () => {
            console.log(`Tu saldo es de ${this.saldo}`)
        }
    }
}

const cuenta = new CuentaBancaria("Caja de ahorro", 500, "Carlos", "Banelco",200);
cuenta.saludo()
cuenta.mostrarSaldo()
cuenta.retirar(100)
cuenta.depositar(200)






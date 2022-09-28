class Ilustracion {
    constructor(id,nombre,tamanio,precio,entrega) {
        this.id = id;
        this.nombre = nombre;
        this.tamanio = tamanio;
        this.precio = precio;
        this.entrega = entrega;
    }
}

const ilustraciones = [];
const btnPresupuesto = document.getElementById("btn-presupuesto")
const tabla = document.getElementById("tabla")
const buscaIlustracion = document.getElementById("buscaIlustracion")
let presupuesto = [];



/* Funciones Generales */
function generador() {
    ilustraciones.push(new Ilustracion(01,"Element - Nijah Houston","27", 10000, 24));
    ilustraciones.push(new Ilustracion(02,"Element - Nijah Houston", "26/5", 18000, 24));
    ilustraciones.push(new Ilustracion(03,"Element - Nijah HoustonS", "25", 10500, 24));
    ilustraciones.push(new Ilustracion(04,"Element - Nijah Houston - COLECCION" , "8.5", 27000, 16));
    ilustraciones.push(new Ilustracion(05,"Element - Nijah Houston", "7.9", 25000, 18));
    ilustraciones.push(new Ilustracion(06,"Element - Nijah Houston", "8", 16000, 18));
    ilustraciones.push(new Ilustracion(07,"Element - Nijah Houston", "8,1.4", 10000, 20));
    ilustraciones.push(new Ilustracion(08,"Element - Nijah Houston", "27/5", 14000, 24));
    ilustraciones.push(new Ilustracion(09,"Element - Nijah Houston", "26",15600, 24));    
} 

function cargarTabla() {
    let fila = ""
    ilustraciones.forEach( ilustracion => {
        fila = `<tr>
                    <td>${ilustracion.id}</td>
                    <td>${ilustracion.nombre}</td>
                    <td>${ilustracion.tamanio}</td>
                    <td>${ilustracion.precio}</td>
                    <td>${ilustracion.entrega}</td>
                    <td><a id="btn${ilustracion.id}"<a class="waves-effect waves-light btn">+</a></td>
                </tr>`
                tabla.innerHTML += fila
    });
}

function Botones() {
    ilustraciones.forEach(ilu => {
        const btn = document.querySelector(`#btn${ilu.id}`)
        btn.addEventListener("click", ()=> agregarAPresupuesto(`${ilu.id}`))
    });
}

function agregarAPresupuesto(id) {
    const ilustracion = ilustraciones.find(ilu => ilu.id == id)
    presupuesto.push(ilustracion)
    localStorage.setItem("presupuesto", JSON.stringify(presupuesto))
}
function recuperarPresupuesto() {
if (localStorage.getItem("presupuesto")) {
    presupuesto = JSON.parse(localStorage.getItem("presupuesto"))
}
}

/* Llamada Funciones */
generador()
cargarTabla()
Botones()
recuperarPresupuesto() 



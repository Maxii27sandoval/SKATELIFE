const presupuesto = JSON.parse(localStorage.getItem("presupuesto"))

/* Funciones */
function recuperoPresupuesto() {
    let tabla = document.getElementById("tablaPresupuesto")
    presupuesto.forEach(ilust => {
        let fila = `<tr id="row${ilust.id}">
                                    <td>${ilust.nombre}</td>
                                    <td>${ilust.precio}</td>
                                    <td><a id="btn${ilust.id}"<a class="waves-effect waves-light btn">-</a></td>
                                <tr>`
                            tabla.innerHTML += fila
    });
}

function BotonEliminar() {
    presupuesto.forEach(ilust => {
        const btnPres = document.querySelector(`#btn${ilust.id}`)
        btnPres.addEventListener("click", () => EliminarPresupuesto(`${ilust.id}`))
    })
}

function calcularTotal () {
    const total = presupuesto.reduce((tot, pres) => tot + pres.precio, 0)
    let leyenda = document.getElementById("total")
    leyenda.innerText = `El total de su compra será de $ ${total}`
}

function EliminarPresupuesto(id) { 
    let indice = presupuesto.find ( p => p.id == id)
    let aEliminar = presupuesto.indexOf(indice,0)
    presupuesto.splice(aEliminar,1)
    localStorage.setItem("presupuesto", JSON.stringify(presupuesto));
    let fila = document.getElementById(`row${id}`)
    fila.remove()
    calcularTotal()
}

/* LLamado a Funciones */
recuperoPresupuesto()
BotonEliminar()
calcularTotal()

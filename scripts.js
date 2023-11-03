const entrada = 2000;

let descuento2d = 0.4;
let descuento3d = 0.2;

const categoria = document.getElementById('categoria');
const cantidad = document.getElementById('cantidad'); 
const totalAPagar = document.getElementById('totalAPagar');
const borrar = document.getElementById('borrar');
const resumen = document.getElementById('resumen');

function calcularPago() { 
    let importe = cantidad.value * entrada;
    switch (categoria.value) {
        case "2D": 
            importe = importe - (importe * descuento2d);
            break;

        case "3D":
            importe = importe - (importe * descuento3d);
            break;

        case "5D":
            importe = importe;
            break;

        default:
            break;
    }

    totalAPagar.textContent = `Total a Pagar: $${importe}`;
}

resumen.addEventListener('click', (e) => {
    e.preventDefault(); 
    calcularPago();
});

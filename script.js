document.getElementById('calcular').addEventListener('click', function () {
    const tipoCombustible = document.getElementById('tipoCombustible').value;
    const cantidad = document.getElementById('galones').value;
    const precio = document.getElementById('precio').value;
    if (tipoCombustible === '' || cantidad === '' || precio === '') {
        alert('De ingresar todos los campos requeridos');
        return;
    }

    const total = precio * cantidad;
    const exemption = document.getElementById('exemption')
        ? parseFloat(document.getElementById('exemption').value) || 0
        : 0;
    const exemptionAmount = total * (exemption / 100);
    const finalTotal = total - exemptionAmount;

    document.getElementById('resultados').innerHTML = `
<p>Precio: Q${total.toFixed(2)}</p>
<p>Total: Q${finalTotal.toFixed(2)}</p>
<p>Exención Aplicada: Q${exemptionAmount.toFixed(2)}</p>
<p>Total Final a Pagar: Q${finalTotal.toFixed(2)}</p>
`;
document.getElementById('resultados').textContent = `Precio: Q${total.toFixed(2)} - Total: Q${finalTotal.toFixed(2)} - Exención Aplicada: Q${exemptionAmount.toFixed(2)} - Total Final a Pagar: Q${finalTotal.toFixed(2)}`;

			mostrarResultado();
});

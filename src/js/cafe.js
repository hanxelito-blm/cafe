function generarRecibo() {
  // Datos de entrada del ejercicio
  const textoPedido = " Café Latte, Té Verde, Muffin de Arándanos, Café Latte ";
  const preciosCrudos = ["2500 colones", "1800.50 colones", "3200 colones"];

  // 1. trim() y split()
  const productos = textoPedido.trim().split(", ");

  // 2. includes()
  const tieneMuffin = productos.includes("Muffin de Arándanos");

  // 3. some()
  const tieneNombreLargo = productos.some(producto => producto.length > 15);

  // 4. find()
  const primerCafe = productos.find(producto => producto.includes("Café"));

  // 5. slice()
  const pedidoResumen = productos.slice(0, 2);

  // 6. parseInt() y parseFloat()
  let total = 0;
  preciosCrudos.forEach(precioTexto => {
    if (precioTexto.includes(".")) {
      total += parseFloat(precioTexto);
    } else {
      total += parseInt(precioTexto);
    }
  });

  // 7. replace()
  const etiquetaMoneda = "2500 colones".replace("colones", "CRC");

  // 8. repeat()
  const separador = "-".repeat(30);

  // 9. toString()
  const totalString = total.toString();

  // 10. console.log() - Impresión del recibo
  console.log(separador);
  console.log("    RECIBO CAFETERÍA KODEX    ");
  console.log(separador);
  console.log("Resumen del Pedido:", pedidoResumen.join(", "));
  console.log("¿Tiene Muffin?:", tieneMuffin);
  console.log("¿Nombre largo?:", tieneNombreLargo);
  console.log("Primer Café hallado:", primerCafe);
  console.log("Formato de Moneda:", etiquetaMoneda);
  console.log(separador);
  console.log("TOTAL A PAGAR: " + totalString + " CRC");
  console.log(separador);
}

// Ejecución de la función
generarRecibo();
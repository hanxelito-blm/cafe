// ==========================================
// 1. LISTA DE 15 PRODUCTOS DE EJEMPLO
// ==========================================
const productos = [
  "Manzanas rojas",                  // 14 caracteres
  "Pan integral de centeno",         // 23 caracteres (> 15) -> Cumple condición
  "Leche entera",                    // 12 caracteres
  "Café de grano",                   // 13 caracteres
  "Arroz blanco",                    // 12 caracteres
  "Aceite de oliva virgen extra",    // 28 caracteres (> 15) -> Cumple condición
  "Queso gouda",                     // 11 caracteres
  "agotado",                         // "agotado"            -> Cumple condición
  "Avena en hojuelas",               // 17 caracteres (> 15) -> Cumple condición
  "Mantequilla",                     // 11 caracteres
  "Huevos frescos",                  // 14 caracteres
  "Yogur natural",                   // 13 caracteres
  "Jabón líquido para manos",        // 23 caracteres (> 15) -> Cumple condición
  "Pasta de dientes",                // 16 caracteres (> 15) -> Cumple condición
  "Detergente en polvo"              // 19 caracteres (> 15) -> Cumple condición
];

// ==========================================
// 2. FUNCIÓN DE VALIDACIÓN DE INVENTARIO
// ==========================================
function validarInventario(productos) {
  // Comprueba si el texto exacto "agotado" está en la lista
  const tieneAgotado = productos.includes("agotado");
  
  // Comprueba si al menos un producto tiene más de 15 caracteres
  const tieneNombreLargo = productos.some(producto => producto.length > 15);
  
  // Devuelve true si cualquiera de las dos condiciones es verdadera
  return tieneAgotado || tieneNombreLargo;
}

// ==========================================
// 3. EJECUCIÓN Y SALIDA
// ==========================================
const resultado = validarInventario(productos);

console.log("==========================================");
console.log("   RESULTADO DE LA VALIDACIÓN");
console.log("==========================================");
console.log("¿El inventario es válido?:", resultado);
console.log("==========================================");








// ==========================================
// CÓDIGO CORREGIDO Y FUNCIONAL
// ==========================================

const usuarios = [
  { nombre: "Ana", edad: 15 },
  { nombre: "Carlos", edad: 22 },
  { nombre: "Beatriz", edad: 17 },
  { nombre: "David", edad: 19 },
  { nombre: "Elena", edad: 30 },
  { nombre: "Fernando", edad: 14 }
];

// 1. Corrección de find(): Se usa el operador >= 18 para comparar
const primerMayor = usuarios.find(u => u.edad >= 18);

// 2. Corrección de slice(): Se usan índices numéricos (0, 3) para obtener los 3 primeros
const tresPrimeros = usuarios.slice(0, 3);

// Imprimir los resultados en consola
console.log("Primer mayor de edad:", primerMayor);
console.log("Tres primeros usuarios:", tresPrimeros);





const texto = "  Hola, MUNDO!!  ";

const solucionA = texto
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-s]/g, "")  // Elimina todo lo que no sea letra o espacio
  .replace(/\s+/g, " ");       // Normaliza espacios múltiples si los hubiera

console.log(solucionA); // "hola mundo"





const casos = [
  "42.75",
  "  3.1416  ",
  "100px",
  "$150",
  "0.005kg",
  "",
  "0x1A",
  "12.34.56"
];

console.table(casos.map((val, index) => ({
  "Caso #": index + 1,
  "Entrada": `"${val}"`,
  "parseInt()": parseInt(val),
  "parseFloat()": parseFloat(val)
})));

function generarFacturaRefactorizada(cadenaProductos) {
  // 1. Usamos repeat() para generar la línea separadora dinámicamente
  const separador = "-".repeat(40);
  
  // 2. Usamos split() para dividir la cadena de texto separada por comas en un arreglo
  const listaProductos = cadenaProductos.split(",");
  
  let factura = `FACTURA DE COMPRA\n${separador}\n`;
  
  // Recorremos los productos limpios
  listaProductos.forEach(producto => {
    factura += `- ${producto.trim()}\n`;
  });
  
  factura += separador;
  return factura;
}

// Ejemplo de uso:
console.log(generarFacturaRefactorizada("Manzana, Pan, Leche, Huevos"));


function contarPalabras(frase) {
  // 1. Elimina espacios en blanco al inicio y final con trim()
  // 2. Divide la cadena en palabras por espacios con split()
  // 3. Usa una expresión regular /\s+/ para manejar múltiples espacios internos
  const palabras = frase.trim().split(/\s+/);
  
  return palabras.length;
}

// Prueba con el ejemplo indicado
const frasePrueba = " me gusta llantiar";
const totalPalabras = contarPalabras(frasePrueba);

console.log("Frase:", `"${frasePrueba}"`);
console.log("Número de palabras:", totalPalabras); // Debería devolver 4

const notas = [3, 5, 4, 8, 6];

// Busca la primera nota que sea mayor o igual a 6
const primerAprobado = notas.find(nota => nota >= 6);

console.log("Primera nota aprobada:", primerAprobado); // Devuelve: 8

function esSegura(clave) {
  // Verificamos si la clave contiene el carácter '#'
  const tieneNumeral = clave.includes("#");
  
  // Convertimos el string a arreglo de caracteres y evaluamos si alguno es un dígito del 0 al 9
  const tieneNumero = clave.split("").some(caracter => caracter >= "0" && caracter <= "9");
  
  return tieneNumeral && tieneNumero;
}

// Pruebas
const prueba1 = esSegura("casa#4");
const prueba2 = esSegura("casa");

console.log("Prueba 'casa#4':", prueba1); // Debería devolver: true
console.log("Prueba 'casa':", prueba2);   // Debería devolver: false


 const fechaOriginal = "2025-07-24";

// 1. Extraer el año usando slice() (posiciones 0 a 4)
const anio = fechaOriginal.slice(0, 4);

// 2. Generar el formato "24/07/2025" combinando slice() y replace()
const mes = fechaOriginal.slice(5, 7);
const dia = fechaOriginal.slice(8, 10);

// Formateamos la fecha deseada "DD/MM/AAAA"
const fechaFormateada = `${dia}/${mes}/${anio}`;

// Alternativa adicional usando replace con expresión regular:
// const fechaFormateada = fechaOriginal.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$3/$2/$1");

console.log("Año extraído con slice():", anio);
console.log("Fecha formateada (DD/MM/AAAA):", fechaFormateada);




const textoUnidades = "15 unidades";
const textoPeso = "3.50 kg";

/* 
 * EXPLICACIÓN:
 * 1. Usamos parseInt() en "15 unidades" porque representa una cantidad entera de objetos/artículos.
 * 2. Usamos parseFloat() en "3.50 kg" porque el peso es una magnitud continua que incluye decimales 
 *    que se deben preservar para mantener la precisión matemática.
 */

const unidades = parseInt(textoUnidades); // Extrae el entero 15
const peso = parseFloat(textoPeso);       // Extrae el flotante 3.50

// Sumamos los dos valores numéricos
const sumaTotal = unidades + peso;

// Convertimos la suma final a cadena de texto usando toString()
const resultadoCadena = sumaTotal.toString();

console.log("Resultado final (como string):", `"${resultadoCadena}"`);
console.log("Tipo de dato:", typeof resultadoCadena);
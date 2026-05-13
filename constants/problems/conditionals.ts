
import { Problem, Difficulty } from '../../types';

export const conditionalProblems: Problem[] = [
  // Fácil
  {
    id: 'cond-easy-1', topic: 'conditionals', title: 'Verificador de Edad',
    description: 'Escribe una función que determine si una persona es mayor de edad (18 años o más).',
    difficulty: Difficulty.EASY,
    examples: [{ input: 'edad = 20', output: 'Mayor de edad' }, { input: 'edad = 15', output: 'Menor de edad' }],
    defaultCode: 'def verificar_edad(edad):\n  # Tu código aquí\n  pass',
    datasets: [{input: "18", expectedOutput: "Mayor de edad"}, {input: "17", expectedOutput: "Menor de edad"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa una declaración `if` para comparar la edad con 18. Recuerda el caso de igualdad.'
  },
  {
    id: 'cond-easy-2', topic: 'conditionals', title: 'Número Positivo, Negativo o Cero',
    description: 'Escribe una función que determine si un número es positivo, negativo o cero.',
    difficulty: Difficulty.EASY,
    examples: [{ input: 'numero = 5', output: 'Positivo' }, { input: 'numero = -2', output: 'Negativo' }, { input: 'numero = 0', output: 'Cero' }],
    defaultCode: 'def verificar_signo(numero):\n  # Tu código aquí\n  pass',
    datasets: [{input: "10", expectedOutput: "Positivo"}, {input: "-1", expectedOutput: "Negativo"}],
    authorSignature: "<JGdev/>",
    hint: 'Necesitarás una estructura `if-elif-else`. Compara el número con 0.'
  },
  {
    id: 'cond-easy-3', topic: 'conditionals', title: 'Vocal o Consonante Simple',
    description: "Dada una letra minúscula, determina si es una vocal ('a', 'e', 'i', 'o', 'u').",
    difficulty: Difficulty.EASY,
    examples: [{ input: "letra = 'a'", output: 'Vocal' }, { input: "letra = 'b'", output: 'Consonante' }],
    defaultCode: 'def es_vocal_simple(letra):\n  # Tu código aquí\n  pass',
    datasets: [{input: "'e'", expectedOutput: "Vocal"}, {input: "'z'", expectedOutput: "Consonante"}],
    authorSignature: "<JGdev/>",
    hint: "Puedes usar el operador `in` con una cadena o lista de vocales: `letra in 'aeiou'`."
  },
  {
    id: 'cond-easy-4', topic: 'conditionals', title: 'Acceso Permitido',
    description: 'Si la contraseña es "1234", permite el acceso. De lo contrario, deniégalo.',
    difficulty: Difficulty.EASY,
    examples: [{ input: 'clave = "1234"', output: 'Acceso Permitido' }, { input: 'clave = "abcd"', output: 'Acceso Denegado' }],
    defaultCode: 'def verificar_acceso(clave):\n  # Tu código aquí\n  pass',
    datasets: [{input: '"1234"', expectedOutput: "Acceso Permitido"}, {input: '"0000"', expectedOutput: "Acceso Denegado"}],
    authorSignature: "<JGdev/>",
    hint: 'Compara la `clave` ingresada con la cadena "1234" usando `==`.'
  },
  {
    id: 'cond-easy-5', topic: 'conditionals', title: 'Fin de Semana',
    description: "Dado un día de la semana ('lunes'...'domingo'), indica si es fin de semana.",
    difficulty: Difficulty.EASY,
    examples: [{ input: "dia = 'sabado'", output: 'Fin de semana' }, { input: "dia = 'lunes'", output: 'Día de semana' }],
    defaultCode: 'def es_fin_de_semana(dia):\n  # Tu código aquí\n  pass',
    datasets: [{input: "'domingo'", expectedOutput: "Fin de semana"}, {input: "'miercoles'", expectedOutput: "Día de semana"}],
    authorSignature: "<JGdev/>",
    hint: "Usa el operador `or` para verificar si el día es 'sabado' o 'domingo'."
  },
  {
    id: 'cond-easy-6', topic: 'conditionals', title: 'Número Par o Impar',
    description: 'Escribe una función que determine si un número es par o impar.',
    difficulty: Difficulty.EASY,
    examples: [ { input: 'numero = 4', output: 'Par' }, { input: 'numero = 7', output: 'Impar' } ],
    defaultCode: 'def par_o_impar(numero):\n  # Tu código aquí\n  pass',
    datasets: [{input: "100", expectedOutput: "Par"}, {input: "33", expectedOutput: "Impar"}],
    authorSignature: "<JGdev/>",
    hint: 'Un número es par si el residuo de su división por 2 es 0. Usa el operador módulo (`%`).'
  },
  {
    id: 'cond-easy-7', topic: 'conditionals', title: 'Semáforo Simple',
    description: "Dado un color ('rojo', 'verde'), indica la acción ('Detenerse', 'Avanzar').",
    difficulty: Difficulty.EASY,
    examples: [ { input: "color = 'verde'", output: 'Avanzar' } ],
    defaultCode: 'def accion_semaforo_simple(color):\n  # Tu código aquí\n  pass',
    datasets: [{input: "'rojo'", expectedOutput: "Detenerse"}, {input: "'verde'", expectedOutput: "Avanzar"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa `if` para comparar el color con "rojo" y luego con "verde".'
  },
  {
    id: 'cond-easy-8', topic: 'conditionals', title: 'Mayor que 10',
    description: 'Verifica si un número es mayor que 10.',
    difficulty: Difficulty.EASY,
    examples: [ { input: 'num = 15', output: 'Mayor que 10' }, { input: 'num = 5', output: 'No es mayor que 10' } ],
    defaultCode: 'def mayor_que_diez(num):\n  # Tu código aquí\n  pass',
    datasets: [{input: "11", expectedOutput: "Mayor que 10"}, {input: "10", expectedOutput: "No es mayor que 10"}],
    authorSignature: "<JGdev/>",
    hint: 'Utiliza el operador `>` para la comparación.'
  },
  {
    id: 'cond-easy-9', topic: 'conditionals', title: 'Aprobado o Reprobado',
    description: 'Si una calificación es 5 o más, está aprobado. Sino, reprobado (sobre 10).',
    difficulty: Difficulty.EASY,
    examples: [ { input: 'nota = 7', output: 'Aprobado' }, { input: 'nota = 4', output: 'Reprobado' } ],
    defaultCode: 'def estado_calificacion(nota):\n  # Tu código aquí\n  pass',
    datasets: [{input: "5", expectedOutput: "Aprobado"}, {input: "4.9", expectedOutput: "Reprobado"}],
    authorSignature: "<JGdev/>",
    hint: 'Compara la `nota` con 5 usando `>=`.'
  },
  {
    id: 'cond-easy-10', topic: 'conditionals', title: 'Saludo por Hora',
    description: 'Si la hora (0-23) es antes de las 12, saluda "Buenos días".',
    difficulty: Difficulty.EASY,
    examples: [ { input: 'hora = 10', output: 'Buenos días' }, { input: 'hora = 14', output: 'Buenas tardes/noches' } ],
    defaultCode: 'def saludo_horario(hora):\n  # Tu código aquí\n  pass',
    datasets: [{input: "8", expectedOutput: "Buenos días"}, {input: "20", expectedOutput: "Buenas tardes/noches"}],
    authorSignature: "<JGdev/>",
    hint: 'Verifica si la `hora` es menor que 12.'
  },
  // Intermedio
  {
    id: 'cond-int-1', topic: 'conditionals', title: 'Calculadora de Grados Completa',
    description: 'Crea una función que convierta una calificación numérica (0-100) a una letra (A, B, C, D, F). 90-100: A, 80-89: B, 70-79: C, 60-69: D, <60: F.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: 'calificacion = 95', output: 'A' }, { input: 'calificacion = 72', output: 'C' }],
    defaultCode: 'def calcular_grado(calificacion):\n  # Tu código aquí\n  pass',
    datasets: [{input: "90", expectedOutput: "A"}, {input: "80", expectedOutput: "B"}, {input: "59", expectedOutput: "F"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa una secuencia de `if-elif-else`. Empieza verificando el rango más alto (>= 90) y ve bajando.'
  },
  {
    id: 'cond-int-2', topic: 'conditionals', title: 'Descuento por Compra Detallado',
    description: 'Si una compra es mayor a $100, aplica 10% de descuento. Si es mayor a $200, aplica 15%. Devuelve el precio final.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [ { input: 'monto = 120', output: '108.0' }, { input: 'monto = 250', output: '212.5' } ],
    defaultCode: 'def calcular_descuento_detallado(monto):\n  # Tu código aquí\n  pass',
    datasets: [{input: "100", expectedOutput: "100.0"}, {input: "150", expectedOutput: "135.0"}, {input: "200.01", expectedOutput: "170.0085"}],
    authorSignature: "<JGdev/>",
    hint: 'Verifica primero la condición más específica (mayor a $200) y luego la más general (mayor a $100).'
  },
  {
    id: 'cond-int-3', topic: 'conditionals', title: 'Tipo de Ángulo Completo',
    description: 'Dado un ángulo en grados (0-360), clasifícalo como Agudo (<90), Recto (90), Obtuso (90-180), Llano (180), Cóncavo (>180 y <360) o Completo (360).',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [ { input: 'angulo = 45', output: 'Agudo' }, { input: 'angulo = 180', output: 'Llano' }, { input: 'angulo = 270', output: 'Cóncavo'} ],
    defaultCode: 'def tipo_angulo_completo(angulo):\n  # Tu código aquí\n  pass',
    datasets: [{input: "90", expectedOutput: "Recto"}, {input: "150", expectedOutput: "Obtuso"}, {input: "360", expectedOutput: "Completo"}],
    authorSignature: "<JGdev/>",
    hint: 'Necesitarás varias cláusulas `elif`. Asegúrate de que las condiciones cubran todos los casos y no se solapen incorrectamente.'
  },
  {
    id: 'cond-int-4', topic: 'conditionals', title: 'Máximo de Tres Números sin max()',
    description: 'Encuentra el mayor de tres números dados sin usar la función max().',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [ { input: 'a=1, b=5, c=2', output: '5' } ],
    defaultCode: 'def maximo_de_tres(a, b, c):\n  # Tu código aquí\n  pass',
    datasets: [{input: "1,2,3", expectedOutput: "3"}, {input: "3,2,1", expectedOutput: "3"}, {input: "5,5,1", expectedOutput: "5"}],
    authorSignature: "<JGdev/>",
    hint: 'Compara `a` con `b`. Luego, compara el mayor de ellos con `c`.'
  },
  {
    id: 'cond-int-5', topic: 'conditionals', title: 'Clasificación de IMC',
    description: 'Calcula el IMC (peso/altura^2) y clasifícalo: <18.5 Bajo peso, 18.5-24.9 Normal, 25-29.9 Sobrepeso, >=30 Obesidad.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [ { input: 'peso=70, altura=1.75', output: 'Normal (IMC: 22.86)' } ],
    defaultCode: 'def clasificar_imc(peso, altura):\n  # IMC = peso / (altura ** 2)\n  # Devuelve string "Clasificación (IMC: XX.XX)"\n  pass',
    datasets: [{input: "50,1.70", expectedOutput: "Bajo peso (IMC: 17.30)"}, {input: "80,1.70", expectedOutput: "Sobrepeso (IMC: 27.68)"}, {input: "100,1.70", expectedOutput: "Obesidad (IMC: 34.60)"}],
    authorSignature: "<JGdev/>",
    hint: 'Primero calcula el IMC. Luego usa `if-elif-else` para clasificarlo. Formatea el string de salida con el IMC calculado.'
  },
  // Difícil
  {
    id: 'cond-hard-1', topic: 'conditionals', title: 'Triángulo Válido y Tipo',
    description: 'Dados tres lados, determina si pueden formar un triángulo. Si es válido, clasifícalo como Equilátero, Isósceles o Escaleno.',
    difficulty: Difficulty.HARD,
    examples: [ { input: 'l1=3,l2=4,l3=5', output: 'Válido, Escaleno' }, { input: 'l1=5,l2=5,l3=5', output: 'Válido, Equilátero' }, { input: 'l1=1,l2=1,l3=5', output: 'Inválido'} ],
    defaultCode: 'def tipo_triangulo(a, b, c):\n  # Tu código aquí\n  pass',
    datasets: [{input: "2,2,3", expectedOutput: "Válido, Isósceles"}, {input: "1,2,1", expectedOutput: "Inválido"}, {input: "7,7,7", expectedOutput: "Válido, Equilátero"}],
    authorSignature: "<JGdev/>",
    hint: 'Condición de validez: la suma de dos lados cualesquiera debe ser mayor que el tercero. Luego, verifica si todos los lados son iguales (equilátero), si dos son iguales (isósceles), o todos diferentes (escaleno).'
  },
  {
    id: 'cond-hard-2', topic: 'conditionals', title: 'Año Bisiesto Detallado',
    description: 'Determina si un año es bisiesto. Un año es bisiesto si es divisible por 4, excepto los años divisibles por 100 a menos que también sean divisibles por 400.',
    difficulty: Difficulty.HARD,
    examples: [ { input: 'anio = 2000', output: 'Bisiesto' }, { input: 'anio = 1900', output: 'No Bisiesto' }, { input: 'anio = 2024', output: 'Bisiesto' } ],
    defaultCode: 'def es_bisiesto_detallado(anio):\n  # Tu código aquí\n  pass',
    datasets: [{input: "2004", expectedOutput: "Bisiesto"}, {input: "2100", expectedOutput: "No Bisiesto"}, {input: "2400", expectedOutput: "Bisiesto"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa operadores lógicos `and` y `or`. La condición es `(anio % 4 == 0 and anio % 100 != 0) or (anio % 400 == 0)`.'
  },
  {
    id: 'cond-hard-3', topic: 'conditionals', title: 'Calculadora de Impuestos Progresiva',
    description: 'Calcula el impuesto sobre la renta: 0-10k: 0%, 10k-30k: 10% sobre el excedente de 10k, >30k: 20% sobre el excedente de 30k + impuesto tramo anterior.',
    difficulty: Difficulty.HARD,
    examples: [ { input: 'renta = 5000', output: '0.0' }, { input: 'renta = 20000', output: '1000.0' }, { input: 'renta = 40000', output: '4000.0 (2000 del tramo 10-30k + 2000 del tramo >30k)' } ],
    defaultCode: 'def calcular_impuestos(renta):\n  # Tu código aquí\n  pass',
    datasets: [{input: "10000", expectedOutput: "0.0"}, {input: "30000", expectedOutput: "2000.0"}, {input: "50000", expectedOutput: "6000.0"}],
    authorSignature: "<JGdev/>",
    hint: 'Calcula el impuesto por tramos. Si la renta supera un tramo, calcula el impuesto para ese tramo y súmalo al impuesto de los tramos anteriores completos.'
  },
  {
    id: 'cond-hard-4', topic: 'conditionals', title: 'Cajero Automático Simple',
    description: 'Simula un cajero. Dado un saldo inicial y un monto a retirar, verifica si hay fondos suficientes y si el monto es múltiplo de 10. Actualiza y devuelve el nuevo saldo o un mensaje de error.',
    difficulty: Difficulty.HARD,
    examples: [ { input: 'saldo=1000, retiro=200', output: 'Nuevo Saldo: 800' }, { input: 'saldo=100, retiro=150', output: 'Fondos insuficientes' }, { input: 'saldo=500, retiro=105', output: 'Monto inválido'} ],
    defaultCode: 'def cajero_automatico(saldo_inicial, monto_retiro):\n  # Tu código aquí\n  pass',
    datasets: [{input: "500,500", expectedOutput: "Nuevo Saldo: 0"}, {input: "500,50", expectedOutput: "Nuevo Saldo: 450"}, {input: "100,103", expectedOutput: "Monto inválido"}],
    authorSignature: "<JGdev/>",
    hint: 'Primero verifica si el monto es múltiplo de 10 (`monto_retiro % 10 == 0`). Luego, si hay fondos suficientes (`saldo_inicial >= monto_retiro`).'
  },
  {
    id: 'cond-hard-5', topic: 'conditionals', title: 'Juego Piedra, Papel o Tijera',
    description: "Determina el ganador de una ronda de Piedra, Papel, Tijera (entradas: 'piedra', 'papel', 'tijera' para jugador1 y jugador2).",
    difficulty: Difficulty.HARD,
    examples: [ { input: "j1='piedra', j2='tijera'", output: 'Gana Jugador 1' }, { input: "j1='papel', j2='papel'", output: 'Empate' } ],
    defaultCode: 'def ppt(jugador1, jugador2):\n  # Tu código aquí\n  pass',
    datasets: [{input: "'papel','piedra'", expectedOutput: "Gana Jugador 1"}, {input: "'tijera','piedra'", expectedOutput: "Gana Jugador 2"}, {input: "'tijera','tijera'", expectedOutput: "Empate"}],
    authorSignature: "<JGdev/>",
    hint: 'Primero maneja el caso de empate. Luego, considera todas las combinaciones ganadoras para el jugador 1 (ej: piedra vence a tijera, papel vence a piedra, tijera vence a papel). Si ninguna de esas se cumple, gana el jugador 2.'
  },
];
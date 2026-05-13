
import { Problem, Difficulty } from '../../types';

export const loopProblems: Problem[] = [
  // Fácil
  {
    id: 'loop-easy-1', topic: 'loops', title: 'Contar Hasta N',
    description: 'Escribe una función que imprima (o devuelva una lista de) números del 1 a N.',
    difficulty: Difficulty.EASY,
    examples: [ { input: 'N = 5', output: '[1, 2, 3, 4, 5]' } ],
    defaultCode: 'def contar_hasta_n(n):\n  resultado = []\n  # Tu código aquí\n  return resultado',
    datasets: [{input: "3", expectedOutput: "[1, 2, 3]"}, {input: "1", expectedOutput: "[1]"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa un bucle `for` con `range(1, n + 1)`. En cada iteración, añade el número actual a la lista `resultado`.'
  },
  {
    id: 'loop-easy-2', topic: 'loops', title: 'Suma de Primeros N Números',
    description: 'Calcula la suma de los números enteros desde 1 hasta N.',
    difficulty: Difficulty.EASY,
    examples: [ { input: 'N = 5', output: '15 (1+2+3+4+5)' } ],
    defaultCode: 'def suma_primeros_n(n):\n  suma_total = 0\n  # Tu código aquí\n  return suma_total',
    datasets: [{input: "3", expectedOutput: "6"}, {input: "10", expectedOutput: "55"}],
    authorSignature: "<JGdev/>",
    hint: 'Inicializa una variable `suma_total` a 0. Usa un bucle `for` de 1 a N y en cada paso, suma el número actual a `suma_total`.'
  },
  {
    id: 'loop-easy-3', topic: 'loops', title: 'Tabla de Multiplicar del N (Primeros 5)',
    description: 'Genera los primeros 5 múltiplos de un número N. Devuelve una lista de strings "NxM=R".',
    difficulty: Difficulty.EASY,
    examples: [ { input: 'N = 3', output: "['3x1=3', '3x2=6', '3x3=9', '3x4=12', '3x5=15']" } ],
    defaultCode: 'def tabla_multiplicar_simple(n):\n  tabla = []\n  # Tu código aquí\n  return tabla',
    datasets: [{input: "7", expectedOutput: "['7x1=7', '7x2=14', '7x3=21', '7x4=28', '7x5=35']"}, {input: "1", expectedOutput: "['1x1=1', '1x2=2', '1x3=3', '1x4=4', '1x5=5']"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa un bucle `for` que itere del 1 al 5. En cada iteración, calcula `n * multiplicador` y formatea el string.'
  },
  {
    id: 'loop-easy-4', topic: 'loops', title: 'Contar Vocales en Cadena',
    description: 'Dada una cadena de texto, cuenta cuántas vocales (a, e, i, o, u, sin importar mayúsculas) contiene.',
    difficulty: Difficulty.EASY,
    examples: [ { input: "cadena = 'Hola Mundo'", output: '4' } ],
    defaultCode: 'def contar_vocales_cadena(cadena):\n  contador_vocales = 0\n  vocales = "aeiouAEIOU"\n  # Tu código aquí\n  return contador_vocales',
    datasets: [{input: "'AEIOUaeiou'", expectedOutput: "10"}, {input: "'Rhythm'", expectedOutput: "0"}],
    authorSignature: "<JGdev/>",
    hint: 'Itera sobre cada carácter de la `cadena`. Para cada carácter, verifica si está en la cadena `vocales`.'
  },
  {
    id: 'loop-easy-5', topic: 'loops', title: 'Repetir Palabra',
    description: 'Dada una palabra y un número N, devuelve una cadena con la palabra repetida N veces.',
    difficulty: Difficulty.EASY,
    examples: [ { input: "palabra='robot', n=3", output: 'robotrobotrobot' } ],
    defaultCode: 'def repetir_palabra(palabra, n):\n  resultado = ""\n  # Tu código aquí\n  return resultado',
    datasets: [{input: "'eco', 2", expectedOutput: "ecoeco"}, {input: "'test', 1", expectedOutput: "test"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa un bucle `for` que se ejecute `n` veces. En cada iteración, concatena `palabra` a la cadena `resultado`.'
  },
  {
    id: 'loop-easy-6', topic: 'loops', title: 'Encontrar el Mínimo en una Lista',
    description: 'Encuentra el número más pequeño en una lista de números sin usar la función min().',
    difficulty: Difficulty.EASY,
    examples: [ { input: 'lista = [3, 1, 4, 1, 5, 9, 2, 6]', output: '1' } ],
    defaultCode: 'def minimo_en_lista(lista):\n  if not lista: return None # Manejo de lista vacía\n  min_actual = lista[0]\n  # Tu código aquí\n  return min_actual',
    datasets: [{input: "[10,20,5,30]", expectedOutput: "5"}, {input: "[-1,-5,0]", expectedOutput: "-5"}],
    authorSignature: "<JGdev/>",
    hint: 'Asume que el primer elemento es el mínimo. Luego itera por el resto de la lista, actualizando el mínimo si encuentras un elemento menor.'
  },
  {
    id: 'loop-easy-7', topic: 'loops', title: 'Filtrar Números Pares',
    description: 'Dada una lista de números, devuelve una nueva lista solo con los números pares.',
    difficulty: Difficulty.EASY,
    examples: [ { input: 'lista = [1, 2, 3, 4, 5, 6]', output: '[2, 4, 6]' } ],
    defaultCode: 'def filtrar_pares_lista(lista):\n  pares = []\n  # Tu código aquí\n  return pares',
    datasets: [{input: "[10, 11, 12, 13, 14]", expectedOutput: "[10, 12, 14]"}, {input: "[1, 3, 5]", expectedOutput: "[]"}],
    authorSignature: "<JGdev/>",
    hint: 'Itera sobre la lista original. Si un número es par (número % 2 == 0), añádelo a la nueva lista `pares`.'
  },
  {
    id: 'loop-easy-8', topic: 'loops', title: 'Potencias de Dos',
    description: 'Genera las primeras N potencias de 2 (empezando desde 2^0).',
    difficulty: Difficulty.EASY,
    examples: [ { input: 'N = 4 (hasta 2^3)', output: '[1, 2, 4, 8]' } ],
    defaultCode: 'def potencias_de_dos(n_potencias):\n  resultado = []\n  # Tu código aquí\n  return resultado',
    datasets: [{input: "1", expectedOutput: "[1]"}, {input: "5", expectedOutput: "[1, 2, 4, 8, 16]"}] ,
    authorSignature: "<JGdev/>",
    hint: 'Usa un bucle `for` de 0 hasta `n_potencias - 1`. En cada iteración `i`, calcula `2**i` y añádelo a la lista.'
  },
  {
    id: 'loop-easy-9', topic: 'loops', title: 'Imprimir Caracteres de Cadena',
    description: 'Dada una cadena, imprime cada carácter en una nueva línea (o devuelve lista de caracteres).',
    difficulty: Difficulty.EASY,
    examples: [ { input: "cadena = 'abc'", output: "['a', 'b', 'c']" } ],
    defaultCode: 'def imprimir_caracteres(cadena):\n  caracteres_lista = []\n  # Tu código aquí\n  return caracteres_lista',
    datasets: [{input: "'Hi'", expectedOutput: "['H', 'i']"}, {input: "''", expectedOutput: "[]"}],
    authorSignature: "<JGdev/>",
    hint: 'Un bucle `for caracter in cadena:` te permitirá acceder a cada carácter individualmente.'
  },
  {
    id: 'loop-easy-10', topic: 'loops', title: 'Suma de Elementos de Lista (Bucles)',
    description: 'Suma todos los elementos de una lista de números usando un bucle.',
    difficulty: Difficulty.EASY,
    examples: [ { input: 'lista = [1, 2, 3]', output: '6' } ],
    defaultCode: 'def suma_lista_con_bucle(lista):\n  suma_total = 0\n  # Tu código aquí\n  return suma_total',
    datasets: [{input: "[10, 20, 30]", expectedOutput: "60"}, {input: "[-1, 0, 1]", expectedOutput: "0"}],
    authorSignature: "<JGdev/>",
    hint: 'Itera sobre la lista y acumula los valores en una variable `suma_total`.'
  },
  // Intermedio
  {
    id: 'loop-int-1', topic: 'loops', title: 'Generador de Factoriales (Bucles)',
    description: 'Crea una función que calcule el factorial de un número entero no negativo usando bucles.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [ { input: 'num = 5', output: '120' }, { input: 'num = 0', output: '1' } ],
    defaultCode: 'def factorial_con_bucle(num):\n  if num == 0: return 1\n  resultado = 1\n  # Tu código aquí\n  return resultado',
    datasets: [{input: "1", expectedOutput: "1"}, {input: "6", expectedOutput: "720"}, {input: "3", expectedOutput: "6"}],
    authorSignature: "<JGdev/>",
    hint: 'El factorial de 0 es 1. Para n > 0, n! = 1*2*...*n. Usa un bucle `for` de 1 a `num` y multiplica.'
  },
  {
    id: 'loop-int-2', topic: 'loops', title: 'Invertir Cadena (Bucles)',
    description: 'Invierte una cadena de texto sin usar funciones integradas de inversión, usando bucles.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [ { input: "cadena = 'robot'", output: 'tobor' } ],
    defaultCode: 'def invertir_cadena_con_bucle(cadena):\n  invertida = ""\n  # Tu código aquí\n  return invertida',
    datasets: [{input: "'apple'", expectedOutput: "elppa"}, {input: "'a'", expectedOutput: "a"}, {input: "''", expectedOutput: "''"}],
    authorSignature: "<JGdev/>",
    hint: 'Itera sobre la cadena original (quizás de atrás hacia adelante, o de adelante hacia atrás y concatena al inicio de la nueva cadena).'
  },
  {
    id: 'loop-int-3', topic: 'loops', title: 'Serie de Fibonacci (Primeros N, Bucles)',
    description: 'Genera los primeros N números de la serie de Fibonacci usando bucles.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [ { input: 'N = 7', output: '[0, 1, 1, 2, 3, 5, 8]' } ],
    defaultCode: 'def fibonacci_con_bucle(n_elementos):\n  if n_elementos <= 0: return []\n  if n_elementos == 1: return [0]\n  resultado = [0, 1]\n  # Tu código aquí para generar el resto\n  return resultado',
    datasets: [{input: "1", expectedOutput: "[0]"}, {input: "2", expectedOutput: "[0, 1]"}, {input: "10", expectedOutput: "[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]"}] ,
    authorSignature: "<JGdev/>",
    hint: 'Los primeros dos números son 0 y 1. Cada número subsiguiente es la suma de los dos anteriores. Necesitarás un bucle y dos variables para guardar los dos números anteriores.'
  },
  {
    id: 'loop-int-4', topic: 'loops', title: 'Suma de Dígitos de un Número',
    description: 'Calcula la suma de los dígitos de un número entero positivo.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [ { input: 'numero = 123', output: '6' }, { input: 'numero = 9045', output: '18' } ],
    defaultCode: 'def suma_digitos_numero(numero):\n  suma = 0\n  # Tu código aquí\n  return suma',
    datasets: [{input: "100", expectedOutput: "1"}, {input: "9", expectedOutput: "9"}, {input: "765", expectedOutput: "18"}],
    authorSignature: "<JGdev/>",
    hint: 'Puedes obtener el último dígito con `numero % 10` y luego quitar el último dígito con `numero //= 10`. Repite hasta que el número sea 0.'
  },
  {
    id: 'loop-int-5', topic: 'loops', title: 'Patrón de Triángulo de Asteriscos',
    description: 'Crea una función que devuelva un string representando un triángulo de asteriscos de N filas.\nEj: N=3\n*\n**\n***',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [ { input: 'N = 3', output: "'*\\n**\\n***'" } ],
    defaultCode: 'def triangulo_asteriscos(n_filas):\n  resultado_str = ""\n  # Tu código aquí\n  return resultado_str.strip() # strip() para quitar el último \n si lo hay',
    datasets: [{input: "1", expectedOutput: "'*'"}, {input: "2", expectedOutput: "'*\\n**'"}, {input: "4", expectedOutput: "'*\\n**\\n***\\n****'"}] ,
    authorSignature: "<JGdev/>",
    hint: 'Usa un bucle `for` de 1 a `n_filas`. En la iteración `i`, añade `i` asteriscos seguidos de un salto de línea `\\n` al string resultado.'
  },
  // Difícil
  {
    id: 'loop-hard-1', topic: 'loops', title: 'Verificar Número Primo',
    description: 'Verifica si un número N es primo. Un número primo es mayor que 1 y solo divisible por 1 y por sí mismo.',
    difficulty: Difficulty.HARD,
    examples: [ { input: 'N = 7', output: 'True' }, { input: 'N = 10', output: 'False' }, { input: 'N = 2', output: 'True'} ],
    defaultCode: 'def es_primo_numero(n):\n  if n <= 1: return False\n  # Tu código aquí\n  return True',
    datasets: [{input: "13", expectedOutput: "True"}, {input: "1", expectedOutput: "False"}, {input: "97", expectedOutput: "True"}] ,
    authorSignature: "<JGdev/>",
    hint: 'Si N <= 1, no es primo. Para N > 1, itera desde 2 hasta la raíz cuadrada de N. Si N es divisible por alguno de estos números, no es primo.'
  },
  {
    id: 'loop-hard-2', topic: 'loops', title: 'Palíndromo Numérico',
    description: 'Verifica si un número entero es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda).',
    difficulty: Difficulty.HARD,
    examples: [ { input: 'numero = 121', output: 'True' }, { input: 'numero = 123', output: 'False' } ],
    defaultCode: 'def es_palindromo_numerico(numero):\n  # Tu código aquí\n  return False',
    datasets: [{input: "1", expectedOutput: "True"}, {input: "1221", expectedOutput: "True"}, {input: "12320", expectedOutput: "False"}],
    authorSignature: "<JGdev/>",
    hint: 'Convierte el número a cadena para facilitar la comparación, o invierte el número matemáticamente y compáralo con el original.'
  },
  {
    id: 'loop-hard-3', topic: 'loops', title: 'Dibujar Cuadrado Hueco',
    description: 'Dibuja un cuadrado hueco de N x N usando asteriscos. Devuelve un string multilínea.\nEj: N=4\n****\n*  *\n*  *\n****',
    difficulty: Difficulty.HARD,
    examples: [ { input: 'N = 4', output: "'****\\n*  *\\n*  *\\n****'" } ],
    defaultCode: 'def cuadrado_hueco(n):\n  resultado_str = ""\n  # Tu código aquí\n  return resultado_str.strip()',
    datasets: [{input: "3", expectedOutput: "'***\\n* *\\n***'"}, {input: "5", expectedOutput: "'*****\\n*   *\\n*   *\\n*   *\\n*****'"}, {input: "2", expectedOutput: "'**\\n**'"}] ,
    authorSignature: "<JGdev/>",
    hint: 'Usa bucles anidados. La primera y última fila son N asteriscos. Para las filas intermedias, el primer y último carácter son asteriscos, y el resto son espacios.'
  },
  {
    id: 'loop-hard-4', topic: 'loops', title: 'Adivina el Número (Simulación de Intentos)',
    description: 'Simula un juego: el ordenador "piensa" un número (ej. 42). El usuario tiene N intentos para adivinarlo. La función recibe el secreto, una lista de intentos y N. Devuelve "Adivinado en X intentos" o "Agotados los intentos".',
    difficulty: Difficulty.HARD,
    examples: [ { input: 'secreto=42, intentos=[10, 20, 42], max_intentos=5', output: 'Adivinado en 3 intentos' } ],
    defaultCode: 'def adivina_numero_sim(secreto, lista_intentos, max_intentos):\n  # Tu código aquí\n  return "Agotados los intentos"',
    datasets: [
      {input: "50, [10, 60, 50, 55], 4", expectedOutput: "Adivinado en 3 intentos"},
      {input: "25, [1, 2, 3], 3", expectedOutput: "Agotados los intentos"},
      {input: "10, [10], 1", expectedOutput: "Adivinado en 1 intentos"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Itera sobre `lista_intentos` usando un contador de intentos. Detente si adivinas o si superas `max_intentos`.'
  },
  {
    id: 'loop-hard-5', topic: 'loops', title: 'Descomposición en Factores Primos (Simple)',
    description: 'Encuentra los factores primos de un número N. Devuelve una lista de factores. (Versión simple, puede no ser óptima para números grandes).',
    difficulty: Difficulty.HARD,
    examples: [ { input: 'N = 12', output: '[2, 2, 3]' }, { input: 'N = 30', output: '[2, 3, 5]' } ],
    defaultCode: 'def factores_primos_simple(n):\n  factores = []\n  divisor = 2\n  # Tu código aquí\n  return factores',
    datasets: [{input: "7", expectedOutput: "[7]"}, {input: "28", expectedOutput: "[2, 2, 7]"}, {input: "100", expectedOutput: "[2, 2, 5, 5]"}] ,
    authorSignature: "<JGdev/>",
    hint: 'Empieza con un divisor `d=2`. Mientras `n` sea divisible por `d`, añade `d` a los factores y divide `n` por `d`. Luego incrementa `d`. Si `d*d > n` y `n > 1`, entonces `n` restante es primo.'
  },
];

import { Problem, Difficulty } from '../../types';

export const functionProblems: Problem[] = [
  // Fácil (10 problemas)
  {
    id: 'func-easy-1', topic: 'functions', title: 'Función Saludo Simple',
    description: 'Crea una función que reciba un nombre y devuelva un saludo como "Hola, [nombre]!".',
    difficulty: Difficulty.EASY,
    examples: [ { input: "nombre = 'Ana'", output: 'Hola, Ana!' } ],
    defaultCode: 'def saludar_simple(nombre):\n  # Tu código aquí\n  pass',
    datasets: [{input: "'Juan'", expectedOutput: "Hola, Juan!"}, {input: "''", expectedOutput: "Hola, !"}],
    authorSignature: "<JGdev/>",
    hint: 'La función debe tomar un parámetro `nombre`. Usa f-strings o concatenación para formar el saludo y devuélvelo con `return`.'
  },
  {
    id: 'func-easy-2', topic: 'functions', title: 'Suma de Dos Números',
    description: 'Crea una función que reciba dos números y devuelva su suma.',
    difficulty: Difficulty.EASY,
    examples: [ { input: "a=2, b=3", output: '5' } ],
    defaultCode: 'def sumar_dos_numeros(a, b):\n  # Tu código aquí\n  pass',
    datasets: [{input: "5, 10", expectedOutput: "15"}, {input: "-1, 1", expectedOutput: "0"}],
    authorSignature: "<JGdev/>",
    hint: 'Define la función con dos parámetros, `a` y `b`. Dentro de la función, calcula `a + b` y usa `return`.'
  },
  {
    id: 'func-easy-3', topic: 'functions', title: 'Multiplicar por Dos',
    description: 'Crea una función que reciba un número y devuelva el resultado de multiplicarlo por dos.',
    difficulty: Difficulty.EASY,
    examples: [ { input: "numero = 5", output: '10' } ],
    defaultCode: 'def multiplicar_por_dos(numero):\n  # Tu código aquí\n  pass',
    datasets: [{input: "7", expectedOutput: "14"}, {input: "0", expectedOutput: "0"}],
    authorSignature: "<JGdev/>",
    hint: 'La función tomará un parámetro `numero`. Devuelve `numero * 2`.'
  },
  {
    id: 'func-easy-4', topic: 'functions', title: 'Es Mayor de Edad (Función)',
    description: 'Crea una función que reciba una edad y devuelva `True` si es mayor o igual a 18, `False` en caso contrario.',
    difficulty: Difficulty.EASY,
    examples: [ { input: "edad = 20", output: 'True' }, { input: "edad = 17", output: 'False'} ],
    defaultCode: 'def es_mayor_edad_func(edad):\n  # Tu código aquí\n  pass',
    datasets: [{input: "18", expectedOutput: "True"}, {input: "10", expectedOutput: "False"}],
    authorSignature: "<JGdev/>",
    hint: 'Dentro de la función, usa una condición `if edad >= 18:` y devuelve el booleano correspondiente.'
  },
  {
    id: 'func-easy-5', topic: 'functions', title: 'Longitud de Cadena',
    description: 'Crea una función que reciba una cadena y devuelva su longitud.',
    difficulty: Difficulty.EASY,
    examples: [ { input: "texto = 'hola'", output: '4' } ],
    defaultCode: 'def longitud_cadena(texto):\n  # Tu código aquí\n  pass',
    datasets: [{input: "'mundo'", expectedOutput: "5"}, {input: "''", expectedOutput: "0"}],
    authorSignature: "<JGdev/>",
    hint: 'Python tiene una función incorporada `len()` que puedes usar aquí.'
  },
  {
    id: 'func-easy-6', topic: 'functions', title: 'Primer Elemento de Lista',
    description: 'Crea una función que reciba una lista y devuelva su primer elemento. Si la lista está vacía, devuelve `None`.',
    difficulty: Difficulty.EASY,
    examples: [ { input: "lista = [1, 2, 3]", output: '1' }, { input: "lista = []", output: 'None'} ],
    defaultCode: 'def primer_elemento(lista):\n  # Tu código aquí\n  pass',
    datasets: [{input: "['a', 'b']", expectedOutput: "'a'"}, {input: "[]", expectedOutput: "None"}],
    authorSignature: "<JGdev/>",
    hint: 'Primero verifica si la lista está vacía (puedes usar `if not lista:` o `if len(lista) == 0:`). Si no está vacía, accede al primer elemento con `lista[0]`.'
  },
  {
    id: 'func-easy-7', topic: 'functions', title: 'Concatenar Cadenas',
    description: 'Crea una función que reciba dos cadenas y las devuelva concatenadas con un espacio en medio.',
    difficulty: Difficulty.EASY,
    examples: [ { input: "s1='Hola', s2='Mundo'", output: 'Hola Mundo' } ],
    defaultCode: 'def concatenar_con_espacio(cadena1, cadena2):\n  # Tu código aquí\n  pass',
    datasets: [{input: "'React', 'JS'", expectedOutput: "React JS"}, {input: "'Robot', 'Arena'", expectedOutput: "Robot Arena"}],
    authorSignature: "<JGdev/>",
    hint: 'Puedes usar el operador `+` para concatenar cadenas: `cadena1 + " " + cadena2`.'
  },
  {
    id: 'func-easy-8', topic: 'functions', title: 'Área de un Cuadrado',
    description: 'Crea una función que reciba la longitud del lado de un cuadrado y devuelva su área.',
    difficulty: Difficulty.EASY,
    examples: [ { input: "lado = 4", output: '16' } ],
    defaultCode: 'def area_cuadrado(lado):\n  # Tu código aquí\n  pass',
    datasets: [{input: "5", expectedOutput: "25"}, {input: "1", expectedOutput: "1"}],
    authorSignature: "<JGdev/>",
    hint: 'El área de un cuadrado es `lado * lado` o `lado ** 2`.'
  },
  {
    id: 'func-easy-9', topic: 'functions', title: 'Convertir a Minúsculas',
    description: 'Crea una función que reciba una cadena y la devuelva en minúsculas.',
    difficulty: Difficulty.EASY,
    examples: [ { input: "texto = 'HOLA'", output: 'hola' } ],
    defaultCode: 'def a_minusculas(texto):\n  # Tu código aquí\n  pass',
    datasets: [{input: "'JavaScript'", expectedOutput: "javascript"}, {input: "'Python'", expectedOutput: "python"}],
    authorSignature: "<JGdev/>",
    hint: 'Las cadenas en Python tienen un método útil para esto: `.lower()`.'
  },
  {
    id: 'func-easy-10', topic: 'functions', title: 'Valor Absoluto Simple',
    description: 'Crea una función que devuelva el valor absoluto de un número (sin usar `abs()`).',
    difficulty: Difficulty.EASY,
    examples: [ { input: "num = -5", output: '5' }, { input: "num = 3", output: '3' } ],
    defaultCode: 'def absoluto_simple(numero):\n  # Tu código aquí\n  pass',
    datasets: [{input: "-10", expectedOutput: "10"}, {input: "0", expectedOutput: "0"}],
    authorSignature: "<JGdev/>",
    hint: 'Si el número es menor que 0, devuélvelo multiplicado por -1. Si no, devuélvelo tal cual.'
  },
  // Intermedio (5 problemas)
  {
    id: 'func-int-1', topic: 'functions', title: 'Promedio de Lista',
    description: 'Crea una función que reciba una lista de números y devuelva su promedio. Si la lista está vacía, devuelve 0.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [ { input: "numeros = [1, 2, 3, 4, 5]", output: '3.0' } ],
    defaultCode: 'def promedio_lista(numeros):\n  # Tu código aquí\n  pass',
    datasets: [{input: "[10, 20, 30]", expectedOutput: "20.0"}, {input: "[]", expectedOutput: "0"}, {input: "[5, 5, 5, 5]", expectedOutput: "5.0"}],
    authorSignature: "<JGdev/>",
    hint: 'Si la lista está vacía, retorna 0. Si no, calcula la suma de los elementos (puedes usar `sum()`) y divídela por la cantidad de elementos (`len()`).'
  },
  {
    id: 'func-int-2', topic: 'functions', title: 'Contar Palabras en Frase',
    description: 'Crea una función que reciba una frase (cadena) y devuelva el número de palabras que contiene.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [ { input: "frase = 'Hola mundo desde RobotCode'", output: '5' } ],
    defaultCode: 'def contar_palabras(frase):\n  # Tu código aquí\n  pass',
    datasets: [{input: "'Esto es una prueba.'", expectedOutput: "4"}, {input: "'PalabraUnica'", expectedOutput: "1"}, {input: "''", expectedOutput: "0"}],
    authorSignature: "<JGdev/>",
    hint: 'Puedes usar el método `.split()` de las cadenas para dividir la frase en una lista de palabras. Luego, obtén la longitud de esa lista.'
  },
  {
    id: 'func-int-3', topic: 'functions', title: 'Función Factorial (Recursiva o Iterativa)',
    description: 'Crea una función que calcule el factorial de un número entero no negativo n (n!).',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [ { input: "n = 5", output: '120' }, { input: "n = 0", output: '1'} ],
    defaultCode: 'def factorial(n):\n  # Tu código aquí\n  pass',
    datasets: [{input: "1", expectedOutput: "1"}, {input: "4", expectedOutput: "24"}, {input: "7", expectedOutput: "5040"}],
    authorSignature: "<JGdev/>",
    hint: 'Iterativamente: inicializa el resultado en 1 y multiplica por números desde 1 hasta n. Recursivamente: el caso base es `n == 0` (devuelve 1), sino devuelve `n * factorial(n-1)`.'
  },
  {
    id: 'func-int-4', topic: 'functions', title: 'Eliminar Duplicados de Lista',
    description: 'Crea una función que reciba una lista y devuelva una nueva lista sin elementos duplicados, manteniendo el orden original.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [ { input: "lista = [1, 2, 2, 3, 4, 4, 5]", output: '[1, 2, 3, 4, 5]' } ],
    defaultCode: 'def eliminar_duplicados(lista):\n  # Tu código aquí\n  pass',
    datasets: [{input: "['a', 'b', 'a', 'c']", expectedOutput: "['a', 'b', 'c']"}, {input: "[1, 1, 1]", expectedOutput: "[1]"}, {input: "[]", expectedOutput: "[]"}],
    authorSignature: "<JGdev/>",
    hint: 'Crea una lista vacía para el resultado y un conjunto (set) para llevar registro de los elementos ya vistos. Itera sobre la lista original; si un elemento no está en el conjunto de vistos, añádelo a la lista resultado y al conjunto.'
  },
  {
    id: 'func-int-5', topic: 'functions', title: 'Validar Palíndromo (Función)',
    description: 'Crea una función que reciba una cadena y devuelva `True` si es un palíndromo (ignorando mayúsculas/minúsculas y espacios), `False` en caso contrario.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [ { input: "texto = 'Anita lava la tina'", output: 'True' }, { input: "texto = 'Hola Mundo'", output: 'False' } ],
    defaultCode: 'def es_palindromo_func(texto):\n  # Tu código aquí\n  pass',
    datasets: [{input: "'Radar'", expectedOutput: "True"}, {input: "'reconocer'", expectedOutput: "True"}, {input: "'esto no es'", expectedOutput: "False"}],
    authorSignature: "<JGdev/>",
    hint: 'Primero, normaliza la cadena: conviértela a minúsculas y elimina los espacios. Luego, compara la cadena normalizada con su versión invertida (`cadena_normalizada[::-1]`).'
  },
  // Difícil (5 problemas)
  {
    id: 'func-hard-1', topic: 'functions', title: 'Generador de Fibonacci Avanzado',
    description: 'Crea una función que genere los primeros N números de Fibonacci. Considera optimización si N es grande (ej. memoización).',
    difficulty: Difficulty.HARD,
    examples: [ { input: "n = 10", output: '[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]' } ],
    defaultCode: 'def fibonacci_avanzado(n):\n  # Tu código aquí\n  pass',
    datasets: [{input: "1", expectedOutput: "[0]"}, {input: "15", expectedOutput: "[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]"}, {input: "0", expectedOutput: "[]"}],
    authorSignature: "<JGdev/>",
    hint: 'Para una solución iterativa eficiente, mantén dos variables para los dos números anteriores y actualízalas en un bucle. Para memoización (si usas recursión), usa un diccionario para guardar resultados ya calculados.'
  },
  {
    id: 'func-hard-2', topic: 'functions', title: 'Aplanar Lista Anidada',
    description: 'Crea una función que reciba una lista que puede contener otras listas anidadas y devuelva una lista aplanada.',
    difficulty: Difficulty.HARD,
    examples: [ { input: "lista = [1, [2, 3], [4, [5, 6]]]", output: '[1, 2, 3, 4, 5, 6]' } ],
    defaultCode: 'def aplanar_lista(lista_anidada):\n  # Tu código aquí\n  pass',
    datasets: [{input: "[[1,2],[3],4]", expectedOutput: "[1,2,3,4]"}, {input: "[]", expectedOutput: "[]"}, {input: "[1,2,3]", expectedOutput: "[1,2,3]"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa recursión. Itera sobre la lista de entrada. Si un elemento es una lista, llama recursivamente a `aplanar_lista` con ese elemento y extiende el resultado. Si no es una lista, simplemente añádelo al resultado.'
  },
  {
    id: 'func-hard-3', topic: 'functions', title: 'Decorador de Tiempo de Ejecución',
    description: 'Escribe un decorador en Python que mida y muestre el tiempo de ejecución de cualquier función que decore.',
    difficulty: Difficulty.HARD,
    examples: [ { input: "Concepto de decorador aplicado a una función simple.", output: 'La función X tardó Y.YY segundos en ejecutarse.' } ],
    defaultCode: 'import time\n\ndef temporizador(func):\n  # Define el wrapper\n  def wrapper(*args, **kwargs):\n    # Tu código aquí: registra tiempo, ejecuta func, calcula diff, imprime y devuelve resultado\n    inicio = time.time()\n    resultado = func(*args, **kwargs)\n    fin = time.time()\n    print(f"La función {func.__name__} tardó {fin - inicio:.2f} segundos.")\n    return resultado\n  return wrapper\n\n# @temporizador\n# def mi_funcion_lenta():\n#   time.sleep(1)\n#   return "Terminado"\n\n# mi_funcion_lenta() # Para probar',
    datasets: [
      {input: "Aplicar a una función que suma números del 1 al 10000", expectedOutput: "Resultado y mensaje de tiempo."},
      {input: "Aplicar a una función que concatena strings 1000 veces", expectedOutput: "Resultado y mensaje de tiempo."},
      {input: "Aplicar a una función que no hace nada (pass)", expectedOutput: "Resultado y mensaje de tiempo cercano a 0."}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Un decorador es una función que toma otra función y devuelve una nueva función (wrapper). Dentro del wrapper, usa `time.time()` antes y después de llamar a la función original para medir el tiempo.'
  },
  {
    id: 'func-hard-4', topic: 'functions', title: 'Función `curry` Genérica',
    description: 'Implementa una función `curry` que tome una función `f` y un número `n` de argumentos. `curry(f, n)` debe devolver una nueva función que acepte argumentos uno por uno hasta que se hayan proporcionado `n` argumentos, momento en el que `f` se llama con todos los argumentos.',
    difficulty: Difficulty.HARD,
    examples: [ { input: "suma = lambda x,y,z: x+y+z; suma_curried = curry(suma, 3); suma_curried(1)(2)(3)", output: '6' } ],
    defaultCode: 'def curry(func, arity):\n  # Tu código aquí\n  # Necesitarás una función interna que acumule argumentos.\n  # Cuando se alcancen `arity` argumentos, llama a `func`.\n  pass\n\n# Ejemplo de uso:\n# def suma_tres(a, b, c):\n#   return a + b + c\n# suma_curried = curry(suma_tres, 3)\n# resultado = suma_curried(1)(2)(3) # Debería ser 6',
    datasets: [
      {input: "curry(lambda a,b: a*b, 2)(5)(4)", expectedOutput: "20"},
      {input: "curry(lambda s: s.upper(), 1)('test')", expectedOutput: "'TEST'"},
      {input: "curry(lambda x,y,z,w: x-y+z-w, 4)(10)(1)(2)(3)", expectedOutput: "8"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'La función `curry` debe devolver otra función. Esta función interna tomará un argumento y devolverá otra función si aún no se han recolectado `arity` argumentos, o llamará a la función original si ya se tienen todos.'
  },
  {
    id: 'func-hard-5', topic: 'functions', title: 'Implementar `reduce` (sin usar `functools.reduce`)',
    description: 'Crea una función `mi_reduce` que tome una función binaria `func`, una secuencia `iterable`, y un `inicializador` opcional. Debe aplicar `func` acumulativamente a los ítems de `iterable`.',
    difficulty: Difficulty.HARD,
    examples: [ { input: "mi_reduce(lambda x, y: x + y, [1, 2, 3, 4], 0)", output: '10' }, { input: "mi_reduce(lambda x, y: x * y, [1, 2, 3, 4], 1)", output: '24' } ],
    defaultCode: 'def mi_reduce(funcion, iterable, inicializador=None):\n  it = iter(iterable)\n  if inicializador is None:\n    try:\n      acumulador = next(it)\n    except StopIteration:\n      raise TypeError("reduce() of empty sequence with no initial value")\n  else:\n    acumulador = inicializador\n  # Tu código aquí para iterar y aplicar la función\n  return acumulador',
    datasets: [
      {input: "mi_reduce(lambda acc, x: acc + x, ['a','b','c'], '')", expectedOutput: "'abc'"},
      {input: "mi_reduce(lambda acc, x: acc if acc > x else x, [1,5,2,8,3])", expectedOutput: "8"}, // Sin inicializador, toma el primer elemento
      {input: "mi_reduce(lambda acc, x: acc + x, [])", expectedOutput: "Error o None (depende de implementación si no hay inicializador)"} // Manejo de lista vacía sin init
    ],
    authorSignature: "<JGdev/>",
    hint: 'Obtén un iterador del `iterable`. Si no hay `inicializador`, el primer valor del iterador es el acumulador inicial. Luego, itera sobre el resto y aplica `acumulador = funcion(acumulador, elemento_actual)`.'
  }
];
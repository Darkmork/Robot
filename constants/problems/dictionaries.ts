
import { Problem, Difficulty } from '../../types';

export const dictionaryProblems: Problem[] = [
  // Fácil (10 problemas)
  {
    id: 'dict-easy-1', topic: 'dictionaries', title: 'Crear y Acceder a Diccionario',
    description: 'Crea un diccionario con la clave "nombre" y valor "Robot". Devuelve el valor asociado a "nombre".',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: 'Robot' }],
    defaultCode: 'def crear_y_acceder_diccionario():\n  mi_diccionario = {"nombre": "Robot"}\n  # Tu código aquí\n  return None',
    datasets: [{input: "", expectedOutput: "Robot"}],
    authorSignature: "<JGdev/>",
    hint: 'Los diccionarios se crean con llaves `{}`. Para acceder a un valor, usa `diccionario["clave"]`.'
  },
  {
    id: 'dict-easy-2', topic: 'dictionaries', title: 'Añadir Par Clave-Valor',
    description: 'Dado un diccionario, añade el par clave "edad" con valor 3. Devuelve el diccionario modificado.',
    difficulty: Difficulty.EASY,
    examples: [{ input: 'dic = {"nombre": "Chip"}', output: '{"nombre": "Chip", "edad": 3}' }],
    defaultCode: 'def agregar_par_diccionario(diccionario):\n  # Tu código aquí\n  return diccionario',
    datasets: [
        {input: '{}', expectedOutput: '{"edad": 3}'},
        {input: '{"ciudad": "CPU"}', expectedOutput: '{"ciudad": "CPU", "edad": 3}'}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Para añadir o modificar un par clave-valor, usa la asignación: `diccionario["nueva_clave"] = nuevo_valor`.'
  },
  {
    id: 'dict-easy-3', topic: 'dictionaries', title: 'Verificar si Clave Existe',
    description: 'Dado un diccionario y una clave, devuelve `True` si la clave existe en el diccionario, `False` en caso contrario.',
    difficulty: Difficulty.EASY,
    examples: [{ input: 'dic = {"a": 1}, clave = "a"', output: 'True' }, { input: 'dic = {"a": 1}, clave = "b"', output: 'False'}],
    defaultCode: 'def clave_existe_diccionario(diccionario, clave):\n  # Tu código aquí\n  return False',
    datasets: [{input: '{"nombre":"Bot"}, "nombre"', expectedOutput: "True"}, {input: '{"x":10}, "y"', expectedOutput: "False"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa el operador `in`: `clave in diccionario`.'
  },
  {
    id: 'dict-easy-4', topic: 'dictionaries', title: 'Obtener Valor con get()',
    description: 'Dado un diccionario y una clave, obtén el valor usando `get()`. Si la clave no existe, devuelve "No encontrado".',
    difficulty: Difficulty.EASY,
    examples: [{ input: 'dic = {"id": 123}, clave = "id"', output: '123' }, { input: 'dic = {}, clave = "nombre"', output: '"No encontrado"'}],
    defaultCode: 'def obtener_con_get(diccionario, clave):\n  # Tu código aquí\n  return None',
    datasets: [{input: '{"data":"info"}, "data"', expectedOutput: "info"}, {input: '{"v":5}, "k"', expectedOutput: "No encontrado"}],
    authorSignature: "<JGdev/>",
    hint: 'El método `.get(clave, valor_por_defecto)` es útil aquí. Si la clave no existe, devuelve `valor_por_defecto`.'
  },
  {
    id: 'dict-easy-5', topic: 'dictionaries', title: 'Eliminar Par Clave-Valor',
    description: 'Dado un diccionario y una clave, elimina el par clave-valor. Si la clave no existe, no hagas nada. Devuelve el diccionario.',
    difficulty: Difficulty.EASY,
    examples: [{ input: 'dic = {"a": 1, "b": 2}, clave = "a"', output: '{"b": 2}' }],
    defaultCode: 'def eliminar_par_diccionario(diccionario, clave):\n  # Tu código aquí\n  return diccionario',
    datasets: [{input: '{"temp":0, "keep":1}, "temp"', expectedOutput: '{"keep":1}'}, {input: '{"x":1}, "y"', expectedOutput: '{"x":1}'}],
    authorSignature: "<JGdev/>",
    hint: 'Puedes usar `del diccionario[clave]` o `diccionario.pop(clave, None)` (el segundo argumento de pop evita errores si la clave no existe).'
  },
  {
    id: 'dict-easy-6', topic: 'dictionaries', title: 'Obtener Todas las Claves',
    description: 'Dado un diccionario, devuelve una lista de todas sus claves.',
    difficulty: Difficulty.EASY,
    examples: [{ input: 'dic = {"nombre": "Eva", "edad": 8}', output: "['nombre', 'edad'] (el orden puede variar)" }],
    defaultCode: 'def obtener_claves_diccionario(diccionario):\n  # Tu código aquí\n  return []',
    datasets: [{input: '{"a":1, "b":2}', expectedOutput: "['a', 'b']"}, {input: '{}', expectedOutput: "[]"}],
    authorSignature: "<JGdev/>",
    hint: 'El método `.keys()` devuelve una vista de las claves, que puedes convertir a lista con `list(diccionario.keys())`.'
  },
  {
    id: 'dict-easy-7', topic: 'dictionaries', title: 'Obtener Todos los Valores',
    description: 'Dado un diccionario, devuelve una lista de todos sus valores.',
    difficulty: Difficulty.EASY,
    examples: [{ input: 'dic = {"x": 10, "y": 20}', output: '[10, 20] (el orden puede variar)' }],
    defaultCode: 'def obtener_valores_diccionario(diccionario):\n  # Tu código aquí\n  return []',
    datasets: [{input: '{"fruta":"manzana", "color":"rojo"}', expectedOutput: "['manzana', 'rojo']"}, {input: '{}', expectedOutput: "[]"}],
    authorSignature: "<JGdev/>",
    hint: 'El método `.values()` devuelve una vista de los valores, que puedes convertir a lista con `list(diccionario.values())`.'
  },
  {
    id: 'dict-easy-8', topic: 'dictionaries', title: 'Longitud de Diccionario (Número de Pares)',
    description: 'Dado un diccionario, devuelve cuántos pares clave-valor contiene.',
    difficulty: Difficulty.EASY,
    examples: [{ input: 'dic = {"uno": 1, "dos": 2, "tres": 3}', output: '3' }],
    defaultCode: 'def longitud_diccionario_pares(diccionario):\n  # Tu código aquí\n  return 0',
    datasets: [{input: '{"clave1":"valor1"}', expectedOutput: "1"}, {input: '{}', expectedOutput: "0"}],
    authorSignature: "<JGdev/>",
    hint: 'La función `len(diccionario)` te dará el número de pares.'
  },
  {
    id: 'dict-easy-9', topic: 'dictionaries', title: 'Actualizar Valor Existente',
    description: 'Dado un diccionario, una clave existente y un nuevo valor, actualiza el valor para esa clave. Devuelve el diccionario.',
    difficulty: Difficulty.EASY,
    examples: [{ input: 'dic = {"status": "activo"}, clave = "status", nuevo_valor = "inactivo"', output: '{"status": "inactivo"}' }],
    defaultCode: 'def actualizar_valor_diccionario(diccionario, clave, nuevo_valor):\n  # Tu código aquí\n  return diccionario',
    datasets: [{input: '{"puntos":100}, "puntos", 150', expectedOutput: '{"puntos":150}'}, {input: '{"a":1}, "a", 2', expectedOutput: '{"a":2}'}],
    authorSignature: "<JGdev/>",
    hint: 'Simplemente asigna el nuevo valor a la clave existente: `diccionario[clave] = nuevo_valor`.'
  },
  {
    id: 'dict-easy-10', topic: 'dictionaries', title: 'Iterar e Imprimir Clave-Valor',
    description: 'Dado un diccionario, itera sobre él e imprime cada par en formato "clave -> valor". (La función devolverá una lista de estas cadenas para validación).',
    difficulty: Difficulty.EASY,
    examples: [{ input: 'dic = {"a": 1, "b": 2}', output: "['a -> 1', 'b -> 2']" }],
    defaultCode: 'def iterar_diccionario_simple(diccionario):\n  lineas_impresas = []\n  # Tu código aquí\n  return lineas_impresas',
    datasets: [{input: '{"x":"y"}', expectedOutput: "['x -> y']"}, {input: '{}', expectedOutput: "[]"}],
    authorSignature: "<JGdev/>",
    hint: 'Usa un bucle `for clave, valor in diccionario.items():`. Dentro del bucle, formatea el string y añádelo a `lineas_impresas`.'
  },
  // Intermedio (5 problemas)
  {
    id: 'dict-int-1', topic: 'dictionaries', title: 'Fusionar Dos Diccionarios',
    description: 'Dadas dos diccionarios, fusionarlos en uno nuevo. Si hay claves repetidas, el valor del segundo diccionario debe prevalecer.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: 'd1 = {"a": 1, "b": 2}, d2 = {"b": 3, "c": 4}', output: '{"a": 1, "b": 3, "c": 4}' }],
    defaultCode: 'def fusionar_diccionarios(dic1, dic2):\n  # Tu código aquí\n  return {}',
    datasets: [{input: '{"x":0}, {"y":1}', expectedOutput: '{"x":0, "y":1}'}, {input: '{"name":"A"}, {"name":"B"}', expectedOutput: '{"name":"B"}'}, {input: '{}, {"key":"val"}', expectedOutput: '{"key":"val"}'}],
    authorSignature: "<JGdev/>",
    hint: 'Crea una copia del primer diccionario. Luego usa el método `.update(dic2)` sobre la copia.'
  },
  {
    id: 'dict-int-2', topic: 'dictionaries', title: 'Contador de Frecuencia de Palabras',
    description: 'Dada una cadena de texto (frase), devuelve un diccionario donde las claves son las palabras y los valores son sus frecuencias (cuántas veces aparecen). Ignora mayúsculas/minúsculas.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "texto = 'Hola hola mundo'", output: "{'hola': 2, 'mundo': 1}" }],
    defaultCode: 'def frecuencia_palabras_diccionario(texto):\n  # Tu código aquí\n  return {}',
    datasets: [{input: "'El gato es negro el perro es blanco'", expectedOutput: "{'el':2, 'gato':1, 'es':2, 'negro':1, 'perro':1, 'blanco':1}"}, {input: "''", expectedOutput: "{}"}, {input: "'test Test TEST'", expectedOutput: "{'test':3}"}],
    authorSignature: "<JGdev/>",
    hint: 'Convierte el texto a minúsculas y divídelo en palabras (`.lower().split()`). Itera sobre las palabras. Para cada palabra, si ya está en el diccionario de frecuencias, incrementa su contador; si no, añádela con contador 1.'
  },
  {
    id: 'dict-int-3', topic: 'dictionaries', title: 'Invertir Diccionario (Valores Únicos)',
    description: 'Dado un diccionario donde todos los valores son únicos, inviértelo (claves se vuelven valores, valores se vuelven claves).',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: 'dic = {"a": 1, "b": 2}', output: '{1: "a", 2: "b"}' }],
    defaultCode: 'def invertir_diccionario_unico(diccionario):\n  # Tu código aquí\n  return {}',
    datasets: [{input: '{"nombre":"Chip", "tipo":"IA"}', expectedOutput: '{"Chip":"nombre", "IA":"tipo"}'}, {input: '{}', expectedOutput: '{}'}, {input: '{"uno":1}', expectedOutput: '{1:"uno"}'}],
    authorSignature: "<JGdev/>",
    hint: 'Crea un nuevo diccionario. Itera sobre los pares `(clave, valor)` del diccionario original usando `.items()`. En el nuevo diccionario, asigna `nuevo_diccionario[valor] = clave`.'
  },
  {
    id: 'dict-int-4', topic: 'dictionaries', title: 'Diccionario a Lista de Tuplas',
    description: 'Convierte un diccionario en una lista de tuplas, donde cada tupla es (clave, valor).',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: 'dic = {"x": 10, "y": 20}', output: "[('x', 10), ('y', 20)] (el orden puede variar)" }],
    defaultCode: 'def diccionario_a_lista_tuplas(diccionario):\n  # Tu código aquí\n  return []',
    datasets: [{input: '{"a":1}', expectedOutput: "[('a',1)]"}, {input: '{}', expectedOutput: "[]"}, {input: '{"z":True, "k":False}', expectedOutput: "[('z',True), ('k',False)]"}],
    authorSignature: "<JGdev/>",
    hint: 'El método `.items()` de un diccionario devuelve una vista de tuplas (clave, valor). Puedes convertir esta vista a una lista usando `list(diccionario.items())`.'
  },
  {
    id: 'dict-int-5', topic: 'dictionaries', title: 'Filtrar Diccionario por Valor',
    description: 'Dado un diccionario y un valor, crea un nuevo diccionario que solo contenga los pares clave-valor donde el valor coincida con el dado.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: 'dic = {"a": 10, "b": 20, "c": 10}, valor_filtro = 10', output: '{"a": 10, "c": 10}' }],
    defaultCode: 'def filtrar_diccionario_por_valor(diccionario, valor_filtro):\n  # Tu código aquí\n  return {}',
    datasets: [{input: '{"x":1, "y":2, "z":1}, 1', expectedOutput: '{"x":1, "z":1}'}, {input: '{"status":"ok", "code":200}, "error"', expectedOutput: '{}'}, {input: '{}, 10', expectedOutput: '{}'}],
    authorSignature: "<JGdev/>",
    hint: 'Crea un diccionario vacío. Itera sobre los items (clave, valor) del diccionario original. Si `valor == valor_filtro`, añade el par al nuevo diccionario.'
  },
  // Difícil (5 problemas)
  {
    id: 'dict-hard-1', topic: 'dictionaries', title: 'Agrupar por Clave (Diccionario de Listas)',
    description: 'Dada una lista de diccionarios, agrúpalos por una clave común. El resultado debe ser un diccionario donde las claves son los valores de la clave de agrupación y los valores son listas de los diccionarios originales.',
    difficulty: Difficulty.HARD,
    examples: [{ input: "lista = [{'id':1,'cat':'A'},{'id':2,'cat':'B'},{'id':3,'cat':'A'}], clave_agrup = 'cat'", output: "{'A': [{'id':1,'cat':'A'},{'id':3,'cat':'A'}], 'B': [{'id':2,'cat':'B'}]}" }],
    defaultCode: 'def agrupar_por_clave_diccionario(lista_de_diccionarios, clave_agrupacion):\n  resultado = {}\n  # Tu código aquí\n  return resultado',
    datasets: [
        {input: "[{'n':1,'t':'x'},{'n':2,'t':'y'},{'n':3,'t':'x'}], 't'", expectedOutput: "{'x':[{'n':1,'t':'x'},{'n':3,'t':'x'}],'y':[{'n':2,'t':'y'}]}"},
        {input: "[], 'id'", expectedOutput: "{}"},
        {input: "[{'val':10}], 'val'", expectedOutput: "{10:[{'val':10}]}"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Itera sobre cada diccionario en la lista. Obtén el valor de la `clave_agrupacion`. Si este valor no está como clave en `resultado`, inicialízalo con una lista vacía. Luego, añade el diccionario actual a la lista correspondiente en `resultado`.'
  },
  {
    id: 'dict-hard-2', topic: 'dictionaries', title: 'Encontrar Claves con Valor Máximo',
    description: 'Dado un diccionario donde los valores son numéricos, encuentra todas las claves que tienen el valor máximo. Devuelve una lista de estas claves.',
    difficulty: Difficulty.HARD,
    examples: [{ input: 'dic = {"a": 10, "b": 20, "c": 20, "d": 5}', output: "['b', 'c'] (el orden puede variar)" }],
    defaultCode: 'def claves_valor_maximo(diccionario):\n  if not diccionario: return []\n  # Tu código aquí\n  return []',
    datasets: [
        {input: '{"x":1,"y":1,"z":1}', expectedOutput: "['x','y','z']"},
        {input: '{"uno":-1,"dos":-5}', expectedOutput: "['uno']"},
        {input: '{}', expectedOutput: "[]"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Primero, encuentra el valor máximo en el diccionario. Luego, itera nuevamente por el diccionario y recoge todas las claves cuyos valores sean iguales a ese máximo encontrado.'
  },
  {
    id: 'dict-hard-3', topic: 'dictionaries', title: 'Actualización Profunda de Diccionarios Anidados',
    description: 'Implementa una función `deep_update(d1, d2)` que actualice `d1` con los valores de `d2`. Si una clave existe en ambos y sus valores son diccionarios, actualiza recursivamente. De lo contrario, el valor de `d2` sobrescribe el de `d1`. La función debe modificar `d1` in-place o devolver uno nuevo.',
    difficulty: Difficulty.HARD,
    examples: [{ input: "d1={'a':1,'b':{'x':10}}, d2={'b':{'y':20},'c':3}", output: "{'a':1,'b':{'x':10,'y':20},'c':3}" }],
    defaultCode: 'import copy\ndef deep_update(dict1, dict2):\n  # Para simplificar, operaremos sobre una copia de dict1 si se devuelve uno nuevo.\n  # O modifica dict1 in-place si lo prefieres.\n  updated_dict = copy.deepcopy(dict1)\n  # Tu código aquí\n  return updated_dict',
    datasets: [
        {input: "{'data':{'v':1}}, {'data':{'v':2,'n':3}}", expectedOutput: "{'data':{'v':2,'n':3}}"},
        {input: "{'user':{'name':'A'}}, {'user':{'age':30}}", expectedOutput: "{'user':{'name':'A','age':30}}"},
        {input: "{}, {'a':{'b':1}}", expectedOutput: "{'a':{'b':1}}"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Itera sobre las claves y valores de `dict2`. Si una clave también está en `dict1` y ambos valores son diccionarios, llama recursivamente a `deep_update` para esa sub-parte. De lo contrario, simplemente asigna el valor de `dict2` a `dict1` (o su copia).'
  },
  {
    id: 'dict-hard-4', topic: 'dictionaries', title: 'Comparar Diccionarios (Identificar Diferencias)',
    description: 'Compara dos diccionarios y devuelve un resumen de sus diferencias: claves solo en d1, claves solo en d2, y claves con valores diferentes. Formato del output: `{"solo_d1": [...], "solo_d2": [...], "diferentes": {clave: [valor_d1, valor_d2], ...}}`',
    difficulty: Difficulty.HARD,
    examples: [{ input: "d1={'a':1,'b':2,'c':3}, d2={'b':20,'c':3,'d':4}", output: "{'solo_d1':['a'],'solo_d2':['d'],'diferentes':{'b':[2,20]}}" }],
    defaultCode: 'def comparar_diccionarios_diff(dict1, dict2):\n  diferencias = {"solo_d1": [], "solo_d2": [], "diferentes": {}}\n  # Tu código aquí\n  return diferencias',
    datasets: [
        {input: "{'x':1,'y':2}, {'x':1,'y':2}", expectedOutput: "{'solo_d1':[],'solo_d2':[],'diferentes':{}}"},
        {input: "{'k1':'v1'}, {'k2':'v2'}", expectedOutput: "{'solo_d1':['k1'],'solo_d2':['k2'],'diferentes':{}}"},
        {input: "{'id':1,'val':'A'}, {'id':1,'val':'B'}", expectedOutput: "{'solo_d1':[],'solo_d2':[],'diferentes':{'val':['A','B']}}"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Itera sobre las claves de `dict1`: si no están en `dict2`, son `solo_d1`. Si están, compara valores. Luego itera sobre las claves de `dict2`: si no están en `dict1`, son `solo_d2`.'
  },
  {
    id: 'dict-hard-5', topic: 'dictionaries', title: 'Crear Diccionario a partir de Lista de Tuplas (Manejo de Claves Duplicadas)',
    description: 'Dada una lista de tuplas (clave, valor), crea un diccionario. Si hay claves duplicadas, el valor asociado debe ser una lista de todos los valores para esa clave.',
    difficulty: Difficulty.HARD,
    examples: [{ input: "[('a', 1), ('b', 2), ('a', 3)]", output: "{'a': [1, 3], 'b': [2]}" }],
    defaultCode: 'def dict_desde_tuplas_duplicados(lista_tuplas):\n  resultado = {}\n  # Tu código aquí\n  return resultado',
    datasets: [
        {input: "[('x',10),('y',20)]", expectedOutput: "{'x':10,'y':20}"},
        {input: "[('k',1),('k',2),('j',3),('k',1)]", expectedOutput: "{'k':[1,2,1],'j':3}"},
        {input: "[]", expectedOutput: "{}"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Itera sobre la lista de tuplas. Para cada `(clave, valor)`: si la clave no está en `resultado`, asigna `resultado[clave] = valor`. Si la clave ya existe, verifica si `resultado[clave]` es una lista. Si no, conviértela a lista y añade el nuevo valor. Si ya es lista, solo añade el nuevo valor.'
  }
];
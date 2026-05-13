
import { Problem, Difficulty } from '../../types';

export const pythonClassesProblems: Problem[] = [
  // Fácil (10 problemas)
  {
    id: 'pythonClasses-easy-1', topic: 'pythonClasses', title: 'Crear Clase Simple',
    description: 'Crea una clase llamada `Perro` sin atributos ni métodos (solo `pass` en su cuerpo).',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: 'Clase Perro definida.' }],
    defaultCode: 'class Perro:\n  # Tu código aquí (puede ser solo pass)\n  pass\n\n# Para verificar, puedes instanciar: mi_perro = Perro()',
    datasets: [{input: "isinstance(Perro(), Perro)", expectedOutput: "True"}],
    authorSignature: "<JGdev/>",
    hint: 'La sintaxis básica es `class NombreDeClase:` seguido de un bloque indentado. Si no hay nada más, usa `pass`.'
  },
  {
    id: 'pythonClasses-easy-2', topic: 'pythonClasses', title: 'Clase con Constructor (`__init__`)',
    description: 'Modifica la clase `Perro` para que tenga un constructor `__init__` que acepte un `nombre` y lo guarde como atributo de instancia.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "mi_perro = Perro('Fido')", output: 'Perro con nombre Fido creado.' }],
    defaultCode: 'class Perro:\n  def __init__(self, nombre):\n    # Tu código aquí\n    pass\n\n# fido = Perro("Fido")\n# print(fido.nombre) # Debería imprimir Fido',
    datasets: [{input: "Perro('Buddy').nombre", expectedOutput: "'Buddy'"}],
    authorSignature: "<JGdev/>",
    hint: 'El constructor se define como `def __init__(self, parametro1, ...):`. Dentro, usa `self.nombre_atributo = parametro`.'
  },
  {
    id: 'pythonClasses-easy-3', topic: 'pythonClasses', title: 'Clase con Método Simple',
    description: 'Añade un método `ladrar` a la clase `Perro` que devuelva la cadena "Guau!".',
    difficulty: Difficulty.EASY,
    examples: [{ input: "mi_perro = Perro('Rex'); mi_perro.ladrar()", output: "'Guau!'" }],
    defaultCode: 'class Perro:\n  def __init__(self, nombre):\n    self.nombre = nombre\n\n  def ladrar(self):\n    # Tu código aquí\n    return ""\n\n# rex = Perro("Rex")\n# print(rex.ladrar())',
    datasets: [{input: "Perro('Max').ladrar()", expectedOutput: "'Guau!'"}],
    authorSignature: "<JGdev/>",
    hint: 'Define un método `def ladrar(self):` dentro de la clase. El `self` es siempre el primer parámetro en los métodos de instancia.'
  },
  {
    id: 'pythonClasses-easy-4', topic: 'pythonClasses', title: 'Atributo de Clase',
    description: 'Crea una clase `Circulo` con un atributo de clase `pi` igual a 3.14159.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "Circulo.pi", output: '3.14159' }],
    defaultCode: 'class Circulo:\n  # Tu atributo de clase aquí\n  pass\n\n# print(Circulo.pi)',
    datasets: [{input: "Circulo.pi", expectedOutput: "3.14159"}],
    authorSignature: "<JGdev/>",
    hint: 'Los atributos de clase se definen directamente dentro de la clase, fuera de cualquier método. `nombre_atributo = valor`.'
  },
  {
    id: 'pythonClasses-easy-5', topic: 'pythonClasses', title: 'Instanciar un Objeto',
    description: 'Dada una clase `Coche` con `__init__(self, marca)`, crea una instancia de `Coche` con la marca "Tesla".',
    difficulty: Difficulty.EASY,
    examples: [{ input: "N/A", output: 'Instancia de Coche creada con marca Tesla.' }],
    defaultCode: 'class Coche:\n  def __init__(self, marca):\n    self.marca = marca\n\ndef crear_coche():\n  # Tu código aquí para crear la instancia\n  return None\n\n# mi_tesla = crear_coche()\n# print(mi_tesla.marca)',
    datasets: [{input: "crear_coche().marca", expectedOutput: "'Tesla'"}],
    authorSignature: "<JGdev/>",
    hint: 'Para instanciar, usa `nombre_variable = NombreDeClase(argumentos_del_constructor)`.'
  },
  {
    id: 'pythonClasses-easy-6', topic: 'pythonClasses', title: 'Método que usa Atributo de Instancia',
    description: 'En la clase `Perro` (con `nombre`), crea un método `presentarse` que devuelva "Soy [nombre]".',
    difficulty: Difficulty.EASY,
    examples: [{ input: "perro = Perro('Rocky'); perro.presentarse()", output: "'Soy Rocky'" }],
    defaultCode: 'class Perro:\n  def __init__(self, nombre):\n    self.nombre = nombre\n\n  def presentarse(self):\n    # Tu código aquí\n    return ""\n\n# rocky = Perro("Rocky")\n# print(rocky.presentarse())',
    datasets: [{input: "Perro('Lucy').presentarse()", expectedOutput: "'Soy Lucy'"}],
    authorSignature: "<JGdev/>",
    hint: 'Dentro del método `presentarse(self)`, puedes acceder al nombre con `self.nombre`.'
  },
  {
    id: 'pythonClasses-easy-7', topic: 'pythonClasses', title: 'Clase `Rectangulo` con Área',
    description: 'Crea una clase `Rectangulo` con `__init__(self, base, altura)` y un método `area()` que devuelva `base * altura`.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "r = Rectangulo(5, 4); r.area()", output: '20' }],
    defaultCode: 'class Rectangulo:\n  def __init__(self, base, altura):\n    self.base = base\n    self.altura = altura\n\n  def area(self):\n    # Tu código aquí\n    return 0\n\n# mi_rect = Rectangulo(10, 2)\n# print(mi_rect.area())',
    datasets: [{input: "Rectangulo(3, 7).area()", expectedOutput: "21"}],
    authorSignature: "<JGdev/>",
    hint: 'En el método `area(self)`, usa `self.base` y `self.altura` para calcular el área.'
  },
  {
    id: 'pythonClasses-easy-8', topic: 'pythonClasses', title: 'Modificar Atributo de Instancia',
    description: 'Crea una clase `Libro` con `titulo`. Luego, crea una instancia, cambia su `titulo` y verifica el cambio.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "libro = Libro('Viejo'); libro.titulo = 'Nuevo'", output: 'Título del libro cambiado a Nuevo.' }],
    defaultCode: 'class Libro:\n  def __init__(self, titulo):\n    self.titulo = titulo\n\ndef modificar_titulo():\n  mi_libro = Libro("Python 101")\n  # Tu código aquí para modificar el título a "Python Avanzado"\n  return mi_libro\n\n# libro_mod = modificar_titulo()\n# print(libro_mod.titulo)',
    datasets: [{input: "modificar_titulo().titulo", expectedOutput: "'Python Avanzado'"}],
    authorSignature: "<JGdev/>",
    hint: 'Después de crear la instancia (`mi_libro`), puedes cambiar el atributo directamente: `mi_libro.titulo = "nuevo_valor"`.'
  },
  {
    id: 'pythonClasses-easy-9', topic: 'pythonClasses', title: 'Clase `Punto` con Coordenadas',
    description: 'Crea una clase `Punto` que en su `__init__` reciba `x` e `y` y los guarde.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "p = Punto(1, 2)", output: 'Punto con x=1, y=2 creado.' }],
    defaultCode: 'class Punto:\n  def __init__(self, x, y):\n    # Tu código aquí\n    pass\n\n# p1 = Punto(5, 10)\n# print(f"x: {p1.x}, y: {p1.y}")',
    datasets: [{input: "Punto(3,4).y", expectedOutput: "4"}, {input: "Punto(0,0).x", expectedOutput: "0"}],
    authorSignature: "<JGdev/>",
    hint: 'En `__init__(self, x, y)`, asigna `self.x = x` y `self.y = y`.'
  },
  {
    id: 'pythonClasses-easy-10', topic: 'pythonClasses', title: 'Constructor con Valor por Defecto',
    description: 'Crea una clase `Usuario` con `__init__(self, nombre, activo=True)`.',
    difficulty: Difficulty.EASY,
    examples: [{ input: "user1 = Usuario('Ana'); user2 = Usuario('Ben', False)", output: 'user1.activo es True, user2.activo es False.' }],
    defaultCode: 'class Usuario:\n  def __init__(self, nombre, activo=True):\n    self.nombre = nombre\n    self.activo = activo\n\n# u_activo = Usuario("Admin")\n# u_inactivo = Usuario("Invitado", False)\n# print(f"{u_activo.nombre} activo: {u_activo.activo}")\n# print(f"{u_inactivo.nombre} activo: {u_inactivo.activo}")',
    datasets: [{input: "Usuario('Test').activo", expectedOutput: "True"}, {input: "Usuario('Offline', activo=False).activo", expectedOutput: "False"}],
    authorSignature: "<JGdev/>",
    hint: 'En la definición del método `__init__`, puedes asignar un valor por defecto a un parámetro: `parametro=valor_defecto`.'
  },
  // Intermedio (5 problemas)
  {
    id: 'pythonClasses-int-1', topic: 'pythonClasses', title: 'Herencia Simple',
    description: 'Crea una clase `Animal` con un método `comer()`. Luego, crea una clase `Perro` que herede de `Animal`.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "mi_perro = Perro(); mi_perro.comer()", output: 'Método comer de Animal ejecutado.' }],
    defaultCode: 'class Animal:\n  def comer(self):\n    return "Animal comiendo"\n\nclass Perro(Animal):\n  pass\n\n# p = Perro()\n# print(p.comer())',
    datasets: [{input: "Perro().comer()", expectedOutput: "'Animal comiendo'"}],
    authorSignature: "<JGdev/>",
    hint: 'Para heredar, escribe `class ClaseHija(ClasePadre):`. La clase hija tendrá acceso a los métodos de la padre.'
  },
  {
    id: 'pythonClasses-int-2', topic: 'pythonClasses', title: 'Sobrescritura de Métodos',
    description: 'Dada la clase `Animal` con `hablar()` que devuelve "Sonido genérico". Crea `Gato` que herede y sobrescriba `hablar()` para que devuelva "Miau".',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "mi_gato = Gato(); mi_gato.hablar()", output: "'Miau'" }],
    defaultCode: 'class Animal:\n  def hablar(self):\n    return "Sonido genérico"\n\nclass Gato(Animal):\n  # Tu sobrescritura aquí\n  pass\n\n# g = Gato()\n# print(g.hablar())',
    datasets: [{input: "Gato().hablar()", expectedOutput: "'Miau'"}, {input: "Animal().hablar()", expectedOutput: "'Sonido genérico'"}],
    authorSignature: "<JGdev/>",
    hint: 'En la clase `Gato`, define un método con el mismo nombre (`hablar`) que en la clase `Animal`. Su implementación reemplazará a la de la clase padre.'
  },
  {
    id: 'pythonClasses-int-3', topic: 'pythonClasses', title: 'Uso de `super()`',
    description: 'Clase `Vehiculo` con `__init__(self, marca)`. Clase `Coche` hereda y en su `__init__` (que toma `marca` y `modelo`) llama a `super()` para inicializar `marca`, y luego guarda `modelo`.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "mi_coche = Coche('Ford', 'Fiesta')", output: 'Coche con marca Ford y modelo Fiesta.' }],
    defaultCode: 'class Vehiculo:\n  def __init__(self, marca):\n    self.marca = marca\n\nclass Coche(Vehiculo):\n  def __init__(self, marca, modelo):\n    # Tu código con super() aquí\n    self.modelo = modelo\n\n# c = Coche("Toyota", "Corolla")\n# print(f"Marca: {c.marca}, Modelo: {c.modelo}")',
    datasets: [{input: "Coche('VW', 'Golf').marca", expectedOutput: "'VW'"}, {input: "Coche('VW', 'Golf').modelo", expectedOutput: "'Golf'"}],
    authorSignature: "<JGdev/>",
    hint: 'En el `__init__` de `Coche`, llama a `super().__init__(marca)` para invocar el constructor de `Vehiculo`.'
  },
  {
    id: 'pythonClasses-int-4', topic: 'pythonClasses', title: 'Método Especial `__str__`',
    description: 'Crea una clase `Producto` con `nombre` y `precio`. Implementa `__str__` para que `print(producto_obj)` muestre "Producto: [Nombre], Precio: $[Precio]".',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "p = Producto('Laptop', 1200); str(p)", output: "'Producto: Laptop, Precio: $1200'" }],
    defaultCode: 'class Producto:\n  def __init__(self, nombre, precio):\n    self.nombre = nombre\n    self.precio = precio\n\n  def __str__(self):\n    # Tu código aquí\n    return ""\n\n# prod = Producto("Teclado", 50)\n# print(prod)',
    datasets: [{input: "str(Producto('Mouse', 25))", expectedOutput: "'Producto: Mouse, Precio: $25'"}],
    authorSignature: "<JGdev/>",
    hint: 'Define el método `def __str__(self):` dentro de la clase. Debe devolver una cadena formateada con `self.nombre` y `self.precio`.'
  },
  {
    id: 'pythonClasses-int-5', topic: 'pythonClasses', title: 'Contador de Instancias',
    description: 'Crea una clase `MiClase` que cuente cuántas instancias de ella se han creado. Usa un atributo de clase.',
    difficulty: Difficulty.INTERMEDIATE,
    examples: [{ input: "obj1=MiClase(); obj2=MiClase(); MiClase.contador", output: '2' }],
    defaultCode: 'class MiClase:\n  contador = 0\n  def __init__(self):\n    # Tu código aquí para incrementar el contador\n    pass\n\n# a = MiClase()\n# b = MiClase()\n# c = MiClase()\n# print(MiClase.contador)',
    datasets: [{input: "m1=MiClase(); m2=MiClase(); MiClase.contador", expectedOutput: "2"}, {input: "MiClase.contador=0; m=MiClase(); MiClase.contador", expectedOutput: "1"} ],
    authorSignature: "<JGdev/>",
    hint: 'Inicializa un atributo de clase `contador = 0`. En el método `__init__`, incrementa este contador usando `NombreDeClase.contador += 1`.'
  },
  // Difícil (5 problemas)
  {
    id: 'pythonClasses-hard-1', topic: 'pythonClasses', title: 'Propiedades con `@property`',
    description: 'Crea una clase `Temperatura` que almacene la temperatura en Celsius. Usa `@property` para un getter `fahrenheit` que la convierta y devuelva, y un setter para `fahrenheit` que actualice Celsius. (F = C * 9/5 + 32).',
    difficulty: Difficulty.HARD,
    examples: [{ input: "t=Temperatura(0); t.fahrenheit", output: '32.0' }, {input: "t=Temperatura(0); t.fahrenheit = 32; t.celsius", output: '0.0'}],
    defaultCode: 'class Temperatura:\n  def __init__(self, celsius):\n    self._celsius = celsius # Atributo "privado"\n\n  @property\n  def celsius(self):\n    return self._celsius\n\n  @property\n  def fahrenheit(self):\n    # Tu getter aquí: return self._celsius * 9/5 + 32\n    return 0.0\n\n  @fahrenheit.setter\n  def fahrenheit(self, valor_f):\n    # Tu setter aquí: self._celsius = (valor_f - 32) * 5/9\n    pass\n\n# temp = Temperatura(10)\n# print(temp.fahrenheit) # 50.0\n# temp.fahrenheit = 68\n# print(temp.celsius) # 20.0',
    datasets: [
      {input: "t=Temperatura(100); t.fahrenheit", expectedOutput: "212.0"},
      {input: "t=Temperatura(20); t.fahrenheit = 50; t.celsius", expectedOutput: "10.0"},
      {input: "t=Temperatura(-40); t.fahrenheit", expectedOutput: "-40.0"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Define un método `fahrenheit(self)` decorado con `@property` para el getter. Para el setter, define otro método `fahrenheit(self, valor)` decorado con `@fahrenheit.setter`.'
  },
  {
    id: 'pythonClasses-hard-2', topic: 'pythonClasses', title: 'Clase Singleton (Patrón de Diseño)',
    description: 'Implementa el patrón Singleton para una clase `Configuracion`. Solo debe existir una instancia de `Configuracion` en toda la aplicación.',
    difficulty: Difficulty.HARD,
    examples: [{ input: "c1=Configuracion.get_instance(); c2=Configuracion.get_instance(); c1 is c2", output: 'True' }],
    defaultCode: 'class Configuracion:\n  _instancia = None\n\n  @staticmethod\n  def get_instance():\n    if Configuracion._instancia is None:\n      Configuracion() # Llama a __init__ que asignará _instancia\n    return Configuracion._instancia\n\n  def __init__(self):\n    if Configuracion._instancia is not None:\n      raise Exception("Esta clase es un Singleton!")\n    else:\n      Configuracion._instancia = self\n      self.setting = "valor_inicial"\n\n# s1 = Configuracion.get_instance()\n# s2 = Configuracion.get_instance()\n# print(s1 is s2)\n# s1.setting = "nuevo_valor"\n# print(s2.setting) # Debería ser "nuevo_valor"',
    datasets: [
      {input: "cfg1=Configuracion.get_instance(); cfg2=Configuracion.get_instance(); cfg1 is cfg2", expectedOutput: "True"},
      {input: "Configuracion._instancia=None; c=Configuracion.get_instance(); c.setting='test'; Configuracion.get_instance().setting", expectedOutput: "'test'"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'Usa un atributo de clase `_instancia = None`. En `__init__`, verifica si `_instancia` ya existe. Crea un método estático `get_instance()` que cree la instancia si no existe o devuelva la existente.'
  },
  {
    id: 'pythonClasses-hard-3', topic: 'pythonClasses', title: 'Métodos Especiales de Comparación',
    description: 'Crea una clase `Version` con `mayor`, `menor`, `patch`. Implementa `__eq__` y `__lt__` para comparar versiones (ej: 1.2.3 < 1.2.4).',
    difficulty: Difficulty.HARD,
    examples: [{ input: "Version(1,2,3) == Version(1,2,3)", output: 'True' }, { input: "Version(1,2,3) < Version(1,3,0)", output: 'True' }],
    defaultCode: 'class Version:\n  def __init__(self, mayor, menor, patch):\n    self.mayor = mayor\n    self.menor = menor\n    self.patch = patch\n\n  def __eq__(self, otro):\n    # Tu código aquí\n    return False\n\n  def __lt__(self, otro):\n    # Tu código aquí\n    return False\n\n# v1 = Version(1,0,0)\n# v2 = Version(1,0,1)\n# v3 = Version(1,0,0)\n# print(v1 < v2)\n# print(v1 == v3)',
    datasets: [
      {input: "Version(2,0,0) < Version(1,9,9)", expectedOutput: "False"},
      {input: "Version(0,1,0) == Version(0,1,0)", expectedOutput: "True"},
      {input: "Version(1,10,0) > Version(1,2,100) # Implica __lt__", expectedOutput: "True (si __gt__ se define o __lt__ es completo)"}
    ],
    authorSignature: "<JGdev/>",
    hint: 'En `__eq__(self, otro)`, compara todos los atributos. En `__lt__(self, otro)`, compara `mayor`, luego `menor`, luego `patch` secuencialmente. Asegúrate de que `otro` sea del tipo `Version`.'
  },
  {
    id: 'pythonClasses-hard-4', topic: 'pythonClasses', title: 'Clase Abstracta con `abc`',
    description: 'Usando el módulo `abc`, crea una clase abstracta `Forma` con un método abstracto `area()`. Luego crea `Circulo` que herede e implemente `area()`.',
    difficulty: Difficulty.HARD,
    examples: [{ input: "c=Circulo(5); c.area()", output: '~78.5 (pi * r^2)' }],
    defaultCode: 'from abc import ABC, abstractmethod\nimport math\n\nclass Forma(ABC):\n  @abstractmethod\n  def area(self):\n    pass\n\nclass Circulo(Forma):\n  def __init__(self, radio):\n    self.radio = radio\n  \n  def area(self):\n    # Tu código aquí: return math.pi * (self.radio ** 2)\n    return 0.0\n\n# mi_circulo = Circulo(10)\n# print(mi_circulo.area())',
    datasets: [
      {input: "Circulo(1).area()", expectedOutput: "math.pi"},
      {input: "Circulo(0).area()", expectedOutput: "0.0"},
    ],
    authorSignature: "<JGdev/>",
    hint: '`Forma` debe heredar de `ABC`. El método `area` en `Forma` se decora con `@abstractmethod`. `Circulo` debe heredar de `Forma` e implementar `area(self)`.'
  },
  {
    id: 'pythonClasses-hard-5', topic: 'pythonClasses', title: 'Clase como Iterador',
    description: 'Crea una clase `ContadorInverso` que sea un iterador. Debe contar hacia atrás desde N hasta 0. Implementa `__iter__` y `__next__`.',
    difficulty: Difficulty.HARD,
    examples: [{ input: "list(ContadorInverso(3))", output: '[3, 2, 1, 0]' }],
    defaultCode: 'class ContadorInverso:\n  def __init__(self, inicio):\n    self.actual = inicio + 1 \n\n  def __iter__(self):\n    return self\n\n  def __next__(self):\n    # Tu código aquí\n    if self.actual <= 0:\n        raise StopIteration\n    self.actual -= 1\n    return self.actual\n\n# for num in ContadorInverso(5):\n#  print(num)',
    datasets: [
      {input: "list(ContadorInverso(1))", expectedOutput: "[1, 0]"},
      {input: "list(ContadorInverso(0))", expectedOutput: "[0]"},
      {input: "list(ContadorInverso(-1))", expectedOutput: "[]"}
    ],
    authorSignature: "<JGdev/>",
    hint: '`__iter__` debe devolver `self`. En `__next__`, decrementa el contador actual. Si es menor que 0, levanta `StopIteration`. De lo contrario, devuelve el valor actual.'
  }
];
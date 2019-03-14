
##### PASOS CADA VEZ QUE VUELVA A TRABAJAR EN UN PROYECTO DESPUES DE HORAS
1) Ir a la carpeta del proyecto
    `cd c:\wamp64\www\my-proyect`
2) Hacer un composer udpdate porque quizas alguna libreria se actualizó
    `composer update`
    
Cuando agreguen algo dentro de la clave 

--------------- 
##### PASOS PARA CREAR UNA LIBRERIA/PROYECTO


1) Crear el directorio [Tiene que ser independiente] 
    `mkdir new-proyect`

2) Entrar al directrio
    `cd new-proyect`

3) Inicializar el composer
    `composer init`

4) Crear una carpeta SRC
    `mkdir src`
    
5) Cambiar o configurar el *autoload* (dentro del `composer.json`)
    - Vendor\Package\Subpackage
    - ```sh
        {
            "autoload": {
                "psr-4" : {
                    "Batman\\shop\\" : "src\\"
                }
            }
        }
    - Antes de iniciar la clase definir el namespace
        `namespace Batman\Shop`
    
6) Generar el mapa de clases
    `composer dumpautoload -o`
    
7) Ir al directorio *src* para escribir codigo php (**solo codigo php**)
    `cd src`

8) Creamos un archivo para ejecutar codigo de prueba
    `touch index.php`

9) Requerir el mapa de clases generador con composer
    `require '..\vendor\autoload.php'`
    

#### ANOTACIONES VARIAS
---------------
## __[IMPORTANTE PARA EL EXAMEN]__
* Creacion de proyectos
* Metodos Magicos
* Polimorfismo
* Funciones (Globales y dentro de la clase)
    * *Funciones globales van con minuscula y separado con guion (funciones-globales)*
    * *Dentro de las clases van con camelCase, en ingles y puede ir SET Y GET*
* Patrones de Diseño
* Clases 
---------------
##### Versionado Semantico
* semver.org
    * major = API, [Application Programming Interface] (Cambia la interfaz de la libreria)
    * minor = features (Se le agrega algo mas)
    * patch = fixes (Se le arregla algo)

##### Comandos para trabajar en la consola
`cd` = Change directory - Cambiar de directorio
`ls` = List Storage - Ver archivos del directorio
`mkdir` = Make a Directory - Crear un directorio 

##### Frameworks de testeo PHP
* [PHP Unit](phpunit.de)
* [Codeception](https://codeception.com/)

---

##### Principios Solid
https://apiumhub.com/es/tech-blog-barcelona/principios-solid/

* ***Principio Open/Closed***
    * Abiertas para la extension 
        * *Significa que nadie use el *`final`* en la *`class`**
    *  Cerradas para la modificacion
        * *Una vez finalizado mi objetivo NO SE MODIFICA MAS el archivo*
---
##### Anotaciondes de las Clases (Class)
* Las clases tienen dentro **Propiedades** *`$propiedad`* y **Metodos** *`public function nombreDeMetodos(){}`*
    * Las *propiedades* pueden cambiar
    * Las *propiedades* llevan $
    * **Metodos de instancia** `->`
        * solo funcionan si los instancias metodo();
    * **Metodo de Clase** `::`
        * Se puede llamar a ese metodo aunque no tenga la instancia creada
        * `$calc = CalculatorFactory`
    * **Metodo Magico**
        * `parent::__construct()`
    * **Invocando una constante de clase *DESDE LA CLASE***
        * `self::REGULAR`
    * **Invocando una constante de clase *FUERA LA CLASE***
        * `CalculatorFactory::REGULAR` 

* *Constantes* (*`CONST EJEMPLO = 1;`*)
    * Es un valor definido que nunca va a cambiar
    * Cuando nos referimos a las constantes dentro de las clases usamos `self::` // *(Operador de resolucion de ambito)*
    * Las constantes no son propiedades
    * Van todas en mayusculas
    * Cuando se invoca fuera, se nombra `NameClass::NameConstant` *(CalculatorFactory::REGULAR)*
    * *La constante no lleva $*
    * El constructor de la clase solo devuelve el metodo
---
##### Anotaciones de Herencia
* Primero llamar a la clase padre y despues hacer lo que quiero hacer en el constructor
* `extends` es herencia
* *No mas de tres niveles*
* *Visibilidad*
    * **Metodos(Funciones)** -> *`Public`*
    * **Propiedades** -> *`Private`*
    * **Propiedades Hereditarias** -> *`Protected`* (Sigue siendo private pero pueden acceder los hijos de esa clase)
---------------------------
##### Patrones de diseño de Software (Son 30)
[TutorialsPoint](https://www.tutorialspoint.com/design_pattern/factory_pattern.htm)
* ***Creacionales***
`factory`
* ***Comportamiento***
* ***Estructurales***

* Para modificar una class se usa una `factory` (Es un patron de diseño)
    * `factory` -> Instancia los hijos del padre
    * Si estoy en el mismo nivel el use va sin el PATH (MixPlay\\Math)
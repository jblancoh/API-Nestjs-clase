# Día 1

## Introduccion

Curso practico de REST API con NestJS y MongoDB

Se requiere conocimiento basico de NestJs y MongoDb

Se creara un CRUD basico de productos.

Dia 1 - Ensenar basicos de Node y express
Dia 2 - Iniciar proyecto de NestJs
Dia 3 - Creacion de REST-API
Dia 4 - Integracion con proyecto frontend
Dia 5 - Final de curso

### Herramientas a utilizar

- Terminal
- Git
- Editor de texto (VSCode)
- Postman o Insomnia

- CRUD

Nest utiliza en el fondo ExpressJS
Basicos de Express
Nest utiliza javascript pero se basa en TypeScript, este es su lenguaje principal

Instalar MongoDB

### Tecnologias

#### Nodejs

Instalar Nodejs


#### Nestjs

Es un framework de nodejs que se basa en angular. Se programa en TypeScript, se utiliza para realizar el backend de un proyecto.

Se creara un API sencilla

Se utilizara postman o insomnia

#### Typescript

#### MongoDb
## Instalacion

```bash
npm i -g @nestjs/cli
# CLI - Generador de proyecto de nestjs
```

```bash
# Iniciar proyecto
nest new first_project
```
```bash
# Iniciar proyecto
npm start:dev
```

<!-- Se hablara sobre package, README, nodemon y nest-cli.json -->
<!-- main.ts 
Crea la aplicacion
y escucha el puerto 3000
Se usa async await - se usa ECMAScript
Iniciamos el proyeco
Veremos nuestro app.module para ver el codigo
Los modulos basicamente son codigo inicial o raiz(root)
Podemos tener muchos modulos, en este caso tenemos el principal

En este modulo tenemos los controladores y providers

Los Controladores son las rutas de nuestro servidor
Peticion @Get()

Podemos generar controladores por medio de la terminal

-->

```bash
nest --help
```

```bash
nest generate controller products
```

<!-- 
Generamos el CRUD de producto
Utilizamos postman para probar los endpoints
Probamos Post
Utilizamos Body para optener un cuerpo de un request
Dto en controllers

Para determinar los datos que llegan Data Transfer Object

Tipo objeto para peticiones get

Delete para agregar parametros

Put para probar cuerpo y parametros

Importar express para usar request y response, solo de ejemplo

 -->

 <!-- 
 Generar un servicio para tener metodos que podemos reutilizar
 Generar modulo para products
 este product module es el indice de nuestro productos
 Importamos los controllers y services

Creamos nuestro interfaces para nuestro typescript
Interface es para especificar los tipos de datos
Ayuda a typescript a poder resaltar el codigo, no es igual que el DTO
DTO: Cuando se tranfieren los datos
Interface: solo internamente para el codigo

Creamos metodos para ontener los productos 

En los controladores instanciamos el servicio (constructor)

 -->
```bash
nest generate service products
# Se agrupa si ponemos el mismo nombre
```

```bash
nest generate module products
# Se agrupa si ponemos el mismo nombre
```

<!-- 
Continuamos con Techniques/database
 -->

 Fuentes:


(https://nodejs.org/en/docs/)[https://nodejs.org/en/docs/]
(https://docs.nestjs.com)[https://docs.nestjs.com]
(https://www.mongodb.com/docs/)[https://www.mongodb.com/docs/]
(https://www.typescriptlang.org/docs/)[https://www.typescriptlang.org/docs/]

(https://lenguajejs.com/npm/administracion/package-json/)[https://lenguajejs.com/npm/administracion/package-json/]

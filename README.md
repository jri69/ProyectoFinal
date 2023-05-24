
### Pre-requisitos 📋

```
 Tener instalado Nodejs y npm en su maquina local
```

### Instalación 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

_Primero:_

```
  copiar el archivo .env.example y renombrarlo por .env
```
_Luego:_

```
 colocar las credenciales de la base de datos y las key de autentificación.
```
_Ejecutar en la terminal del proyecto:_

```
  npm install
```
_Despues ejecutar_

```
  npm run migrate:run
```


_Finalmente ejecutar_

```
  npm run dev
```

_EndPoints_
```
 GET: http://localhost:3000/api/usuarios
 GET: http://localhost:3000/api/usuarios/1
 POST: http://localhost:3000/api/usuarios
      {
        "nombre": "juan",
        "primer_apellido": "inclan",
        "segundo_apellido": "",
        "fecha_nacimiento": "20/01/1990",
        "cedula_identidad": "1254648"
      }
 PUT: http://localhost:3000/api/usuarios/1
 DELETE: http://localhost:3000/api/usuarios/1
 GET: http://localhost:3000/api/usuarios/promedio-edad

 GET: http://localhost:3000/api/estado 

```
# Práctica 3 IDWM
![GitHub last commit](https://img.shields.io/github/last-commit/nico-alv/practica03/main)

[![Image from Gyazo](https://i.gyazo.com/5c8b222462f8184c9b21214e4b0e79a1.png)](https://gyazo.com/5c8b222462f8184c9b21214e4b0e79a1)

Solución para la tercera práctica de la asignatura de introducción al desarrollo web móvil en la cual se pide implementar una API y un frontend mobile editable.

----

### Dependencias

1. [XAMPP](https://sourceforge.net/projects/xampp/)

2. [Composer](https://getcomposer.org)

3. [Node.js](https://nodejs.org/en)

4. [Git](https://git-scm.com/downloads)

> Se debe tener cuidado de instalar composer después de XAMPP ya que este último es responsable de la instalación de PHP.

### Levantando el proyecto
- Clona el repositorio a tu máquina local.
- Iniciar Apache y MySQL en el panel de control de XAMPP.
- Abrir http://localhost/phpmyadmin/ y crear nueva base de datos.
- Abrir una terminal dentro de la carpeta raíz del proyecto. 

### Backend

Entra al directorio del backend, copia el archivo .env.example.

```bash
cd .\backend\ 
```

```bash
copy .env.example .env 
```

Dentro de este archivo configurar el puerto, nombre, usuario y contraseña de la base de datos creada previamente.

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=practica3
DB_USERNAME=root
DB_PASSWORD=
```

Instalar las dependencias de composer.json.

```bash
composer install
```

```bash
php artisan key:generate
```

Ejecutar migraciones y seeders.

```bash
php artisan migrate:fresh --seed
```

Arrancar el backend.

```bash
php artisan serve --host=ip
```
Reemplazar "ip" por la ipv4 local (ver con comando ipconfig)

#### Mobile
Luego, abrir otra terminal en la raiz del proyecto y ejecutar:

```bash
cd .\mobile\
```

Instalar dependencias guardadas en package.json.

```bash
npm install
```

En Profile.js, cambiar 192.168.0.2 por la IP local en la que el servidor de laravel está escuchando.

```
const api_url = 'http://192.168.0.2:8000/api/profile';
                        ^^^^^^^^^^^
```


Arrancar el proyecto mobile.

```bash
npm run android
```

----

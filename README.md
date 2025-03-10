Final de Validación y Verificación
Realizar el proyecto del video:
    https://www.youtube.com/watch?v=LEh7PVCphmU&t=4056s 
La parte1 completa es subir el proyecto a github en una rama test, van a prueba teórica oral. Tienen nota 5 y dependen del teórico. 

Parte 2:
    Van a tener que dejar de usar los test y usar nodemon con “npm run start:local”
●	crear una cuenta en https://console.neon.tech/app/projects.
●	crear tabla users:
CREATE TABLE users (
    uid CHAR(6) PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER CHECK (age >= 0),
    address TEXT
);
●	Modificar users.js para que se conecte a  la base de datos(pueden usar chatgpt).

●	Modificar todos los lugar donde usen las funciones van a tener que poner un async y await
●	Subir el proyecto al repositorio de github en rama test_02

Parte3:
Van a dejar de trabajar solo con el backend y van a trabajar backend-frontend al mismo tiempo. 

●	Clonar el front desde el repositorio https://github.com/abelhpp/FRONT_JEST.git ejecutar “npm install” y despues para iniciar “npm run dev”
●	Desde el backend validar los inputs. 
-No puede haber campos vacíos.
-No se admiten caracteres extraños.
-la edad tiene que ser número entero
-la edad mínima es de 15 años y máxima en 100 años
La parte3 completa, NO VAN A TEÓRICO, nota entre 9 y 10.

# practica10_253239

1. ¿Por qué el filtro atrapa la clase base y no cada error por separado?
Porque todos mis errores del gimnasio son "hijos" de una misma clase base entonces si el filtro atrapa a la clase base atrapa a todos sus hijos de una vez

2. ¿Por qué este middleware no podría decidir si un usuario tiene permiso para una ruta?
Porque para decidir permisos se necesita algo que si sepa a que metodo va la peticion y eso es un Guard

3. ¿Por qué la petición que responde 409 no aparece en el registro de tiempos?
Porque el interceptor solo anota el tiempo cuando el controlador responde bien entonces cuando algo falla y se lanza un error el error se salta el interceptor y va directo al
filtro de errores y esa peticion nunca llega a la parte del codigo que escribe el registro

4. ¿Por qué el sobre { data, meta } rompe a cualquier cliente que ya usara la API?
Porque antes GET /clases me devolvia directamente una lista y ahora devuelve un objeto y la lista quedo adentro de data

5. CORS: si el servidor respondió en los dos casos, ¿quién bloquea y a quién protege?
Quien bloquea es el navegador si ve que falta ese permiso no le deja leer la respuesta a la pagina que hizo la peticion y el protege al usuario para que una pagina de otro
sitio no pueda leer sus datos de mi API a escondidas

6. ¿Por qué el campo se llama passwordHash y no password?
Para no guardar la contraseña real por descuido

7. ¿Por qué los dos errores del inicio de sesión dicen exactamente lo mismo?
Para no darle pistas a quien quiera meterse asi que con el mismo mensaje "Credenciales inválidas" no se puede saber cual de las dos cosas fallo

8. Si el contenido del token se puede leer, ¿qué protege la firma?
La firma no esconde nada protege que nadie pueda cambiar el contenido sin que se note

9. ¿Por qué es más seguro proteger todo y abrir a mano, que al revés?
Porque si se me olvida abrir una ruta que debia ser publica el error se nota enseguida pq da 401 y alguien se puede dar cuenta y si fuera al reves y se me olvida proteger
una ruta queda abierta sin que nadie lo note y eso es mucho mas peligroso

10. ¿Cuál es la diferencia entre un 401 y un 403?
El 401 significa "no sé quién eres" no mandaste token o no es valido y el 403 significa "sé quién eres pero no tienes permiso para esto"

11. ¿Cuántas líneas del AuthService cambiaron para pasar de memoria a MySQL? ¿Por qué?
Ninguna solo cambie una linea en auth.module.ts donde digo que repositorio usar el AuthService nunca supo si los usuarios estaban en memoria o en MySQL porque solo habla
con una interfaz y no con la clase concreta

12. ¿Por qué tomar al usuario de los datos del token y no de la URL o del cuerpo?
Porque lo que viene en la URL o en el cuerpo lo puede escribir cualquiera a mano si mi API confiara en GET /miembros/3/inscripciones cualquiera podria cambiar el 3 por otro
numero y ver las inscripciones de otra persona

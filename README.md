<center><img src="https://img.icons8.com/color/144/000000/firebase.png"/></center>
<p><h1><center>Deploy  Proyect on Firebase</center></h1></p>

## Instrucciones

1. Crear un proyecto de Hoting en Firebase, en mi caso lo he llamado "wheather-deploy"

2. Creamos un repositorio en Github, para cuando realicemos cambios sobre el proyecto, estos queden reflejados, ademas de asegurarnos de que si tenemos algún fallo podemos volver hacía atras.

3. El siguiente paso seria descargarnos el repositorio, donde en este caso volcaremos el ejercicio de Wheather que hicimos en el modulo de Javascript Avanzado.

4. Vamos a preparar el proyecto para el deploy, ejecutando los siguientes comandos:

  -  `firebase login`
  -  `firebase init`
  -  `firebase serve --only hosting`
5. Ahora realizamos el desploy de la aplicación usando el siguiente comando:
- `firebase deploy`
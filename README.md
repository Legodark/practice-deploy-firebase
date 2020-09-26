<p align="center"><img src="https://img.icons8.com/color/144/000000/firebase.png"/></p>
<h1 align="center">Deploy  Proyect on Firebase V.1.0.1</h1>

## Instrucciones

1. Crear un proyecto de Hoting en Firebase, en mi caso lo he llamado "wheather-deploy"

2. Creamos un repositorio en Github, para cuando realicemos cambios sobre el proyecto, estos queden reflejados, ademas de asegurarnos de que si tenemos algún fallo podemos volver hacía atras.

3. El siguiente paso seria descargarnos el repositorio, donde en este caso volcaremos el ejercicio de Wheather que hicimos en el modulo de Javascript Avanzado.

4. Vamos a preparar el proyecto para el deploy, ejecutando los siguientes comandos:

  -  `firebase login` - Con este comando nos logueamos dentro de nuestra cuenta de google)

<img src="./images_firebase/login.PNG"/>


  -  `firebase init` - Con este comando iniciamos el proyecto en el directorio en el que estamos, se nos hara una serie de preguntas, una de las cuales es el servicio que queremos utilizar, en este caso en la selección de servicios marcaremos nada mas que Hosting
  -  `firebase serve --only hosting` - Con este comando

5. Por ultimo, una vez tengamos el proyecto con los archivos que deseamos subir, realizamos el desploy de la aplicación usando el siguiente comando:
- `firebase deploy`

![](./images_firebase/login.PNG)
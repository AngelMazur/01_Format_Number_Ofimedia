# MAZURMATIC

![](https://github.com/AngelMazur/01_Format_Number_Ofimedia/blob/master/public/Image/Mockup.jpg)

Web dedicada a servir de herramienta para la conversión de números de serie en empresa de TPVs para el fabricante Verifone

Su funcionalidad se basa en leer los números de serie con un lector de código de barras y automáticamente lo convertirá en el número del fabricante del terminal de la siguiente manera:

![https___www mazurmatic com - Google Chrome 2022-11-21 18-57-44](https://user-images.githubusercontent.com/67973514/203130807-fbcc11d5-8a66-48c0-a6d2-f46cde955fc4.gif)


Se puede leer terminal por terminal de manera individual o bien introduciendo una lista de terminales, los cuales se podrán convertir presionando el botón de añadir de la siguiente manera:

![https___www mazurmatic com - Google Chrome 2022-11-21 19-28-13](https://user-images.githubusercontent.com/67973514/203132622-e80231f8-7360-4444-be03-c16ea2038956.gif)

Pudiendo eliminar los duplicados y descargando el listado en formato `.txt` que es lo que nos pide el fabricante para poder subir el documento a su servidor. 

Esta herramienta agiliza el proceso de estar escribiendo los números de fabricante a mano, además en los listados de números evitar estar comprobando si tiene el formato correcto.

Solo admite los números de serie de los clientes para los que trabajamos que en este caso son 5 cada uno con su formato. Sí se introduce un número de más de 12 dígitos, devolvería una alerta con formato inválido.


## Link
[mazurmatic.com](http://www.mazurmatic.com)
## Instalación
    npm install
o si prefieres utilizar `yarn`

    yarn install

## Uso
Esta web convierte cualquiera de las siguientes cadenas de números donde `*` es el número desado:

  1. `vf*********`
  2. `00*********`
  3. `*********`
  4. `***-***-***`
  5. `***'***'***`

 En la misma cadena con guiones cada 3 números:

 1. `***-***-***`
 2. `***-***-***`
 3. `***-***-***`
 4. `***-***-***`
 5. `***-***-***`

 Se pueden ingresar tantas cadenas como se deseen y existen dos maneras de ingresar dichas cadenas.

 1. Cadena por cadena, introduciendo `intro` después de cada cadena para su posterior conversión
 2. Bloque de varias cadenas usando el botón de añadir para su posterior conversión.

 Una vez se hayan realizado las conversiones es posible eliminar cadenas duplicadas, además de su descarga en formato.txt con la fecha actual.



# Challenge de Avenida+ - Frontend

## Descripción

Antes de comenzar, quiero agradecer la oportunidad de participar en este challenge. A continuación, detallo los pasos que seguí para realizar el proyecto.

## Pasos seguidos

1. Creación del proyecto con `vite react`
2. Instalación de dependencias
3. Pense en la estructura del proyecto teniendo en cuenta un Componente principal que contenga 3 componentes hijos (Formulario de Tarjeta, Detalles de la Orden y El Modal)
4. Creación de los componentes
5. Creación de los estilos especificos para tener la vista lo más parecida posible a la del diseño
6. Creación de la lógica para el formulario de tarjeta
7. Creación de la lógica para el modal
8. Creación de la lógica para los detalles de la orden
9. Integración de la API

## Problemas encontrados

1. Al tratar de importar la imágen del chip de la tarjeta, no pude hacerlo de la forma tradicional, por lo que tuve que buscar una solución en internet y encontré una forma de hacerlo con el archivo `custom.d.ts`

2. Tuve que crear la Tarjeta de Crédito con CSS, ya que no encontré una librería que me permitiera hacerlo de forma sencilla.

## Para correr el proyecto

Antes de correr el proyecto, es necesario tener la API corriendo en el puerto 3000. Dicha API se encuentra en el siguiente repositorio: [API](https://github.com/eligauto/avenida-plus-challenge_BACKEND)

1. Clonar el repositorio
2. Instalar las dependencias con `npm install`
3. Correr el proyecto con `npm run dev`

## Tecnologías utilizadas

- React
- Css
- Axios
- Bootstrap


# Proyecto de E-commerce con React

Este es un proyecto de e-commerce desarrollado con React, React Router, Bootstrap y SweetAlert2. El objetivo del proyecto es proporcionar una experiencia de compra en línea donde los usuarios puedan navegar por productos, agregar artículos a su carrito y finalizar la compra.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Dependencias](#dependencias)
- [Funciones Principales](#funciones-principales)
- [Autores](#autores)
- [Licencia](#licencia)

## Instalación

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/mbgiles/segundaEntregaReact2

 ##  Navega al directorio del proyecto:
 cd tu-repositorio

## Instala las dependencias:
npm install

## Inicia la aplicación:
npm start


## USO
Una vez que la aplicación esté en funcionamiento, abre http://localhost:5173 en tu navegador para ver la aplicación.

## Estructura del Proyecto
├── public
│   └── index.html
├── src
│   ├── assets
│   │   └── logo.svg
│   ├── components
│   │   ├── Header.jsx
│   │   ├── Item.jsx
│   │   ├── ItemDetail.jsx
│   │   ├── ItemDetailContainer.jsx
│   │   └── CartWidget.jsx
│   ├── context
│   │   └── CartContext.jsx
│   ├── data
│   │   └── productos.json
│   ├── pages
│   │   ├── Home.jsx
│   │   └── Checkout.jsx
│   ├── App.jsx
│   ├── index.js
│   └── main.css
├── .gitignore
├── README.md
├── package.json
└── package-lock.json

## Dependencias
React
React Router
Bootstrap
SweetAlert2
Firebase (si aplicable)
Funciones Principales
Carrito de Compras
El componente CartContext proporciona el estado y las funciones necesarias para manejar el carrito de compras. Incluye funciones para agregar, quitar y vaciar productos del carrito, así como para calcular la cantidad total de productos y el precio total.

## Integración con Firebase
El componente ItemDetailContainer obtiene los detalles del producto desde Firebase, utilizando getDoc y doc de la biblioteca firebase/firestore.

## Alertas de Confirmación
Se utilizan alertas de SweetAlert2 para notificar al usuario cuando un producto es agregado al carrito.

## Navegación
Se utiliza React Router para la navegación entre diferentes páginas de la aplicación, como la página principal, la página de detalles del producto y el carrito de compras.

## Autores
Magalí Giles



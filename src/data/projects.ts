import { project } from "../types";

export const projects : project[] = [
    {
        img: "Proyecto_1",
        name: "Portafolio Web",
        description : "Un portafolio web diseñado para mostrar proyectos, habilidades y experiencia. Incluye secciones de información personal, tecnologías, y un carrusel interactivo de proyectos.",
        tecnologies: ["React", "TypeScript", "CSS" ],
        link: "https://github.com/AlejandroSDValle/Portafolio"
    },
    {
        img: "Proyecto_2",
        name: "Sistema prediccion",
        description : "Un sistema desarrollado con Django MVC para la interfaz visual y un algoritmo de Machine Learning para predecir las ventas. Permite anticipar demanda, evitar faltantes de stock y optimizar la gestión de inventarios.",
        tecnologies: ["Django", "Python", "Machine Learning", "HTML", "Bootstrap"],
        link: "https://github.com/AlejandroSDValle"
    },
    {
        img: "Proyecto_3",
        name: "Sistema CRUD Administración de Productos",
        description : "Sistema básico para gestionar productos, con operaciones CRUD. Desarrollado con Spring Boot como REST Framework para el backend y React para el frontend. Implementa validaciones en el backend mediante excepciones personalizadas.",
        tecnologies: ["React", "TypeScript", "Spring Boot REST"],
        link: "https://github.com/AlejandroSDValle/Administrador-Productos"
    },
    {
        img: "Proyecto_4",
        name: "Tienda online",
        description : "Un sistema de ventas que incluye funcionalidades de predicción de ventas, inicio de sesión de usuarios, venta en línea, gestión de pedidos, productos y proveedores. Facilita la administración y operación eficiente de una cremería.",
        tecnologies: ["React", "TypeScript", "Node.js"],
        link: "https://github.com/AlejandroSDValle"
    },
    
]
import { project } from "../types";

export const projects : project[] = [
    {
        id: 1,
        img: "Proyecto_1",
        name: "Portafolio Web",
        shortDescription : "Mi portafolio personal, desarrollado con React y TypeScript, es una plataforma donde muestro mi trayectoria como desarrollador.",
        fullDescription: `Este proyecto es un portafolio web interactivo desarrollado con React y TypeScript, diseñado para presentar mi trayectoria profesional como desarrollador. 

        La aplicación cuenta con una interfaz moderna y estructurada. Este portafolio no solo refleja mi experiencia y habilidades, sino que también demuestra mis conocimientos en desarrollo web al estar construido con React, TypeScript.`,
        tecnologies: ["React", "TypeScript", "CSS" ],
        link: "https://github.com/AlejandroSDValle/Portafolio",
        imagenes:[
            {
                imagen: "Proyecto_1_1",
                descripcion: "Sección 'Sobre mí' donde presento mi formación, enfoque profesional y una lista de tecnologías con las que he trabajado."
            } 
        ]
    },
    {
        id: 2,
        img: "Proyecto_2",
        name: "Administrador de tareas",
        shortDescription: 
        "Un administrador de tareas con backend en Spring Boot que incluye autenticación con JWT, excepciones personalizadas, interceptores y envío de correos con JavaMail. Ofrece gestión de usuarios, proyectos, tareas con estados (pendiente, en revisión, hecha) y notas. También permite manejo de equipos, verificación de cuentas por email, cambio de contraseña y actualización de datos de usuario.",
        fullDescription: `Este administrador de tareas es una aplicación full-stack desarrollada con React (TypeScript) y Spring Boot, que permite gestionar usuarios, proyectos, tareas y equipos con un control de acceso avanzado mediante JWT. Incluye autenticación, manejo de permisos, validaciones con Zod, interceptores, envío de correos electrónicos, recuperación de contraseña y verificación de cuentas. 

        Además, las tareas tienen estados (pendiente, en espera, en progreso, en revisión, completada), y la base de datos está en MySQL.`,
        tecnologies: ["Spring Boot", "Spring Security", "React", "TypeScript"],
        link: "https://github.com/AlejandroSDValle/UpTask",
        imagenes:[
            {
                "imagen": "Proyecto_2_1",
                "descripcion": "Vista del proyecto con sus tareas organizadas por estados (pendiente, en espera, en progreso, en revisión, completada)."
            },
            {
                "imagen": "Proyecto_2_2",
                "descripcion": "Si eres el dueño del proyecto, puedes agregar colaboradores. Los miembros pueden ver y gestionar tareas asignadas, pero no pueden eliminar el proyecto ni crear nuevas tareas."
            },
            {
                "imagen": "Proyecto_2_3",
                "descripcion": "Opciones de edición del perfil, permitiendo cambiar nombre, correo y contraseña con validaciones de seguridad."
            }
        ]
    },
    {
        id: 3,
        img: "Proyecto_3",
        name: "Sistema CRUD Administración de Productos",
        shortDescription: "Sistema básico para gestionar productos, con operaciones CRUD. Desarrollado con Spring Boot como REST Framework para el backend y React para el frontend. Implementa validaciones en el backend mediante excepciones personalizadas.",
        fullDescription: `Este sistema permite la administración de productos mediante operaciones CRUD, con Spring Boot como backend REST y React con TypeScript en el frontend, implementa autenticación básica con JWT, manejo de excepciones personalizadas y validaciones en el backend. En el frontend, se utilizan React Router DOM para la navegación y Zod para las validaciones. 

        La seguridad del sistema permite únicamente el inicio de sesión y la creación de cuentas, sin opciones avanzadas como recuperación de contraseña o actualización de perfiles.`,
        tecnologies: ["Spring Boot REST", "Spring Security", "React", "TypeScript"],
        link: "https://github.com/AlejandroSDValle/Administrador-Productos",
        imagenes:[
            {
                "imagen": "Proyecto_3_1",
                "descripcion": "Pantalla de creación de productos, donde se ingresan datos como el nombre y el precio."
            }
        ]
    },
    {
        id: 4,
        img: "Proyecto_4",
        name: "Sistema predicción",
        shortDescription: "Aplicación desarrollada con Django MVC que utiliza Machine Learning para predecir ventas y compras en una cremería. Permite anticipar la demanda, evitar faltantes de stock y optimizar la gestión del inventario mediante modelos predictivos.",
        fullDescription: `Este sistema permite predecir las ventas y compras para las próxima semana en una cremería, optimizando la gestión del inventario.

        Desarrollado con Django MVC para la interfaz visual y Machine Learning para la predicción, emplea los modelos Prophet (Meta) y SARIMA. Actualmente, el sistema utiliza SARIMA como modelo principal.El sistema no maneja la gestión de productos (no permite agregar, editar ni eliminar productos), ya que su enfoque principal es la predicción. No cuenta con autenticación, pues está diseñado para uso interno en la cremería. 

        Características principales:
        - Registro de ventas y compras a proveedores, los cuales alimentan automáticamente el historial de ventas en la base de datos.
        - Predicción de ventas y compras de uno o varios productos a la vez.
        - Visualización de datos mediante gráficos interactivos, incluyendo:  
        - Ventas del último año, divididas por mes. - Ventas de los últimos 15 días. 
        - Meses con más ventas en el año actual y el anterior. 
        - Recomendaciones del modelo sobre la cantidad de productos a comprar y vender en la próxima semana.`,
        tecnologies: ["Django", "Python", "Machine Learning", "HTML", "Bootstrap"],
        link: "https://github.com/AlejandroSDValle/Prediccion",
        imagenes:[
            {
                "imagen": "Proyecto_4_1",
                "descripcion": "Sección de registro de ventas, donde se ingresan el producto, la marca y la cantidad vendida."
            },
            {
                "imagen": "Proyecto_4_2",
                "descripcion": "Sección de registro de compras, donde se registra una compra a un proveedor indicando el producto, la marca y la cantidad adquirida."
            },
            {
                "imagen": "Proyecto_4_3",
                "descripcion": "Interfaz de predicción, donde se pueden analizar uno o varios productos simultáneamente. El tiempo de procesamiento varía según el historial de ventas."
            },
            {
                "imagen": "Proyecto_4_4",
                "descripcion": "Vista de los resultados de la predicción, con gráficos que muestran:- Ventas del último año (divididas en meses).- Ventas de los últimos 15 días.- Meses con mayor volumen de ventas en el año actual y anterior. - Recomendaciones del modelo sobre cuánto comprar y vender en la próxima semana."
            }
        ]
    },
    {
        id: 5,
        img: "Proyecto_5",
        name: "Tienda online",
        shortDescription: "Un sistema de ventas que incluye funcionalidades de predicción de ventas, inicio de sesión de usuarios, venta en línea, gestión de pedidos, productos y proveedores. Facilita la administración y operación eficiente de una cremería.",
        fullDescription: `Un sistema de ventas que incluye funcionalidades de predicción de ventas, inicio de sesión de usuarios, venta en línea, gestión de pedidos, productos y proveedores. Facilita la administración y operación eficiente de una cremería.`,
        tecnologies: ["React", "TypeScript", "Node.js"],
        link: "https://github.com/AlejandroSDValle",
        imagenes:[

        ]
    },
    
]
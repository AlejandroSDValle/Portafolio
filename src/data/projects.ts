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
        shortDescription: "Sistema integral para la gestión de una tienda, que permite registrar ventas, gestionar compras y procesar pedidos en línea con verificación presencial para asegurar autenticidad de usuarios.",
        fullDescription: `Este sistema web está diseñado para optimizar y digitalizar las operaciones de una tienda. Permite registrar ventas dentro del local, gestionar compras a proveedores para mantener actualizado el inventario, y recibir pedidos en línea por parte de los clientes.

        A diferencia de otros sistemas, la creación de cuentas de cliente incluye un mecanismo de verificación doble: primero, se envía un token al correo electrónico para validar la dirección y evitar bots; luego, este token debe presentarse físicamente en la tienda para activar la cuenta, asegurando que el usuario realmente puede acudir por sus pedidos. Este enfoque previene pedidos falsos o innecesarios generados desde lugares a los que la tienda no realiza entregas.

        Los roles del sistema:
        Cliente: puede crear una cuenta, realizar pedidos en línea, ver su historial, filtrar pedidos por fecha o estado, y consultar quién despachó el pedido en caso de reclamos.
        
        Empleado: puede registrar ventas en tienda, procesar pedidos de clientes, validar cuentas, registrar compras a proveedores y actualizar el estado de los pedidos.

        Administrador: tiene acceso a todas las funciones anteriores y además puede gestionar productos, marcas, categorías y usuarios. También tiene acceso a estadísticas de negocio como productos más vendidos, clientes frecuentes, y pérdidas por caducidad o merma.

        A futuro, se planea desarrollar un frontend completo y una versión del mismo sistema basada en microservicios. Este proyecto representa una evolución del sistema de predicción previo <Link to="/proyecto/4">Ir al Proyecto</Link>, ya que ahora permite a los usuarios externos realizar pedidos en línea, no solo registrar ventas internas.

        (Proyecto en desarrollo – funcionalidades en crecimiento)`,
        tecnologies: ["React", "TypeScript", "Node.js"],
        link: "https://github.com/AlejandroSDValle/tienda-online",
        imagenes:[

        ]
    },
    {
        id: 6,
        img: "Proyecto_6",
        name: "Administración de hojas de vida",
        shortDescription: "Aplicación desarrollada con Django MVC. Permite subir archivos PDF de CVs, los cuales son analizados mediante Procesamiento de Lenguaje Natural (PLN) para extraer información clave como experiencia, formación académica y más. La información se organiza en perfiles profesionales que son almacenados, buscados y filtrados fácilmente, facilitando procesos de reclutamiento y selección de talento.",
        fullDescription:  `Sistema de administración y análisis inteligente de hojas de vida para procesos de reclutamiento.

        Nota: Los datos y cualquier dato visual mostrado en este proyecto son ficticios y se utilizan únicamente con fines de demostración. No representan información personal real.

        Esta aplicación web facilita la gestión de perfiles profesionales dentro de procesos de selección, permitiendo almacenar, buscar, filtrar y analizar hojas de vida de acuerdo con las necesidades de un proyecto o empresa. Ha sido desarrollada bajo el patrón de arquitectura MVC utilizando Django como framework principal y PostgreSQL como sistema gestor de base de datos. Para la extracción automatizada de información desde archivos PDF, se emplean técnicas de Procesamiento de Lenguaje Natural (PLN) mediante la biblioteca spaCy, lo que permite identificar y estructurar datos clave como experiencia, formación académica, habilidades, idiomas, certificaciones y más.

        Características principales:
        - Carga automática de hojas de vida en PDF: Solo el perfil administrador puede agregar nuevas hojas de vida, las cuales son procesadas automáticamente por el sistema, extrayendo toda la información relevante del profesional para almacenarla estructuradamente en la base de datos.
        - Filtrado de profesionales: Los usuarios pueden buscar y filtrar perfiles de acuerdo con criterios específicos como años de experiencia, tecnologías manejadas, nivel de estudios, idiomas, entre otros, facilitando la identificación del talento ideal para cada vacante o proyecto.
        - Cronología de experiencia laboral: El sistema genera una línea temporal interactiva que permite visualizar de forma clara y ordenada la experiencia laboral total del profesional, incluso en casos donde existen proyectos simultáneos, permitiendo una mejor estimación de la trayectoria real.  
        
        Perfiles de usuario:
        - Lector: Puede visualizar la información del profesional, descargar la hoja de vida en PDF, generar un Excel con los datos academicos, personales o laborales, y acceder a documentos anexos como diplomas, certificados o constancias previamente cargadas.
        - Editor: Tiene acceso a todas las funciones del lector, además de poder modificar la información del profesional, incluyendo experiencia, formación y documentos cargados. También puede actualizar la hoja de vida si se proporciona una versión nueva.
        - Administrador: Dispone de control total sobre el sistema. Puede crear y administrar usuarios, asignar roles, eliminar perfiles profesionales, editar cualquier información existente y es el único con permisos para agregar nuevas hojas de vida al sistema para su procesamiento automático.`,

        tecnologies: ["Django MVC", "Python", "Machine Learning", "spaCy", "PostgreSQL"],
        link: "https://github.com/AlejandroSDValle/HAC",
        imagenes:[
            {
                "imagen": "Proyecto_6_1",
                "descripcion": "En la página principal se encuentra un buscador que permite filtrar a los profesionales. En la siguiente imagen se muestra cómo se visualizan los resultados, con una presentación resumida de cada perfil y un sistema de paginación en caso de que haya múltiples resultados."
            },
            {
                "imagen": "Proyecto_6_2",
                "descripcion": "Esta sección corresponde al perfil del profesional, donde se visualiza toda su información de manera detallada. Desde aquí se pueden descargar tanto la hoja de vida en PDF como los anexos relacionados, como diplomas, certificados de experiencia y la cronología de su trayectoria laboral."
            },
            {
                "imagen": "Proyecto_6_3",
                "descripcion": "En esta imagen se presenta la información detallada sobre la experiencia laboral del profesional."
            },
            {
                "imagen": "Proyecto_6_4",
                "descripcion": "Aquí se muestra la cronología del profesional, la cual permite visualizar con claridad los periodos en los que ha trabajado. Es especialmente útil para detectar cuando una persona ha participado en varios proyectos simultáneamente y calcular correctamente su experiencia total a lo largo de los años."
            }
            ,
            {
                "imagen": "Proyecto_6_5",
                "descripcion": "Esta es la página de inicio de sesión (login) del sistema."
            }
            ,
            {
                "imagen": "Proyecto_6_6",
                "descripcion": "En esta imagen se muestra la vista principal del perfil de administrador, desde donde se pueden realizar acciones adicionales como editar o eliminar profesionales, en caso de ser necesario."
            }
            ,
            {
                "imagen": "Proyecto_6_7",
                "descripcion": "El administrador también tiene la capacidad de agregar o actualizar la hoja de vida en PDF de un profesional, así como añadir anexos relacionados con su experiencia o formación académica."
            }
            ,
            {
                "imagen": "Proyecto_6_8",
                "descripcion": "Esta pantalla permite al administrador registrar a un nuevo profesional, agregando su hoja de vida en PDF y los anexos correspondientes. Aquí es donde entra en acción el modelo de inteligencia artificial, encargado de procesar el PDF y extraer automáticamente la información relevante del profesional."
            }
            ,
            {
                "imagen": "Proyecto_6_9",
                "descripcion": "En esta imagen se muestra la etapa de validación, donde el usuario puede revisar la información extraída por el modelo de IA y realizar correcciones en caso de que haya errores."
            }
            ,
            {
                "imagen": "Proyecto_6_10",
                "descripcion": "En esta sección se puede observar que, si el modelo no detecta todas las experiencias o formaciones académicas, o si por el contrario detecta información de más, el usuario puede eliminar o agregar entradas manualmente. Posteriormente, la información validada se puede guardar como un nuevo perfil completo del profesional."
            }
        ]
    },
    
]
# Mi Watchlist 🎬

**Mi Watchlist** es una aplicación web moderna diseñada para llevar un registro de las películas y series que has visto o quieres ver. Desarrollada con **React** y **TypeScript**, utiliza **Vite** para desarrollo ultrarrápido, **Firebase** para la persistencia de datos en tiempo real y **Docker** para facilitar el despliegue.

## 🚀 Características

- **Gestión de Contenido Interactiva**: Añade nuevas películas o series a tu lista personal.
- **Detalles Personalizados**: Guarda información clave para cada entrada:
  - Título
  - Tipo (Película/Serie)
  - Plataforma (Netflix, HBO Max, Disney+, Cine, etc.)
  - Calificación personal (⭐)
  - Imagen de portada (URL)
- **Persistencia en la Nube**: Integración completa con **Firebase Firestore** para asegurar que no pierdas tu lista.
- **Interfaz Moderna**: Reactiva y estilizada con CSS Modules.
- **Actualizaciones en Tiempo Real**: Optimistic UI para una experiencia de usuario fluida y rápida.

## 🛠️ Tecnologías

Este proyecto está construido con un stack moderno y eficiente:

- **Frontend**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Base de Datos**: [Firebase Firestore](https://firebase.google.com/)
- **Contenedores**: [Docker](https://www.docker.com/) & Docker Compose
- **Calidad de Código**: ESLint

## 📋 Requisitos Previos

Para ejecutar este proyecto localmente, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [Docker Desktop](https://www.docker.com/products/docker-desktop) (Opcional, si prefieres usar contenedores)

## 🔧 Instalación y Ejecución

### Opción A: Desarrollo Local con Node.js

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/xmjimlop083/mi-watchlist.git
    cd mi-watchlist
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Configurar Firebase**:
    - El proyecto ya incluye una configuración base en `src/firebase/config.ts`. Si deseas usar tu propia base de datos, actualiza las credenciales en este archivo.

4.  **Iniciar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

### Opción B: Ejecución con Docker 🐳

Si prefieres un entorno aislado sin instalar dependencias de Node en tu máquina:

1.  **Construir y levantar los servicios**:
    ```bash
    docker compose up --build
    ```

2.  **Acceso**:
    - Abre tu navegador en `http://localhost:5173`.
    - Los cambios en el código se reflejarán automáticamente gracias a los volúmenes configurados.

## 📂 Estructura del Proyecto

```plaintext
mi-watchlist/
├── 🐳 docker-compose.yml   # Orquestación de contenedores
├── 🐋 Dockerfile           # Definición de la imagen del contenedor
├── 📦 package.json         # Dependencias y scripts
├── ⚙️ vite.config.ts       # Configuración de Vite
├── 📂 public/              # Archivos estáticos
└── 📂 src/
    ├── ⚛️ App.tsx          # Componente principal
    ├── 📂 components/      # Componentes UI (Navbar, MovieCards, Formulario)
    ├── 📂 firebase/        # Configuración y servicios de Firebase (CRUD)
    ├── 📂 types/           # Definiciones de tipos TypeScript
    └── 🎨 App.css          # Estilos globales
```

## 📝 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo con HMR.
- `npm run build`: Compila la aplicación para producción.
- `npm run preview`: Vista previa local de la compilación de producción.
- `npm run lint`: Ejecuta el linter para verificar la calidad del código.

## 🤝 Contribuir

¡Las contribuciones son bienvenidas!

1.  Haz un Fork del repositorio.
2.  Crea una rama (`git checkout -b feature/NuevaFuncionalidad`).
3.  Haz Commit de tus cambios (`git commit -m 'Añadir nueva funcionalidad'`).
4.  Haz Push a la rama (`git push origin feature/NuevaFuncionalidad`).
5.  Abre un Pull Request.

---
Hecho con 💙 por [xmjimlop083](https://github.com/xmjimlop083)

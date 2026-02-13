# Usamos la imagen oficial de Node 24 (versión ligera Alpine)
FROM node:24-alpine

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de dependencias primero (para aprovechar la caché de Docker)
COPY package*.json ./

# Instalamos las dependencias dentro del contenedor
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto de Vite
EXPOSE 5173

# Arrancamos la app permitiendo acceso desde fuera del contenedor (--host)
CMD ["npm", "run", "dev", "--", "--host"]
# Usa l'immagine di node.js come base
FROM node:latest as build

# Imposta la directory di lavoro all'interno del contenitore
WORKDIR /app

# Copia il file package.json nella directory di lavoro
COPY package.json .

# Installa le dipendenze
RUN npm install

# Copia tutto il contenuto della directory corrente nel contenitore nella directory di lavoro
COPY . .

# Esegui il comando di build di Angular
RUN npm run build

# Usa un server nginx per il deployment
FROM nginx:alpine

# Copia i file statici prodotti dalla build di Angular nel server nginx
COPY --from=build /app/dist/* /usr/share/nginx/html/

# Esporre la porta 80
EXPOSE 80

# Comando di default per avviare il server nginx
CMD ["nginx", "-g", "daemon off;"]

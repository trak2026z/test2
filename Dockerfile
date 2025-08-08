# Etap build
FROM node:18 as build

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build

# Etap produkcyjny
FROM nginx:stable-alpine as production

# Skopiuj build do katalogu Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Eksponuj port 80
EXPOSE 80

# Uruchom Nginx w trybie foreground
CMD ["nginx", "-g", "daemon off;"]

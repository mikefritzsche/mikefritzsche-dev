# Dockerfile
FROM node:18-alpine as build

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . ./
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

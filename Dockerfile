# Build stage
FROM node:18-alpine as build
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Build the app
COPY . ./
RUN npm run build

# Production stage
FROM nginx:alpine

# Configure nginx
RUN echo 'server { \n\
    listen 80; \n\
    server_name localhost; \n\
    root /usr/share/nginx/html; \n\
    index index.html; \n\
    \n\
    # Enable gzip compression \n\
    gzip on; \n\
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript; \n\
    \n\
    location / { \n\
        try_files $uri $uri/ /index.html; \n\
        add_header Cache-Control "no-cache, no-store, must-revalidate"; \n\
        add_header Pragma "no-cache"; \n\
        add_header Expires "0"; \n\
    } \n\
    \n\
    location /assets { \n\
        expires 1y; \n\
        add_header Cache-Control "public, no-transform"; \n\
    } \n\
    \n\
    error_page 404 /index.html; \n\
    error_page 500 502 503 504 /50x.html; \n\
    location = /50x.html { \n\
        root /usr/share/nginx/html; \n\
    } \n\
}' > /etc/nginx/conf.d/default.conf

# Copy built assets from builder
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

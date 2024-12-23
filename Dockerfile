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
COPY <<'EOF' /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    location / {
        try_files $uri $uri/ /index.html;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires "0";
    }

    location /assets {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }

    error_page 404 /index.html;
    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
    }
}
EOF

# Copy built assets from builder
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# Dockerfile
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

# Add non-root user
RUN adduser -D -H -u 1001 nginxuser && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder
COPY --from=build /app/dist /usr/share/nginx/html
RUN chown -R nginxuser:nginxuser /usr/share/nginx/html

USER nginxuser

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

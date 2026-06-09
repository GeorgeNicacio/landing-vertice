# syntax=docker/dockerfile:1.4
FROM node:18-alpine AS builder
WORKDIR /app

# 1) Copia só o package.json e o lockfile
COPY package.json pnpm-lock.yaml ./

# 2) Instala pnpm e as deps (usar --frozen-lockfile garante fidelidade)
RUN npm install -g pnpm \
  && pnpm install --frozen-lockfile

# 3) Copia o restante do código
COPY . .

# 4) Gera o build de produção
RUN pnpm run build

FROM nginx:stable-alpine

# Remove configuração padrão
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos compilados
COPY --from=builder /app/dist /usr/share/nginx/html

# Cria configuração nginx personalizada inline
RUN cat > /etc/nginx/conf.d/default.conf << 'EOF'
server {
    listen 5552 default_server;
    server_name _;
    
    root /usr/share/nginx/html;
    index index.html index.htm;
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css text/javascript application/json application/javascript;
    
    # Static files cache
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
}
EOF

EXPOSE 5552

CMD ["nginx", "-g", "daemon off;"]

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
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

# Ajusta o Nginx para escutar na porta 5552
RUN sed -i 's/listen\s\+80;/listen 5552;/' /etc/nginx/conf.d/default.conf
EXPOSE 5552
CMD ["nginx", "-g", "daemon off;"]

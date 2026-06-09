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
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Instala curl para healthcheck
RUN apk add --no-cache curl

EXPOSE 5552

CMD ["nginx", "-g", "daemon off;"]

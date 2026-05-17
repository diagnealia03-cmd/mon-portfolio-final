# ── Stage 1 : build React ──
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ── Stage 2 : Nginx avec curl mis à jour ──
FROM nginx:alpine AS production

# Mettre à jour curl pour corriger les CVE MEDIUM
RUN apk update && apk upgrade curl libcurl && rm -rf /var/cache/apk/*

COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

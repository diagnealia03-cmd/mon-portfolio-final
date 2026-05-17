# ── Stage 1 : installation des dépendances ──
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# ── Stage 2 : image finale légère ──
FROM node:20-alpine AS production
WORKDIR /app

# Utilisateur non-root (sécurité)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY --from=builder /app/node_modules ./node_modules
COPY . .

USER appuser
EXPOSE 5001
CMD ["node", "server.js"]

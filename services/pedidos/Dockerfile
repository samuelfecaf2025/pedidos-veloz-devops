
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci --only=production

FROM node:20-alpine
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
USER nodejs
WORKDIR /app
COPY --from=builder /app .
EXPOSE 8080
CMD ["node", "index.js"]

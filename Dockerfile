FROM node:16 AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN yarn install --immutable

FROM node:16 AS builder
WORKDIR /app
COPY tsconfig.json tsconfig.json
COPY --from=deps /app/node_modules ./node_modules
COPY src src
ARG NODE_ENV=production
RUN NODE_ENV=${NODE_ENV} npm run build

FROM node:16
WORKDIR /app
COPY package.json ./package.json
COPY --from=builder /app/dist ./dist
CMD ["node", "/app/dist/index.js"]

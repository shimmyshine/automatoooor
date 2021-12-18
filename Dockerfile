FROM node:16 AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

FROM node:16 AS builder
WORKDIR /app
COPY tsconfig.json tsconfig.json
COPY package.json ./package.json
COPY --from=deps /app/node_modules ./node_modules
COPY scripts scripts
COPY src src
ARG NODE_ENV=production
RUN NODE_ENV=${NODE_ENV} npm run prepare-settings
RUN NODE_ENV=${NODE_ENV} npm run build

FROM node:16
WORKDIR /app
COPY package.json ./package.json
COPY --from=builder /app/dist ./dist
CMD ["node", "/app/dist/index.js"]

FROM ghcr.io/hazmi35/node:18-dev-alpine as build-stage

# Prepare pnpm with corepack (experimental feature)
RUN corepack enable && corepack prepare pnpm@latest

# Copy package.json, lockfile and npm config files
COPY package.json pnpm-lock.yaml ./

# Fetch dependencies to virtual store
RUN pnpm fetch

# Install dependencies
RUN pnpm install --offline --frozen-lockfile

# Copy Project files
COPY . .

# Build Next.js Project
RUN pnpm run build

# Prune devDependencies
RUN pnpm prune --production

# Get ready for production
FROM caddy:2-alpine

LABEL name "website"
LABEL maintainer "Anime World Indonesia <dev@animeworld.moe>"

WORKDIR /app

# Copy needed files
COPY --from=build-stage /tmp/build/package.json .
COPY --from=build-stage /tmp/build/node_modules ./node_modules
COPY --from=build-stage /tmp/build/build ./
COPY ./Caddyfile ./Caddyfile

# Additional Environment Variables
ENV NODE_ENV production

EXPOSE 80

# Start the app with node
CMD ["/usr/bin/caddy", "run", "/app/Caddyfile"]
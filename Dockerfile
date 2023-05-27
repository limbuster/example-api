FROM node:18-alpine AS build-env
WORKDIR /app
# copy source files
COPY ./src/ ./src/
# copy required config files
COPY tsconfig.json package.json package-lock.json ./

# update npm to latest version
RUN npm install -g npm@9.6.7

# install dependencies and build
RUN npm ci
RUN npm run build

# this step will create the actual docker image used for deployment
FROM gcr.io/distroless/nodejs18-debian11
COPY --from=build-env /app /app
WORKDIR /app
CMD ["dist/index.js"]

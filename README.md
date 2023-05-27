# Express with Typescript

## Getting started
Initialize npm project by running the following command:
```bash
npm init -y
```

Install Express
```bash
npm install express
```

Install Typescript 

```bash
npm install --save-dev typescript
```

Setup tsconfig.json file
```bash
npx tsc --init
```

Set the config file to looks similar to the following:
```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "outDir": "./dist"
  }
}
```

`target` - Leave the default option es2016.
`module` - Leave the default option commonjs.
`skipLibCheck` - Setting this to true can help time.
`outDir` sets where the compiled file will be generated.


Setup eslint
```bash
npx eslint --init
```

Install type support for express
```bash
npm i -D typescript @types/express
```

Build and run
```bash
npm run Build
npm start
```

Setup docker
Create a new `Dockerfile` and add the content from below.
```bash
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
```
To create the image run
```bash
docker build -t example-api .
```

To run the image run
```bash
docker run --rm -p 8080:8080 -t example-api
```

FROM node:20.5.0 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.25.0-alpine as production

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 8049

CMD ["nginx", "-g", "daemon off;"]
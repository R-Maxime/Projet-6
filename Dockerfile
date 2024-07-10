FROM oven/bun:latest as build

WORKDIR /app

COPY package*.json ./

RUN bun install

COPY . .

RUN bun run build

FROM nginx:latest as production

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8049

CMD ["nginx", "-g", "daemon off;"]
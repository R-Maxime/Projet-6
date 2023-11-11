FROM node:latest

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 18875

CMD ["npm", "run", "preview"]

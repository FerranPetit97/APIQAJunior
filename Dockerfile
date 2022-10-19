# syntax=docker/dockerfile:1
FROM node:18
WORKDIR /
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build
CMD ["node", "dist/main.js"]
EXPOSE 3000
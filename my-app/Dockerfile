FROM node:20-slim AS build

WORKDIR /my-app

COPY package*.json ./

RUN npm ci 

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /my-app/dist ./

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 

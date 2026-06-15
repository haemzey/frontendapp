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

RUN adduser -D hamza \
  && chown -R hamza:hamza /usr/share/nginx/html \
  && chown -R hamza:hamza /var/cache/nginx \
  && chown -R hamza:hamza /run   

USER hamza 

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"] 

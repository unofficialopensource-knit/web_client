FROM node:14.17.0-alpine3.10 as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.19.10-alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

COPY config/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]

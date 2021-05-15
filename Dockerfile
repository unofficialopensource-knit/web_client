FROM node:14.17.0-alpine3.10 as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm build"]

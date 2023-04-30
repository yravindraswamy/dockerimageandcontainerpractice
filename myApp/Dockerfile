
FROM node:alpine

COPY ./package.json ./
WORKDIR /usr/myapp

COPY ./ ./

RUN npm install

CMD ["npm" ,"run","start"]

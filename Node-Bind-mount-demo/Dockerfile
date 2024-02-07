FROM node

WORKDIR /developer/nodejs/node-bind-mount-project 

COPY . .

RUN npm ci

ENV PORT=3000

CMD ["npm","run","start"]
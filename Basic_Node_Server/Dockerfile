FROM node

WORKDIR /developer/nodejs

COPY . my-server/

RUN npm ci

CMD ["node","index.js"]
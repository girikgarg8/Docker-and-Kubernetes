FROM node

WORKDIR /developer/nodejs/api-gateway

COPY . .

ENV PORT=3000

ENV SEARCH_SERVICE="http://localhost:3010"

ENV BOOKING_SERVICE="http://localhost:3020"

RUN npm ci

CMD ["npm","run","dev"]
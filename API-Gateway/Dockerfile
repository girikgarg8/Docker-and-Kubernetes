FROM node

WORKDIR /developer/nodejs/api-gateway

COPY . .

ENV PORT=3000

ENV SEARCH_SERVICE="http://localhost:3010"

ENV BOOKING_SERVICE="http://localhost:3020"

RUN npm ci

CMD ["npm","run","dev"]

# Steps to build and run this image
# docker build -t api-gateway .
# Remove the node modules from the host machine, if they are present
# docker volume create api-gateway-node-modules
# docker run -it --init -p 3001:3000 -v "$(pwd)":/developer/nodejs/api-gateway -v api-gateway-node-modules:/developer/nodejs/api-gateway/node_modules api-gateway:latest
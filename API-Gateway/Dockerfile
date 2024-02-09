FROM node

WORKDIR /developer/nodejs/api-gateway

COPY . .

ENV PORT=3000

ENV SEARCH_SERVICE=3010

ENV BOOKING_SERVICE=3020

RUN npm ci

CMD ["npm","run","dev"]

# Steps to build and run this image
# Remove the node modules from the host machine, if they are present
# docker build -t api-gateway .
# docker volume create api-gateway-node-modules
# docker network create microservice-network
# docker run -it --init --name api_gateway -v "$(pwd)":/developer/nodejs/api-gateway -v api-gateway-node-modules:/developer/nodejs/api-gateway/node_modules api-gateway:latest
# docker network connect microservice-network <container ID>
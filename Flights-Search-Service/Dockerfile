FROM node

WORKDIR /developer/nodejs/search-service

COPY . .

ENV PORT=3010

RUN npm install

CMD ["npm","run","dev"]

# Steps to build and run this image
# Remove the node modules from the host machine, if they are present
# docker build -t search-service .
# docker volume create search-service-node-modules
# docker network create microservice-network
# docker run -it --init --name search-service -p 3001:3010 -v "$(pwd)":/developer/nodejs/search-service -v search-service-node-modules:/developer/nodejs/search-service/node_modules search-service:latest
# docker network connect microservice-network <container ID>
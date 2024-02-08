FROM node

WORKDIR /developer/nodejs/search-service

COPY . .

ENV PORT=3010

RUN npm ci

CMD ["npm","run","dev"]

# Steps to build and run this image
# docker build -t search-service .
# Remove the node modules from the host machine, if they are present
# docker volume create search-service-node-modules
# docker run -it --init -p 3002:3010 -v "$(pwd)":/developer/nodejs/search-service -v search-service-node-modules:/developer/nodejs/search-service/node_modules search-service:latest
FROM node

WORKDIR /developer/nodejs/api-gateway

COPY . .

ENV PORT=3000

ENV SEARCH_SERVICE='http://search-service:3010' 

ENV BOOKING_SERVICE='http://boooking-service:3020'

#we specify the SEARCH Service URL as container name:PORT, and not as localhost:PORT, because API Gateway and Search service containers don't run on the same host :)

RUN npm install

CMD ["npm","run","dev"]

# Steps to build and run this image
# Remove the node modules from the host machine, if they are present
# docker build -t api-gateway .
# docker volume create api-gateway-node-modules
# docker network create microservice-network
# docker run -it --init --name api_gateway -p 3000:3000 -v "$(pwd)":/developer/nodejs/api-gateway -v api-gateway-node-modules:/developer/nodejs/api-gateway/node_modules api-gateway
# docker network connect microservice-network <container ID>
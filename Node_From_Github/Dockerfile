FROM node

WORKDIR /developer/nodejs/app_from_github

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/girikgarg8/Dockerizing-Node-Project.git

RUN npm ci

CMD ["npm","start"]
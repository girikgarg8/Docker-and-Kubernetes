FROM node

WORKDIR /developer/nodejs/app_from_github

RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/girikgarg8/Dockerizing-Node-Project.git .

ENV PORT=3000

EXPOSE 3000

RUN npm ci

CMD ["npm","start"]

## Steps to build this dockerfile and use the Node Project:
## docker build -t app-from-github .
## docker run -it --rm --publish 3001:3000 app-from-github
## docker run -it --rm -P app-from-github .
## docker run -it --init -p 3002:3000 -v "$(pwd)":/developer/nodejs/node-bind-mount-project app-bind-mount-node:latest
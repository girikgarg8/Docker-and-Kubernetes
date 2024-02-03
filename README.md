## Introduction to containers ##

Let's go back a little bit back in time to understand.

In earlier days, all applications used to be hosted on dedicated machines. As an example, schools and colleges used to host their applications on dedicated machines. The problem with this approach is that it is not scalable, so if we need to scale up or scale down the application, it is going to be a problem.

So cloud providers like AWS, Azure and GCP came into picture. They offer machines to rent which are hosted in their data centres. But there's still a problem, that different clients may be using the resources on the same machine, and we need to ensure that there's isolation between them so that the sensitive information from one container is not leaked to other guy. Also, we need to protect the cloud instance from a single point of failure and SQL injection attacks etc. 

This is where containers help us. Containers are isolated from each other, and do not allow inter container communication, unless we configure them to have inter container communication. 

**What is the difference between docker image and container?**

Docker image: It is a snapshot or a blueprint of the complete environment for an application. It includes everything like what the application needs to run such as libraries, dependencies, configuration etc. It kind of encapsulates the application and all the requirements together. 

These docker images can be created with the help of Dockerfile. Or we can get some prebuilt images from Dockerhub - Dockerhub is the hub of "Docker images". 

Docker containers: A container is an actual instance of the environment configured by the image. When we run a docker image, it creates a live and running container. These containers are isolated from each other and act as a light weight Virtual Machine. 

We can understand the difference between the Docker image and Docker container by the analogy of process (Docker container) and program (Docker image), or the analogy between a class (Docker image) and object. (Docker container)

A big difference between Virtual Machines and containers is that containers share the host OS kernel, hence they are light weight in nature. 

**How docker is used in company projects?**

Let's say there are three different people working in a team, and each one of them has different OS on their laptop (say Ubuntu, Windows and Arch). Now if all of them setup the project on their local, it can lead to compatibility issues because the libraries have different versions on different machines. So, as a solution what we can do is, to clone the project in a Ubuntu container. Now, it doesn't matter what the host OS is, all the team members will be able to work on the project without any problems. A good point also is the fact that this container is going to be isolated from the host OS, as well as other containers.

Diagrammatic representation:

![Docker application in company projects](./Docker-usecase-in-company-projects.PNG)

We can explore the pre-existing docker images from Dockerhub, like those of Node, Ubuntu, Python etc

Let's execute `docker pull node`. This command is going to pull the Docker image from Dockerhub (similar to how we pull a branch from Github)

`Docker pull` command output:

![Docker-pull-command](./Docker-pull-command.PNG)

Friendly advice: If there are lots of images on the system, periodically clear them because they take up a lot of space.

In order to execute the image in the container, we use `docker run <image name>` (similar to how we run a program)

We'll also use two options: `-it` in order to start the container in interactive mode (which allows the user on the host OS to interact with the container). If this flag is not used, the container will start and exit, because it doesn't have any command to execute. By using the interactive mode, we are asking the container to wait for the user input.

`--rm` option helps delete the container after it exits. This helps us to save space on the disk.

As an example,

Output of running `docker run --it --rm node` :

![Docker-run-command](./Docker-run-command.png)

We can execeute a command in docker interactive mode by specifying it, like as an example

![Docker Run Interactive Mode](./Docker-run-interactive-mode.png)

How Docker Desktop shows the running containers:

![Docker-Desktop-running-containers](./Docker-Desktop-showing-running-containers.png)

How to list the running docker containers: Use `docker ps` (Similar to how `ps` in Ubuntu shows all the running processes in the OS), see example below:

![Docker-PS-command](./Docker-PS-command.png)

Docker PS lists the container ID, image which the container is running, a unique name of the container, creation time of the container etc.

In order to kill the container, we use `docker kill <container ID>` (similar to how we kill a process in OS). Here's the demonstration of the same:

![Docker kill command](./Docker-kill-command.png)

Dangling images in Docker are the images which do not have a tag associated to them. This can happend if a new build of a image is built, so the previous builds become dangling in nature.

See this hyperlink for more information : [Dangling image in Docker](https://www.howtogeek.com/devops/what-are-dangling-docker-images/)

If we want to run a docker image in the background as a daemon process, we can use the `detach` flag.  If at a later stage, we want to run the docker container as a foreground process, we can do so by using the `attach` flag. See the screenshot below:

![Docker-detach-and-attach-command](./Docker-detach-and-attach-command.png)

We can give a custom name to the container (instead of using the default one, which is assigned by Docker), by using the `--name` flag. As an example:

![Docker name flag](./Docker-name-flag.png)

If we are using any image (like that of node or python, as an example), it must be running on same base image (like Ubuntu). So, we can use the bash shell anytime while running a container with these images.

![Docker-bash-command](./Docker-bash-command.png)

Let's talk about tags in Docker: Tags in Docker point to specific versions of the Docker image. (Just like tags in Git point to certain commits in the commit history)

How to inspect Docker images? Use `docker inspect <container name>`, see example below:

![Docker-inspect-image](./Docker-inspect-image.png)

A container can be paused and unpaused in Docker, see example below:

![Docker-pause-and-unpause](./Docker-pause-and-unpause.png)

Let's talk about the `docker exec` command. This command is used to execute a command inside the docker container. The syntax for this command is `docker exec <container ID> <command>.` See the example below:

![Docker-exec-command](./Docker-exec-command.png)

Q. What's the difference between `docker run <command>` and `docker exec <command>` ? 

A. `Docker run <command>` spins up a new container and executes the command. Whereas `docker exec <command>` is used to execute the command on an already existing container. 

Let's learn how to create a new Docker image using a Dockerfile. 

Consider the Dockerfile below:

```
FROM node

CMD ["node","-e","console.log(100)"]
```

Here, we are specifying node as the base image and the node command to print 100. Here's how to build the image :

![Docker-build](./Docker-Build.png)

We can also specify a custom name to the image after building from the container, using the `-t` flag. Here's how:

![Docker-build-with-custom-image-name](./Docker-build-with-custom-image-name.png)

![Docker-list-of-all-images](./Docker-list-of-all-images.png)

**Let's now try to create a local project and dockerize it**

We'll be creating a node server application and running it on Docker container. 

```
FROM node

WORKDIR /developer/nodejs/my-server

COPY . .

RUN npm ci

CMD ["node","index.js"]
```

In this DockerFile, we are specifying the work directory as `/developer/nodejs/my-server` inside the docker container, if this directory doesn't exist, docker will create this directory inside the container. We are copying all the contents from present working directory in host machine to the `my-server` directory in the container. We are then specifying the command to do a `clean install` using npm (Clean install doesn't use node modules cache, compared to the `npm install`). Thereafter we are running `node index.js` in order to start the server.

Let's now build this docker image and see the results:

![Docker-build-express-server-image](./Docker-build-express-server-image.png)

![Docker-express-server-container-running](./Docker-express-server-container-running.png)

![Docker-express-server-curl](./Docker-express-server-curl.png)

There are some problems that we still need to solve: 

1. The express server has started only inside the Docker container, and no port is exposed to the host OS. So, the host OS won't be able to send request to the express server.

2. The host OS won't be able to interact in any way with the container. As an example, if we try to kill the server from the host OS, we wouldn't be able to do that. 

So, in order to solve these problems, we have the following solutions:

1. In order to solve the first problem listed above, we will expose a port from the container to the host OS using the `publish` or the `p` option. See example below:

![Docker-publish-option](./Docker-publish-option.png)

2. In order to solve the second problem listed above, we will use the `init` option. This option allows the docker container to receive commands from the host OS. See example below:

![Docker-init](./Docker-init.png)

**Let's now try to dockerize a project from Github and setup the environment variables**

For the purpose of this demonstration, we will be cloning this repository [Github Link](https://github.com/girikgarg8/Dockerizing-Node-Project) in the Docker container. The dockerfile can be found in the [Node_From_Github](./Node_From_Github/) directory.

This is the output of building the Docker image from the Dockerfile and running the Docker container:


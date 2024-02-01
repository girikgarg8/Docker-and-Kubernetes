Introduction to containers

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

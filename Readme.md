# 🐳 Docker Complete Guide — From Scratch to Pro

This document covers **Docker basics to advanced**, including:  
✅ What, Why, When, Where, How  
✅ Docker Image vs Container  
✅ Most important commands (with examples)

---

## 📖 What is Docker?

Docker is an open-source platform to **build**, **ship**, and **run** applications in **isolated environments** called containers.

Think of a container like a lightweight virtual machine — fast, portable, and consistent across all systems.

---

## ❓ Why Docker?

| Traditional Problems | Docker Solution |
|----------------------|-----------------|
| "It works on my machine" | Works the same everywhere |
| Complex setup on each machine | One Dockerfile handles everything |
| Heavyweight virtual machines | Lightweight containers |
| Manual app deployment | Automated and reproducible |

---

## 📅 When to Use Docker?

- Building **microservices**
- Running **multiple environments** (Node.js, MongoDB, Redis, etc.)
- **Collaborating** with teams
- **CI/CD pipelines**
- **Cloud deployment**

---

## 🌍 Where Can Docker Be Used?

- Local development environments
- Cloud services (AWS, Azure, GCP)
- Production servers
- DevOps pipelines (GitHub Actions, GitLab, Jenkins)

---

## ⚙️ How Does Docker Work?

Docker uses the **Docker Engine** to manage:

1. **Images** – Blueprint for a container
2. **Containers** – Running instance of an image

The developer writes a **Dockerfile**, builds an **image**, and runs it as a **container**.

---

## 🧱 Docker Image vs Docker Container

| Docker Image | Docker Container |
|--------------|------------------|
| Blueprint or template | Running instance of an image |
| Read-only | Read-write |
| Built using Dockerfile | Created from an image |
| Static (does not change) | Dynamic (can change while running) |
| Example: `node:18`, `redis:6.2` | Example: A Node.js app running inside `node:18` image |

---

## 🧰 Most Common Docker Commands

---

### 🧾 General Commands

| Command | Description |
|---------|-------------|
| `docker --version` | Show Docker version |
| `docker info` | Display Docker system info |
| `docker help` | List available Docker commands |

---

### 📦 Image Commands

| Command | Description |
|---------|-------------|
| `docker images` | List all downloaded images |
| `docker pull <image>` | Download image from Docker Hub |
| `docker build -t <name> .` | Build image from Dockerfile |
| `docker rmi <image>` | Remove an image |

---

### 🧱 Container Commands

| Command | Description |
|---------|-------------|
| `docker ps` | Show running containers |
| `docker ps -a` | Show all containers |
| `docker run <image>` | Run container from image |
| `docker run -it <image> bash` | Run interactively with terminal |
| `docker start <name/id>` | Start a stopped container |
| `docker stop <name/id>` | Stop a running container |
| `docker rm <name/id>` | Delete container |
| `docker logs <container>` | View container logs |
| `docker exec -it <container> bash` | Enter container shell |

---

### 🔄 Volume & Port Mapping

| Command | Description |
|---------|-------------|
| `docker run -v /host:/container` | Mount volume |
| `docker run -p 8080:80 <image>` | Map host port to container port |

---

### 📦 Docker Compose Commands

| Command | Description |
|---------|-------------|
| `docker-compose up` | Start all services |
| `docker-compose down` | Stop and remove services |
| `docker-compose build` | Build images from Compose file |
| `docker-compose logs` | View logs from all services |

---

### 🧹 Docker Clean Up

| Command | Description |
|---------|-------------|
| `docker system prune` | Remove all unused data |
| `docker image prune` | Remove unused images |
| `docker volume prune` | Remove unused volumes |
| `docker container prune` | Remove stopped containers |

---

## 📝 Dockerfile Example

```dockerfile
# Use base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files to container
COPY . .

# Install dependencies
RUN npm install

# Start app
CMD ["node", "index.js"]

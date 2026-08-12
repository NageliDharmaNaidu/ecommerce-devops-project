# Setup Guide

## Prerequisites

- Node.js 14+
- Docker
- Kubernetes (minikube or Docker Desktop)
- Jenkins
- Git

## Local Development

```bash
# Clone and install
git clone https://github.com/NageliDharmaNaidu/ecommerce-devops-project.git
cd ecommerce-devops-project
npm install

# Run development server
npm run dev
```

## Docker

```bash
# Build image
docker build -t ecommerce-app .

# Run container
docker run -p 3000:3000 ecommerce-app
```

## Kubernetes

```bash
# Deploy to cluster
kubectl apply -f kubernetes/

# Check deployment
kubectl get pods
kubectl get services
```
# E-Commerce DevOps Project

A full-stack e-commerce application built with modern DevOps practices. This project covers the complete pipeline from development to production deployment.

## What this is

A real e-commerce platform built with JavaScript, containerized with Docker, orchestrated with Kubernetes, and deployed through automated CI/CD pipelines using Jenkins.

It's both a working application and a learning project where I put DevOps practices into practice.

## Technology stack

- **Frontend**: React
- **Backend**: Node.js / Express
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **CI/CD**: Jenkins
- **Version Control**: Git

## Project structure

```
ecommerce-devops-project/
├── frontend/          # React application
├── backend/           # Node.js API server
├── docker/            # Docker configuration files
├── kubernetes/        # K8s deployment manifests
├── jenkins/           # Pipeline configuration
└── docs/              # Documentation
```

## How to run locally

1. Clone the repository
```bash
git clone https://github.com/NageliDharmaNaidu/ecommerce-devops-project.git
cd ecommerce-devops-project
```

2. Install dependencies
```bash
npm install
```

3. Start the application
```bash
npm start
```

## Deployment

The application is configured for:
- Docker containerization
- Kubernetes deployment
- Jenkins automated pipelines

See the `/kubernetes` and `/jenkins` directories for configuration details.

## What I learned building this

- How to structure a full-stack application
- Docker best practices and image optimization
- Kubernetes deployments and services
- Setting up automated pipelines in Jenkins
- Managing secrets and configuration in production

## Next steps

- Add comprehensive testing
- Implement monitoring and logging
- Scale to multiple replicas
- Add CI/CD for infrastructure

---

Last updated: March 2026
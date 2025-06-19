 CloudCart – Fully Automated eCommerce App (React + Node.js + AWS)
CloudCart is a modern, cloud-native eCommerce application built using the MERN-like stack, leveraging React for the frontend, Node.js for the backend, and DynamoDB as a NoSQL database. The entire deployment pipeline is fully automated using Docker, GitHub Actions, and Amazon ECS (Fargate) for seamless CI/CD.

🚀 Tech Stack
Frontend: React (with Material UI)

Backend: Node.js (Express)

Database: AWS DynamoDB

DevOps: Docker, GitHub Actions, AWS ECS (Fargate)

⚙️ Features & Highlights
✅ Full Automation Workflow
CI/CD implemented using GitHub Actions

On every push to main, GitHub builds and pushes Docker images to Docker Hub

AWS ECS is notified to pull the latest image automatically

No manual deployment needed – 100% automated!

✅ Modular Architecture
Clean separation between frontend and backend

Dockerized services run independently and communicate over internal ECS networking

✅ DynamoDB Integration
Backend is connected to AWS DynamoDB

Uses aws-sdk to perform database operations

Dynamically reads AWS credentials from ECS environment variables

✅ Product Management (CRUD)
Create, Read, Update, and Delete product items

Each product includes name, price, description, and image URL

Fully functional frontend integration for managing products

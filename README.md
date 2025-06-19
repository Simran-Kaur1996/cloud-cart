# 🌩️ CloudCart – Fully Automated eCommerce App (React + Node.js + AWS)

> A modern cloud-native eCommerce app powered by React, Node.js, and AWS DynamoDB — with **fully automated CI/CD** using Docker, GitHub Actions & AWS ECS (Fargate).

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![AWS](https://img.shields.io/badge/Deployed%20on-AWS%20ECS-orange?logo=amazon-aws)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue?logo=githubactions)
![Database](https://img.shields.io/badge/Database-DynamoDB-darkblue?logo=amazon-dynamodb)

---

## 🚀 Tech Stack

- **Frontend:** React + Material UI  
- **Backend:** Node.js + Express  
- **Database:** AWS DynamoDB  
- **DevOps:** Docker, GitHub Actions, ECS Fargate

---

<details>
  <strong>⚙️ Features & Highlights (Click to Expand)</strong>

### ✅ Full Automation Workflow
- Push to `main` branch triggers GitHub Actions
- Docker images are built and pushed to Docker Hub
- AWS ECS (Fargate) automatically pulls the latest image
- No manual deployment — 100% **CI/CD automated**

### ✅ Modular Architecture
- Clean separation between frontend and backend
- Each service is dockerized and independently deployable
- Communication via internal ECS networking

### ✅ DynamoDB Integration
- Node.js backend connects to DynamoDB using `aws-sdk`
- Credentials securely passed via ECS task environment variables

### ✅ Product Management (CRUD)
- Add, Edit, Delete, View products
- Product includes name, price, description, and image
- React frontend seamlessly interacts with API

</details>

---




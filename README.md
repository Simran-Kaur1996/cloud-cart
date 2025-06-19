# 🛒 CloudCart – Fully Automated eCommerce App (React + Node.js + AWS)

> A modern, scalable eCommerce application with a fully automated cloud-native deployment pipeline. Built using **React**, **Node.js**, **DynamoDB**, **Docker**, and **AWS ECS (Fargate)** – with **CI/CD powered by GitHub Actions**.

![GitHub last commit](https://img.shields.io/github/last-commit/your-username/cloudcart)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/your-username/cloudcart/deploy.yml)
![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![AWS ECS](https://img.shields.io/badge/Deploy-AWS%20ECS-orange?logo=amazon-aws)
![Database](https://img.shields.io/badge/Database-DynamoDB-darkblue?logo=amazon-dynamodb)

---

## 📦 Tech Stack

| Layer       | Technology                     |
|------------|---------------------------------|
| Frontend   | React, Material UI              |
| Backend    | Node.js, Express                |
| Database   | AWS DynamoDB                    |
| DevOps     | Docker, GitHub Actions, ECS     |

---

<details>
<summary>⚙️ <strong>CI/CD Workflow – Fully Automated</strong></summary>

- 🚀 **On push to `main`**:
  - Builds Docker images for frontend & backend
  - Pushes images to Docker Hub
  - Triggers **AWS ECS (Fargate)** to pull the latest image
  - ⚡ **No manual deployment** — 100% hands-off!

</details>

<details>
<summary>📐 <strong>Architecture Overview</strong></summary>

- 🔹 **Frontend (React)** – Hosted as a container on ECS
- 🔸 **Backend (Node.js)** – Connects with DynamoDB via AWS SDK
- 🧊 **Database (DynamoDB)** – Serverless, NoSQL solution
- 🐳 **Dockerized** – All services containerized for modular deployment
- 🔄 **Internal Networking** – Services communicate over ECS VPC

</details>

<details>
<summary>🧰 <strong>CRUD Features – Product Management</strong></summary>

- ✅ Create, Read, Update, Delete products
- Each product includes:
  - Name
  - Price
  - Description
  - Image URL
- Fully functional admin panel UI to manage products

</details>

---






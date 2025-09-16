# Error Find

Error find is a frontend application built with [Vite](https://vitejs.dev/).
This project uses **React + Vite** with support for environment variables, optimized builds, and deployment to **AWS S3**. This project is a technical assignment project for Cambgrige University Press And Assessment.

## 🛠️ Getting Started

### 1️⃣ Prerequisites
- [Node.js](https://nodejs.org/) (LTS version recommended, e.g. `20.x`)

### 2️⃣ Installation
Clone the repo and install dependencies:

```bash
git clone git@github.com:dVp007/error-find.git
cd error-find
npm install
```

Create a `.env` file in the root directory referencing the `.env.example` file:

```bash
echo "VITE_API_BASE_URL=https://s3.eu-west-2.amazonaws.com" >> .env
```

### 3️⃣ Run Development Server
To Start the development server:

```bash
npm run dev
```

## ⚙️ Build & Preview

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The build output will be generated inside the dist/ folder.

## 🌐 Global Deployment

Once the code is merged into the main branch, the CI/CD pipeline will automatically deploy the application to AWS S3. You can see the changes [here](http://error-find.s3-website.eu-north-1.amazonaws.com/).

## 🧑‍💻 Contributing

 - Fork the repo
 - Create a feature branch (git checkout -b feature-name)
 - Commit changes (git commit -m 'Add feature')
 - Push to branch (git push origin feature-name)

Open a Pull Request 🚀

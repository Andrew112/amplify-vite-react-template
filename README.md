# AWS Amplify React+Vite Starter Template

[![License:  MIT-0](https://img.shields.io/badge/License-MIT--0-blue.svg)](https://opensource.org/licenses/MIT-0)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.10-646cff.svg)](https://vitejs.dev/)
[![AWS Amplify](https://img.shields.io/badge/AWS_Amplify-Gen_2-FF9900.svg)](https://aws.amazon.com/amplify/)

> **A production-ready, enterprise-grade starter template for building modern full-stack applications with React, Vite, and AWS Amplify Gen 2**

This repository demonstrates professional-grade cloud application development using modern frameworks and AWS serverless architecture. It provides a scalable foundation for building secure, performant web applications with built-in authentication, real-time data synchronization, and GraphQL APIs.

---

## 🎯 Project Overview

This template showcases a modern approach to full-stack application development, leveraging AWS cloud services through the Amplify Gen 2 framework. It's designed for developers who need to rapidly prototype or build production-ready applications with enterprise-level security, scalability, and performance.

**Key Highlights:**
- ⚡ **Modern Tech Stack**: React 18, Vite, TypeScript
- ☁️ **Cloud-Native Architecture**: AWS Amplify Gen 2, serverless infrastructure
- 🔐 **Enterprise Security**: Amazon Cognito authentication, IAM-based access control
- 🚀 **Performance-Optimized**: Vite for lightning-fast builds, React for optimal UI rendering
- 📊 **Real-Time Data**: GraphQL API with AWS AppSync and DynamoDB
- 🛠️ **Developer Experience**: ESLint, TypeScript strict mode, comprehensive tooling

---

## 🏗️ Architecture & Technology Stack

### Frontend
- **React 18.2** - Modern UI library with hooks and concurrent features
- **TypeScript 5.4** - Type-safe development with advanced language features
- **Vite 5.4** - Next-generation frontend build tool with HMR
- **AWS Amplify UI React** - Pre-built, customizable UI components

### Backend & Infrastructure
- **AWS Amplify Gen 2** - Modern full-stack development framework
- **Amazon Cognito** - Managed user authentication and authorization
- **AWS AppSync** - Managed GraphQL service for real-time APIs
- **Amazon DynamoDB** - NoSQL database for scalable data storage
- **AWS CDK 2.138** - Infrastructure as Code for AWS resource provisioning

### Development Tools
- **ESLint** - Code quality and consistency enforcement
- **TypeScript ESLint** - TypeScript-specific linting rules
- **tsx** - TypeScript execution environment
- **esbuild** - Extremely fast JavaScript bundler

---

## ✨ Core Features

### 🔐 Authentication & Authorization
- Secure user authentication powered by **Amazon Cognito**
- Multi-factor authentication (MFA) support
- Social sign-in providers (optional)
- Fine-grained access control with IAM policies

### 📡 GraphQL API
- Real-time data synchronization with **AWS AppSync**
- Type-safe GraphQL schema
- Automatic CRUD operations
- Subscription support for real-time updates

### 💾 Database
- Serverless NoSQL database with **Amazon DynamoDB**
- Automatic scaling based on demand
- Global tables for multi-region deployments (configurable)
- Point-in-time recovery for data protection

### 🎨 UI/UX
- Responsive design with Amplify UI components
- Customizable theming system
- Accessible components (WCAG compliant)
- Dark mode support (configurable)

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.x or later
- **npm** 9.x or later
- **AWS Account** with appropriate IAM permissions
- **AWS CLI** configured (for deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/Andrew112/amplify-vite-react-template.git
cd amplify-vite-react-template

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

```bash
npm run dev       # Start Vite development server with HMR
npm run build     # Type-check with TypeScript and build for production
npm run lint      # Run ESLint for code quality checks
npm run preview   # Preview the production build locally
```

---

## 📦 Project Structure

```
amplify-vite-react-template/
├── amplify/              # AWS Amplify backend configuration
│   ├── auth/            # Cognito authentication setup
│   ├── data/            # GraphQL schema and DynamoDB models
│   └── backend. ts       # Backend resource definitions
├── src/                 # React application source code
│   ├── components/      # Reusable UI components
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── public/             # Static assets
├── CODE_REVIEW.md      # Code review guidelines
├── CONTRIBUTING.md     # Contribution guidelines
└── package.json        # Project dependencies and scripts
```

---

## 🔧 Development Workflow

### Code Quality
This project maintains high code quality standards through:
- **TypeScript Strict Mode**:  Enforcing type safety across the codebase
- **ESLint Configuration**: Automatic code style and quality checks
- **Code Review Process**: Documented in [CODE_REVIEW.md](CODE_REVIEW.md)
- **Pre-commit Hooks**: Automated linting before commits (optional)

### Best Practices
- Component-based architecture with React hooks
- Separation of concerns (UI, business logic, API calls)
- Type-safe API interactions with TypeScript
- Environment-based configuration management
- Comprehensive error handling and logging

---

## 🌐 Deployment

### Deploy to AWS Amplify

This application can be deployed to AWS with a single command:

```bash
# Deploy backend and hosting
npx ampx sandbox  # For development environment
npx ampx deploy   # For production deployment
```

For detailed deployment instructions, including CI/CD setup and custom domain configuration, refer to the [AWS Amplify Deployment Guide](https://docs.amplify.aws/react/start/quickstart/#deploy-a-fullstack-app-to-aws).

### Deployment Options
- **Amplify Hosting**: Fully managed CI/CD and hosting
- **Custom CI/CD**: GitHub Actions, GitLab CI, or other platforms
- **Multi-environment**:  Separate dev, staging, and production environments

---

## 📊 Performance & Scalability

- **Vite Build Optimization**: Tree-shaking, code splitting, and lazy loading
- **React Performance**: Memoization, virtualization for large lists
- **CDN Distribution**: Global content delivery through AWS CloudFront
- **Auto-scaling**: DynamoDB and Lambda scale automatically with demand
- **Caching Strategy**: AppSync caching for frequently accessed data

---

## 🔒 Security

Security is a top priority.  This template includes:
- **Authentication**:  Secure user authentication with Amazon Cognito
- **Authorization**: Role-based access control (RBAC) with IAM
- **Data Encryption**: At-rest and in-transit encryption
- **Vulnerability Scanning**: Regular dependency updates via npm audit
- **Security Headers**:  Configured for production deployments

For security issues, see [CONTRIBUTING.md](CONTRIBUTING.md#security-issue-notifications).

---

## 📄 License

This project is licensed under the **MIT-0 License** (MIT No Attribution) - see the [LICENSE](LICENSE) file for details.

The MIT-0 license is a modification of the MIT License that removes the attribution requirement, making it ideal for starter templates and sample code.

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📚 Additional Resources

- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [AWS AppSync Developer Guide](https://docs.aws.amazon.com/appsync/)
- [Amazon Cognito Documentation](https://docs.aws.amazon.com/cognito/)

---

## 📧 Contact

**Project Maintainer**:  [@Andrew112](https://github.com/Andrew112)

**Project Link**: [https://github.com/Andrew112/amplify-vite-react-template](https://github.com/Andrew112/amplify-vite-react-template)

---

## 🎯 Use Cases

This template is ideal for:
- **SaaS Applications**: Multi-tenant applications with user authentication
- **Internal Tools**: Enterprise dashboards and admin panels
- **Mobile Backends**: API backend for mobile applications
- **Rapid Prototyping**: Quick proof-of-concepts with production-ready architecture
- **Learning Projects**: Understanding modern full-stack AWS development

---

**Built with ❤️ using AWS Amplify Gen 2**

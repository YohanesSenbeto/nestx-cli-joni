# NestX CLI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20-brightgreen)](https://nodejs.org/)
[![GitHub stars](https://img.shields.io/github/stars/YohanesSenbeto/nestx-cli-joni)](https://github.com/YohanesSenbeto/nestx-cli-joni/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/YohanesSenbeto/nestx-cli-joni)](https://github.com/YohanesSenbeto/nestx-cli-joni/issues)

A powerful NestJS project generator with batteries included. Quickly scaffold production-ready NestJS applications with best practices, Prisma ORM, and modern tooling pre-configured.

## 🚀 Features

- ⚡ **NestJS** - Built with the latest NestJS framework
- 🗄️ **Prisma ORM** - Pre-configured with Prisma for database management
- 🎨 **TypeScript** - Fully typed for better development experience
- 📦 **Modular Structure** - Clean and organized project architecture
- 🔒 **Security Best Practices** - Helmet, CORS, and rate limiting configured
- 🧪 **Testing Ready** - Jest configured out of the box with e2e testing
- 📝 **ESLint & Prettier** - Code quality and formatting pre-configured
- 🚀 **Hot Reload** - Development with automatic restart
- 🔧 **Environment Configuration** - Dotenv for environment variables
- 📚 **API Documentation** - Swagger/OpenAPI ready

## 📦 Installation

```bash
npm install -g nestx
```

## 🚀 Usage

### Create a new NestJS project

```bash
nestx new <project-name>
```

### Example

```bash
nestx new my-nestjs-app
cd my-nestjs-app
npm install
npm run start:dev
```

## 🛠️ Generated Project Structure

```text
my-nestjs-app/
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── test/
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── .env
├── .env.example
├── .eslintrc.js
├── .prettierrc
├── nest-cli.json
├── package.json
├── tsconfig.build.json
├── tsconfig.json
└── README.md
```

## 📋 Prerequisites

- Node.js (v20 or higher)
- npm (v8 or higher) or yarn

## 💻 Development

### Clone and setup

```bash
# Clone the repository
git clone https://github.com/YohanesSenbeto/nestx-cli-joni.git
cd nestx-cli-joni

# Install dependencies
npm install

# Build the project
npm run build

# Link globally for testing
npm link

# Test it out
nestx new test-project
```

### Available Scripts

```bash
# Build the CLI
npm run build

# Development with auto-reload
npm run dev

# Run the CLI
npm start

# Clean build files
npm run clean

# Link for global testing
npm link
```

### Development Commands

```bash
# Create a new project
nestx new <project-name>

# Help
nestx --help

# Version
nestx --version
```

## 🧪 Testing the Generated Project

After creating a project, you can test it:

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov

# Development server
npm run start:dev

# Production build
npm run build

# Production server
npm run start:prod
```

## 🗄️ Database Setup

The generated project includes Prisma ORM:

```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Open Prisma Studio
npx prisma studio
```

## 🔧 Configuration

### Environment Variables

The project includes `.env` configuration:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

# App
PORT=3000
NODE_ENV=development

# Security
JWT_SECRET="your-secret-key"
```

### Customize Template

You can modify the template structure in:

```text
src/templates/nestjs-starter/
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 🐛 Issues

If you find any issues, please report them at:
[GitHub Issues](https://github.com/YohanesSenbeto/nestx-cli-joni/issues)

## 📝 Changelog

### v1.0.0 (Current)

- Initial release
- NestJS project generation
- Prisma ORM integration
- Testing setup with Jest
- ESLint and Prettier configuration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Yohanes Senbeto**

- GitHub: [@YohanesSenbeto](https://github.com/YohanesSenbeto)
- Twitter: [@your-twitter](https://x.com/YohanesSenbeto)

## ⭐ Support

If you find this project useful, please consider:

- Giving it a ⭐ on GitHub
- Sharing it with others
- Reporting issues
- Contributing to the project

## 🙏 Acknowledgments

- [NestJS](https://nestjs.com/) - The progressive Node.js framework
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- All contributors and open-source projects that made this possible

---

Made with ❤️ by **Yohanes Senbeto**

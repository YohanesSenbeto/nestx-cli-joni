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

### Option 1: Install globally from npm

```bash
npm install -g nestx
nestx new my-nestjs-app
```

### Option 2: Use with npx (no global install needed)

```bash
npx nestx new my-nestjs-app
```

### Option 3: From source (for development)

```bash
git clone https://github.com/YohanesSenbeto/nestx-cli-joni.git
cd nestx-cli-joni
npm install
npm run build
npm link          # makes `nestx` available globally
nestx new my-nestjs-app
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

Then visit **http://localhost:3000** — you should see `Nest application successfully started`.

### Available commands

```bash
nestx new <project-name>   # Create a new NestJS project
nestx --help               # Show help
nestx --version            # Show version
```

> **Note:** The command is `nestx new`, **not** `nestx create`.

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

## 🔧 Troubleshooting

### `nestx: command not found` after `npm install -g nestx`

The global npm bin directory is not in your `PATH`. Fix it permanently:

```bash
echo 'export PATH="$(npm prefix -g)/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

Or use `npx` instead, which always works without PATH configuration:

```bash
npx nestx new my-nestjs-app
```

### `bash: /usr/bin/nestx: Permission denied`

The symlink exists but `dist/index.js` is not executable. The `npm run build` script now sets the executable bit automatically via `chmod +x dist/index.js`, so rebuilding should fix it:

```bash
npm run build
```

If you still see the error (e.g. after a manual `tsc`), fix the permissions manually:

```bash
chmod +x dist/index.js
# or, for a global install:
chmod +x "$(npm prefix -g)/bin/nestx"
```

### `error: unknown command 'create'`

The correct command is **`new`**, not `create`:

```bash
nestx new my-nestjs-app   # ✅ correct
nestx create my-nestjs-app # ❌ wrong
```

### Build fails with errors from `src/templates/`

The TypeScript compiler is trying to compile the template files (which import `@nestjs/common`, `prisma/config`, etc. that are not installed in the CLI). Exclude templates in `tsconfig.json`:

```json
{
  "include": ["src/**/*.ts"],
  "exclude": [
    "dist",
    "node_modules",
    "src/templates",
    "**/*.spec.ts",
    "**/*.e2e-spec.ts"
  ]
}
```

Then rebuild:

```bash
npm run build
```

### `Failed to create project: ENOENT ... dist/templates/nestjs-starter`

`tsc` only compiles TypeScript — it does **not** copy the `src/templates/` directory into `dist/`. The `npm run build` script now copies templates into `dist/templates/` using `copyfiles`, so rebuilding resolves this:

```bash
npm run build
```

If you ran `tsc` directly instead of `npm run build`, copy the templates manually:

```bash
npx copyfiles -u 1 "src/templates/**/*" dist
```

### Global install is missing the `dist/` folder

If `npm install -g nestx` only installs metadata (no `dist/`), the package was published without the built files. Rebuild and republish:

```bash
npm run build
npm publish
```

Or use `npm link` from your local clone instead of a global install.

### Run directly without linking

If `npm link` is problematic, run the CLI directly with node:

```bash
node ~/projects/nestx-cli/dist/index.js new my-nestjs-app
```

Or create a shell alias:

```bash
echo 'alias nestx="node ~/projects/nestx-cli/dist/index.js"' >> ~/.bashrc
source ~/.bashrc
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

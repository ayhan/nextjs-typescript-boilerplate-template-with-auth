# Boilerplate and Starter for Next JS, Tailwind CSS and TypeScript

🚀 Boilerplate and Starter for Next.js 13+, Tailwind CSS and TypeScript

### Features

- 🔐 Auth structure with Context API
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, jsx-a11y, TS Eslint, Tailwind CSS)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 💡 Absolute Imports using `@` prefix
- 👷 Run tests on pull request with GitHub Actions
- 🔔 Send notification for Discord using webhooks

### Requirements

- Node.js 14+ and npm or yarn

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/ayhan/nextjs-typescript-boilerplate-template-with-auth.git my-project-name
cd my-project-name
yarn
```

Then, you can run locally in development mode with live reload:

```shell
yarn dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
.
├── README.md                       # README file
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── constants                   # Constants
│   ├── context                     # Context API
│   ├── models                      # Types
│   ├── pages                       # Next JS Pages
│   ├── service                     # Axios instance and fetcher for SWR
│   ├── styles                      # Styles folder
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate by making a search in the whole project with `FIXME:` for making quick customization. Here is some of the most important files to customize:

- `src/styles/global.css`: your CSS file using Tailwind CSS
- `src/service/instance.ts`: Must add baseURL in axios instance. If you need other axios instance create in this file
- `src/context/auth.ts`: Login and userInfo request url change

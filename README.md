# project-template-nodejs
My basis for creating back-end projects with Node.js 18

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```
3. Configure the `.env.development` file using the `.env.sample` file
4. Run the back-end in a development environment:

```bash
npm run dev
```
## How to run tests

1. Follow the steps in the last section
2. Configure the `.env.test` file using the `.env.sample` file
3. Run test:

```bash
npm run test
```
Or
```bash
npm run test:coverage
```
To generate a test coverage report

## Building and starting for production
2. Configure the `.env` file using the `.env.sample` file
3. Run build and start:

```bash
npm run build
npm start
```
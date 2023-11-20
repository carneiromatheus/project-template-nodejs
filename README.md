# Node.js Project Template
My basis for creating back-end projects with Node.js 18

# Demo
#### Use API deploy: https://sampledb-w8v2.onrender.com/

<sub/>PS:the `/health` route to test whether the project is running.</sub>


# How does this work?
This project is a REST API template that will help you create new projects. It has only one entity: `messages`. The characteristics of this entity are in the file `./prisma/schema.prisma`.

A route has been created for the entity:

- GET `/messages`: Returns all registered messages.
```ts
[
  {
    "id": number
    "text": string
  }
  (...)
]
```

# Motivation
This project was designed to facilitate the construction of a REST API using the Node and Express ecosystem with TypeScript, Prisma and automated testing technologies.

# Technologies used
For this project, we used:

- Node (version 18.17.0);
- Express;
- TypeScript;
- Joi;
- Prisma;
- Postgres;
- Jest and Supertest;

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
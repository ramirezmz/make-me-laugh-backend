# Make me laugh project
This project seeks to apply frontend knowledge intuitive and simple screens, nice transitions, reusable components, testing for components and best practices.
## Ingredients
***Frontend***
 - Vue 3
 - Axios
 - Vue Router
 - Typescript
 - Vitest
 - ESLint + Prettier
 - Vueuse

***Backend***
- Typescript
- Express
- Firebase
- Docker
- Cors
- dotenv

## Project structure
```
$PROJECT_ROOT
├── docker-compose.yml  # Docker config to up the project
├── .env                # Environment file
├── ...                 # Configs files 
└── src
    ├── config          # configuration about database
        └── index.ts    # Root component
    └── server.ts       # Entry point
```

## How to run the project?

To run all project, we need to clone 2 repositories: [frontend](https://github.com/ramirezmz/make-me-me-laugh-frontend) and [backend](https://github.com/ramirezmz/make-me-laugh-backend).
```sh
git clone https://github.com/ramirezmz/make-me-laugh-backend
```
Enter inside the project
```sh
cd make-me-laugh-backend
```
Install dependencies
```sh
npm install
```
And then, we'll use `docker-compose` to up the application
```sh
docker-compose up
```

### Others scripts

To generate Typescript config
```sh
npx tsc --init
```
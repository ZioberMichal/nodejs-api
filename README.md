<p align="center">
    Nest based test app implemented during meetup, 15.12.2018
</p>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# incremental rebuild (webpack)
$ npm run webpack
$ npm run start:hmr

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

#e2e only one
$npm run test:e2e:one test/user.e2e-spec.ts

# test coverage
$ npm run test:cov
```

## Steps
Q: How to generate new module?  
A:
```bash
# generate user module
nest generate module user
```
Q: How to generate controller?  
A:
```bash
nest g controller user/controllers/user --flat
```

Q: How to generate service?
```bash
$nest g service user/service/user --flat
```

Q: How to run with other port?  
A:
```bash
#see changes in main.ts
PORT=3003 npm run start:dev
```

Q: How to install JSON WEB Token?  
A:
```bash
$npm i jsonwebtoken
```
Q: How to install swagger?
A:
```bash
$npm i @nestjs/swagger
```

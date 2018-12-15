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

[![Nest Logo](http://kamilmysliwiec.com/public/nest-logo.png)](http://nestjs.com/)
The [Nest](https://github.com/unlight/nest-typescript-starter) framework starter repository. 

STACK
---
* TypeScript
* ESLint
* Jest
* TypeORM
* Stryker

INSTALLATION
---
```
$ npm install
```

TASKS
---
| Command               | Description                                       |
|:----------------------|:--------------------------------------------------|
| `npm start`           | Build and start application                       |
| `npm run dev`         | Start application in development mode             |
| `npm run dev:d`       | Start application in debug mode (with nodemon)    |
| `npm run start:d`     | Start application in debug mode (without nodemon) |
| `npm test`            | Run all tests                                     |
| `npm run test:r`      | Run unit tests                                    |
| `npm run test:w`      | Run unit tests in watch mode                      |
| `npm run tscheck`     | Run TypeScript checks                             |
| `npm run tscheck:w`   | Run TypeScript checks in watch mode               |
| `npm run tsclint`     | Run TypeScript more stricter checks               |
| `npm run tsclint:w`   | Run TypeScript more stricter checks in watch mode |
| `npm run eslint`      | Run ESLint                                        |
| `npm run eslint:w`    | Run ESLint in watch mode                          |
| `npm run eslint:fix`  | Run ESLint in fix mode                            |
| `npm run lint:w`      | Run all linting commands in watch mode            |
| `npm run test:m`      | Run mutation tests                                |


SCRIPTS
---
Database seed example:
```
npx ts-node src/database/scripts seed
```

SETUP ENVIRONMENT (EXAMPLE)
---
```
set TYPEORM_CONNECTION=mongodb
set TYPEORM_DATABASE=nest-typescript-starter
set TYPEORM_CONNECTION=sqlite
set TYPEORM_DATABASE=test
```

RESOURCES
---
* https://github.com/nestjs/nest/tree/master/examples
* GDG DevFest 2017 (Presentation) - https://github.com/Caballerog/devfestmalaga2017
* Router Module For Nestjs Framework - https://github.com/shekohex/nest-router
* TypeORM where like expression - https://gitter.im/typeorm/typeorm?at=5a2035af232e79134df08c65
* Add the most common Express middlewares to your Nest app with one line - https://github.com/wbhob/nest-middlewares
* Level up your Node.js application with Nest: Angular sugar on the server - http://ng-atl.org/workshops/level-up-your-node-js-application-with-nest-angular-sugar-on-the-server
* New Stack on the Market to beat them all MANT (MongoDB Angular NestJS TypeScript) - https://github.com/vladotesanovic/mant
* Microservices example - https://github.com/james7272/nestjs-hybrid-example
* nest-graphql-apollo - https://github.com/kamilkisiela/nest-graphql-apollo
* nest-graphql-mongodb - https://github.com/iamclaytonray/nest-graphql-mongodb
* nestjs-graphql - https://github.com/adrien2p/nestjs-graphql
* graphql-js/issues/19 - https://github.com/graphql/graphql-js/issues/19
* graph-type-orm-nest-example - https://github.com/partyka95/graph-type-orm-nest-example
* nest-mailer - https://github.com/partyka95/nest-mailer
* ngrx-nest - https://github.com/derekkite/ngrx-nest
* Simple application demonstrating the basic usage of permissions - https://github.com/rucken/core-nestjs
* Nest + Sequelize + jwt - https://github.com/adrien2p/nestjs-sequelize-jwt
* Awesome Nest - https://github.com/juliandavidmr/awesome-nest
* Learn the nestjs framework in 30 days - https://github.com/m24927605/Nestjs30Days
* A simple web application - https://github.com/chanlito/simple-todos
* A collection of useful modules and opinionated to use with Nest framework - https://github.com/chanlito/nestjs-extensions
* A simple application demonstrating the basic usage of permissions - https://github.com/rucken/core-nestjs
* Opinionated Framework built on top of NestJS and TypeORM - https://github.com/mentos1386/lynx
* This is a Bull module for Nest - https://github.com/fwoelffel/nest-bull
* Hybrid apps have embedded microservices - https://github.com/james7272/nestjs-hybrid-example/

TODO
---
* Migrations, Entity globs and hmr issues
* Authentication using JSON Web Tokens
* TypeORM: Mongoose: Clarify what exactly need todo
* Generating migrations https://github.com/typeorm/typeorm/issues/1304
* https://github.com/nestjs/mongoose
* Health endpoint

DEBUG
---
node --inspect -r ts-node/register src/database/scripts migrate

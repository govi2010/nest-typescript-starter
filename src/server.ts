import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from './app.config';
import { HelloMicroserviceModule } from './hello-microservice/hello-microservice.module';
import { Transport } from '@nestjs/microservices';
// import { RolesGuard } from './core/guards/roles.guard';

import 'loud-rejection/register';

async function main() {
    const app = await NestFactory.create(AppModule);
    app.use(bodyParser.json());
    // app.useGlobalFilters(new UnauthorizedErrorFilter());

    const options = new DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/api', app, document);
    await app.listen(config.get('port'));

    // Hello microservice with http server (hybrid application)
    // const service = await NestFactory.create(HelloMicroserviceModule);
    // const microservice = service.connectMicroservice({ transport: Transport.TCP, port: 43210 });
    // await service.startAllMicroservicesAsync();
    // await service.listen(config.get('port') + 1);

    // Microservice without http server
    const service = await NestFactory.createMicroservice(HelloMicroserviceModule, { transport: Transport.TCP, options: { port: 43210 } });
    service.listen(undefined as any);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(async () => {
            app.close();
            service.close();
        });
    }
}

main();

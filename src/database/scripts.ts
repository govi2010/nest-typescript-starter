import { NestFactory, Reflector } from '@nestjs/core';
import { ScriptsModule } from './scripts/scripts.module';
import { Arguments } from 'yargs';
import yargs = require('yargs');
import 'loud-rejection/register';

export interface IScript {
    run(argv: Arguments): Promise<void>;
}

(async function main() {
    try {
        const context = await NestFactory.createApplicationContext(ScriptsModule);
        const names: string[] = yargs.argv._;
        const name = [names];
        const reflector = context.get(Reflector);
        const { default: Module } = await import(`${__dirname}/scripts/${name}.ts`);
        if (typeof Module !== 'function') {
            throw new TypeError(`Cannot find default Module in scripts/${name}.ts`);
        }
        const script = context.get<IScript>(Module);
        if (!script) {
            throw new TypeError(`Cannot create instance of ${Module.name}`);
        }
        await script.run(yargs.argv);
    } catch (err) {
        throw err;
    }
})();

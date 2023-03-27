import { Module } from '@nestjs/common';
import { ExampleService } from './admin.service';
import { ExampleController } from './admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Example, ExampleSchema } from './schemas/admin.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Example.name, schema: ExampleSchema }]),
    ],
    controllers: [ExampleController],
    providers: [ExampleService],
})
export class ExampleModule { }

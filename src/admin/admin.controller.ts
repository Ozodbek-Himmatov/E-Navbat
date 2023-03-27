import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { ExampleService } from './admin.service';
import { CreateExampleDto } from './dto/create-admin.dto'
import { UpdateExampleDto } from './dto/update-admin.dto'

@Controller('example')
export class ExampleController {
    constructor(private readonly exampleService: ExampleService) { }

    @Post()
    create(@Body() createExampleDto: CreateExampleDto) {
        return this.exampleService.create(createExampleDto);
    }

    @Get()
    findAll() {
        return this.exampleService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.exampleService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateExampleDto: UpdateExampleDto) {
        return this.exampleService.update(id, updateExampleDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.exampleService.remove(id);
    }
}
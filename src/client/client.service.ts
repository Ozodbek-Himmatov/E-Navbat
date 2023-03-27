import { Injectable } from '@nestjs/common';
import { CreateExampleDto } from './dto/create-client.dto';
import { UpdateExampleDto } from './dto/update-client.dto';
import { Example, ExampleDocument } from './schemas/client.schema';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';

@Injectable()
export class ExampleService {
    constructor(
        @InjectModel(Example.name)
        private orderModel: Model<ExampleDocument>,
    ) { }

    async create(createExampleDto: CreateExampleDto) {
        const res = await new this.orderModel(createExampleDto).save();
        return res;
    }

    async findAll() {
        return this.orderModel.find().exec();
    }

    async findOne(id: string) {
        return this.orderModel.findById(id).exec();
    }

    async update(id: string, updateExampleDto: UpdateExampleDto) {
        return this.orderModel
            .findByIdAndUpdate(id, updateExampleDto, { new: true })
            .exec();
    }

    async remove(id: string) {
        return this.orderModel.findByIdAndDelete(id).exec();
    }
}

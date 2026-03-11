import { Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { CreateCatDTO } from './cats.dtos';

@Controller('cats')
export class CatsController {
    @Get()
    index(@Query('name') name: string, @Query("age") age: number, @Query("breed") breed: string) {
        return {
            message: "listing all cats",
            query: {
                name, 
                age,
                breed
            }
        }
    }

    @Post()
    @HttpCode(201)
    async create(@Body() createCatDTO: CreateCatDTO) {
        console.log("creating cat:", {
            name: createCatDTO.name,
            age: createCatDTO.age,
            breed: createCatDTO.breed
        })
        
        return {
            name: createCatDTO.name,
            age: createCatDTO.age,
            breed: createCatDTO.breed
        }
    }

    @Get(":id")
    show(@Param("id") id: string) {
        console.log("showing id:", id);
        return {
            data: {
                name: "fake-name",
                age: 678,
                breed: "fake-breed"
            }
        }
    }
}
